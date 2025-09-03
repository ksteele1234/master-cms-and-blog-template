# Master CMS and Blog Template

A reusable blog and CMS template with Netlify CMS, React components, and complete blog functionality extracted from hx-cpas-connect.

## 🚀 Features

- **Complete Blog System**: Ready-to-use blog with posts, navigation, and SEO
- **Netlify CMS Integration**: Easy content management with GitHub authentication
- **React Components**: Reusable blog components built with TypeScript
- **SEO Optimized**: Structured data, meta tags, and sitemap generation
- **Responsive Design**: Mobile-friendly blog layout
- **Image Optimization**: WebP support and optimized image handling

## 📁 What's Included

### Content Management
- `content/blog/` - Blog posts in Markdown format
- `content/settings/` - Blog configuration and settings
- `public/admin/` - Netlify CMS admin interface

### React Components
- `src/components/BlogBreadcrumbs.tsx` - Navigation breadcrumbs
- `src/components/IntelligentRelatedPosts.tsx` - Smart related posts
- `src/components/RelatedPosts.tsx` - Related posts component
- `src/components/StructuredData.tsx` - SEO structured data

### Pages
- `src/pages/Blog.tsx` - Blog listing page
- `src/pages/BlogPost.tsx` - Individual blog post page
- `src/pages/BlogImport.tsx` - Blog import functionality

### CMS & Functions
- `netlify/functions/github-proxy.ts` - GitHub authentication for CMS
- `public/images/blog/` - Blog images and assets

## 🛠️ Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/ksteele1234/master-cms-and-blog-template.git
cd master-cms-and-blog-template
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Set Up Environment Variables
Create a `.env` file:
```env
VITE_GH_OWNER=your-github-username
VITE_GH_REPO=your-repository-name
```

### 4. Start Development Server
```bash
npm run dev
```

### 5. Access CMS Admin
Visit `http://localhost:5173/admin` to access the content management system.

## 🚀 Deployment

### Deploy to Netlify
1. Connect your repository to Netlify
2. Set build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Functions directory**: `netlify/functions`
3. Add environment variables:
   - `VITE_GH_OWNER`: Your GitHub username
   - `VITE_GH_REPO`: Your repository name
4. Deploy and test CMS at `/admin`

## 📝 Usage

### Adding Blog Posts
1. Visit `/admin` on your deployed site
2. Log in with GitHub
3. Create new posts or edit existing ones
4. Posts are automatically saved to the repository

### Customizing Components
- Modify React components in `src/components/`
- Update styling with Tailwind CSS classes
- Add new blog functionality as needed

### Content Structure
Blog posts support:
- Markdown formatting
- Front matter metadata
- Image embedding
- SEO optimization

## 🔧 Configuration

### CMS Configuration
Edit `public/admin/config.yml` to customize:
- Content fields
- Editorial workflow
- Media settings
- Authentication

### Blog Settings
Modify `content/settings/blog.yml` for:
- Site metadata
- Blog configuration
- SEO settings

## 📦 Tech Stack

- **Frontend**: React + TypeScript + Vite
- **Styling**: Tailwind CSS + shadcn/ui
- **CMS**: Netlify CMS
- **Authentication**: GitHub OAuth
- **Deployment**: Netlify
- **Content**: Markdown + Front Matter

## 🤝 Contributing

This template was extracted from hx-cpas-connect and is designed to be reusable across projects. Feel free to customize and extend it for your needs.

## 📄 License

This project is open source and available under the MIT License.
