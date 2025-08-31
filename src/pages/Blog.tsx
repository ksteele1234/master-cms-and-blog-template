import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useBlogPosts } from '../hooks/useBlogPosts';
import { useSitemapUpdater } from '../hooks/useSitemapUpdater';
import { useRSSUpdater } from '../hooks/useRSSUpdater';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, User, ArrowRight, Clock, Filter, BookOpen, TrendingUp, Shield, Calculator, ChevronDown, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import Header from '../components/Header';
import Footer from '../components/Footer';
import OptimizedImage from '../components/OptimizedImage';

const Blog = () => {
  console.log('🚀 Blog component rendering...');
  const { posts, loading } = useBlogPosts();
  const { manualUpdate: updateSitemap, getLastUpdated } = useSitemapUpdater();
  const { updateRSSFeed } = useRSSUpdater();

  // Auto-update RSS feed when posts change
  React.useEffect(() => {
    if (!loading && posts.length > 0) {
      updateRSSFeed(posts);
    }
  }, [posts, loading, updateRSSFeed]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [sortBy, setSortBy] = useState<string>("date-desc");
  const [featuredFilter, setFeaturedFilter] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");

  console.log('📝 Blog component state:', { 
    postsCount: posts.length, 
    loading, 
    selectedCategory, 
    featuredFilter,
    searchTerm 
  });

  const categories = ["All", "Tax Planning", "Tax Credits", "Estate Planning", "Tax Law Updates", "Executive Compensation", "Small Business"];
  const sortOptions = [
    { value: "date-desc", label: "Newest First" },
    { value: "date-asc", label: "Oldest First" }, 
    { value: "title-asc", label: "Title A-Z" },
    { value: "title-desc", label: "Title Z-A" }
  ];


  const featuredOptions = [
    { value: "all", label: "All Posts" },
    { value: "featured", label: "Featured Only" },
    { value: "regular", label: "Regular Only" }
  ];

  // Apply category and featured filters only - editorial workflow handles draft vs published
  let filteredPosts = posts;

  console.log('=== FILTERING DEBUG ===');
  console.log('Total posts:', posts.length);
  console.log('Selected filters:', { selectedCategory, featuredFilter, searchTerm });

  // Search filter
  if (searchTerm.trim()) {
    console.log('Filtering by search term:', searchTerm);
    filteredPosts = filteredPosts.filter(post => 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log('After search filter:', filteredPosts.length);
  }

  // Category filter
  if (selectedCategory !== "All") {
    console.log('Filtering by category:', selectedCategory);
    console.log('Available post categories:', filteredPosts.map(p => ({ title: p.title, category: p.category })));
    filteredPosts = filteredPosts.filter(post => post.category === selectedCategory);
    console.log('After category filter:', filteredPosts.length);
    console.log('Posts matching category:', filteredPosts.map(p => ({ title: p.title, category: p.category })));
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

  const featuredPosts = sortedPosts.filter(post => post.featured);
  const regularPosts = sortedPosts.filter(post => !post.featured);

  

  if (loading) {
    return <div className="container mx-auto px-4 py-8">Loading...</div>;
  }

  return (
    <>
      <Helmet>
        <title>Tax & Business Strategy Blog | Expert CPA Insights | HRX CPAs</title>
        <meta name="description" content="Expert tax planning, business strategy, and financial insights from certified CPAs. Stay updated with the latest tax law changes, estate planning tips, and business guidance." />
        <meta name="keywords" content="tax planning blog, CPA insights, business strategy, tax law changes, estate planning, RSU planning, business accounting" />
        <link rel="canonical" href="https://hrxcpas.com/blog" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Tax & Business Strategy Blog | HRX CPAs" />
        <meta property="og:description" content="Expert tax planning, business strategy, and financial insights from certified CPAs." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hrxcpas.com/blog" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tax & Business Strategy Blog | HRX CPAs" />
        <meta name="twitter:description" content="Expert tax planning, business strategy, and financial insights from certified CPAs." />
        
        {/* JSON-LD for Blog */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "HRX CPAs Tax & Business Blog",
            "description": "Expert tax planning, business strategy, and financial insights from certified CPAs",
            "url": "https://hrxcpas.com/blog",
            "publisher": {
              "@type": "Organization",
              "name": "HRX CPAs",
              "logo": {
                "@type": "ImageObject",
                "url": "https://hrxcpas.com/assets/hrx-logo.png"
              }
            },
            "blogPost": sortedPosts.slice(0, 10).map(post => ({
              "@type": "BlogPosting",
              "headline": post.title,
              "description": post.excerpt,
              "url": `https://hrxcpas.com/blog/${post.slug}`,
              "datePublished": post.date,
              "author": {
                "@type": "Organization", 
                "name": post.author
              },
              "image": post.featuredImage
            }))
          })}
        </script>
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

        {/* Filter and Sort Controls */}
        <div className="mb-8 space-y-6">
          {/* Search Bar */}
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              type="text"
              placeholder="Search posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600"
            />
          </div>

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
            {searchTerm && ` matching "${searchTerm}"`}
            {selectedCategory !== "All" && ` in "${selectedCategory}"`}
            {featuredFilter !== "all" && ` (${featuredOptions.find(o => o.value === featuredFilter)?.label})`}
          </div>
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Card key={post.slug} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <OptimizedImage 
                    src={post.featuredImage} 
                    alt={post.imageAlt}
                    width={400}
                    height={192}
                    className="w-full h-48"
                    priority={true}
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

        {/* Regular Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post) => (
            <Card key={post.slug} className="overflow-hidden hover:shadow-lg transition-shadow">
              <OptimizedImage 
                src={post.featuredImage} 
                alt={post.imageAlt}
                width={400}
                height={192}
                className="w-full h-48"
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
            <p className="text-gray-500">
              {searchTerm ? `No posts found matching "${searchTerm}".` : "No posts found with the selected filters."}
            </p>
          </div>
        )}
      </div>
      
      <Footer />
    </>
  );
};

export default Blog;