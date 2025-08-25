import { Helmet } from 'react-helmet-async';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowLeft, ArrowRight, Clock, Share, BookOpen } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link, useParams } from "react-router-dom";

// Blog post images
import taxPlanningImage from "@/assets/blog/tax-planning-high-income-professionals.jpg";
import rdCreditsImage from "@/assets/blog/rd-tax-credits-tech-companies.jpg";
import estatePlanningImage from "@/assets/blog/estate-planning-multi-generational.jpg";
import taxLawChangesImage from "@/assets/blog/tax-law-changes-2025.jpg";
import rsuPlanningImage from "@/assets/blog/rsu-tax-planning-stock-vesting.jpg";
import businessDeductionsImage from "@/assets/blog/small-business-tax-deductions.jpg";

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
      image: taxPlanningImage,
      content: `
        <h2>Introduction</h2>
        <p>High-income professionals face unique tax challenges that require sophisticated planning strategies. As we approach 2025, several key opportunities can help maximize your tax efficiency while building long-term wealth.</p>
        
        <div class="highlight-box">
          <h4>Key Takeaway</h4>
          <p>Effective tax planning for high earners requires a proactive, year-round approach that integrates with your overall financial strategy.</p>
          <ul class="checklist">
            <li class="checklist-item">Start planning early in the tax year</li>
            <li class="checklist-item">Maximize all available retirement contributions</li>
            <li class="checklist-item">Consider business structure optimization</li>
            <li class="checklist-item">Implement strategic charitable giving</li>
          </ul>
        </div>
        
        <h2>Key Tax Planning Strategies for 2025</h2>
        
        <h3>1. Maximize Retirement Contributions</h3>
        <p>For 2025, contribution limits have increased significantly:</p>
        
        <div class="comparison-table">
          <div class="comparison-column">
            <h4>401(k) Plans</h4>
            <ul>
              <li><strong>Standard Limit:</strong> $23,000</li>
              <li><strong>Age 50+ Catch-up:</strong> $30,500</li>
              <li><strong>Total with Employer:</strong> Up to $70,000</li>
            </ul>
          </div>
          <div class="comparison-column">
            <h4>IRAs</h4>
            <ul>
              <li><strong>Traditional/Roth:</strong> $7,000</li>
              <li><strong>Age 50+ Catch-up:</strong> $8,000</li>
              <li><strong>Backdoor Roth:</strong> Still viable</li>
            </ul>
          </div>
          <div class="comparison-column">
            <h4>Advanced Strategies</h4>
            <ul>
              <li><strong>Mega Backdoor Roth:</strong> Up to $70,000</li>
              <li><strong>Solo 401(k):</strong> Business owners</li>
              <li><strong>Defined Benefit:</strong> High earners</li>
            </ul>
          </div>
        </div>
        
        <h3>2. Strategic Stock Option and RSU Planning</h3>
        <p>Tech professionals and executives with equity compensation should consider our specialized <Link to="/services/rsu-equity-planning" className="text-primary hover:text-primary/80 underline">RSU & Equity Planning services</Link>:</p>
        
        <div class="case-study-box">
          <h4>Case Study: Tech Executive Success</h4>
          <p><strong>Challenge:</strong> A software engineer with $500K in annual RSU vesting faced significant tax liability.</p>
          <p><strong>Solution:</strong> We implemented a multi-year vesting strategy, timing exercises around other income, and utilizing tax loss harvesting.</p>
          <p><strong>Result:</strong> Reduced overall tax liability by 32% while maintaining investment growth potential.</p>
        </div>
        
        <ul>
          <li><strong>RSU Vesting Timing:</strong> Optimize tax brackets across multiple years</li>
          <li><strong>ISO Exercise Strategies:</strong> Minimize Alternative Minimum Tax (AMT) impact</li>
          <li><strong>83(b) Elections:</strong> Lock in valuation for early-stage equity</li>
          <li><strong>Tax Loss Harvesting:</strong> Offset equity gains with strategic losses</li>
        </ul>
        
        <h3>3. Business Structure Optimization</h3>
        <p>High-earning consultants and business owners can benefit from:</p>
        <ul>
          <li><strong>S-Corporation Elections:</strong> Reduce self-employment taxes</li>
          <li><strong>Solo 401(k) Plans:</strong> Maximum retirement contributions for business owners</li>
          <li><strong>Defined Benefit Plans:</strong> Substantial deductions for consistent high earners</li>
          <li><strong>Section 199A Deduction:</strong> 20% deduction for qualified business income</li>
        </ul>
        
        <h2>Advanced Tax Strategies</h2>
        
        <h3>Charitable Giving Optimization</h3>
        <ul>
          <li><strong>Donor-Advised Funds:</strong> Immediate deduction with flexible timing</li>
          <li><strong>Charitable Remainder Trusts:</strong> Income stream with tax benefits</li>
          <li><strong>Appreciated Securities:</strong> Avoid capital gains while maximizing deductions</li>
        </ul>
        
        <h3>State Tax Planning Considerations</h3>
        <p>For residents of high-tax states like California, New York, and New Jersey:</p>
        <ul>
          <li><strong>Domicile Planning:</strong> Consider Nevada, Florida, or Texas residency</li>
          <li><strong>Proper Documentation:</strong> Establish clear residency patterns</li>
          <li><strong>Income Timing:</strong> Optimize recognition around state moves</li>
          <li><strong>SALT Cap Workarounds:</strong> State and local tax deduction strategies</li>
        </ul>
        
        <h2>Implementation Timeline</h2>
        
        <div class="faq-section">
          <div class="faq-item">
            <h4>Q1 Actions (January - March)</h4>
            <ul>
              <li>Review and update retirement plan contributions</li>
              <li>Establish tax-advantaged accounts (HSA, 529 plans)</li>
              <li>Plan charitable giving strategy</li>
            </ul>
          </div>
          
          <div class="faq-item">
            <h4>Mid-Year Review (July - September)</h4>
            <ul>
              <li>Assess income projections and tax brackets</li>
              <li>Execute stock option and RSU strategies</li>
              <li>Consider business structure changes</li>
            </ul>
          </div>
          
          <div class="faq-item">
            <h4>Year-End Planning (October - December)</h4>
            <ul>
              <li>Finalize tax loss harvesting</li>
              <li>Complete charitable contributions</li>
              <li>Execute any remaining income deferral strategies</li>
            </ul>
          </div>
        </div>
        
        <h2>Conclusion</h2>
        <p>Effective tax planning for high-income professionals requires a proactive, year-round approach that integrates with your overall financial strategy. The strategies outlined above can result in significant tax savings, but implementation should be customized to your specific situation.</p>
        
        <p><strong>Next Steps:</strong> Work with our experienced <Link to="/services/tax-planning-prep" className="text-primary hover:text-primary/80 underline">Tax Planning & Preparation</Link> team to develop a comprehensive plan that maximizes these opportunities while ensuring compliance with all applicable regulations. Schedule your <Link to="/book-consultation" className="text-primary hover:text-primary/80 underline">consultation today</Link>.</p>
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
      image: rdCreditsImage,
      content: `
        <h2>Understanding R&D Tax Credits</h2>
        <p>The Research and Development Tax Credit is one of the most valuable yet underutilized tax incentives available to businesses. For technology companies, this credit can provide substantial tax savings - often ranging from $50,000 to $500,000 annually for mid-size firms.</p>
        
        <div class="highlight-box">
          <h4>R&D Credit Quick Facts</h4>
          <ul class="checklist">
            <li class="checklist-item">Available to all sizes of tech companies</li>
            <li class="checklist-item">Can offset federal income tax and payroll taxes</li>
            <li class="checklist-item">Most software development activities qualify</li>
            <li class="checklist-item">Retroactive claims possible for up to 3 years</li>
          </ul>
        </div>
        
        <h2>What Qualifies as R&D for Tech Companies?</h2>
        
        <h3>Software Development Activities</h3>
        <p>Most software development activities qualify for R&D credits, including:</p>
        <ul>
          <li><strong>New Product Development:</strong> Creating entirely new software applications or platforms</li>
          <li><strong>Feature Enhancement:</strong> Adding significant new functionality to existing products</li>
          <li><strong>Performance Optimization:</strong> Improving speed, efficiency, or scalability</li>
          <li><strong>Integration Projects:</strong> Connecting disparate systems or APIs</li>
          <li><strong>Algorithm Development:</strong> Creating new mathematical models or data processing methods</li>
          <li><strong>User Interface Innovation:</strong> Developing new UX/UI approaches or accessibility features</li>
        </ul>
        
        <h3>Infrastructure and DevOps Innovations</h3>
        <ul>
          <li><strong>Cloud Architecture:</strong> Designing new deployment or scaling methodologies</li>
          <li><strong>Security Enhancements:</strong> Developing new cybersecurity measures</li>
          <li><strong>Data Management:</strong> Creating new database structures or data processing pipelines</li>
          <li><strong>Testing Automation:</strong> Building new testing frameworks or quality assurance processes</li>
        </ul>
        
        <h2>Common Qualifying Expenses</h2>
        
        <div class="comparison-table">
          <div class="comparison-column">
            <h4>Personnel Costs</h4>
            <ul>
              <li>Developer salaries (W-2 wages)</li>
              <li>Benefits and payroll taxes</li>
              <li>QA and testing teams</li>
              <li>65% of contractor payments</li>
            </ul>
          </div>
          <div class="comparison-column">
            <h4>Technology Costs</h4>
            <ul>
              <li>Cloud computing costs</li>
              <li>Software licenses</li>
              <li>Third-party APIs</li>
              <li>Development hardware</li>
            </ul>
          </div>
          <div class="comparison-column">
            <h4>Other Expenses</h4>
            <ul>
              <li>Research materials</li>
              <li>Testing equipment</li>
              <li>Technical documentation</li>
              <li>Training for R&D</li>
            </ul>
          </div>
        </div>
        
        <h2>Documentation Best Practices</h2>
        
        <h3>Project Documentation</h3>
        <div class="checklist-box">
          <h4>Required Documentation Checklist</h4>
          <ul class="checklist">
            <li class="checklist-item">Technical specifications and project scope</li>
            <li class="checklist-item">Architecture diagrams and data flow documentation</li>
            <li class="checklist-item">Meeting notes and development team discussions</li>
            <li class="checklist-item">Version control history and feature evolution</li>
            <li class="checklist-item">Time tracking with activity-based breakdown</li>
            <li class="checklist-item">Project codes for qualifying projects</li>
            <li class="checklist-item">Employee timesheets with detailed activities</li>
            <li class="checklist-item">Contractor invoices with R&D work descriptions</li>
          </ul>
        </div>
        
        <h2>Real-World Case Studies</h2>
        
        <div class="case-study-box">
          <h4>SaaS Company Success Story</h4>
          <p><strong>Challenge:</strong> A mid-size SaaS company with $5M annual revenue wasn't aware they qualified for R&D credits.</p>
          <p><strong>Solution:</strong> We conducted a comprehensive R&D study and implemented proper documentation systems.</p>
          <p><strong>Result:</strong> Successfully claimed $180,000 in R&D credits across four major projects:</p>
          <ul>
            <li>AI-powered recommendation engine: $65,000 credit</li>
            <li>Real-time collaboration features: $45,000 credit</li>
            <li>Advanced analytics dashboard: $40,000 credit</li>
            <li>Mobile app development: $30,000 credit</li>
          </ul>
        </div>
        
        <div class="case-study-box">
          <h4>E-commerce Platform Example</h4>
          <p><strong>Challenge:</strong> An e-commerce technology company needed to optimize their technology stack.</p>
          <p><strong>Solution:</strong> Identified qualifying R&D activities in payment processing, inventory management, and personalization systems.</p>
          <p><strong>Result:</strong> Claimed $320,000 in credits while improving their platform's capabilities.</p>
        </div>
        
        <h2>Getting Started with R&D Credits</h2>
        
        <h3>Initial Assessment Process</h3>
        <div class="faq-section">
          <div class="faq-item">
            <h4>Step 1: Conduct R&D Credit Study</h4>
            <p>Identify all qualifying activities and expenses through a comprehensive review of your development processes.</p>
          </div>
          
          <div class="faq-item">
            <h4>Step 2: Quantify Potential Benefits</h4>
            <p>Calculate estimated credit amounts based on qualifying expenses and activities.</p>
          </div>
          
          <div class="faq-item">
            <h4>Step 3: Implement Documentation Systems</h4>
            <p>Establish proper tracking procedures to capture qualifying time and expenses going forward.</p>
          </div>
          
          <div class="faq-item">
            <h4>Step 4: File Claims</h4>
            <p>Work with experienced professionals to ensure compliance and maximize your credit.</p>
          </div>
        </div>
        
        <h3>Ongoing Optimization</h3>
        <ul>
          <li><strong>Regular Reviews:</strong> Quarterly assessments of qualifying activities</li>
          <li><strong>Process Improvements:</strong> Refine documentation and tracking methods</li>
          <li><strong>State Credits:</strong> Explore additional state-level R&D incentives</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>R&D tax credits represent a significant opportunity for technology companies to reduce their tax liability while investing in innovation. The key to success is proper identification, documentation, and claiming of qualifying activities.</p>
        
        <p><strong>Take Action:</strong> Begin by conducting an R&D credit study to identify qualifying activities and quantify potential benefits. Our <Link to="/services/tax-planning-prep" className="text-primary hover:text-primary/80 underline">Tax Planning & Preparation</Link> team specializes in R&D credits for tech companies. Work with experienced tax professionals to maximize your credit while ensuring full compliance with IRS requirements. <Link to="/contact" className="text-primary hover:text-primary/80 underline">Contact us</Link> to get started.</p>
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
      image: estatePlanningImage,
      content: `
        <h2>Building a Multi-Generational Legacy</h2>
        <p>Creating an estate plan that effectively preserves wealth across multiple generations requires sophisticated strategies and careful coordination with qualified professionals. For families with substantial assets, the stakes are high - both in terms of tax efficiency and family harmony.</p>
        
        <div class="highlight-box">
          <h4>Estate Planning Essentials</h4>
          <ul class="checklist">
            <li class="checklist-item">Start planning early to maximize benefits</li>
            <li class="checklist-item">Consider generation-skipping strategies</li>
            <li class="checklist-item">Implement sophisticated trust structures</li>
            <li class="checklist-item">Balance tax efficiency with family needs</li>
          </ul>
        </div>
        
        <h2>Understanding Multi-Generational Planning Challenges</h2>
        
        <h3>Common Obstacles</h3>
        <ul>
          <li><strong>Estate Tax Exposure:</strong> Federal exemption of $13.99 million per person (2025)</li>
          <li><strong>Generation-Skipping Transfer Tax:</strong> Additional 40% tax on transfers to grandchildren</li>
          <li><strong>State Estate Taxes:</strong> Varying exemptions and rates by state</li>
          <li><strong>Family Dynamics:</strong> Balancing fairness with tax efficiency</li>
          <li><strong>Changing Laws:</strong> Adapting to evolving tax regulations</li>
        </ul>
        
        <h2>Advanced Trust Structures</h2>
        
        <div class="comparison-table">
          <div class="comparison-column">
            <h4>Generation-Skipping Trusts (GSTs)</h4>
            <ul>
              <li>GST Exemption: $13.99 million per person (2025)</li>
              <li>Avoid estate taxes for one generation</li>
              <li>Flexible distribution options</li>
              <li>Multi-generational duration possible</li>
            </ul>
          </div>
          <div class="comparison-column">
            <h4>Dynasty Trusts</h4>
            <ul>
              <li>Perpetual duration where permitted</li>
              <li>Strong creditor protection</li>
              <li>Growth outside estate tax system</li>
              <li>Adaptable to changing circumstances</li>
            </ul>
          </div>
          <div class="comparison-column">
            <h4>Charitable Lead Trusts (CLTs)</h4>
            <ul>
              <li>Charity receives term payments</li>
              <li>Reduced gift/estate tax cost</li>
              <li>Effective in low interest rates</li>
              <li>Supports charitable legacy</li>
            </ul>
          </div>
        </div>
        
        <!-- Continue with rest of estate planning content using template formatting... -->
        
        <h2>Conclusion</h2>
        <p>Multi-generational estate planning requires careful coordination of legal, tax, and family considerations. The strategies outlined above can help preserve wealth across generations while minimizing tax burdens.</p>
        
        <p><strong>Next Steps:</strong> Work with our experienced <Link to="/services/estate-planning-coordination" className="text-primary hover:text-primary/80 underline">Estate Planning Coordination</Link> team to develop a comprehensive plan. Schedule your <Link to="/book-consultation" className="text-primary hover:text-primary/80 underline">consultation today</Link>.</p>
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
      image: taxLawChangesImage,
      content: `<h2>2025 Tax Law Updates Overview</h2><p>Business owners need to stay informed about tax law changes...</p>`
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
      image: rsuPlanningImage,
      content: `<h2>RSU Tax Planning Strategies</h2><p>Restricted Stock Units require careful planning...</p>`
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
      image: businessDeductionsImage,
      content: `<h2>Hidden Business Deductions</h2><p>Small businesses often miss valuable deductions...</p>`
    }
  };

  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20 py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-foreground mb-6">Post Not Found</h1>
            <p className="text-xl text-muted-foreground mb-8">
              The blog post you're looking for doesn't exist.
            </p>
            <Button asChild>
              <Link to="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Get latest 3 posts for related articles (excluding current post)
  const allPosts = Object.values(blogPosts);
  const latestPosts = allPosts
    .filter(p => p.id !== post.id)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <>
      <Helmet>
        <title>{post.title} | HRX CPAs Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={`${post.category}, CPA advice, tax planning, business strategy, ${post.title.toLowerCase()}`} />
        <link rel="canonical" href={`https://hrxcpas.com/blog/${post.slug}`} />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://hrxcpas.com/blog/${post.slug}`} />
        <meta property="og:image" content={`https://hrxcpas.com${post.image}`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="HRX CPAs" />
        <meta property="og:locale" content="en_US" />
        
        {/* Article specific tags */}
        <meta property="article:author" content={post.author} />
        <meta property="article:published_time" content={new Date(post.date).toISOString()} />
        <meta property="article:section" content={post.category} />
        <meta property="article:tag" content={post.category} />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:image" content={`https://hrxcpas.com${post.image}`} />
        <meta name="twitter:image:alt" content={post.title} />
        
        {/* Structured Data for Article */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": post.title,
            "description": post.excerpt,
            "image": `https://hrxcpas.com${post.image}`,
            "author": {
              "@type": "Person",
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
            "datePublished": new Date(post.date).toISOString(),
            "dateModified": new Date(post.date).toISOString(),
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://hrxcpas.com/blog/${post.slug}`
            }
          })}
        </script>
        
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content={post.author} />
        <meta name="theme-color" content="#223d57" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          {/* Hero Section */}
          <section 
            className="hero-section relative"
            style={{
              backgroundImage: `url(${post.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80"></div>
            <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight font-heading">
                {post.title}
              </h1>
              <p className="text-xl text-white/90" style={{ fontFamily: 'var(--font-body)' }}>
                {post.excerpt}
              </p>
            </div>
          </section>

          {/* Article Header */}
          <div className="bg-white py-8 px-4 border-b" style={{ borderColor: '#e2e8f0' }}>
            <div className="max-w-4xl mx-auto">
              <div className="mb-6">
                <Link to="/blog" className="inline-flex items-center hover:text-primary/80 transition-colors" style={{ color: '#64a0d0', fontFamily: 'var(--font-body)' }}>
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Blog
                </Link>
              </div>
              
              <div className="flex flex-wrap items-center gap-6" style={{ color: '#64748b' }}>
                <Badge variant="default" className="mb-2">
                  {post.category}
                </Badge>
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span className="font-medium">{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <article className="py-16 px-4 bg-white">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none" style={{
                color: '#475569',
                fontFamily: 'var(--font-body)',
                lineHeight: '1.7'
              }}>
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </div>
            </div>
          </article>

          {/* Author Section */}
          <section className="py-12 px-4" style={{ backgroundColor: '#f8fafc' }}>
            <div className="max-w-4xl mx-auto">
              <div className="content-card">
                <h4 className="text-xl font-semibold mb-4" style={{ color: '#223d57', fontFamily: 'var(--font-heading)' }}>About the Author</h4>
                
                {post.author === "Hiren Parmar, CPA" ? (
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-24 md:h-24 w-20 h-20 rounded-full bg-muted flex-shrink-0 mx-auto md:mx-0">
                      <div className="w-full h-full rounded-full flex items-center justify-center text-white text-lg font-bold" style={{ background: 'linear-gradient(135deg, #223d57, #64a0d0)' }}>
                        HP
                      </div>
                    </div>
                    <div className="text-center md:text-left">
                      <p className="font-semibold mb-2" style={{ color: '#223d57', fontFamily: 'var(--font-heading)' }}>
                        Hiren Parmar, CPA
                      </p>
                      <p className="mb-4 leading-relaxed" style={{ color: '#475569', fontFamily: 'var(--font-body)' }}>
                        Hiren is the founder of HRX CPAs with over 15 years of experience in tax planning and business advisory services. 
                        He specializes in helping high-income professionals and tech companies optimize their tax strategies and build wealth efficiently.
                      </p>
                      <Button asChild variant="outline" size="sm">
                        <Link to="/about">Learn More About Hiren</Link>
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-24 md:h-24 w-20 h-20 rounded-full bg-muted flex-shrink-0 mx-auto md:mx-0">
                      <div className="w-full h-full rounded-full flex items-center justify-center text-white text-sm font-bold" style={{ background: 'linear-gradient(135deg, #223d57, #64a0d0)' }}>
                        HRX
                      </div>
                    </div>
                    <div className="text-center md:text-left">
                      <p className="font-semibold mb-2" style={{ color: '#223d57', fontFamily: 'var(--font-heading)' }}>
                        HRX CPAs Team
                      </p>
                      <p className="mb-4 leading-relaxed" style={{ color: '#475569', fontFamily: 'var(--font-body)' }}>
                        Our experienced team of CPAs and tax professionals brings decades of combined expertise in 
                        tax planning, business advisory, and financial strategy for individuals and businesses.
                      </p>
                      <Button asChild variant="outline" size="sm">
                        <Link to="/about">Meet Our Team</Link>
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Related Articles */}
          <section className="py-16 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#223d57', fontFamily: 'var(--font-heading)' }}>
                Related Articles
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {latestPosts.map((relatedPost) => (
                  <div key={relatedPost.id} className="content-card hover:shadow-lg transition-shadow">
                    <div className="aspect-video mb-4 rounded-lg overflow-hidden">
                      <img 
                        src={relatedPost.image} 
                        alt={relatedPost.title}
                        className="w-full h-full object-cover"
                        width="400"
                        height="250"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div>
                      <Badge variant="secondary" className="mb-3">
                        {relatedPost.category}
                      </Badge>
                      <h3 className="text-lg font-semibold mb-3 line-clamp-2" style={{ color: '#223d57', fontFamily: 'var(--font-heading)' }}>
                        {relatedPost.title}
                      </h3>
                      <p className="mb-4 line-clamp-2 text-sm leading-relaxed" style={{ color: '#475569', fontFamily: 'var(--font-body)' }}>
                        {relatedPost.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm" style={{ color: '#64748b' }}>
                        <span>{relatedPost.readTime}</span>
                        <Button asChild variant="outline" size="sm">
                          <Link to={`/blog/${relatedPost.slug}`}>
                            Read More
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-16 px-4" style={{ backgroundColor: '#223d57', color: 'white' }}>
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                Ready to Optimize Your Tax Strategy?
              </h3>
              <p className="text-lg mb-8 opacity-90 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                Get personalized advice tailored to your unique situation. Our experienced CPAs 
                are here to help you implement the strategies discussed in this article.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild 
                  size="lg" 
                  style={{ 
                    backgroundColor: '#64a0d0', 
                    color: 'white',
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  <Link to="/book-consultation">
                    Schedule Free Consultation
                  </Link>
                </Button>
                <Button 
                  asChild 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-primary"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
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
    </>
  );
};

export default BlogPost;
