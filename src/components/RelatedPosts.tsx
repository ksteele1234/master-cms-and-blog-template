import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import type { BlogPost } from '../hooks/useBlogPosts';

interface RelatedPostsProps {
  currentPost: BlogPost;
  allPosts: BlogPost[];
  maxPosts?: number;
}

const RelatedPosts: React.FC<RelatedPostsProps> = ({ 
  currentPost, 
  allPosts, 
  maxPosts = 3 
}) => {
  // Find related posts based on category and tags
  const relatedPosts = allPosts
    .filter(post => 
      post.slug !== currentPost.slug && // Exclude current post
      (post.category === currentPost.category || // Same category
       (currentPost.tags && post.tags && 
        currentPost.tags.some(tag => post.tags?.includes(tag)))) // Shared tags
    )
    .slice(0, maxPosts);

  if (relatedPosts.length === 0) {
    return null;
  }

  return (
    <section className="mt-12 pt-8 border-t border-border">
      <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedPosts.map((post) => (
          <Card key={post.slug} className="overflow-hidden hover:shadow-lg transition-shadow">
            <img 
              src={post.featuredImage} 
              alt={post.imageAlt}
              className="w-full h-32 object-cover"
            />
            <div className="p-4">
              <Badge variant="outline" className="mb-2 text-xs">{post.category}</Badge>
              <h3 className="text-sm font-semibold mb-2 line-clamp-2">
                <Link 
                  to={`/blog/${post.slug}`} 
                  className="hover:text-primary transition-colors"
                >
                  {post.title}
                </Link>
              </h3>
              <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span className="flex items-center">
                  <Calendar className="w-3 h-3 mr-1" />
                  {new Date(post.date).toLocaleDateString()}
                </span>
                <span className="flex items-center">
                  <Clock className="w-3 h-3 mr-1" />
                  {post.readingTime}
                </span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default RelatedPosts;