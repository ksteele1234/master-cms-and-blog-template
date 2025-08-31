import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, ExternalLink } from "lucide-react";
import OptimizedImage from './OptimizedImage';
import { findRelatedPosts, findContextualServiceLinks, getTopicClusterLinks } from '../utils/internalLinking';
import type { BlogPost } from '../hooks/useBlogPosts';

interface IntelligentRelatedPostsProps {
  currentPost: BlogPost;
  allPosts: BlogPost[];
  maxPosts?: number;
}

const IntelligentRelatedPosts: React.FC<IntelligentRelatedPostsProps> = ({ 
  currentPost, 
  allPosts, 
  maxPosts = 6 
}) => {
  const relatedPosts = findRelatedPosts(currentPost, allPosts, maxPosts);
  const serviceLinks = findContextualServiceLinks(currentPost.content + ' ' + currentPost.excerpt);
  const topicClusterLinks = getTopicClusterLinks(currentPost.category);

  if (relatedPosts.length === 0 && serviceLinks.length === 0 && topicClusterLinks.length === 0) {
    return null;
  }

  return (
    <section className="mt-12 pt-8 border-t border-border">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Continue Reading</h2>
        <p className="text-muted-foreground">
          Explore related topics and services to deepen your understanding
        </p>
      </div>

      {/* Topic Cluster Links */}
      {topicClusterLinks.length > 0 && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4 text-primary">Service Resources</h3>
          <div className="grid gap-3">
            {topicClusterLinks.map((link, index) => (
              <Card key={index} className="p-4 bg-primary/5 border-primary/20">
                <Link 
                  to={link.url}
                  className="flex items-center justify-between group hover:text-primary transition-colors"
                >
                  <span className="font-medium">{link.title}</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Contextual Service Links */}
      {serviceLinks.length > 0 && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4 text-secondary">Related Services</h3>
          <div className="flex flex-wrap gap-2">
            {serviceLinks.slice(0, 4).map((link, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                asChild
                className="text-xs"
              >
                <Link to={link.url}>
                  {link.title}
                  <ArrowRight className="w-3 h-3 ml-1" />
                </Link>
              </Button>
            ))}
          </div>
        </div>
      )}

      {/* Related Blog Posts */}
      {relatedPosts.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold mb-6">Related Articles</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedPosts.map((post) => (
              <Card key={post.slug} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <OptimizedImage 
                  src={post.featuredImage} 
                  alt={post.imageAlt}
                  width={400}
                  height={160}
                  className="w-full h-32"
                />
                <div className="p-4">
                  <Badge variant="outline" className="mb-2 text-xs">{post.category}</Badge>
                  <h4 className="text-sm font-semibold mb-2 line-clamp-2 leading-tight">
                    <Link 
                      to={`/blog/${post.slug}`} 
                      className="hover:text-primary transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h4>
                  <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                    <span className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {post.readingTime}
                    </span>
                  </div>
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center text-primary hover:text-primary/80 text-xs font-medium"
                  >
                    Read More
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Additional Navigation */}
      <div className="mt-8 pt-6 border-t border-border/50">
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
          <Link 
            to="/blog" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Back to all articles
          </Link>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" asChild>
              <Link to="/contact">
                Have Questions? Contact Us
              </Link>
            </Button>
            <Button size="sm" asChild>
              <Link to="/book-consultation">
                Schedule Consultation
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntelligentRelatedPosts;