import { useState, useEffect } from 'react';
import matter from 'gray-matter';
import { Buffer } from 'buffer';

// Polyfill Buffer for browser environment
if (typeof window !== 'undefined') {
  window.Buffer = Buffer;
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  category: string;
  excerpt: string;
  featuredImage: string;
  imageAlt: string;
  seoTitle?: string;
  metaDescription?: string;
  tags?: string[];
  readingTime: string;
  featured: boolean;
  status?: string;
  published: boolean;
  content: string;
}

// Fallback blog posts for when markdown files can't be loaded
const fallbackPosts: BlogPost[] = [
  {
    slug: "rsu-tax-planning-test",
    title: "RSU Tax Planning: Timing Your Stock Vesting for Maximum Benefit",
    date: "2025-01-03T10:00:00.000Z",
    author: "Hiram Parmar, CPA",
    category: "Tax Planning",
    excerpt: "Learn strategic approaches to RSU taxation and timing to minimize your tax burden.",
    featuredImage: "/images/blog/rsu-tax-planning-stock-vesting.jpg",
    imageAlt: "Professional analyzing stock options and RSU documentation",
    readingTime: "8 min read",
    featured: true,
    status: "published",
    published: true,
    content: "Content here..."
  },
  {
    slug: "draft-post-test",
    title: "Draft Post for Testing",
    date: "2025-01-20T10:00:00.000Z",
    author: "Test Author",
    category: "Tax Planning",
    excerpt: "This is a draft post for testing filtering.",
    featuredImage: "/images/blog/tax-planning-high-income-professionals.jpg",
    imageAlt: "Draft post image",
    readingTime: "5 min read",
    featured: false,
    status: "draft",
    published: false,
    content: "Draft content..."
  },
  {
    slug: "review-post-test",
    title: "In Review Post for Testing",
    date: "2025-01-19T10:00:00.000Z",
    author: "Test Author",
    category: "Tax Credits",
    excerpt: "This is an in-review post for testing filtering.",
    featuredImage: "/images/blog/rd-tax-credits-tech-companies.jpg",
    imageAlt: "Review post image",
    readingTime: "6 min read",
    featured: false,
    status: "in_review",
    published: false,
    content: "Review content..."
  },
  {
    slug: "ready-post-test",
    title: "Ready Post for Testing",
    date: "2025-01-18T10:00:00.000Z",
    author: "Test Author",
    category: "Estate Planning",
    excerpt: "This is a ready post for testing filtering.",
    featuredImage: "/images/blog/estate-planning-multi-generational.jpg",
    imageAlt: "Ready post image",
    readingTime: "7 min read",
    featured: true,
    status: "ready",
    published: false,
    content: "Ready content..."
  }
];

// Function to dynamically import all markdown files
const importAllMarkdownFiles = async (): Promise<BlogPost[]> => {
  const modules = import.meta.glob('/content/blog/*.md', { as: 'raw' });
  const posts: BlogPost[] = [];
  
  // Try to load markdown files
  for (const path in modules) {
    try {
      const content = await modules[path]();
      const { data, content: body } = matter(content);
      
      
      // Extract slug from filename
      const filename = path.split('/').pop()?.replace('.md', '') || '';
      
      // With editorial workflow, only published posts exist in main branch
      // Ensure we have a valid status field, default to 'published' since it's in main branch
      const status = 'published'; // All posts in main branch are published via editorial workflow
      
      // Only include posts that exist in main branch (they are published by definition)
      posts.push({
        slug: filename,
        title: data.title || '',
        date: data.date || '',
        author: data.author || 'HRX CPAs Team',
        category: data.category || '',
        featuredImage: data.featuredImage || '',
        imageAlt: data.imageAlt || '',
        excerpt: data.excerpt || '',
        seoTitle: data.seoTitle,
        metaDescription: data.metaDescription,
        tags: data.tags || [],
        readingTime: data.readingTime || '5 min read',
        featured: data.featured || false,
        status: status,
        published: true, // All posts in main branch are published
        content: body,
      });
    } catch (error) {
      console.error(`Error processing blog post ${path}:`, error);
      // Continue processing other posts even if one fails
    }
  }
  
  // If no posts loaded from markdown (due to GitHub errors), use fallback posts
  if (posts.length === 0) {
    console.warn('⚠️ No markdown posts loaded, using fallback posts for testing');
    return fallbackPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }
  
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const useBlogPosts = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      console.log('🔄 Starting to load blog posts...');
      try {
        const loadedPosts = await importAllMarkdownFiles();
        console.log('✅ Blog posts loaded successfully:', loadedPosts.length, 'posts');
        console.log('📊 Posts data:', loadedPosts.map(p => ({ 
          title: p.title, 
          status: p.status, 
          category: p.category,
          featured: p.featured 
        })));
        setPosts(loadedPosts);
      } catch (error) {
        console.error('❌ Error loading blog posts:', error);
        setPosts([]); // Set empty array on error
      } finally {
        console.log('🏁 Blog posts loading finished');
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  const getPostBySlug = (slug: string): BlogPost | undefined => {
    return posts.find(post => post.slug === slug);
  };

  const getFeaturedPosts = (): BlogPost[] => {
    return posts.filter(post => post.featured).slice(0, 3);
  };

  const getPostsByCategory = (category: string): BlogPost[] => {
    return posts.filter(post => post.category === category);
  };

  const getRecentPosts = (limit: number = 6): BlogPost[] => {
    return posts
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, limit);
  };

  return {
    posts,
    loading,
    getPostBySlug,
    getFeaturedPosts,
    getPostsByCategory,
    getRecentPosts,
  };
};