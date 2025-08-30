import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useBlogPosts } from '../hooks/useBlogPosts';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, User, ArrowRight, Clock, Filter, BookOpen, TrendingUp, Shield, Calculator, ChevronDown } from "lucide-react";
import Header from '../components/Header';
import Footer from '../components/Footer';

const Blog = () => {
  console.log('🚀 Blog component rendering...');
  const { posts, loading } = useBlogPosts();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [sortBy, setSortBy] = useState<string>("date-desc");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [featuredFilter, setFeaturedFilter] = useState<string>("all");

  console.log('📝 Blog component state:', { 
    postsCount: posts.length, 
    loading, 
    selectedCategory, 
    statusFilter, 
    featuredFilter 
  });

  const categories = ["All", "Tax Planning", "Tax Credits", "Estate Planning", "Tax Law Updates", "Executive Compensation", "Small Business"];
  const sortOptions = [
    { value: "date-desc", label: "Newest First" },
    { value: "date-asc", label: "Oldest First" }, 
    { value: "title-asc", label: "Title A-Z" },
    { value: "title-desc", label: "Title Z-A" }
  ];

  const statusOptions = [
    { value: "all", label: "All Statuses" },
    { value: "draft", label: "Draft" },
    { value: "in_review", label: "In Review" },
    { value: "ready", label: "Ready" },
    { value: "published", label: "Published" }
  ];

  const featuredOptions = [
    { value: "all", label: "All Posts" },
    { value: "featured", label: "Featured Only" },
    { value: "regular", label: "Regular Only" }
  ];

  // Apply all filters
  let filteredPosts = posts;

  console.log('=== FILTERING DEBUG ===');
  console.log('Total posts:', posts.length);
  console.log('Selected filters:', { selectedCategory, statusFilter, featuredFilter });
  console.log('All post statuses:', posts.map(p => ({ title: p.title, status: p.status, published: p.published })));

  // Category filter
  if (selectedCategory !== "All") {
    filteredPosts = filteredPosts.filter(post => post.category === selectedCategory);
    console.log('After category filter:', filteredPosts.length);
  }

  // Status filter  
  if (statusFilter !== "all") {
    console.log('Applying status filter for:', statusFilter);
    filteredPosts = filteredPosts.filter(post => {
      const postStatus = (post.status || 'published').toLowerCase();
      const matches = postStatus === statusFilter;
      console.log(`Post "${post.title}": status="${post.status}" -> normalized="${postStatus}" -> matches "${statusFilter}": ${matches}`);
      return matches;
    });
    console.log('After status filter:', filteredPosts.length);
  }

  // Featured filter
  if (featuredFilter !== "all") {
    console.log('Applying featured filter for:', featuredFilter);
    if (featuredFilter === "featured") {
      filteredPosts = filteredPosts.filter(post => post.featured);
    } else if (featuredFilter === "regular") {
      filteredPosts = filteredPosts.filter(post => !post.featured);
    }
    console.log('After featured filter:', filteredPosts.length);
  }

  // Apply sorting to filtered posts
  const sortedPosts = [...filteredPosts].sort((a, b) => {
    switch (sortBy) {
      case "date-desc":
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      case "date-asc":
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      case "title-asc":
        return a.title.localeCompare(b.title);
      case "title-desc":
        return b.title.localeCompare(a.title);
      default:
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
  });

  console.log('Filtered and sorted posts:', sortedPosts.length, 'of', posts.length, 'total posts');

  const featuredPosts = posts.filter(post => post.featured);
  const regularPosts = sortedPosts.filter(post => !post.featured);

  // Function to get display status and badge style
  const getDisplayStatus = (post: any) => {
    // If no status field exists or status is empty/undefined, default to 'PUBLISHED'
    const displayStatus = post.status || 'PUBLISHED';
    console.log('Post status for badge:', post.title, 'status field:', post.status, 'final display:', displayStatus);
    return displayStatus;
  };

  const getStatusBadgeStyle = (status: string) => {
    console.log('Badge styling for status:', status);
    switch (status.toLowerCase()) {
      case 'draft':
        return 'bg-pink-100 text-pink-800 border-pink-200';
      case 'in_review':
      case 'in review':
      case 'in-review':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'ready':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'published':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      default:
        console.log('Using default badge style for status:', status);
        return 'bg-blue-100 text-blue-800 border-blue-200';
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

        {/* Filter and Sort Controls */}
        <div className="mb-8 space-y-6">
          {/* Filter Controls Row */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center">
              <Filter className="w-5 h-5 mr-2" />
              <span className="font-medium">Filters:</span>
            </div>
            
            {/* Category Filter */}
            <div className="flex flex-col">
              <label className="text-sm font-medium mb-1">Category</label>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 z-50">
                  {categories.map((category) => (
                    <SelectItem key={category} value={category} className="hover:bg-gray-100 dark:hover:bg-gray-700">
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Status Filter */}
            <div className="flex flex-col">
              <label className="text-sm font-medium mb-1">Status</label>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-40 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600">
                  <SelectValue placeholder="All statuses" />
                </SelectTrigger>
                <SelectContent className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 z-50">
                  {statusOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value} className="hover:bg-gray-100 dark:hover:bg-gray-700">
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Featured Filter */}
            <div className="flex flex-col">
              <label className="text-sm font-medium mb-1">Featured</label>
              <Select value={featuredFilter} onValueChange={setFeaturedFilter}>
                <SelectTrigger className="w-36 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600">
                  <SelectValue placeholder="All posts" />
                </SelectTrigger>
                <SelectContent className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 z-50">
                  {featuredOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value} className="hover:bg-gray-100 dark:hover:bg-gray-700">
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Sort Control */}
            <div className="flex flex-col">
              <label className="text-sm font-medium mb-1">Sort by</label>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 z-50">
                  {sortOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value} className="hover:bg-gray-100 dark:hover:bg-gray-700">
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Results Counter */}
          <div className="text-sm text-gray-600">
            Showing {sortedPosts.length} of {posts.length} posts
            {selectedCategory !== "All" && ` in "${selectedCategory}"`}
            {statusFilter !== "all" && ` with status "${statusOptions.find(o => o.value === statusFilter)?.label}"`}
            {featuredFilter !== "all" && ` (${featuredOptions.find(o => o.value === featuredFilter)?.label})`}
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

        {sortedPosts.length === 0 && (
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