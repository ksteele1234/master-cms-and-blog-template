import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Papa from 'papaparse';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Download, Upload, FileText, AlertCircle, CheckCircle } from "lucide-react";
import Header from '../components/Header';
import Footer from '../components/Footer';

// GitHub API configuration
const GH_OWNER = import.meta.env.VITE_GH_OWNER ?? 'ksteele1234';
const GH_REPO = import.meta.env.VITE_GH_REPO ?? 'hx-cpas-connect';
const DEFAULT_BRANCH = 'main';

async function gh(path: string, init: RequestInit = {}) {
  const payload = {
    path: `repos/${GH_OWNER}/${GH_REPO}${path.startsWith('/') ? path : '/' + path}`,
    method: init.method ?? 'GET',
    body: init.body ? JSON.parse(init.body as string) : undefined,
    token: getToken(),
  };
  const r = await fetch('/.netlify/functions/github-proxy', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!r.ok) throw new Error(await r.text());
  return r.json();
}

function getToken(): string {
  // read from state or localStorage (whatever the component currently uses)
  const t = localStorage.getItem('hrx_blog_import_gh_token');
  return t ?? '';
}

interface BlogPostData {
  title: string;
  date: string;
  author: string;
  category: string;
  excerpt: string;
  featuredImage: string;
  imageAlt: string;
  seoTitle?: string;
  metaDescription?: string;
  tags?: string;
  readingTime?: string;
  featured?: string;
  status?: string;
  content: string;
}

interface PostProgress {
  slug: string;
  branchCreated: boolean;
  fileCommitted: boolean;
  prNumber?: number;
  error?: string;
}

