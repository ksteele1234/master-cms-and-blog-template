import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight, Search, Filter, BookOpen, TrendingUp, Shield, Calculator } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Tax Planning", "Business Growth", "Estate Planning", "Tax Law Updates", "Small Business"];

  const blogPosts = [
    {
      id: 1,
      title: "2025 Tax Planning Strategies for High-Income Professionals",
      excerpt: "Maximize your tax savings with strategic planning techniques specifically designed for executives, doctors, and tech professionals earning $300K+.",
      author: "Hiren Parmar, CPA",
      date: "January 15, 2025",
      category: "Tax Planning",
      readTime: "8 min read",
      featured: true,
      image: "/placeholder.svg"
    },
    {
      id: 2,
      title: "R&D Tax Credits: Hidden Opportunities for Tech Companies",
      excerpt: "Learn how software companies can claim substantial R&D tax credits, including common qualifying activities and documentation requirements.",
      author: "HRX CPAs Team",
      date: "January 12, 2025",
      category: "Business Growth",
      readTime: "6 min read",
      featured: false,
      image: "/placeholder.svg"
    },
    {
      id: 3,
      title: "Estate Planning for Multi-Generational Families",
      excerpt: "Essential strategies for preserving wealth across generations, including trust structures, gift strategies, and tax optimization.",
      author: "Hiren Parmar, CPA",
      date: "January 10, 2025",
      category: "Estate Planning",
      readTime: "10 min read",
      featured: false,
      image: "/placeholder.svg"
    },
    {
      id: 4,
      title: "Key Tax Law Changes for 2025: What Business Owners Need to Know",
      excerpt: "Stay ahead of important tax law modifications affecting businesses, including new depreciation rules and enhanced credits.",
      author: "Renee Noseda, Senior Tax Manager",
      date: "January 8, 2025",
      category: "Tax Law Updates",
      readTime: "7 min read",
      featured: false,
      image: "/placeholder.svg"
    },
    {
      id: 5,
      title: "RSU Tax Planning: Timing Your Stock Vesting for Maximum Benefit",
      excerpt: "Strategic approaches to managing restricted stock unit taxation, including timing strategies and AMT considerations.",
      author: "HRX CPAs Team",
      date: "January 5, 2025",
      category: "Tax Planning",
      readTime: "9 min read",
      featured: false,
      image: "/placeholder.svg"
    },
    {
      id: 6,
      title: "Small Business Tax Deductions You Might Be Missing",
      excerpt: "Comprehensive guide to often-overlooked business deductions that can significantly reduce your tax liability.",
      author: "HRX CPAs Team",
      date: "January 3, 2025",
      category: "Small Business",
      readTime: "5 min read",
      featured: false,
      image: "/placeholder.svg"
    }
  ];

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-primary/5 to-background">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Tax & Business Insights
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Expert guidance on tax planning, business growth strategies, and financial optimization 
              from the team at HRX CPAs.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="flex flex-col items-center">
                <BookOpen className="h-12 w-12 text-primary mb-4" />
                <div className="text-3xl font-bold text-foreground mb-2">50+</div>
                <div className="text-muted-foreground">Expert Articles</div>
              </div>
              <div className="flex flex-col items-center">
                <TrendingUp className="h-12 w-12 text-primary mb-4" />
                <div className="text-3xl font-bold text-foreground mb-2">$50M+</div>
                <div className="text-muted-foreground">Tax Savings Delivered</div>
              </div>
              <div className="flex flex-col items-center">
                <Shield className="h-12 w-12 text-primary mb-4" />
                <div className="text-3xl font-bold text-foreground mb-2">15+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4 bg-white border-b border-border">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "" : "hover:bg-primary/10"}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && selectedCategory === "All" && (
          <section className="py-16 px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-foreground mb-12">
                Featured Article
              </h2>
              <Card className="overflow-hidden border-2 border-primary/20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="aspect-video lg:aspect-auto bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                    <Calculator className="h-24 w-24 text-primary/40" />
                  </div>
                  <div className="p-8">
                    <Badge variant="default" className="mb-4">Featured</Badge>
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      {featuredPost.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        {featuredPost.author}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {featuredPost.date}
                      </div>
                      <div>{featuredPost.readTime}</div>
                    </div>
                    <Button asChild size="lg">
                      <Link to={`/blog/${featuredPost.id}`}>
                        Read Full Article
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </section>
        )}

        {/* Blog Posts Grid */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              {selectedCategory === "All" ? "Latest Articles" : `${selectedCategory} Articles`}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(selectedCategory === "All" ? regularPosts : filteredPosts).map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center">
                    <Calculator className="h-12 w-12 text-primary/40" />
                  </div>
                  <div className="p-6">
                    <Badge variant="secondary" className="mb-3">
                      {post.category}
                    </Badge>
                    <h3 className="text-xl font-semibold text-foreground mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {post.date}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{post.readTime}</span>
                      <Button asChild variant="outline" size="sm">
                        <Link to={`/blog/${post.id}`}>
                          Read More
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 px-4 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Stay Updated with Tax & Business Insights
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get monthly articles on tax planning, business growth strategies, and regulatory updates 
              delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-foreground"
              />
              <Button variant="secondary" size="lg">
                Subscribe
              </Button>
            </div>
            <p className="text-sm opacity-75 mt-4">
              No spam. Unsubscribe anytime. Read our privacy policy.
            </p>
          </div>
        </section>

        {/* Categories Overview */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Explore by Topic
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <Calculator className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Tax Planning</h3>
                <p className="text-muted-foreground mb-4">
                  Strategic approaches to minimize tax liability and maximize savings
                </p>
                <Button asChild variant="outline" size="sm">
                  <span onClick={() => setSelectedCategory("Tax Planning")}>
                    View Articles
                  </span>
                </Button>
              </Card>
              
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Business Growth</h3>
                <p className="text-muted-foreground mb-4">
                  Financial strategies to scale your business efficiently
                </p>
                <Button asChild variant="outline" size="sm">
                  <span onClick={() => setSelectedCategory("Business Growth")}>
                    View Articles
                  </span>
                </Button>
              </Card>
              
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Estate Planning</h3>
                <p className="text-muted-foreground mb-4">
                  Wealth preservation strategies for multi-generational families
                </p>
                <Button asChild variant="outline" size="sm">
                  <span onClick={() => setSelectedCategory("Estate Planning")}>
                    View Articles
                  </span>
                </Button>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-muted/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Need Personalized Advice?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              While our articles provide valuable insights, every situation is unique. 
              Schedule a consultation for personalized guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/book-consultation">
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/contact">
                  Contact Our Team
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;