import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Enable minification (default: 'esbuild' for speed)
    minify: 'esbuild',
    // CSS code splitting for better caching
    cssCodeSplit: true,
    // Source maps for debugging (remove in production)
    sourcemap: mode === 'development',
    // Optimize bundle size for better Core Web Vitals
    rollupOptions: {
      output: {
        // Optimize chunk naming for better caching
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith('.css')) {
            return 'assets/css/[name]-[hash].css';
          }
          return 'assets/[name]-[hash].[ext]';
        },

        manualChunks: {
          // Vendor libraries (changes less frequently)
          vendor: ['react', 'react-dom', 'react-router-dom'],
          // UI components (moderate change frequency)
          ui: [
            '@radix-ui/react-accordion',
            '@radix-ui/react-dialog',
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-popover',
            '@radix-ui/react-select',
            '@radix-ui/react-tabs'
          ],
          // Icons (rarely changes)
          icons: ['lucide-react'],
          // Form utilities
          forms: ['react-hook-form', '@hookform/resolvers', 'zod'],
          // Query and utilities
          utils: ['@tanstack/react-query', 'clsx', 'tailwind-merge']
        }
      },
      // Tree shaking optimization
      // treeshake: {
      //   moduleSideEffects: false,
      //   propertyReadSideEffects: false,
      //   unknownGlobalSideEffects: false
      // }
    },
    // Enable compression reporting
    reportCompressedSize: true,
    // Increase chunk size warning threshold for better optimization
    chunkSizeWarningLimit: 1000,
    // Target modern browsers for better optimization
    target: ['es2020', 'edge88', 'firefox78', 'chrome87', 'safari13.1'],
    // CSS optimization
    cssMinify: true
  },
  // Dependency optimization for faster dev builds
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'lucide-react',
      '@radix-ui/react-accordion',
      '@radix-ui/react-dialog',
      '@radix-ui/react-dropdown-menu',
      'buffer'
    ],
    // Exclude heavy dependencies from optimization
    exclude: ['@tanstack/react-query']
  },
  define: {
    global: 'globalThis',
  },
  // CSS preprocessing
  css: {
    devSourcemap: mode === 'development',
    // PostCSS optimization
    postcss: './postcss.config.js'
  }
}));
