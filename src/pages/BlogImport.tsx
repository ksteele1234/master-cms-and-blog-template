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

// Extend the global window interface for Netlify Identity
declare global {
  interface Window {
    netlifyIdentity?: {
      on: (event: string, callback: (user?: any) => void) => void;
      init: () => void;
      currentUser: () => any;
      open: () => void;
    };
  }
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

const BlogImport = () => {
  const [csvData, setCsvData] = useState<BlogPostData[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [results, setResults] = useState<{ success: number; errors: string[] }>({ success: 0, errors: [] });
  const [showPreview, setShowPreview] = useState(false);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsProcessing(true);
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (result) => {
        const data = result.data as BlogPostData[];
        setCsvData(data);
        setShowPreview(true);
        setIsProcessing(false);
      },
      error: (error) => {
        setResults({ success: 0, errors: [error.message] });
        setIsProcessing(false);
      }
    });
  };

  const generateSlug = (title: string, date: string): string => {
    const dateStr = new Date(date).toISOString().split('T')[0];
    const slugTitle = title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
    return `${dateStr}-${slugTitle}`;
  };

  const generateMarkdownContent = (post: BlogPostData): string => {
    const slug = generateSlug(post.title, post.date);
    
    return `---
title: "${post.title}"
status: "${post.status || 'draft'}"
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

  const createBlogPosts = async () => {
    const errors: string[] = [];
    let successCount = 0;
    setIsProcessing(true);

    try {
      for (let index = 0; index < csvData.length; index++) {
        const post = csvData[index];
        try {
          if (!post.title || !post.date || !post.content) {
            errors.push(`Row ${index + 1}: Missing required fields (title, date, or content)`);
            continue;
          }

          const slug = generateSlug(post.title, post.date);
          const markdownContent = generateMarkdownContent(post);
          
          // Create a download link for each post
          const blob = new Blob([markdownContent], { type: 'text/markdown' });
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = `${slug}.md`;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(url);

          successCount++;
          
          // Small delay between downloads to prevent browser issues
          await new Promise(resolve => setTimeout(resolve, 100));
        } catch (error) {
          errors.push(`Row ${index + 1}: ${error instanceof Error ? error.message : 'Unknown error'}`);
        }
      }
    } catch (error) {
      errors.push(`General error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }

    setResults({ success: successCount, errors });
    setIsProcessing(false);
  };

  const getGitHubToken = async (): Promise<string> => {
    return new Promise((resolve, reject) => {
      if (window.netlifyIdentity && window.netlifyIdentity.currentUser()) {
        const user = window.netlifyIdentity.currentUser();
        const token = user.token?.access_token;
        if (token) {
          resolve(token);
        } else {
          reject(new Error('No access token available'));
        }
      } else {
        reject(new Error('User not authenticated'));
      }
    });
  };

  const downloadSampleCSV = () => {
    const sampleData = [
      {
        title: "Sample Blog Post Title",
        date: "2025-01-01T10:00:00.000Z",
        author: "Hiram Parmar, CPA",
        category: "Tax Planning",
        excerpt: "This is a sample excerpt that describes what the blog post is about.",
        featuredImage: "/images/blog/sample-image.jpg",
        imageAlt: "Sample image description for accessibility",
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
                <li><strong>title</strong> - The blog post title</li>
                <li><strong>date</strong> - Publication date (YYYY-MM-DD format)</li>
                <li><strong>author</strong> - Author name</li>
                <li><strong>category</strong> - Post category</li>
                <li><strong>excerpt</strong> - Brief description</li>
                <li><strong>featuredImage</strong> - Image path (e.g., /images/blog/image.jpg)</li>
                <li><strong>imageAlt</strong> - Image alt text for accessibility</li>
                <li><strong>content</strong> - Full blog post content (markdown supported)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Optional Columns:</h3>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li><strong>seoTitle</strong> - Custom SEO title</li>
                <li><strong>metaDescription</strong> - Meta description</li>
                <li><strong>tags</strong> - Comma-separated tags</li>
                <li><strong>readingTime</strong> - Reading time estimate</li>
                <li><strong>featured</strong> - true/false for featured posts</li>
                <li><strong>status</strong> - Publication status (draft, in_review, ready, published)</li>
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
                  <li>Use the path format: <code className="bg-blue-100 px-1 rounded">/images/blog/your-image.jpg</code></li>
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
                  disabled={isProcessing}
                >
                  <Download className="w-4 h-4 mr-2" />
                  {isProcessing ? 'Generating Files...' : 'Download Blog Post Files'}
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Results */}
        {results.success > 0 || results.errors.length > 0 ? (
          <Card>
            <CardHeader>
              <CardTitle>Import Results</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {results.success > 0 && (
                <Alert className="border-green-200 bg-green-50">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <AlertDescription className="text-green-800">
                    Successfully generated {results.success} blog post files for download
                  </AlertDescription>
                </Alert>
              )}
              {results.errors.length > 0 && (
                <Alert className="border-red-200 bg-red-50">
                  <AlertCircle className="h-4 w-4 text-red-600" />
                  <AlertDescription className="text-red-800">
                    <div>Errors encountered:</div>
                    <ul className="list-disc pl-4 mt-2">
                      {results.errors.map((error, index) => (
                        <li key={index}>{error}</li>
                      ))}
                    </ul>
                  </AlertDescription>
                </Alert>
              )}
                <div className="text-sm text-gray-600">
                <p><strong>Next steps:</strong></p>
                <ol className="list-decimal pl-4 mt-2 space-y-1">
                  <li><strong>Upload Files:</strong> Upload the downloaded .md files to the <code className="bg-gray-100 px-1 rounded">content/blog/</code> folder in your project</li>
                  <li><strong>Upload Images:</strong> Make sure all referenced images are uploaded to the <code className="bg-gray-100 px-1 rounded">public/images/blog/</code> directory</li>
                  <li><strong>Review Posts:</strong> Go to <a href="/admin/#/collections/blog" className="text-blue-600 hover:underline">/admin/#/collections/blog</a> to review and edit your posts</li>
                  <li><strong>Publish:</strong> Change the status from "draft" to "published" for each post you want to make live</li>
                </ol>
                <div className="mt-3 p-3 bg-blue-50 border border-blue-200 rounded">
                  <p className="text-blue-800 text-xs"><strong>Success!</strong> Your blog post files have been generated and downloaded. Upload them to your content folder to complete the import.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ) : null}
      </main>

      <Footer />
    </>
  );
};

export default BlogImport;