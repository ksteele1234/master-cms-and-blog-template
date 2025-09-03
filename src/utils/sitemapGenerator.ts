import type { BlogPost } from '../hooks/useBlogPosts';

interface SitemapUrl {
  loc: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

export class SitemapGenerator {
  private baseUrl = 'https://hrxcpas.com';
  
  private staticPages: SitemapUrl[] = [
    // Homepage
    { loc: '/', lastmod: this.getCurrentDate(), changefreq: 'weekly', priority: 1.0 },
    
    // Main Service Pages
    { loc: '/about', lastmod: this.getCurrentDate(), changefreq: 'monthly', priority: 0.9 },
    { loc: '/business-services', lastmod: this.getCurrentDate(), changefreq: 'monthly', priority: 0.9 },
    { loc: '/personal-services', lastmod: this.getCurrentDate(), changefreq: 'monthly', priority: 0.9 },
    { loc: '/pricing', lastmod: this.getCurrentDate(), changefreq: 'monthly', priority: 0.8 },
    
    // Contact & Booking
    { loc: '/contact', lastmod: this.getCurrentDate(), changefreq: 'monthly', priority: 0.8 },
    { loc: '/book-consultation', lastmod: this.getCurrentDate(), changefreq: 'monthly', priority: 0.8 },
    
    // Content Pages
    { loc: '/testimonials', lastmod: this.getCurrentDate(), changefreq: 'monthly', priority: 0.7 },
    { loc: '/faq', lastmod: this.getCurrentDate(), changefreq: 'monthly', priority: 0.7 },
    { loc: '/blog', lastmod: this.getCurrentDate(), changefreq: 'weekly', priority: 0.8 },
    
    // Business Service Pages
    { loc: '/services/bookkeeping', lastmod: this.getCurrentDate(), changefreq: 'monthly', priority: 0.8 },
    { loc: '/services/tax-planning-prep', lastmod: this.getCurrentDate(), changefreq: 'monthly', priority: 0.8 },
    { loc: '/services/cfo-consulting', lastmod: this.getCurrentDate(), changefreq: 'monthly', priority: 0.8 },
    { loc: '/services/estate-planning-coordination', lastmod: this.getCurrentDate(), changefreq: 'monthly', priority: 0.8 },
    { loc: '/services/business-valuation', lastmod: this.getCurrentDate(), changefreq: 'monthly', priority: 0.8 },
    { loc: '/services/exit-planning', lastmod: this.getCurrentDate(), changefreq: 'monthly', priority: 0.8 },
    { loc: '/services/full-service-accounting-payroll', lastmod: this.getCurrentDate(), changefreq: 'monthly', priority: 0.8 },
    { loc: '/services/buyer-due-diligence', lastmod: this.getCurrentDate(), changefreq: 'monthly', priority: 0.8 },
    
    // Personal Service Pages
    { loc: '/services/individual-tax-preparation', lastmod: this.getCurrentDate(), changefreq: 'monthly', priority: 0.8 },
    { loc: '/services/rsu-equity-planning', lastmod: this.getCurrentDate(), changefreq: 'monthly', priority: 0.8 },
    { loc: '/services/rental-k1-support', lastmod: this.getCurrentDate(), changefreq: 'monthly', priority: 0.8 },
    { loc: '/services/personal-estate-planning', lastmod: this.getCurrentDate(), changefreq: 'monthly', priority: 0.8 },
    
    // Legal & Policy Pages
    { loc: '/privacy-policy', lastmod: this.getCurrentDate(), changefreq: 'yearly', priority: 0.3 },
    { loc: '/terms-of-service', lastmod: this.getCurrentDate(), changefreq: 'yearly', priority: 0.3 },
    { loc: '/professional-disclosures', lastmod: this.getCurrentDate(), changefreq: 'yearly', priority: 0.3 },
    { loc: '/cookie-policy', lastmod: this.getCurrentDate(), changefreq: 'yearly', priority: 0.3 },
    { loc: '/client-engagement-agreement', lastmod: this.getCurrentDate(), changefreq: 'yearly', priority: 0.3 },
    { loc: '/ada-compliance', lastmod: this.getCurrentDate(), changefreq: 'yearly', priority: 0.3 },
    { loc: '/sitemap', lastmod: this.getCurrentDate(), changefreq: 'monthly', priority: 0.2 },
    { loc: '/thank-you', lastmod: this.getCurrentDate(), changefreq: 'yearly', priority: 0.2 },
  ];

  private getCurrentDate(): string {
    return new Date().toISOString().split('T')[0];
  }

  public generateBlogPostUrls(posts: BlogPost[]): SitemapUrl[] {
    return posts.map(post => ({
      loc: `/blog/${post.slug}`,
      lastmod: post.date,
      changefreq: 'yearly' as const,
      priority: 0.6
    }));
  }

  public generateSitemapXML(blogPosts: BlogPost[]): string {
    const blogUrls = this.generateBlogPostUrls(blogPosts);
    const allUrls = [...this.staticPages, ...blogUrls];

    const urlEntries = allUrls.map(url => `
  <url>
    <loc>${this.baseUrl}${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('');

    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urlEntries}
</urlset>`;
  }

  public async updateSitemap(blogPosts: BlogPost[]): Promise<void> {
    const sitemapXML = this.generateSitemapXML(blogPosts);
    
    try {
      // In a real application, this would write to the file system
      // For now, we'll store it in localStorage to simulate persistence
      localStorage.setItem('generated-sitemap', sitemapXML);
      localStorage.setItem('sitemap-last-updated', new Date().toISOString());
      
      console.log('Sitemap updated with', blogPosts.length, 'blog posts');
    } catch (error) {
      console.error('Failed to update sitemap:', error);
    }
  }

  public getLastUpdated(): string | null {
    return localStorage.getItem('sitemap-last-updated');
  }

  public getGeneratedSitemap(): string | null {
    return localStorage.getItem('generated-sitemap');
  }
}

export const sitemapGenerator = new SitemapGenerator();