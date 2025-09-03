
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { HelmetProvider } from 'react-helmet-async'

console.log('🚀 main.tsx loaded!');

const rootElement = document.getElementById("root");
console.log('Root element found:', !!rootElement);

if (rootElement) {
  console.log('✅ Creating React root...');
  const root = createRoot(rootElement);
  
  console.log('🎯 Rendering React app...');
  root.render(
    <StrictMode>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </StrictMode>
  );
  
  console.log('🎉 React app rendered!');
} else {
  console.error('❌ No root element found!');
}
