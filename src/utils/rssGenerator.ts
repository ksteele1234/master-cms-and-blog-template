import { BlogPost } from '../hooks/useBlogPosts';

export interface RSSItem {
  title: string;
  description: string;
  link: string;
  pubDate: string;
  guid: string;
  category?: string;
  author?: string;
}

export class RSSGenerator {
  private baseUrl: string;
  private title: string;
  private description: string;
  private language: string;

  constructor(
    baseUrl: string = 'https://hrxcpas.com',
    title: string = 'HRX CPAs Tax & Business Blog',
    description: string = 'Expert tax planning, business strategy, and financial insights from certified CPAs',
    language: string = 'en-us'
  ) {
    this.baseUrl = baseUrl;
    this.title = title;
    this.description = description;
    this.language = language;
  }

  /**
   * Convert blog posts to RSS items
   */
  private blogPostsToRSSItems(posts: BlogPost[]): RSSItem[] {
    return posts
      .filter(post => post.published !== false) // Only include published posts
      .slice(0, 20) // Limit to most recent 20 posts
      .map(post => ({
        title: this.escapeXML(post.title),
        description: this.escapeXML(post.excerpt || post.content.substring(0, 200) + '...'),
        link: `${this.baseUrl}/blog/${post.slug}`,
        pubDate: new Date(post.date).toUTCString(),
        guid: `${this.baseUrl}/blog/${post.slug}`,
        category: post.category,
        author: post.author || 'HRX CPAs'
      }));
  }

  /**
   * Escape XML special characters
   */
  private escapeXML(text: string): string {
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  /**
   * Generate complete RSS XML feed
   */
  generateRSSXML(blogPosts: BlogPost[]): string {
    const items = this.blogPostsToRSSItems(blogPosts);
    const lastBuildDate = new Date().toUTCString();
    const pubDate = items.length > 0 ? items[0].pubDate : lastBuildDate;

    const rssItems = items.map(item => `
    <item>
      <title>${item.title}</title>
      <description><![CDATA[${item.description}]]></description>
      <link>${item.link}</link>
      <guid isPermaLink="true">${item.guid}</guid>
      <pubDate>${item.pubDate}</pubDate>
      ${item.category ? `<category>${this.escapeXML(item.category)}</category>` : ''}
      <author>noreply@hrxcpas.com (${this.escapeXML(item.author || 'HRX CPAs')})</author>
    </item>`).join('');

    return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${this.escapeXML(this.title)}</title>
    <description>${this.escapeXML(this.description)}</description>
    <link>${this.baseUrl}/blog</link>
    <language>${this.language}</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <pubDate>${pubDate}</pubDate>
    <ttl>1440</ttl>
    <atom:link href="${this.baseUrl}/rss.xml" rel="self" type="application/rss+xml" />
    <managingEditor>noreply@hrxcpas.com (HRX CPAs)</managingEditor>
    <webMaster>noreply@hrxcpas.com (HRX CPAs)</webMaster>
    <copyright>Copyright ${new Date().getFullYear()} HRX CPAs. All rights reserved.</copyright>
    <category>Tax Planning</category>
    <category>Business Strategy</category>
    <category>Financial Planning</category>
    <image>
      <url>${this.baseUrl}/assets/hrx-logo.png</url>
      <title>${this.escapeXML(this.title)}</title>
      <link>${this.baseUrl}/blog</link>
      <width>144</width>
      <height>144</height>
    </image>${rssItems}
  </channel>
</rss>`;
  }

  /**
   * Update RSS feed in localStorage (for client-side caching)
   */
  updateRSSFeed(blogPosts: BlogPost[]): void {
    try {
      const rssXML = this.generateRSSXML(blogPosts);
      const feedData = {
        xml: rssXML,
        lastUpdated: new Date().toISOString(),
        postCount: blogPosts.filter(post => post.published !== false).length
      };
      
      localStorage.setItem('rss-feed', JSON.stringify(feedData));
      console.log('RSS feed updated with', feedData.postCount, 'posts');
    } catch (error) {
      console.error('Failed to update RSS feed:', error);
    }
  }

  /**
   * Get cached RSS feed from localStorage
   */
  getCachedRSSFeed(): { xml: string; lastUpdated: string; postCount: number } | null {
    try {
      const cached = localStorage.getItem('rss-feed');
      return cached ? JSON.parse(cached) : null;
    } catch (error) {
      console.error('Failed to get cached RSS feed:', error);
      return null;
    }
  }

  /**
   * Get the timestamp of the last RSS update
   */
  getLastUpdated(): string | null {
    const cached = this.getCachedRSSFeed();
    return cached?.lastUpdated || null;
  }
}

// Export singleton instance
export const rssGenerator = new RSSGenerator();