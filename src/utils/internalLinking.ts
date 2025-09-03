import { BlogPost } from '../hooks/useBlogPosts';

/**
 * Internal linking utilities for SEO and user experience
 */

// Service page mappings for internal linking
export const servicePages = {
  'tax-planning': {
    url: '/services/tax-planning-prep',
    title: 'Tax Planning & Preparation',
    keywords: ['tax planning', 'tax preparation', 'tax strategy', 'tax optimization']
  },
  'cfo-consulting': {
    url: '/services/cfo-consulting', 
    title: 'CFO Consulting Services',
    keywords: ['cfo services', 'financial planning', 'cash flow', 'financial strategy']
  },
  'bookkeeping': {
    url: '/services/bookkeeping',
    title: 'Bookkeeping Services',
    keywords: ['bookkeeping', 'accounting', 'financial records', 'monthly reporting']
  },
  'estate-planning': {
    url: '/services/estate-planning-coordination',
    title: 'Estate Planning Coordination',
    keywords: ['estate planning', 'wealth transfer', 'family office', 'estate tax']
  },
  'business-valuation': {
    url: '/services/business-valuation',
    title: 'Business Valuation',
    keywords: ['business valuation', 'company worth', 'exit planning', 'succession']
  },
  'rsu-planning': {
    url: '/services/rsu-equity-planning',
    title: 'RSU & Equity Planning',
    keywords: ['rsu', 'stock options', 'equity compensation', 'alt minimum tax']
  }
};

// Content topic clusters for internal linking
export const topicClusters = {
  'tax-planning': {
    title: 'Tax Planning & Strategy',
    pillarPage: '/services/tax-planning-prep',
    subtopics: [
      'tax law changes',
      'tax deductions',
      'tax optimization',
      'year-end planning',
      'quarterly planning'
    ]
  },
  'business-growth': {
    title: 'Business Growth & Strategy',
    pillarPage: '/services/cfo-consulting',
    subtopics: [
      'cash flow management',
      'financial planning',
      'business scaling',
      'kpi tracking',
      'growth strategies'
    ]
  },
  'estate-wealth': {
    title: 'Estate & Wealth Planning',
    pillarPage: '/services/estate-planning-coordination',
    subtopics: [
      'estate planning',
      'wealth transfer',
      'family office',
      'multi-generational',
      'trust planning'
    ]
  },
  'equity-compensation': {
    title: 'Equity & Stock Compensation',
    pillarPage: '/services/rsu-equity-planning',
    subtopics: [
      'rsu planning',
      'stock options',
      'equity compensation',
      'alt minimum tax',
      'vesting strategies'
    ]
  }
};

/**
 * Find related blog posts based on content analysis
 */
export function findRelatedPosts(currentPost: BlogPost, allPosts: BlogPost[], maxResults: number = 6): BlogPost[] {
  const scoredPosts = allPosts
    .filter(post => post.slug !== currentPost.slug && post.published !== false)
    .map(post => {
      let score = 0;
      
      // Same category gets high score
      if (post.category === currentPost.category) {
        score += 10;
      }
      
      // Shared tags get medium score
      if (currentPost.tags && post.tags) {
        const sharedTags = currentPost.tags.filter(tag => post.tags?.includes(tag));
        score += sharedTags.length * 5;
      }
      
      // Content similarity based on keywords
      const currentWords = (currentPost.title + ' ' + currentPost.excerpt).toLowerCase().split(/\s+/);
      const postWords = (post.title + ' ' + post.excerpt).toLowerCase().split(/\s+/);
      const commonWords = currentWords.filter(word => 
        word.length > 3 && postWords.includes(word)
      );
      score += commonWords.length * 2;
      
      // Date proximity (newer posts get slight boost)
      const currentDate = new Date(currentPost.date);
      const postDate = new Date(post.date);
      const daysDiff = Math.abs((currentDate.getTime() - postDate.getTime()) / (1000 * 60 * 60 * 24));
      if (daysDiff < 90) {
        score += 3;
      }
      
      return { post, score };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, maxResults)
    .map(item => item.post);
    
  return scoredPosts;
}

/**
 * Find contextual service links based on content
 */
export function findContextualServiceLinks(content: string): Array<{url: string, title: string, anchor: string}> {
  const links: Array<{url: string, title: string, anchor: string}> = [];
  const contentLower = content.toLowerCase();
  
  Object.entries(servicePages).forEach(([key, service]) => {
    service.keywords.forEach(keyword => {
      if (contentLower.includes(keyword)) {
        links.push({
          url: service.url,
          title: service.title,
          anchor: keyword
        });
      }
    });
  });
  
  // Remove duplicates and limit to 3-5 links per post
  const uniqueLinks = Array.from(
    new Map(links.map(link => [link.url, link])).values()
  ).slice(0, 5);
  
  return uniqueLinks;
}

/**
 * Generate topic cluster navigation
 */
export function getTopicClusterLinks(currentCategory: string): Array<{url: string, title: string}> {
  const categoryMapping: Record<string, string> = {
    'Tax Planning': 'tax-planning',
    'Tax Credits': 'tax-planning', 
    'Tax Law Updates': 'tax-planning',
    'Estate Planning': 'estate-wealth',
    'Executive Compensation': 'equity-compensation',
    'Small Business': 'business-growth'
  };
  
  const clusterKey = categoryMapping[currentCategory];
  if (!clusterKey || !topicClusters[clusterKey]) {
    return [];
  }
  
  const cluster = topicClusters[clusterKey];
  return [
    {
      url: cluster.pillarPage,
      title: `Learn more about ${cluster.title}`
    }
  ];
}

/**
 * Generate breadcrumb schema
 */
export function generateBreadcrumbSchema(items: Array<{label: string, href?: string}>): object {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem", 
      "position": index + 1,
      "name": item.label,
      ...(item.href && { "item": `https://hrxcpas.com${item.href}` })
    }))
  };
}

/**
 * Auto-link content with relevant internal links
 */
export function enhanceContentWithLinks(content: string): string {
  let enhancedContent = content;
  
  // Define internal linking patterns
  const linkPatterns = [
    {
      pattern: /\b(tax planning)\b/gi,
      replacement: '[tax planning](/services/tax-planning-prep)'
    },
    {
      pattern: /\b(CFO services?)\b/gi,
      replacement: '[CFO services](/services/cfo-consulting)'
    },
    {
      pattern: /\b(bookkeeping)\b/gi,
      replacement: '[bookkeeping](/services/bookkeeping)'
    },
    {
      pattern: /\b(estate planning)\b/gi,
      replacement: '[estate planning](/services/estate-planning-coordination)'
    },
    {
      pattern: /\b(RSU planning|stock options?)\b/gi,
      replacement: '[RSU planning](/services/rsu-equity-planning)'
    },
    {
      pattern: /\b(business valuation)\b/gi,
      replacement: '[business valuation](/services/business-valuation)'
    }
  ];
  
  // Apply link patterns (but avoid double-linking)
  linkPatterns.forEach(({ pattern, replacement }) => {
    // Only replace if not already linked
    enhancedContent = enhancedContent.replace(
      new RegExp(`(?<!\\[.*?)${pattern.source}(?!.*?\\])`, pattern.flags),
      replacement
    );
  });
  
  return enhancedContent;
}