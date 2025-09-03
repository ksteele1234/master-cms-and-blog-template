import { BlogPost } from '../hooks/useBlogPosts';

/**
 * Comprehensive structured data utilities for SEO
 */

export interface ServicePageSchema {
  name: string;
  description: string;
  provider: object;
  offers?: object[];
  areaServed?: object;
  serviceType?: string;
}

export interface ArticleSchema {
  headline: string;
  description: string;
  image: string | object;
  author: object;
  publisher: object;
  datePublished: string;
  dateModified: string;
  mainEntityOfPage: object;
  articleSection?: string;
  keywords?: string;
}

/**
 * Generate comprehensive blog post structured data
 */
export function generateBlogPostSchema(post: BlogPost): object {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": {
      "@type": "ImageObject",
      "url": post.featuredImage,
      "width": 800,
      "height": 600
    },
    "author": {
      "@type": "Organization",
      "name": post.author || "HRX CPAs",
      "url": "https://hrxcpas.com/about"
    },
    "publisher": {
      "@type": "Organization", 
      "name": "HRX CPAs",
      "logo": {
        "@type": "ImageObject",
        "url": "https://hrxcpas.com/assets/hrx-logo.png",
        "width": 144,
        "height": 144
      },
      "url": "https://hrxcpas.com"
    },
    "datePublished": post.date,
    "dateModified": post.date,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://hrxcpas.com/blog/${post.slug}`
    },
    "articleSection": post.category,
    "keywords": post.tags?.join(', '),
    "wordCount": post.content ? post.content.split(/\s+/).length : undefined,
    "timeRequired": post.readingTime,
    "inLanguage": "en-US",
    "copyrightYear": new Date(post.date).getFullYear(),
    "copyrightHolder": {
      "@type": "Organization",
      "name": "HRX CPAs"
    }
  };
}

/**
 * Generate service page structured data
 */
export function generateServiceSchema(serviceData: ServicePageSchema): object {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceData.name,
    "description": serviceData.description,
    "provider": {
      "@type": "AccountingService",
      "name": "HRX CPAs",
      "url": "https://hrxcpas.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "6 Venture #250",
        "addressLocality": "Irvine",
        "addressRegion": "CA", 
        "postalCode": "92618",
        "addressCountry": "US"
      },
      "telephone": "(949) 431-0469",
      "email": "info@hrxcpas.com"
    },
    "serviceType": serviceData.serviceType || "Professional Services",
    "areaServed": {
      "@type": "Place",
      "name": "Orange County, California"
    },
    "offers": serviceData.offers || [{
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceRange": "$119-$4500",
      "priceCurrency": "USD"
    }],
    "category": "Accounting Services",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "CPA Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Tax Planning"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "CFO Consulting"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Bookkeeping"
          }
        }
      ]
    }
  };
}

/**
 * Generate HowTo schema for instructional content
 */
export function generateHowToSchema(steps: Array<{name: string, text: string}>, name: string, description: string): object {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": name,
    "description": description,
    "image": "https://hrxcpas.com/assets/hrx-logo.png",
    "totalTime": "PT30M",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "value": "0"
    },
    "step": steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.name,
      "text": step.text,
      "url": `#step-${index + 1}`
    }))
  };
}

/**
 * Generate FAQ schema
 */
export function generateFAQSchema(faqs: Array<{question: string, answer: string}>): object {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

/**
 * Generate organization schema with comprehensive details
 */
export function generateOrganizationSchema(): object {
  return {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    "name": "HRX CPAs",
    "alternateName": "HRX Certified Public Accountants",
    "description": "Expert CPA firm in Irvine serving businesses $1M-$10M revenue & high-net-worth families. Tax planning, CFO consulting, bookkeeping & exit planning in Orange County.",
    "url": "https://hrxcpas.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://hrxcpas.com/assets/hrx-logo.png",
      "width": 144,
      "height": 144
    },
    "image": "https://hrxcpas.com/assets/hrx-logo.png",
    "telephone": "(949) 431-0469",
    "email": "info@hrxcpas.com",
    "address": {
      "@type": "PostalAddress", 
      "streetAddress": "6 Venture #250",
      "addressLocality": "Irvine",
      "addressRegion": "CA",
      "postalCode": "92618",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "33.6891",
      "longitude": "-117.7784"
    },
    "openingHours": ["Mo-Th 10:00-16:00"],
    "priceRange": "$119-$4500",
    "founder": {
      "@type": "Person",
      "name": "Hiren Parmar",
      "jobTitle": "CPA, CVA, CEPA",
      "worksFor": {
        "@type": "Organization",
        "name": "HRX CPAs"
      }
    },
    "areaServed": {
      "@type": "Place",
      "name": "Orange County, California"
    },
    "serviceArea": {
      "@type": "Place", 
      "name": "Orange County, California"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Professional CPA Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Tax Planning & Preparation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "CFO Consulting"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Bookkeeping Services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Estate Planning Coordination"
          }
        }
      ]
    },
    "sameAs": [
      "https://www.linkedin.com/company/hrx-cpas",
      "https://www.facebook.com/hrxcpas"
    ]
  };
}

/**
 * Generate WebSite schema with search action
 */
export function generateWebSiteSchema(): object {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "HRX CPAs",
    "alternateName": "HRX Certified Public Accountants",
    "url": "https://hrxcpas.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://hrxcpas.com/blog?search={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Organization",
      "name": "HRX CPAs"
    }
  };
}

/**
 * Generate Review schema for testimonials
 */
export function generateReviewSchema(reviews: Array<{
  author: string,
  rating: number,
  reviewBody: string,
  datePublished: string
}>): object {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "HRX CPAs",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length,
      "reviewCount": reviews.length,
      "bestRating": 5,
      "worstRating": 1
    },
    "review": reviews.map(review => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.author
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating,
        "bestRating": 5,
        "worstRating": 1
      },
      "reviewBody": review.reviewBody,
      "datePublished": review.datePublished
    }))
  };
}