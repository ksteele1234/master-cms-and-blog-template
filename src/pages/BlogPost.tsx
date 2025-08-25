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
        
        <h2>Key Tax Planning Strategies for 2025</h2>
        
        <h3>1. Maximize Retirement Contributions</h3>
        <p>For 2025, contribution limits have increased significantly:</p>
        <ul>
          <li><strong>401(k) Plans:</strong> $23,000 standard limit ($30,500 if age 50+)</li>
          <li><strong>Traditional/Roth IRA:</strong> $7,000 standard limit ($8,000 if age 50+)</li>
          <li><strong>Backdoor Roth Conversions:</strong> Still viable for high earners</li>
          <li><strong>Mega Backdoor Roth:</strong> Up to $70,000 in additional after-tax contributions</li>
        </ul>
        
        <h3>2. Strategic Stock Option and RSU Planning</h3>
        <p>Tech professionals and executives with equity compensation should consider our specialized <a href="/services/rsu-equity-planning" style="color: hsl(var(--primary)); text-decoration: underline;">RSU & Equity Planning services</a>:</p>
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
        
        <h3>Q1 Actions (January - March)</h3>
        <ul>
          <li>Review and update retirement plan contributions</li>
          <li>Establish tax-advantaged accounts (HSA, 529 plans)</li>
          <li>Plan charitable giving strategy</li>
        </ul>
        
        <h3>Mid-Year Review (July - September)</h3>
        <ul>
          <li>Assess income projections and tax brackets</li>
          <li>Execute stock option and RSU strategies</li>
          <li>Consider business structure changes</li>
        </ul>
        
        <h3>Year-End Planning (October - December)</h3>
        <ul>
          <li>Finalize tax loss harvesting</li>
          <li>Complete charitable contributions</li>
          <li>Execute any remaining income deferral strategies</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>Effective tax planning for high-income professionals requires a proactive, year-round approach that integrates with your overall financial strategy. The strategies outlined above can result in significant tax savings, but implementation should be customized to your specific situation.</p>
        
        <p><strong>Next Steps:</strong> Work with our experienced <a href="/services/tax-planning-prep" style="color: hsl(var(--primary)); text-decoration: underline;">Tax Planning & Preparation</a> team to develop a comprehensive plan that maximizes these opportunities while ensuring compliance with all applicable regulations. Schedule your <a href="/book-consultation" style="color: hsl(var(--primary)); text-decoration: underline;">consultation today</a>.</p>
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
        
        <h3>Personnel Costs (Largest Component)</h3>
        <ul>
          <li><strong>Developer Salaries:</strong> W-2 wages for qualifying development activities</li>
          <li><strong>Benefits and Payroll Taxes:</strong> Healthcare, retirement contributions, etc.</li>
          <li><strong>Contractor Payments:</strong> 65% of payments to external developers</li>
          <li><strong>QA and Testing Teams:</strong> Quality assurance personnel involved in R&D</li>
        </ul>
        
        <h3>Technology and Infrastructure</h3>
        <ul>
          <li><strong>Cloud Computing Costs:</strong> AWS, Azure, GCP costs for development environments</li>
          <li><strong>Software Licenses:</strong> Development tools, IDEs, testing platforms</li>
          <li><strong>Third-Party APIs:</strong> External services used in R&D activities</li>
          <li><strong>Hardware:</strong> Servers, development machines, testing equipment</li>
        </ul>
        
        <h2>Documentation Best Practices</h2>
        
        <h3>Project Documentation</h3>
        <ul>
          <li><strong>Technical Specifications:</strong> Detailed project requirements and scope</li>
          <li><strong>Architecture Diagrams:</strong> System design and data flow documentation</li>
          <li><strong>Meeting Notes:</strong> Development team discussions and decision records</li>
          <li><strong>Change Logs:</strong> Version control history and feature evolution</li>
        </ul>
        
        <h3>Time Tracking Requirements</h3>
        <ul>
          <li><strong>Activity-Based Tracking:</strong> Separate R&D time from maintenance</li>
          <li><strong>Project Codes:</strong> Specific identifiers for qualifying projects</li>
          <li><strong>Employee Timesheets:</strong> Detailed breakdown of daily activities</li>
          <li><strong>Contractor Invoices:</strong> Clear descriptions of R&D work performed</li>
        </ul>
        
        <h2>Real-World Case Studies</h2>
        
        <h3>SaaS Company Success Story</h3>
        <p>A mid-size SaaS company with $5M annual revenue successfully claimed $180,000 in R&D credits by properly documenting their development activities across four major projects:</p>
        <ul>
          <li>AI-powered recommendation engine: $65,000 credit</li>
          <li>Real-time collaboration features: $45,000 credit</li>
          <li>Advanced analytics dashboard: $40,000 credit</li>
          <li>Mobile app development: $30,000 credit</li>
        </ul>
        
        <h3>E-commerce Platform Example</h3>
        <p>An e-commerce technology company claimed $320,000 in credits for developing new payment processing, inventory management, and personalization systems.</p>
        
        <h2>Getting Started with R&D Credits</h2>
        
        <h3>Initial Assessment</h3>
        <ol>
          <li><strong>Conduct R&D Credit Study:</strong> Identify all qualifying activities and expenses</li>
          <li><strong>Quantify Potential Benefits:</strong> Calculate estimated credit amounts</li>
          <li><strong>Implement Documentation Systems:</strong> Establish proper tracking procedures</li>
          <li><strong>File Claims:</strong> Work with experienced professionals for compliance</li>
        </ol>
        
        <h3>Ongoing Optimization</h3>
        <ul>
          <li><strong>Regular Reviews:</strong> Quarterly assessments of qualifying activities</li>
          <li><strong>Process Improvements:</strong> Refine documentation and tracking methods</li>
          <li><strong>State Credits:</strong> Explore additional state-level R&D incentives</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>R&D tax credits represent a significant opportunity for technology companies to reduce their tax liability while investing in innovation. The key to success is proper identification, documentation, and claiming of qualifying activities.</p>
        
        <p><strong>Take Action:</strong> Begin by conducting an R&D credit study to identify qualifying activities and quantify potential benefits. Our <a href="/services/tax-planning-prep" style="color: hsl(var(--primary)); text-decoration: underline;">Tax Planning & Preparation</a> team specializes in R&D credits for tech companies. Work with experienced tax professionals to maximize your credit while ensuring full compliance with IRS requirements. <a href="/contact" style="color: hsl(var(--primary)); text-decoration: underline;">Contact us</a> to get started.</p>
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
        
        <h3>Generation-Skipping Trusts (GSTs)</h3>
        <p>These trusts allow wealth to bypass one generation for tax purposes:</p>
        <ul>
          <li><strong>GST Exemption:</strong> $13.99 million per person (2025)</li>
          <li><strong>Tax Benefits:</strong> Avoid estate taxes for one generation</li>
          <li><strong>Distribution Flexibility:</strong> Provide for children while preserving principal for grandchildren</li>
          <li><strong>Duration:</strong> Can last for multiple generations in many states</li>
        </ul>
        
        <h3>Dynasty Trusts</h3>
        <p>Designed for perpetual wealth preservation where state law permits:</p>
        <ul>
          <li><strong>Perpetual Duration:</strong> No rule against perpetuities in certain states</li>
          <li><strong>Creditor Protection:</strong> Shield assets from beneficiary creditors and divorces</li>
          <li><strong>Tax Efficiency:</strong> Growth occurs outside the estate tax system</li>
          <li><strong>Flexibility:</strong> Adapt to changing family circumstances</li>
        </ul>
        
        <h3>Charitable Lead Trusts (CLTs)</h3>
        <ul>
          <li><strong>Income Stream:</strong> Charity receives payments for a term</li>
          <li><strong>Remainder:</strong> Family receives remaining assets at reduced gift/estate tax cost</li>
          <li><strong>Leverage:</strong> Particularly effective in low interest rate environments</li>
          <li><strong>Legacy Benefits:</strong> Supports charitable causes while transferring wealth</li>
        </ul>
        
        <h2>Strategic Gifting Programs</h2>
        
        <h3>Annual Exclusion Gifts</h3>
        <p>Maximize tax-free transfers through systematic gifting:</p>
        <ul>
          <li><strong>2025 Annual Exclusion:</strong> $19,000 per recipient ($38,000 for married couples)</li>
          <li><strong>Medical and Educational:</strong> Unlimited direct payments to providers</li>
          <li><strong>Crummey Powers:</strong> Make trust gifts eligible for annual exclusion</li>
          <li><strong>Family Partnerships:</strong> Gift discounted interests for leverage</li>
        </ul>
        
        <h3>Lifetime Exemption Utilization</h3>
        <ul>
          <li><strong>Current Exemption:</strong> $13.99 million per person (2025)</li>
          <li><strong>Sunset Provision:</strong> Scheduled to decrease in 2026</li>
          <li><strong>Use-It-or-Lose-It:</strong> Consider accelerating gifts before reduction</li>
          <li><strong>Valuation Discounts:</strong> Maximize exemption through entity structures</li>
        </ul>
        
        <h2>Business Succession Integration</h2>
        
        <h3>Family Business Considerations</h3>
        <ul>
          <li><strong>Grantor Retained Annuity Trusts (GRATs):</strong> Transfer appreciation with minimal gift tax</li>
          <li><strong>Sales to Intentionally Defective Grantor Trusts (IDGTs):</strong> Freeze valuation while retaining income</li>
          <li><strong>Family Limited Partnerships:</strong> Centralize control while gifting economic interests</li>
          <li><strong>Buy-Sell Agreements:</strong> Ensure orderly transitions and fair valuations</li>
        </ul>
        
        <h2>Tax Optimization Techniques</h2>
        
        <h3>Grantor Trust Strategies</h3>
        <ul>
          <li><strong>Income Tax Payments:</strong> Grantor pays taxes, preserving trust assets</li>
          <li><strong>Substitution Powers:</strong> Maintain flexibility for asset management</li>
          <li><strong>Administrative Powers:</strong> Control trust operations without estate inclusion</li>
        </ul>
        
        <h3>Valuation Discount Opportunities</h3>
        <ul>
          <li><strong>Minority Interests:</strong> Lack of control discounts</li>
          <li><strong>Marketability Restrictions:</strong> Reduced liquidity discounts</li>
          <li><strong>Timing Strategies:</strong> Gift during market downturns</li>
        </ul>
        
        <h2>Implementation Roadmap</h2>
        
        <h3>Phase 1: Assessment and Planning</h3>
        <ol>
          <li>Comprehensive family and financial analysis</li>
          <li>Goal setting and priority establishment</li>
          <li>Professional team assembly</li>
          <li>Initial strategy development</li>
        </ol>
        
        <h3>Phase 2: Structure Implementation</h3>
        <ol>
          <li>Trust document preparation and execution</li>
          <li>Asset funding and transfers</li>
          <li>Tax elections and filings</li>
          <li>Ongoing administration setup</li>
        </ol>
        
        <h3>Phase 3: Monitoring and Optimization</h3>
        <ol>
          <li>Regular plan reviews and updates</li>
          <li>Tax law change adaptations</li>
          <li>Family circumstance adjustments</li>
          <li>Performance measurement and reporting</li>
        </ol>
        
        <h2>Conclusion</h2>
        <p>Multi-generational estate planning requires sophisticated strategies that balance tax efficiency with family objectives. The window for utilizing current favorable exemption amounts may be limited, making prompt action advisable for many families.</p>
        
        <p><strong>Next Steps:</strong> Engage our experienced <a href="/services/estate-planning-coordination" style="color: hsl(var(--primary)); text-decoration: underline;">Estate Planning Coordination</a> team to conduct a comprehensive analysis of your family situation and develop a customized multi-generational wealth preservation strategy. <a href="/book-consultation" style="color: hsl(var(--primary)); text-decoration: underline;">Schedule your consultation</a> today.</p>
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
      content: `
        <h2>2025 Tax Law Updates Overview</h2>
        <p>Several significant tax law changes take effect in 2025 that will impact business planning, compliance requirements, and strategic opportunities. Business owners who stay ahead of these changes can optimize their tax positions and avoid costly oversights.</p>
        
        <h2>Major Tax Law Modifications</h2>
        
        <h3>Research & Development Expenses</h3>
        <p>Critical changes affecting R&D-intensive businesses:</p>
        <ul>
          <li><strong>Amortization Requirement:</strong> R&D expenses must be amortized over 5 years (domestic) or 15 years (foreign)</li>
          <li><strong>Impact on Cash Flow:</strong> Significant timing differences for tax deductions</li>
          <li><strong>Planning Opportunities:</strong> Accelerate R&D activities where possible</li>
          <li><strong>Documentation Importance:</strong> Enhanced record-keeping requirements</li>
        </ul>
        
        <h3>Bonus Depreciation Phase-Out</h3>
        <p>Continued reduction in bonus depreciation percentages:</p>
        <ul>
          <li><strong>2025 Rate:</strong> 80% bonus depreciation (down from 100%)</li>
          <li><strong>Future Schedule:</strong> 60% (2026), 40% (2027), 20% (2028), 0% (2029+)</li>
          <li><strong>Strategic Timing:</strong> Consider accelerating equipment purchases</li>
          <li><strong>Alternative Strategies:</strong> Section 179 expensing and cost segregation studies</li>
        </ul>
        
        <h2>Enhanced Tax Credits and Incentives</h2>
        
        <h3>Expanded R&D Credit Opportunities</h3>
        <ul>
          <li><strong>Broader Qualifying Activities:</strong> Expanded definition of eligible research</li>
          <li><strong>Simplified Documentation:</strong> Streamlined substantiation requirements</li>
          <li><strong>Small Business Benefits:</strong> Enhanced credit rates for qualified small businesses</li>
          <li><strong>Payroll Tax Offset:</strong> Use credits against payroll taxes for eligible businesses</li>
        </ul>
        
        <h3>Green Energy and Sustainability Incentives</h3>
        <ul>
          <li><strong>Solar Investment Tax Credit:</strong> Extended timeline with enhanced rates</li>
          <li><strong>Wind Production Tax Credit:</strong> Continued availability with inflation adjustments</li>
          <li><strong>Electric Vehicle Fleet Incentives:</strong> Enhanced credits for commercial EV purchases</li>
          <li><strong>Energy-Efficient Buildings:</strong> Increased deductions for qualifying improvements</li>
        </ul>
        
        <h3>Workforce Development Credits</h3>
        <ul>
          <li><strong>Work Opportunity Tax Credit:</strong> Extended for certain targeted groups</li>
          <li><strong>Employee Training Programs:</strong> Enhanced deductions for qualifying education</li>
          <li><strong>Apprenticeship Programs:</strong> New credits for structured training initiatives</li>
        </ul>
        
        <h2>Pass-Through Entity Provisions</h2>
        
        <h3>Section 199A Qualified Business Income Deduction</h3>
        <ul>
          <li><strong>Continued Availability:</strong> 20% deduction remains through 2025</li>
          <li><strong>Updated Income Thresholds:</strong> Inflation-adjusted limitations</li>
          <li><strong>New Qualifying Activities:</strong> Expanded definition of eligible businesses</li>
          <li><strong>Planning Strategies:</strong> Income timing and business structure optimization</li>
        </ul>
        
        <h3>Interest Expense Limitations</h3>
        <ul>
          <li><strong>Section 163(j) Changes:</strong> Modified calculation methods</li>
          <li><strong>EBITDA to EBIT:</strong> Transition impacts for leveraged businesses</li>
          <li><strong>Carryforward Opportunities:</strong> Enhanced utilization of disallowed interest</li>
        </ul>
        
        <h2>International Tax Provisions</h2>
        
        <h3>GILTI and FDII Modifications</h3>
        <ul>
          <li><strong>Rate Adjustments:</strong> Modified tax rates for global intangible income</li>
          <li><strong>Exemption Calculations:</strong> Updated foreign-derived intangible income rules</li>
          <li><strong>Planning Implications:</strong> Impact on international business structures</li>
        </ul>
        
        <h3>Transfer Pricing Updates</h3>
        <ul>
          <li><strong>Enhanced Documentation:</strong> Expanded country-by-country reporting</li>
          <li><strong>New Guidelines:</strong> Updated arm length pricing methodologies</li>
          <li><strong>Penalty Relief:</strong> Safe harbors for certain transactions</li>
        </ul>
        
        <h2>Compliance and Reporting Changes</h2>
        
        <h3>Digital Asset Reporting</h3>
        <ul>
          <li><strong>Cryptocurrency Transactions:</strong> Enhanced reporting requirements</li>
          <li><strong>Form 1099-DA:</strong> New reporting forms for digital asset brokers</li>
          <li><strong>Basis Tracking:</strong> Improved cost basis determination methods</li>
        </ul>
        
        <h3>Beneficial Ownership Reporting</h3>
        <ul>
          <li><strong>Corporate Transparency Act:</strong> New reporting requirements for small businesses</li>
          <li><strong>FinCEN Filings:</strong> Beneficial ownership information reports</li>
          <li><strong>Compliance Deadlines:</strong> Phased implementation schedule</li>
        </ul>
        
        <h2>Industry-Specific Impacts</h2>
        
        <h3>Technology Sector</h3>
        <ul>
          <li>R&D expense capitalization effects</li>
          <li>Enhanced software development credits</li>
          <li>International tax planning for IP</li>
        </ul>
        
        <h3>Manufacturing</h3>
        <ul>
          <li>Domestic production incentives</li>
          <li>Equipment purchase timing strategies</li>
          <li>Supply chain tax considerations</li>
        </ul>
        
        <h3>Professional Services</h3>
        <ul>
          <li>Section 199A optimization strategies</li>
          <li>Business structure evaluations</li>
          <li>Retirement plan enhancements</li>
        </ul>
        
        <h2>Action Items for Business Owners</h2>
        
        <h3>Immediate Steps (Q1 2025)</h3>
        <ol>
          <li><strong>Tax Strategy Review:</strong> Assess impact of new laws on your business</li>
          <li><strong>R&D Planning:</strong> Evaluate timing of research and development activities</li>
          <li><strong>Equipment Purchases:</strong> Consider accelerating acquisitions for bonus depreciation</li>
          <li><strong>Credit Studies:</strong> Conduct comprehensive analysis of available credits</li>
        </ol>
        
        <h3>Mid-Year Planning (Q2-Q3 2025)</h3>
        <ol>
          <li><strong>Implementation:</strong> Execute identified tax strategies</li>
          <li><strong>Monitoring:</strong> Track legislative developments and guidance</li>
          <li><strong>Adjustments:</strong> Refine strategies based on business performance</li>
        </ol>
        
        <h3>Year-End Preparation (Q4 2025)</h3>
        <ol>
          <li><strong>Final Planning:</strong> Execute year-end tax strategies</li>
          <li><strong>Compliance:</strong> Ensure all new reporting requirements are met</li>
          <li><strong>2026 Planning:</strong> Prepare for next year changes</li>
        </ol>
        
        <h2>Conclusion</h2>
        <p>The 2025 tax law changes present both challenges and opportunities for business owners. Those who proactively adapt their strategies can achieve significant tax savings while maintaining compliance with new requirements.</p>
        
        <p><strong>Take Action:</strong> Review your current tax strategy with our qualified <a href="/services/tax-planning-prep" style="color: hsl(var(--primary)); text-decoration: underline;">Tax Planning & Preparation</a> professionals to ensure you are positioned to take advantage of new opportunities while addressing compliance challenges. We also offer specialized <a href="/business-services" style="color: hsl(var(--primary)); text-decoration: underline;">business services</a> to help with implementation. Early planning is essential for maximizing benefits under the new rules.</p>
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
      image: rsuPlanningImage,
      content: `
        <h2>Understanding RSU Taxation Fundamentals</h2>
        <p>Restricted Stock Units (RSUs) are a common form of equity compensation, particularly in the technology sector. Understanding their tax implications is crucial for maximizing after-tax value and coordinating with your overall financial strategy.</p>
        
        <h2>RSU Tax Events and Timing</h2>
        
        <h3>When Taxes Are Owed</h3>
        <p>RSUs create taxable events at specific moments:</p>
        <ul>
          <li><strong>Grant Date:</strong> No tax impact (unlike stock options)</li>
          <li><strong>Vesting Date:</strong> Ordinary income tax on full fair market value</li>
          <li><strong>Sale Date:</strong> Capital gains/losses on appreciation or depreciation since vesting</li>
        </ul>
        
        <h3>Tax Rate Implications</h3>
        <ul>
          <li><strong>Ordinary Income:</strong> Subject to federal rates up to 37% plus state taxes</li>
          <li><strong>Supplemental Withholding:</strong> Typically 22% federal (37% for amounts over $1M annually)</li>
          <li><strong>FICA Taxes:</strong> Social Security and Medicare taxes apply at vesting</li>
          <li><strong>State Considerations:</strong> Varies significantly by state (0% to 13.3%+)</li>
        </ul>
        
        <h2>Strategic Timing Approaches</h2>
        
        <h3>Multi-Year Tax Bracket Management</h3>
        <p>Optimize vesting across tax years for high earners:</p>
        <ul>
          <li><strong>Income Smoothing:</strong> Spread large vesting events across multiple years</li>
          <li><strong>Bracket Awareness:</strong> Consider marginal tax rate impacts</li>
          <li><strong>Coordination with Bonuses:</strong> Time other compensation around vesting</li>
          <li><strong>Retirement Timing:</strong> Manage vesting during career transitions</li>
        </ul>
        
        <h3>Geographic Tax Planning</h3>
        <ul>
          <li><strong>State Residency Changes:</strong> Time moves to minimize state tax impact</li>
          <li><strong>Work Location Factors:</strong> Understand multi-state allocation rules</li>
          <li><strong>Remote Work Implications:</strong> Consider domicile vs. work location</li>
          <li><strong>International Assignments:</strong> Navigate foreign tax treaty benefits</li>
        </ul>
        
        <h2>Advanced Planning Strategies</h2>
        
        <h3>Tax Loss Harvesting Coordination</h3>
        <p>Offset RSU income with strategic losses:</p>
        <ul>
          <li><strong>Portfolio Review:</strong> Identify unrealized losses before vesting</li>
          <li><strong>Wash Sale Rules:</strong> Avoid disqualification of losses</li>
          <li><strong>Timing Coordination:</strong> Execute sales within same tax year</li>
          <li><strong>Carryforward Planning:</strong> Optimize use of capital loss carryforwards</li>
        </ul>
        
        <h3>Charitable Giving Optimization</h3>
        <ul>
          <li><strong>Appreciated Share Donations:</strong> Give vested shares that have appreciated</li>
          <li><strong>Donor-Advised Funds:</strong> Immediate deduction with flexible timing</li>
          <li><strong>Charitable Remainder Trusts:</strong> Income stream with tax benefits</li>
          <li><strong>Qualified Charitable Distributions:</strong> For those over age 70.5</li>
        </ul>
        
        <h3>Retirement Account Maximization</h3>
        <ul>
          <li><strong>401(k) Contributions:</strong> Increase deferrals in vesting years</li>
          <li><strong>Backdoor Roth Conversions:</strong> Use excess cash for tax-free growth</li>
          <li><strong>Mega Backdoor Roth:</strong> After-tax 401(k) contributions and conversions</li>
          <li><strong>HSA Maximization:</strong> Triple tax advantage for medical expenses</li>
        </ul>
        <p>Learn more about our comprehensive <a href="/services/individual-tax-preparation" style="color: hsl(var(--primary)); text-decoration: underline;">Individual Tax Preparation</a> services that include retirement planning strategies.</p>
        
        <h2>Company-Specific Considerations</h2>
        
        <h3>Vesting Schedule Optimization</h3>
        <ul>
          <li><strong>Cliff Vesting:</strong> Large one-time tax events require careful planning</li>
          <li><strong>Graded Vesting:</strong> More manageable but requires ongoing attention</li>
          <li><strong>Performance Vesting:</strong> Uncertain timing complicates planning</li>
          <li><strong>Accelerated Vesting:</strong> M&A or IPO events create planning opportunities</li>
        </ul>
        
        <h3>Stock Price Volatility Management</h3>
        <ul>
          <li><strong>Diversification Timing:</strong> Systematic selling to reduce concentration risk</li>
          <li><strong>Collar Strategies:</strong> Hedge positions using options</li>
          <li><strong>10b5-1 Plans:</strong> Predetermined selling schedules</li>
          <li><strong>Tax-Managed Selling:</strong> Coordinate with tax planning objectives</li>
        </ul>
        
        <h2>Alternative Minimum Tax (AMT) Considerations</h2>
        
        <h3>RSU vs. ISO Comparison</h3>
        <ul>
          <li><strong>RSU Advantage:</strong> No AMT trigger at vesting</li>
          <li><strong>Ordinary Income Treatment:</strong> Simpler tax calculations</li>
          <li><strong>Withholding Accuracy:</strong> Generally adequate for RSUs</li>
          <li><strong>Planning Coordination:</strong> Consider total compensation mix</li>
        </ul>
        
        <h2>Case Study Examples</h2>
        
        <h3>Tech Executive Scenario</h3>
        <p><strong>Situation:</strong> Senior engineer with $200,000 salary plus $150,000 annual RSU vesting</p>
        <p><strong>Strategy:</strong></p>
        <ul>
          <li>Maximized 401(k) and mega backdoor Roth contributions</li>
          <li>Implemented tax loss harvesting in taxable accounts</li>
          <li>Coordinated charitable giving with vesting schedule</li>
          <li>Relocated from California to Nevada, saving $20,000 annually in state taxes</li>
        </ul>
        <p><strong>Result:</strong> Reduced effective tax rate from 45% to 32% on RSU income</p>
        
        <h3>IPO Planning Example</h3>
        <p><strong>Situation:</strong> Employee with significant unvested RSUs approaching company IPO</p>
        <p><strong>Strategy:</strong></p>
        <ul>
          <li>Accelerated charitable contributions before vesting</li>
          <li>Established 10b5-1 selling plan for diversification</li>
          <li>Coordinated with spouse financial planning</li>
          <li>Implemented estate planning strategies for wealth transfer</li>
        </ul>
        
        <h2>Implementation Checklist</h2>
        
        <h3>Before Each Vesting Event</h3>
        <ol>
          <li><strong>Review Tax Projections:</strong> Estimate total tax liability</li>
          <li><strong>Assess Cash Needs:</strong> Plan for tax payments</li>
          <li><strong>Consider Timing:</strong> Evaluate deferral opportunities if available</li>
          <li><strong>Review Investment Strategy:</strong> Plan for proceeds allocation</li>
        </ol>
        
        <h3>After Vesting</h3>
        <ol>
          <li><strong>Verify Withholding:</strong> Ensure adequate tax payments</li>
          <li><strong>Execute Diversification:</strong> Reduce concentration risk</li>
          <li><strong>Update Financial Plan:</strong> Incorporate new assets</li>
          <li><strong>Document for Taxes:</strong> Track basis and holding periods</li>
        </ol>
        
        <h2>Common Mistakes to Avoid</h2>
        
        <h3>Tax Planning Errors</h3>
        <ul>
          <li><strong>Inadequate Withholding:</strong> Underestimating total tax liability</li>
          <li><strong>Poor Timing:</strong> Concentrating vesting in high-income years</li>
          <li><strong>State Tax Oversights:</strong> Missing residency planning opportunities</li>
          <li><strong>AMT Confusion:</strong> Unnecessarily complex planning for RSUs</li>
        </ul>
        
        <h3>Investment Mistakes</h3>
        <ul>
          <li><strong>Concentration Risk:</strong> Failing to diversify after vesting</li>
          <li><strong>Emotional Decisions:</strong> Holding based on company loyalty rather than portfolio theory</li>
          <li><strong>Timing the Market:</strong> Trying to optimize sale timing based on stock price predictions</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>Effective RSU tax planning requires a comprehensive approach that considers timing, geography, and coordination with other financial strategies. The key is proactive planning that begins well before vesting events occur.</p>
        
        <p><strong>Next Steps:</strong> Work with our specialized <a href="/services/rsu-equity-planning" style="color: hsl(var(--primary)); text-decoration: underline;">RSU & Equity Planning</a> team to develop a customized RSU management strategy that aligns with your overall financial goals and tax optimization objectives. <a href="/book-consultation" style="color: hsl(var(--primary)); text-decoration: underline;">Schedule your consultation</a> today.</p>
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
      image: businessDeductionsImage,
      content: `
        <h2>Maximizing Small Business Tax Deductions</h2>
        <p>Many small business owners miss valuable deductions that could significantly reduce their tax liability. With proper planning and documentation, these overlooked opportunities can save thousands of dollars annually while ensuring full compliance with IRS requirements.</p>
        
        <h2>Home Office Deductions</h2>
        
        <h3>Simplified vs. Actual Expense Method</h3>
        <p>Choose the method that maximizes your deduction:</p>
        <ul>
          <li><strong>Simplified Method:</strong> $5 per square foot up to 300 sq ft (maximum $1,500)</li>
          <li><strong>Actual Expense Method:</strong> Percentage of total home expenses based on office space</li>
          <li><strong>Exclusive Use Test:</strong> Space must be used regularly and exclusively for business</li>
          <li><strong>Principal Place of Business:</strong> Primary work location or used regularly for client meetings</li>
        </ul>
        
        <h3>Deductible Home Office Expenses</h3>
        <ul>
          <li><strong>Direct Expenses:</strong> Office furniture, equipment, supplies (100% deductible)</li>
          <li><strong>Indirect Expenses:</strong> Mortgage interest, property taxes, utilities, insurance (percentage based)</li>
          <li><strong>Depreciation:</strong> Home depreciation for business use (actual expense method only)</li>
          <li><strong>Maintenance:</strong> Repairs and upkeep allocated to business use</li>
        </ul>
        
        <h2>Vehicle Expense Optimization</h2>
        
        <h3>Standard Mileage vs. Actual Cost Methods</h3>
        <p>Compare methods annually to maximize deductions:</p>
        <ul>
          <li><strong>2025 Standard Mileage Rate:</strong> 70 cents per business mile</li>
          <li><strong>Actual Cost Method:</strong> Gas, oil, repairs, insurance, depreciation, lease payments</li>
          <li><strong>Business Use Percentage:</strong> Must maintain detailed mileage logs</li>
          <li><strong>Switching Methods:</strong> Generally must stick with chosen method for vehicle lifetime</li>
        </ul>
        
        <h3>Documentation Requirements</h3>
        <ul>
          <li><strong>Mileage Log:</strong> Date, destination, business purpose, odometer readings</li>
          <li><strong>Receipt Retention:</strong> All vehicle-related expenses for actual cost method</li>
          <li><strong>Business vs. Personal Use:</strong> Clear separation and documentation</li>
          <li><strong>Technology Solutions:</strong> Apps like MileIQ or TripLog for automated tracking</li>
        </ul>
        
        <h2>Commonly Missed Business Deductions</h2>
        
        <h3>Business Meals and Entertainment</h3>
        <p>Navigate the complex rules for meal deductions:</p>
        <ul>
          <li><strong>Employee Meals:</strong> 100% deductible through 2025 (for employer-provided meals)</li>
          <li><strong>Client Meals:</strong> 50% deductible for business discussion meals</li>
          <li><strong>Business Travel:</strong> 100% deductible for meals while traveling overnight</li>
          <li><strong>Office Snacks:</strong> 50% deductible for employee convenience</li>
          <li><strong>Documentation Required:</strong> Business purpose, attendees, amount, location</li>
        </ul>
        
        <h3>Professional Development and Education</h3>
        <ul>
          <li><strong>Industry Conferences:</strong> Registration, travel, lodging, and meal costs</li>
          <li><strong>Professional Memberships:</strong> Trade associations and professional organizations</li>
          <li><strong>Business-Related Education:</strong> Courses that improve business skills</li>
          <li><strong>Certifications and Licenses:</strong> Professional certification maintenance</li>
          <li><strong>Business Books and Publications:</strong> Industry magazines, business books, online subscriptions</li>
        </ul>
        
        <h3>Technology and Equipment Deductions</h3>
        <ul>
          <li><strong>Section 179 Expensing:</strong> Up to $1,220,000 for qualifying equipment (2025)</li>
          <li><strong>Bonus Depreciation:</strong> 80% immediate deduction for new equipment (2025)</li>
          <li><strong>Computer Equipment:</strong> Laptops, desktops, tablets, smartphones</li>
          <li><strong>Software Subscriptions:</strong> Business software and cloud services</li>
          <li><strong>Office Equipment:</strong> Printers, scanners, office furniture</li>
        </ul>
        
        <h2>Service Industry Specific Deductions</h2>
        
        <h3>Professional Services</h3>
        <ul>
          <li><strong>Professional Liability Insurance:</strong> Malpractice and errors & omissions coverage</li>
          <li><strong>Client Entertainment:</strong> Business development activities</li>
          <li><strong>Marketing and Networking:</strong> Business cards, website development, networking events</li>
          <li><strong>Office Rent:</strong> Commercial space rental and related expenses</li>
        </ul>
        
        <h3>Consulting and Freelance Work</h3>
        <ul>
          <li><strong>Contract Labor:</strong> Subcontractor payments (remember 1099 reporting)</li>
          <li><strong>Project-Specific Costs:</strong> Materials and supplies for client projects</li>
          <li><strong>Communication Expenses:</strong> Business phone, internet, video conferencing tools</li>
          <li><strong>Banking and Payment Fees:</strong> Business account fees, payment processing costs</li>
        </ul>
        
        <h2>Retirement and Employee Benefit Deductions</h2>
        
        <h3>Business Owner Retirement Plans</h3>
        <ul>
          <li><strong>Solo 401(k):</strong> Up to $70,000 in contributions for 2025 (higher if 50+)</li>
          <li><strong>SEP-IRA:</strong> Up to 25% of compensation or $70,000, whichever is less</li>
          <li><strong>SIMPLE IRA:</strong> Lower contribution limits but easier administration</li>
          <li><strong>Defined Benefit Plans:</strong> Potentially much higher contributions for stable, high-income businesses</li>
        </ul>
        <p>Our <a href="/services/full-service-accounting-payroll" style="color: hsl(var(--primary)); text-decoration: underline;">Full-Service Accounting & Payroll</a> team can help set up and manage these retirement plans for your business.</p>
        
        <h3>Health and Welfare Benefits</h3>
        <ul>
          <li><strong>Health Savings Accounts:</strong> Triple tax advantage for self-employed</li>
          <li><strong>Health Insurance Premiums:</strong> Self-employed health insurance deduction</li>
          <li><strong>Long-Term Care Insurance:</strong> Deductible premiums with age-based limits</li>
        </ul>
        
        <h2>Advanced Deduction Strategies</h2>
        
        <h3>Family Employment</h3>
        <ul>
          <li><strong>Employing Children:</strong> Wages to children under 18 avoid payroll taxes</li>
          <li><strong>Spouse Employment:</strong> Legitimate work arrangements can shift income</li>
          <li><strong>Documentation Requirements:</strong> Proper job descriptions and payment records</li>
          <li><strong>Reasonable Compensation:</strong> Wages must be appropriate for work performed</li>
        </ul>
        
        <h3>Asset Protection and Business Structure</h3>
        <ul>
          <li><strong>Legal and Professional Fees:</strong> Business formation and ongoing compliance costs</li>
          <li><strong>Insurance Premiums:</strong> General liability, professional liability, cyber insurance</li>
          <li><strong>Registered Agent Fees:</strong> State filing and compliance costs</li>
        </ul>
        
        <h2>Record-Keeping Best Practices</h2>
        
        <h3>Documentation Systems</h3>
        <ul>
          <li><strong>Digital Receipt Management:</strong> Apps like Expensify, Receipt Bank, or Shoeboxed</li>
          <li><strong>Bank Account Separation:</strong> Dedicated business checking and credit card accounts</li>
          <li><strong>Expense Categories:</strong> Consistent categorization for easy tax preparation</li>
          <li><strong>Monthly Reconciliation:</strong> Regular review of expenses and categorization</li>
        </ul>
        
        <h3>Audit Protection</h3>
        <ul>
          <li><strong>Receipt Retention:</strong> Keep all receipts for 7 years minimum</li>
          <li><strong>Business Purpose Documentation:</strong> Clear business rationale for each expense</li>
          <li><strong>Timeline Records:</strong> When expenses were incurred and for what purpose</li>
          <li><strong>Professional Consultation:</strong> Work with qualified tax professionals</li>
        </ul>
        
        <h2>Seasonal and Industry-Specific Considerations</h2>
        
        <h3>Year-End Planning</h3>
        <ul>
          <li><strong>Equipment Purchases:</strong> Timing for maximum tax benefit</li>
          <li><strong>Expense Acceleration:</strong> Prepaying certain business expenses</li>
          <li><strong>Income Deferral:</strong> Timing of invoicing and collections</li>
          <li><strong>Inventory Management:</strong> COGS optimization strategies</li>
        </ul>
        
        <h3>Industry-Specific Deductions</h3>
        <ul>
          <li><strong>Construction:</strong> Tools, safety equipment, vehicle expenses</li>
          <li><strong>Retail:</strong> Inventory, display materials, point-of-sale systems</li>
          <li><strong>Food Service:</strong> Equipment, ingredients, uniforms, health permits</li>
          <li><strong>Technology:</strong> Software licenses, development tools, testing equipment</li>
        </ul>
        
        <h2>Working with Tax Professionals</h2>
        
        <h3>When to Seek Help</h3>
        <ul>
          <li><strong>Business Formation:</strong> Choosing optimal entity structure</li>
          <li><strong>Complex Transactions:</strong> Equipment purchases, business expansions</li>
          <li><strong>Multi-State Operations:</strong> Nexus and apportionment issues</li>
          <li><strong>Growth Planning:</strong> Tax strategies for scaling businesses</li>
        </ul>
        <p>Consider our comprehensive <a href="/business-services" style="color: hsl(var(--primary)); text-decoration: underline;">business services</a> including <a href="/services/cfo-consulting" style="color: hsl(var(--primary)); text-decoration: underline;">CFO Consulting</a> and <a href="/services/bookkeeping" style="color: hsl(var(--primary)); text-decoration: underline;">Bookkeeping</a> for ongoing support.</p>
        
        <h3>Maximizing Professional Relationships</h3>
        <ul>
          <li><strong>Regular Check-ins:</strong> Quarterly reviews of tax strategy</li>
          <li><strong>Documentation Sharing:</strong> Organized records for efficient preparation</li>
          <li><strong>Planning Discussions:</strong> Proactive conversations about business changes</li>
          <li><strong>Industry Expertise:</strong> Work with professionals familiar with your industry</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>Small business tax deductions can significantly reduce your tax liability when properly identified, documented, and claimed. The key is establishing good record-keeping habits and staying informed about available opportunities.</p>
        
        <p><strong>Take Action:</strong> Review your current expense tracking systems and implement improvements where needed. Our <a href="/services/bookkeeping" style="color: hsl(var(--primary)); text-decoration: underline;">Bookkeeping</a> and <a href="/services/tax-planning-prep" style="color: hsl(var(--primary)); text-decoration: underline;">Tax Planning & Preparation</a> teams can help identify additional deduction opportunities specific to your business and industry. <a href="/book-consultation" style="color: hsl(var(--primary)); text-decoration: underline;">Schedule a consultation</a> today.</p>
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
                    <div className="aspect-video">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover"
                        width="400"
                        height="300"
                        loading="lazy"
                        decoding="async"
                      />
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