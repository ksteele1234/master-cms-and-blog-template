import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowLeft, ArrowRight, Clock, Share, BookOpen } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link, useParams } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams();
  
  // Sample blog posts data
  const blogPosts = {
    "1": {
      title: "2025 Tax Planning Strategies for High-Income Professionals",
      author: "Hiren Parmar, CPA",
      date: "January 15, 2025",
      category: "Tax Planning",
      readTime: "8 min read",
      excerpt: "Maximize your tax savings with strategic planning techniques specifically designed for executives, doctors, and tech professionals earning $300K+.",
      content: `
        <h2>Introduction</h2>
        <p>High-income professionals face unique tax challenges that require sophisticated planning strategies. As we approach 2025, several key opportunities can help maximize your tax efficiency while building long-term wealth.</p>
        
        <h2>Key Strategies for 2025</h2>
        
        <h3>1. Maximize Retirement Contributions</h3>
        <p>For 2025, contribution limits have increased:</p>
        <ul>
          <li>401(k): $23,000 ($30,500 if 50+)</li>
          <li>IRA: $7,000 ($8,000 if 50+)</li>
          <li>Backdoor Roth conversions remain viable</li>
        </ul>
        
        <h3>2. Strategic Stock Option Planning</h3>
        <p>Tech professionals with RSUs and stock options should consider:</p>
        <ul>
          <li>Timing of RSU vesting to optimize tax brackets</li>
          <li>ISO exercise strategies to minimize AMT</li>
          <li>83(b) elections for early-stage equity</li>
        </ul>
        
        <h3>3. Business Structure Optimization</h3>
        <p>High-earning consultants and business owners can benefit from:</p>
        <ul>
          <li>S-Corp elections for self-employment tax savings</li>
          <li>Solo 401(k) plans for maximum retirement savings</li>
          <li>Defined benefit plans for substantial deductions</li>
        </ul>
        
        <h2>State Tax Considerations</h2>
        <p>California's high state tax rates make domicile planning crucial. Consider:</p>
        <ul>
          <li>Nevada or Florida residency for state tax savings</li>
          <li>Proper documentation of domicile changes</li>
          <li>Timing of income recognition around moves</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>Effective tax planning requires a proactive, year-round approach. Work with qualified professionals to implement these strategies based on your specific situation.</p>
      `
    },
    "2": {
      title: "R&D Tax Credits: Hidden Opportunities for Tech Companies",
      author: "HRX CPAs Team",
      date: "January 12, 2025",
      category: "Business Growth",
      readTime: "6 min read",
      excerpt: "Learn how software companies can claim substantial R&D tax credits, including common qualifying activities and documentation requirements.",
      content: `
        <h2>Understanding R&D Tax Credits</h2>
        <p>The Research and Development Tax Credit is one of the most valuable yet underutilized tax incentives available to businesses. For technology companies, this credit can provide substantial tax savings.</p>
        
        <h2>What Qualifies as R&D?</h2>
        
        <h3>Software Development Activities</h3>
        <ul>
          <li>Developing new software applications</li>
          <li>Enhancing existing software functionality</li>
          <li>Creating algorithms and data structures</li>
          <li>Integration and interoperability projects</li>
        </ul>
        
        <h3>Common Qualifying Expenses</h3>
        <ul>
          <li>Developer salaries and benefits</li>
          <li>Cloud computing costs for development</li>
          <li>Software licenses and tools</li>
          <li>Third-party contractor costs</li>
        </ul>
        
        <h2>Documentation Requirements</h2>
        <p>Proper documentation is crucial for R&D credit claims:</p>
        <ul>
          <li>Project descriptions and technical specifications</li>
          <li>Time tracking for qualified activities</li>
          <li>Meeting notes and design documents</li>
          <li>Version control and testing records</li>
        </ul>
        
        <h2>Case Study: SaaS Company</h2>
        <p>A mid-size SaaS company with $5M revenue claimed $180,000 in R&D credits by properly documenting their development activities across multiple projects.</p>
        
        <h2>Getting Started</h2>
        <p>Begin by conducting an R&D credit study to identify qualifying activities and quantify potential benefits. Work with experienced professionals to maximize your credit while ensuring compliance.</p>
      `
    }
  };

  const currentPost = blogPosts[id as keyof typeof blogPosts];

  if (!currentPost) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20 pb-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-foreground mb-6">Post Not Found</h1>
            <p className="text-xl text-muted-foreground mb-8">
              The blog post you're looking for doesn't exist.
            </p>
            <Button asChild>
              <Link to="/blog">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back to Blog
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 pb-16">
        {/* Article Header */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Button asChild variant="outline" size="sm">
                <Link to="/blog">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Blog
                </Link>
              </Button>
            </div>
            
            <article>
              <header className="mb-12">
                <Badge variant="secondary" className="mb-4">
                  {currentPost.category}
                </Badge>
                
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                  {currentPost.title}
                </h1>
                
                <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>{currentPost.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{currentPost.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{currentPost.readTime}</span>
                  </div>
                </div>
                
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {currentPost.excerpt}
                </p>
              </header>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <div 
                  className="text-foreground leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: currentPost.content }}
                  style={{
                    lineHeight: '1.8',
                  }}
                />
              </div>

              {/* Article Footer */}
              <footer className="mt-12 pt-8 border-t border-border">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="text-sm text-muted-foreground">
                    Published by <span className="font-semibold">{currentPost.author}</span> on {currentPost.date}
                  </div>
                  <Button variant="outline" size="sm">
                    <Share className="mr-2 h-4 w-4" />
                    Share Article
                  </Button>
                </div>
              </footer>
            </article>
          </div>
        </section>

        {/* Author Info */}
        <section className="py-12 px-4 bg-muted/50">
          <div className="max-w-4xl mx-auto">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <User className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2">About the Author</h3>
                  <p className="text-muted-foreground mb-4">
                    {currentPost.author === "Hiren Parmar, CPA" 
                      ? "Hiren Parmar is the founder and president of HRX CPAs with over 20 years of experience in tax planning and business advisory services. He specializes in helping high-income professionals and growing businesses optimize their financial strategies."
                      : "The HRX CPAs team consists of experienced tax professionals and advisors dedicated to providing strategic insights and practical guidance to help businesses and individuals achieve their financial goals."
                    }
                  </p>
                  <Button asChild variant="outline" size="sm">
                    <Link to="/about">
                      Learn More About Our Team
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Related Articles
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(blogPosts)
                .filter(([postId]) => postId !== id)
                .slice(0, 3)
                .map(([postId, post]) => (
                  <Card key={postId} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-video bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center">
                      <BookOpen className="h-12 w-12 text-primary/40" />
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
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">{post.readTime}</span>
                        <Button asChild variant="outline" size="sm">
                          <Link to={`/blog/${postId}`}>
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

        {/* CTA Section */}
        <section className="py-16 px-4 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Need Personalized Tax Planning?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Every situation is unique. Schedule a consultation to discuss strategies 
              specific to your financial goals and circumstances.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/book-consultation">
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
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

export default BlogPost;