const BlogImport = () => {
  const [csvData, setCsvData] = useState<BlogPostData[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [postProgress, setPostProgress] = useState<PostProgress[]>([]);
  const [showPreview, setShowPreview] = useState(false);
  const [githubToken, setGithubToken] = useState(() => localStorage.getItem('hrx_blog_import_gh_token') || '');

  const forgetToken = () => {
    localStorage.removeItem('hrx_blog_import_gh_token');
    setGithubToken('');
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsProcessing(true);
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (result) => {
        const data = result.data as BlogPostData[];
        
        // Validate CSV data
        const validationErrors = validateCsvData(data);
        if (validationErrors.length > 0) {
          setPostProgress([]);
          setIsProcessing(false);
          // Show validation errors in an alert or similar UI
          alert(`CSV Validation Errors:\n${validationErrors.join('\n')}`);
          return;
        }
        
        setCsvData(data);
        setPostProgress([]);
        setShowPreview(true);
        setIsProcessing(false);
      },
      error: (error) => {
        setPostProgress([]);
        setIsProcessing(false);
        alert(`CSV Parse Error: ${error.message}`);
      }
    });
  };

  const generateSlug = (title: string): string => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '') // Remove unsafe characters
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/-+/g, '-') // Replace multiple hyphens with single
      .replace(/^-+|-+$/g, '') // Remove leading/trailing hyphens
      .trim();
  };

  const validateCsvData = (data: BlogPostData[]): string[] => {
    const errors: string[] = [];
    const requiredColumns = ['title', 'date', 'category', 'author', 'excerpt', 'content'];
    
    data.forEach((row, index) => {
      const rowNum = index + 1;
      
      // Check required columns
      requiredColumns.forEach(column => {
        if (!row[column as keyof BlogPostData] || String(row[column as keyof BlogPostData]).trim() === '') {
          errors.push(`Row ${rowNum}: Missing required column '${column}'`);
        }
      });
      
      // Validate featuredImage path (only if provided)
      if (row.featuredImage && row.featuredImage.trim() !== '' && !row.featuredImage.startsWith('public/images/blog/')) {
        errors.push(`Row ${rowNum}: featuredImage must start with 'public/images/blog/' (got: ${row.featuredImage})`);
      }
      
      // Validate date format
      if (row.date && isNaN(Date.parse(row.date))) {
        errors.push(`Row ${rowNum}: Invalid date format '${row.date}'`);
      }
      
      // Validate title for slug generation
      if (row.title && generateSlug(row.title).length === 0) {
        errors.push(`Row ${rowNum}: Title '${row.title}' cannot be converted to a valid slug`);
      }
    });
    
    return errors;
  };

  const ensureUniqueSlug = async (baseSlug: string): Promise<string> => {
    let slug = baseSlug;
    let counter = 2;
    
    while (true) {
      try {
        // Check if branch already exists
        await gh(`/git/refs/heads/cms/blog/${slug}`);
        // If we get here, branch exists, try next
        slug = `${baseSlug}-${counter}`;
        counter++;
      } catch (error) {
        // Branch doesn't exist, we can use this slug
        return slug;
      }
    }
  };

  const generateMarkdownContent = (post: BlogPostData): string => {
    return `---
title: "${post.title}"
status: "draft"
date: "${post.date}"
author: "${post.author || 'HRX CPAs Team'}"
category: "${post.category}"
featuredImage: "${post.featuredImage}"
imageAlt: "${post.imageAlt}"
excerpt: "${post.excerpt}"
${post.seoTitle ? `seoTitle: "${post.seoTitle}"` : ''}
${post.metaDescription ? `metaDescription: "${post.metaDescription}"` : ''}
${post.tags ? `tags: [${post.tags.split(',').map(tag => `"${tag.trim()}"`).join(', ')}]` : ''}
readingTime: "${post.readingTime || '5 min read'}"
featured: ${post.featured === 'true' || post.featured === 'TRUE' || post.featured === '1'}
---

${post.content}
`;
  };

  // Preflight checks
  const checkRepoAccess = async (): Promise<boolean> => {
    try {
      await gh('');
      return true;
    } catch (error) {
      return false;
    }
  };

  const getMainBranchSha = async (): Promise<string> => {
    const data = await gh('/git/refs/heads/main');
    return data.object.sha;
  };

  const createBranch = async (branchName: string, sha: string): Promise<void> => {
    await gh('/git/refs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ref: `refs/heads/${branchName}`,
        sha: sha
      })
    });
  };

  const commitMarkdownFile = async (branchName: string, slug: string, content: string, title: string): Promise<void> => {
    const encodedContent = btoa(unescape(encodeURIComponent(content)));
    
    await gh(`/contents/content/blog/${slug}.md`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: `Create blog post: ${title}`,
        content: encodedContent,
        branch: branchName
      })
    });
  };

  const createPullRequest = async (branchName: string, title: string): Promise<number> => {
    const pr = await gh('/pulls', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: `Create blog post: ${title}`,
        head: branchName,
        base: 'main',
        body: 'Imported via bulk CSV'
      })
    });
    return pr.number;
  };

  const addDecapLabel = async (prNumber: number): Promise<void> => {
    try {
      await gh(`/issues/${prNumber}/labels`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          labels: ['decap-cms/draft'] 
        })
      });
    } catch (error) {
      // Ignore 404 errors as requested
      console.warn('Could not add decap-cms/draft label:', error);
    }
  };

  const createBlogPosts = async () => {
    setIsProcessing(true);
    setPostProgress([]);

    try {
      if (!githubToken) {
        setIsProcessing(false);
        return;
      }

      // Preflight checks
      const hasAccess = await checkRepoAccess();
      if (!hasAccess) {
        setIsProcessing(false);
        return;
      }

      const mainSha = await getMainBranchSha();
      const progressArray: PostProgress[] = [];

      for (let index = 0; index < csvData.length; index++) {
        const post = csvData[index];
        const progress: PostProgress = {
          slug: '',
          branchCreated: false,
          fileCommitted: false,
          error: undefined
        };

        try {
          if (!post.title || !post.date || !post.content) {
            progress.error = 'Missing required fields (title, date, or content)';
            progressArray.push(progress);
            setPostProgress([...progressArray]);
            continue;
          }

          const baseSlug = generateSlug(post.title);
          const uniqueSlug = await ensureUniqueSlug(baseSlug);
          progress.slug = uniqueSlug;

          const branchName = `cms/blog/${uniqueSlug}`;
          const markdownContent = generateMarkdownContent(post);
          
          // Create branch for this post
          await createBranch(branchName, mainSha);
          progress.branchCreated = true;
          progressArray[index] = { ...progress };
          setPostProgress([...progressArray]);
          
          // Commit the markdown file to the branch
          await commitMarkdownFile(branchName, uniqueSlug, markdownContent, post.title);
          progress.fileCommitted = true;
          progressArray[index] = { ...progress };
          setPostProgress([...progressArray]);

          // Create pull request
          const prNumber = await createPullRequest(branchName, post.title);
          progress.prNumber = prNumber;
          progressArray[index] = { ...progress };
          setPostProgress([...progressArray]);
          
          // Add Decap CMS label (ignore errors)
          await addDecapLabel(prNumber);
          
          // Small delay between API calls
          await new Promise(resolve => setTimeout(resolve, 1000));
        } catch (error) {
          progress.error = error instanceof Error ? error.message : 'Unknown error';
        }
        
        progressArray[index] = progress;
        setPostProgress([...progressArray]);
      }
    } catch (error) {
      console.error('General error:', error);
    }

    setIsProcessing(false);
  };


  const downloadSampleCSV = () => {
    const sampleData = [
      {
        title: "Sample Blog Post Title",
        date: "2025-01-01T10:00:00.000Z",
        author: "Hiram Parmar, CPA",
        category: "Tax Planning",
        excerpt: "This is a sample excerpt that describes what the blog post is about.",
        featuredImage: "",
        imageAlt: "",
        seoTitle: "Sample SEO Title | HRX CPAs",
        metaDescription: "Sample meta description for SEO purposes",
        tags: "tax planning, business, finance",
        readingTime: "5 min read",
        featured: "false",
        status: "draft",
        content: "# Sample Blog Post\n\nThis is the main content of your blog post. You can use markdown formatting here.\n\n## Subheading\n\nMore content goes here..."
      }
    ];

    const csv = Papa.unparse(sampleData);
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'blog-import-template.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <Helmet>
        <title>Bulk Blog Import | HRX CPAs Admin</title>
        <meta name="description" content="Import multiple blog posts at once using CSV files" />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <Header />
      
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Bulk Blog Import</h1>
          <p className="text-gray-600">
            Import multiple blog posts at once by uploading a CSV file. Each row will be converted to a markdown file.
          </p>
        </div>

        {/* Instructions */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5" />
              How to Use
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Required CSV Columns:</h3>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li><strong>title</strong> - The blog post title (used for slug generation)</li>
                <li><strong>date</strong> - Publication date (YYYY-MM-DD format)</li>
                <li><strong>category</strong> - Post category</li>
                <li><strong>author</strong> - Author name</li>
                <li><strong>excerpt</strong> - Brief description</li>
                <li><strong>content</strong> - Full blog post content (markdown supported)</li>
              </ul>
              <div className="mt-2 p-2 bg-amber-50 border border-amber-200 rounded text-xs">
                <strong>Slug Rules:</strong> Generated from title using kebab-case (lowercase, hyphens). 
                Unsafe characters removed. Duplicates get -2, -3 suffixes.
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Optional Columns:</h3>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li><strong>featuredImage</strong> - Image path starting with public/images/blog/</li>
                <li><strong>imageAlt</strong> - Image alt text for accessibility</li>
                <li><strong>seoTitle</strong> - Custom SEO title</li>
                <li><strong>metaDescription</strong> - Meta description</li>
                <li><strong>tags</strong> - Comma-separated tags</li>
                <li><strong>readingTime</strong> - Reading time estimate</li>
                <li><strong>featured</strong> - true/false for featured posts</li>
                <li><strong>status</strong> - Publication status (ignored - all imports set to draft)</li>
              </ul>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-semibold mb-2 text-blue-800 flex items-center gap-2">
                <AlertCircle className="w-4 h-4" />
                Image Storage Instructions
              </h3>
              <div className="text-sm text-blue-700 space-y-2">
                <p><strong>Before importing:</strong></p>
                <ol className="list-decimal pl-4 space-y-1">
                  <li>Upload all your blog images to the <code className="bg-blue-100 px-1 rounded">public/images/blog/</code> directory</li>
                  <li>Use descriptive filenames (e.g., <code className="bg-blue-100 px-1 rounded">tax-planning-2025.jpg</code>)</li>
                  <li>Recommended image sizes: 1200x600px for featured images</li>
                  <li>Supported formats: JPG, PNG, WebP</li>
                </ol>
                <p><strong>In your CSV:</strong></p>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Use the path format: <code className="bg-blue-100 px-1 rounded">public/images/blog/your-image.jpg</code></li>
                  <li>Always include descriptive alt text for accessibility</li>
                  <li>Ensure image names match exactly (case-sensitive)</li>
                </ul>
              </div>
            </div>
            <Button onClick={downloadSampleCSV} variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Download Sample CSV Template
            </Button>
          </CardContent>
        </Card>

        {/* GitHub Token Section */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>GitHub Configuration</CardTitle>
            <CardDescription>
              Enter your GitHub fine-grained personal access token
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <Label htmlFor="github-token" className="text-base font-medium">GitHub Token</Label>
                <div className="mt-2">
                  <Input
                    id="github-token"
                    type="password"
                    value={githubToken}
                    onChange={(e) => {
                      const token = e.target.value;
                      setGithubToken(token);
                      localStorage.setItem('hrx_blog_import_gh_token', token);
                    }}
                    placeholder="ghp_..."
                    disabled={isProcessing}
                  />
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  Create a fine-grained token at{' '}
                  <a href="https://github.com/settings/personal-access-tokens/new" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    GitHub Settings
                  </a>{' '}
                  with repository scope for {GH_OWNER}/{GH_REPO}
                </p>
                {githubToken && (
                  <Button 
                    onClick={forgetToken}
                    variant="outline" 
                    size="sm"
                    className="mt-2"
                    disabled={isProcessing}
                  >
                    Forget Token
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Upload Section */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Upload CSV File</CardTitle>
            <CardDescription>
              Select a CSV file containing your blog posts data
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <Label htmlFor="csv-file" className="text-base font-medium">CSV File</Label>
                <div className="mt-2">
                  <Input
                    id="csv-file"
                    type="file"
                    accept=".csv"
                    onChange={handleFileUpload}
                    disabled={isProcessing}
                    className="file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-primary file:text-primary-foreground hover:file:bg-primary/90"
                  />
                </div>
              </div>
              {isProcessing && (
                <Alert>
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>Processing CSV file...</AlertDescription>
                </Alert>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Preview Section */}
        {showPreview && csvData.length > 0 && (
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Preview ({csvData.length} posts found)</CardTitle>
              <CardDescription>
                Review the posts before generating markdown files
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {csvData.slice(0, 5).map((post, index) => (
                  <div key={index} className="border p-4 rounded-lg">
                    <h3 className="font-semibold">{post.title}</h3>
                    <p className="text-sm text-gray-600">
                      {post.date} | {post.category} | {post.author}
                    </p>
                    <p className="text-sm mt-2">{post.excerpt}</p>
                  </div>
                ))}
                {csvData.length > 5 && (
                  <p className="text-sm text-gray-500">
                    ... and {csvData.length - 5} more posts
                  </p>
                )}
              </div>
              <div className="mt-4 pt-4 border-t">
                <Button 
                  onClick={createBlogPosts} 
                  className="w-full"
                  disabled={isProcessing || !githubToken}
                >
                  <Upload className="w-4 h-4 mr-2" />
                  {isProcessing ? 'Creating Posts...' : 'Create Blog Posts'}
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Progress Section */}
        {postProgress.length > 0 && (
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Import Progress</CardTitle>
              <CardDescription>
                Processing {csvData.length} blog posts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {postProgress.map((progress, index) => (
                  <div key={index} className="border p-3 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium">{csvData[index]?.title || `Post ${index + 1}`}</h4>
                      <span className="text-sm text-gray-500">
                        {progress.slug || 'Generating slug...'}
                      </span>
                    </div>
                    <div className="space-y-1 text-sm">
                      <div className="flex items-center gap-2">
                        {progress.branchCreated ? (
                          <CheckCircle className="w-4 h-4 text-green-600" />
                        ) : progress.error ? (
                          <AlertCircle className="w-4 h-4 text-red-600" />
                        ) : (
                          <div className="w-4 h-4 border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin" />
                        )}
                        <span className={progress.branchCreated ? 'text-green-800' : progress.error ? 'text-red-800' : 'text-gray-600'}>
                          Branch created
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        {progress.fileCommitted ? (
                          <CheckCircle className="w-4 h-4 text-green-600" />
                        ) : progress.error ? (
                          <AlertCircle className="w-4 h-4 text-red-600" />
                        ) : progress.branchCreated ? (
                          <div className="w-4 h-4 border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin" />
                        ) : (
                          <div className="w-4 h-4 border-2 border-gray-300 rounded-full" />
                        )}
                        <span className={progress.fileCommitted ? 'text-green-800' : progress.error ? 'text-red-800' : progress.branchCreated ? 'text-gray-600' : 'text-gray-400'}>
                          File committed
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        {progress.prNumber ? (
                          <CheckCircle className="w-4 h-4 text-green-600" />
                        ) : progress.error ? (
                          <AlertCircle className="w-4 h-4 text-red-600" />
                        ) : progress.fileCommitted ? (
                          <div className="w-4 h-4 border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin" />
                        ) : (
                          <div className="w-4 h-4 border-2 border-gray-300 rounded-full" />
                        )}
                        <span className={progress.prNumber ? 'text-green-800' : progress.error ? 'text-red-800' : progress.fileCommitted ? 'text-gray-600' : 'text-gray-400'}>
                          {progress.prNumber ? `PR #${progress.prNumber} opened` : 'PR pending'}
                        </span>
                      </div>
                      {progress.error && (
                        <div className="text-red-600 text-xs mt-1 pl-6">
                          Error: {progress.error}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Results */}
        {postProgress.length > 0 && !isProcessing && (
          <Card>
            <CardHeader>
              <CardTitle>Import Complete</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-sm text-gray-600">
                <p><strong>Next steps:</strong></p>
                <ol className="list-decimal pl-4 mt-2 space-y-1">
                  <li><strong>Review Branches:</strong> Check your GitHub repository for new branches prefixed with <code className="bg-gray-100 px-1 rounded">cms/blog/</code></li>
                  <li><strong>Upload Images:</strong> Make sure all referenced images are uploaded to the <code className="bg-gray-100 px-1 rounded">public/images/blog/</code> directory</li>
                  <li><strong>Review Pull Requests:</strong> Check the opened PRs for any needed adjustments</li>
                  <li><strong>Merge:</strong> Merge the pull requests to publish the blog posts</li>
                </ol>
                <div className="mt-3 p-3 bg-blue-50 border border-blue-200 rounded">
                  <p className="text-blue-800 text-xs"><strong>Success!</strong> Your blog posts have been created as separate branches with pull requests following Decap CMS editorial workflow.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </main>

      <Footer />
    </>
  );
};

export default BlogImport;