import { useEffect, useCallback } from 'react';
import { rssGenerator } from '../utils/rssGenerator';
import { BlogPost } from './useBlogPosts';

/**
 * Hook to automatically update RSS feed when blog posts change
 */
export const useRSSUpdater = () => {
  /**
   * Update RSS feed with current blog posts
   */
  const updateRSSFeed = useCallback((posts: BlogPost[]) => {
    try {
      rssGenerator.updateRSSFeed(posts);
      console.log('RSS feed updated automatically');
    } catch (error) {
      console.error('Failed to update RSS feed:', error);
    }
  }, []);

  /**
   * Manual RSS update function
   */
  const manualUpdate = useCallback((posts: BlogPost[]) => {
    updateRSSFeed(posts);
    
    // Optional: Show success notification
    if (typeof window !== 'undefined' && window.postMessage) {
      window.postMessage({
        type: 'RSS_UPDATED',
        timestamp: new Date().toISOString(),
        postCount: posts.length
      }, '*');
    }
  }, [updateRSSFeed]);

  /**
   * Get RSS feed statistics
   */
  const getRSSStats = useCallback(() => {
    const cached = rssGenerator.getCachedRSSFeed();
    const lastUpdated = rssGenerator.getLastUpdated();
    
    return {
      lastUpdated,
      postCount: cached?.postCount || 0,
      hasCache: !!cached
    };
  }, []);

  /**
   * Get the generated RSS XML
   */
  const getRSSXML = useCallback(() => {
    const cached = rssGenerator.getCachedRSSFeed();
    return cached?.xml || null;
  }, []);

  return {
    updateRSSFeed,
    manualUpdate,
    getRSSStats,
    getRSSXML,
    getLastUpdated: rssGenerator.getLastUpdated.bind(rssGenerator)
  };
};