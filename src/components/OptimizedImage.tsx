import { useState, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  onLoad?: () => void;
}

const OptimizedImage = ({ 
  src, 
  alt, 
  width, 
  height, 
  className = "", 
  priority = false,
  onLoad 
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imgSrc, setImgSrc] = useState<string>('');
  
  useEffect(() => {
    // Generate WebP version URL if the original is not already WebP
    const getOptimizedSrc = () => {
      if (src.endsWith('.webp')) {
        return src;
      }
      
      // For images in public/images, create WebP version
      if (src.includes('/images/')) {
        const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
        return webpSrc;
      }
      
      return src;
    };
    
    setImgSrc(getOptimizedSrc());
  }, [src]);
  
  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    // Fallback to original image if WebP fails
    if (imgSrc !== src) {
      setImgSrc(src);
    }
  };

  // Check if browser supports WebP
  const supportsWebP = () => {
    const canvas = document.createElement('canvas');
    return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {supportsWebP() ? (
        <picture>
          <source srcSet={imgSrc} type="image/webp" />
          <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            fetchPriority={priority ? "high" : "auto"}
            onLoad={handleLoad}
            onError={handleError}
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ 
              aspectRatio: width && height ? `${width}/${height}` : 'auto' 
            }}
          />
        </picture>
      ) : (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={priority ? "high" : "auto"}
          onLoad={handleLoad}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ 
            aspectRatio: width && height ? `${width}/${height}` : 'auto' 
          }}
        />
      )}
      
      {!isLoaded && (
        <div 
          className="absolute inset-0 bg-muted animate-pulse flex items-center justify-center"
          style={{ 
            aspectRatio: width && height ? `${width}/${height}` : 'auto' 
          }}
        >
          <div className="w-8 h-8 border-2 border-muted-foreground/20 border-t-muted-foreground/60 rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;