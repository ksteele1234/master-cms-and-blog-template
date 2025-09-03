import { useEffect } from 'react';
import { useBlogPosts } from './useBlogPosts';
import { sitemapGenerator } from '../utils/sitemapGenerator';

export const useSitemapUpdater = () => {
  const { posts, loading } = useBlogPosts();

  useEffect(() => {
    if (!loading && posts.length > 0) {
      // Auto-update sitemap when posts are loaded or changed
      sitemapGenerator.updateSitemap(posts);
    }
  }, [posts, loading]);

  const manualUpdate = () => {
    if (posts.length > 0) {
      sitemapGenerator.updateSitemap(posts);
    }
  };

  const getLastUpdated = () => sitemapGenerator.getLastUpdated();
  const getGeneratedSitemap = () => sitemapGenerator.getGeneratedSitemap();

  return {
    manualUpdate,
    getLastUpdated,
    getGeneratedSitemap,
    isUpdating: loading
  };
};