import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowLeft, ArrowRight, Clock, Share, BookOpen } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link, useParams } from "react-router-dom";

const BlogPost = () => {
  const { slug } = useParams();
  
  // Sample blog posts data with slug-based lookup
  const blogPosts = {
    "2025-tax-planning-strategies-high-income-professionals": {
      id: 1,
      slug: "2025-tax-planning-strategies-high-income-professionals",
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
    "rd-tax-credits-hidden-opportunities-tech-companies": {
      id: 2,
      slug: "rd-tax-credits-hidden-opportunities-tech-companies",
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
    },
    "estate-planning-multi-generational-families": {
      id: 3,
      slug: "estate-planning-multi-generational-families",
      title: "Estate Planning for Multi-Generational Families",
      author: "Hiren Parmar, CPA",
      date: "January 10, 2025",
      category: "Estate Planning",
      readTime: "10 min read",
      excerpt: "Essential strategies for preserving wealth across generations, including trust structures, gift strategies, and tax optimization.",
      content: `
        <h2>Building a Multi-Generational Legacy</h2>
        <p>Creating an estate plan that effectively preserves wealth across multiple generations requires sophisticated strategies and careful coordination with qualified professionals.</p>
        
        <h2>Trust Structures for Wealth Preservation</h2>
        
        <h3>Generation-Skipping Trusts</h3>
        <ul>
          <li>Bypass estate taxes for one generation</li>
          <li>Maximize use of GST exemption</li>
          <li>Provide flexibility for future distributions</li>
        </ul>
        
        <h3>Dynasty Trusts</h3>
        <ul>
          <li>Perpetual wealth preservation where permitted</li>
          <li>Protection from beneficiary creditors</li>
          <li>Tax-efficient growth opportunities</li>
        </ul>
        
        <h2>Strategic Gifting Programs</h2>
        <p>Annual exclusion gifts and lifetime exemption utilization:</p>
        <ul>
          <li>2025 annual exclusion: $19,000 per recipient</li>
          <li>Lifetime exemption: $13.99 million</li>
          <li>Valuation discounts for family entities</li>
        </ul>
        
        <h2>Tax Optimization Techniques</h2>
        <ul>
          <li>Grantor trust structures</li>
          <li>Charitable lead and remainder trusts</li>
          <li>Family limited partnerships</li>
        </ul>
        
        <h2>Coordination with Business Succession</h2>
        <p>For business-owning families, estate planning must integrate with succession planning to ensure both family wealth preservation and business continuity.</p>
      `
    },
    "key-tax-law-changes-2025-business-owners": {
      id: 4,
      slug: "key-tax-law-changes-2025-business-owners",
      title: "Key Tax Law Changes for 2025: What Business Owners Need to Know",
      author: "Renee Noseda, Senior Tax Manager",
      date: "January 8, 2025",
      category: "Tax Law Updates",
      readTime: "7 min read",
      excerpt: "Stay ahead of important tax law modifications affecting businesses, including new depreciation rules and enhanced credits.",
      content: `
        <h2>2025 Tax Law Updates Overview</h2>
        <p>Several significant tax law changes take effect in 2025 that will impact business planning and compliance. Here's what you need to know to stay ahead.</p>
        
        <h2>Depreciation and Expensing Changes</h2>
        
        <h3>Section 199A Deduction</h3>
        <ul>
          <li>Continued availability for pass-through entities</li>
          <li>Updated income thresholds</li>
          <li>New qualifying business activities</li>
        </ul>
        
        <h3>Bonus Depreciation Phase-Out</h3>
        <ul>
          <li>80% bonus depreciation for 2025</li>
          <li>Planning opportunities before full phase-out</li>
          <li>Alternative timing strategies</li>
        </ul>
        
        <h2>Enhanced Tax Credits</h2>
        
        <h3>Research & Development Credits</h3>
        <ul>
          <li>Expanded qualifying activities</li>
          <li>Simplified documentation requirements</li>
          <li>Increased credit rates for small businesses</li>
        </ul>
        
        <h3>Green Energy Incentives</h3>
        <ul>
          <li>Extended solar and wind credits</li>
          <li>New electric vehicle fleet incentives</li>
          <li>Energy-efficient building improvements</li>
        </ul>
        
        <h2>International Tax Provisions</h2>
        <ul>
          <li>GILTI rate modifications</li>
          <li>Updated transfer pricing guidelines</li>
          <li>New reporting requirements</li>
        </ul>
        
        <h2>Action Items for Business Owners</h2>
        <p>Review your current tax strategy with qualified professionals to ensure you're positioned to take advantage of new opportunities while maintaining compliance.</p>
      `
    },
    "rsu-tax-planning-timing-stock-vesting-maximum-benefit": {
      id: 5,
      slug: "rsu-tax-planning-timing-stock-vesting-maximum-benefit",
      title: "RSU Tax Planning: Timing Your Stock Vesting for Maximum Benefit",
      author: "HRX CPAs Team",
      date: "January 5, 2025",
      category: "Tax Planning",
      readTime: "9 min read",
      excerpt: "Strategic approaches to managing restricted stock unit taxation, including timing strategies and AMT considerations.",
      content: `
        <h2>Understanding RSU Taxation</h2>
        <p>Restricted Stock Units (RSUs) are a common form of equity compensation, particularly in the technology sector. Understanding their tax implications is crucial for maximizing after-tax value.</p>
        
        <h2>Vesting and Tax Events</h2>
        
        <h3>When Taxes Are Owed</h3>
        <ul>
          <li>Ordinary income tax at vesting</li>
          <li>Withholding requirements and supplemental rates</li>
          <li>Capital gains treatment for post-vesting appreciation</li>
        </ul>
        
        <h3>Timing Strategies</h3>
        <ul>
          <li>Managing vesting across tax years</li>
          <li>Coordinating with other income sources</li>
          <li>State tax considerations for relocating employees</li>
        </ul>
        
        <h2>Advanced Planning Techniques</h2>
        
        <h3>Tax Loss Harvesting</h3>
        <ul>
          <li>Offsetting RSU income with realized losses</li>
          <li>Wash sale rule considerations</li>
          <li>Portfolio rebalancing opportunities</li>
        </ul>
        
        <h3>Charitable Giving Strategies</h3>
        <ul>
          <li>Donating appreciated shares</li>
          <li>Charitable remainder trusts</li>
          <li>Donor-advised funds for flexible timing</li>
        </ul>
        
        <h2>AMT Considerations</h2>
        <p>While RSUs don't typically trigger AMT, the interaction with other equity compensation and high income levels requires careful analysis.</p>
        
        <h2>Case Study Examples</h2>
        <p>Review common scenarios for tech employees and executives, including optimal strategies for different vesting schedules and stock price movements.</p>
      `
    },
    "small-business-tax-deductions-you-might-be-missing": {
      id: 6,
      slug: "small-business-tax-deductions-you-might-be-missing",
      title: "Small Business Tax Deductions You Might Be Missing",
      author: "HRX CPAs Team",
      date: "January 3, 2025",
      category: "Small Business",
      readTime: "5 min read",
      excerpt: "Comprehensive guide to often-overlooked business deductions that can significantly reduce your tax liability.",
      content: `
        <h2>Maximizing Small Business Deductions</h2>
        <p>Many small business owners miss valuable deductions that could significantly reduce their tax liability. Here are some commonly overlooked opportunities.</p>
        
        <h2>Home Office Deductions</h2>
        
        <h3>Simplified Method vs. Actual Expense</h3>
        <ul>
          <li>$5 per square foot up to 300 sq ft (simplified)</li>
          <li>Actual expenses based on percentage of home use</li>
          <li>Direct vs. indirect expense categorization</li>
        </ul>
        
        <h2>Vehicle Expenses</h2>
        
        <h3>Standard Mileage vs. Actual Costs</h3>
        <ul>
          <li>2025 standard mileage rate: 70 cents per mile</li>
          <li>Actual expense method for higher-value vehicles</li>
          <li>Record-keeping requirements</li>
        </ul>
        
        <h2>Often-Missed Deductions</h2>
        
        <h3>Business Meals and Entertainment</h3>
        <ul>
          <li>100% deduction for employee meals (through 2025)</li>
          <li>50% deduction for client entertainment</li>
          <li>Business travel meal allowances</li>
        </ul>
        
        <h3>Professional Development</h3>
        <ul>
          <li>Industry conferences and training</li>
          <li>Professional memberships</li>
          <li>Business-related education</li>
        </ul>
        
        <h3>Technology and Equipment</h3>
        <ul>
          <li>Section 179 expensing election</li>
          <li>Bonus depreciation opportunities</li>
          <li>Software and subscription services</li>
        </ul>
        
        <h2>Record-Keeping Best Practices</h2>
        <p>Proper documentation is essential for claiming deductions. Implement systems to track expenses throughout the year rather than scrambling at tax time.</p>
        
        <h2>Working with Professionals</h2>
        <p>A qualified tax advisor can help identify additional opportunities specific to your industry and business structure.</p>
      `
    }
  };

  const currentPost = blogPosts[slug as keyof typeof blogPosts];

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
                .filter(([postSlug]) => postSlug !== slug)
                .slice(0, 3)
                .map(([postSlug, post]) => (
                  <Card key={postSlug} className="overflow-hidden hover:shadow-lg transition-shadow">
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
                          <Link to={`/blog/${post.slug}`}>
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