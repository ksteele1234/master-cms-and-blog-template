import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, Clock, ArrowLeft, Share2, BookOpen } from "lucide-react";
import BlogBreadcrumbs from '../components/BlogBreadcrumbs';
import RelatedPosts from '../components/RelatedPosts';
import { useBlogPosts } from '../hooks/useBlogPosts';
import type { BlogPost } from '../hooks/useBlogPosts';
import Header from '../components/Header';
import Footer from '../components/Footer';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { posts, loading: postsLoading } = useBlogPosts();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!slug) {
      setError(true);
      setLoading(false);
      return;
    }
    
    // Wait for posts to load
    if (postsLoading) {
      return;
    }
    
    // Find the post from the existing blog posts data
    const foundPost = posts.find(p => p.slug === slug);
    
    if (foundPost) {
      setPost(foundPost);
    } else {
      setError(true);
    }
    
    setLoading(false);
  }, [slug, posts, postsLoading]);

  if (loading) {
    return <div className="container mx-auto px-4 py-8">Loading...</div>;
  }

  if (error || !post) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
        <p className="text-gray-600 mb-4">The blog post you're looking for doesn't exist.</p>
        <Link to="/blog">
          <Button>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>
        </Link>
      </div>
    );
  }

  const seoTitle = post.seoTitle || post.title;
  const metaDescription = post.metaDescription || post.excerpt;

  return (
    <>
      <Helmet>
        <title>{seoTitle} | HRX CPAs</title>
        <meta name="description" content={metaDescription} />
        {post.tags && <meta name="keywords" content={post.tags.join(', ')} />}
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={post.featuredImage} />
        <meta property="og:type" content="article" />
        <meta property="article:author" content={post.author} />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:section" content={post.category} />
        {post.tags && post.tags.map(tag => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}
        <link rel="canonical" href={`https://hrxcpas.com/blog/${post.slug}`} />
        
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.excerpt,
            "image": post.featuredImage,
            "author": {
              "@type": "Organization",
              "name": post.author
            },
            "publisher": {
              "@type": "Organization",
              "name": "HRX CPAs",
              "logo": {
                "@type": "ImageObject",
                "url": "https://hrxcpas.com/assets/hrx-logo.png"
              }
            },
            "datePublished": post.date,
            "dateModified": post.date,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://hrxcpas.com/blog/${post.slug}`
            }
          })}
        </script>
      </Helmet>

      <Header />
      
      <article className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Breadcrumbs */}
        <BlogBreadcrumbs 
          items={[
            { label: 'Blog', href: '/blog' },
            { label: post.title }
          ]} 
        />

        {/* Article Header */}
        <header className="mb-8">
          <Badge variant="secondary" className="mb-4">{post.category}</Badge>
          <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
            {post.title}
          </h1>
          <p className="text-xl text-gray-600 mb-6">{post.excerpt}</p>
          
          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-6">
            <span className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              {post.author}
            </span>
            <span className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </span>
            <span className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              {post.readingTime}
            </span>
          </div>

          {/* Featured Image */}
          <img 
            src={post.featuredImage} 
            alt={post.imageAlt}
            className="float-right ml-6 mb-4 w-80 h-48 object-cover rounded-lg"
          />
        </header>

        {/* Table of Contents */}
        {post.content && post.content.includes('##') && (
          <aside className="bg-muted/50 border border-border rounded-lg p-6 mb-8">
            <h2 className="text-lg font-semibold mb-4 flex items-center">
              <BookOpen className="w-5 h-5 mr-2" />
              Table of Contents
            </h2>
            <nav className="space-y-2 text-sm">
              {post.content
                .split('\n')
                .filter(line => line.startsWith('##'))
                .map((heading, index) => {
                  const text = heading.replace(/^##\s*/, '');
                  const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                  return (
                    <a 
                      key={index}
                      href={`#${id}`}
                      className="block text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {text}
                    </a>
                  );
                })}
            </nav>
          </aside>
        )}

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          {post.content ? (
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
              components={{
                h1: ({children}) => <h2 className="text-2xl font-bold mt-6 mb-3">{children}</h2>,
                h2: ({children}) => {
                  const text = typeof children === 'string' ? children : children?.toString() || '';
                  const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                  return <h2 id={id} className="text-2xl font-bold mt-6 mb-3">{children}</h2>;
                },
                h3: ({children}) => <h3 className="text-xl font-semibold mt-4 mb-2">{children}</h3>,
                p: ({children}) => <p className="mb-4 leading-relaxed">{children}</p>,
                ul: ({children}) => <ul className="list-disc pl-6 mb-4">{children}</ul>,
                ol: ({children}) => <ol className="list-decimal pl-6 mb-4">{children}</ol>,
                li: ({children}) => <li className="mb-1">{children}</li>,
                blockquote: ({children}) => (
                  <blockquote className="border-l-4 border-blue-500 pl-4 italic my-4 bg-gray-50 p-4 rounded">
                    {children}
                  </blockquote>
                ),
                table: ({children}) => (
                  <div className="overflow-x-auto my-6">
                    <table className="min-w-full border-collapse border border-gray-300">
                      {children}
                    </table>
                  </div>
                ),
                th: ({children}) => (
                  <th className="border border-gray-300 bg-gray-100 px-4 py-2 text-left font-semibold">
                    {children}
                  </th>
                ),
                td: ({children}) => (
                  <td className="border border-gray-300 px-4 py-2">{children}</td>
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-500">Content is loading...</p>
            </div>
          )}
        </div>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="mt-8 pt-6 border-t">
            <h3 className="text-sm font-medium text-gray-900 mb-2">Tags:</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Share Buttons */}
        <div className="mt-8 pt-6 border-t">
          <h3 className="text-sm font-medium text-gray-900 mb-4">Share this article:</h3>
          <div className="flex gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                const url = window.location.href;
                const text = `Check out this article: ${post.title}`;
                if (navigator.share) {
                  navigator.share({ title: post.title, text, url });
                } else {
                  navigator.clipboard.writeText(url);
                  alert('Link copied to clipboard!');
                }
              }}
            >
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
          </div>
        </div>

        {/* Related Posts */}
        <RelatedPosts currentPost={post} allPosts={posts} />
      </article>
      
      <Footer />
    </>
  );
};

export default BlogPost;
