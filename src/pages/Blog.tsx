import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useBlogPosts } from '../hooks/useBlogPosts';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight, Clock, Filter, BookOpen, TrendingUp, Shield, Calculator } from "lucide-react";
import Header from '../components/Header';
import Footer from '../components/Footer';

const Blog = () => {
  const { posts, loading } = useBlogPosts();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Tax Planning", "Tax Credits", "Estate Planning", "Tax Law Updates", "Executive Compensation", "Small Business"];

  const filteredPosts = selectedCategory === "All" 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

  const featuredPosts = posts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  // Function to get display status and badge style
  const getDisplayStatus = (post: any) => {
    // Use the status field first, fallback to published/draft logic
    return post.status || (post.published ? 'published' : 'draft');
  };

  const getStatusBadgeStyle = (status: string) => {
    switch (status.toLowerCase()) {
      case 'draft':
        return 'bg-pink-100 text-pink-800 border-pink-200';
      case 'in_review':
      case 'in review':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'ready':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'published':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };
  

  if (loading) {
    return <div className="container mx-auto px-4 py-8">Loading...</div>;
  }

  return (
    <>
      <Helmet>
        <title>Tax & Business Blog | Expert CPA Insights | HRX CPAs</title>
        <meta name="description" content="Expert tax planning, business strategy, and financial insights from HRX CPAs. Stay updated with the latest tax law changes and business growth strategies." />
        <meta name="keywords" content="tax planning, business strategy, CPA insights, tax law updates, financial planning" />
        <link rel="canonical" href="https://yoursite.com/blog" />
      </Helmet>

      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Tax & Business Blog | Expert CPA Insights
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay ahead with expert insights on tax planning, business strategy, and financial management from our team of certified public accountants.
          </p>
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Card key={post.slug} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <img 
                    src={post.featuredImage} 
                    alt={post.imageAlt}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <Badge variant="secondary" className="mb-3">{post.category}</Badge>
                    <h3 className="text-xl font-semibold mb-3">
                      <Link to={`/blog/${post.slug}`} className="hover:text-blue-600 transition-colors">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {post.author}
                        </span>
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(post.date).toLocaleDateString()}
                        </span>
                        <Badge 
                          className={`text-xs px-2 py-1 border ${getStatusBadgeStyle(getDisplayStatus(post))}`}
                        >
                          {getDisplayStatus(post)}
                        </Badge>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readingTime}
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <Filter className="w-5 h-5 mr-2" />
            <span className="font-medium">Filter by Category:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="mb-2"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Regular Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post) => (
            <Card key={post.slug} className="overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src={post.featuredImage} 
                alt={post.imageAlt}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <Badge variant="outline" className="mb-3">{post.category}</Badge>
                <h3 className="text-lg font-semibold mb-3">
                  <Link to={`/blog/${post.slug}`} className="hover:text-blue-600 transition-colors">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <Badge 
                      className={`text-xs px-2 py-1 border ${getStatusBadgeStyle(getDisplayStatus(post))}`}
                    >
                      {getDisplayStatus(post)}
                    </Badge>
                  </div>
                  <span className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {post.readingTime}
                  </span>
                </div>
                <Link 
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </Card>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No posts found in this category.</p>
          </div>
        )}
      </div>
      
      <Footer />
    </>
  );
};

export default Blog;