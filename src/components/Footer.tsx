import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Blog Template
            </h3>
            <p className="text-gray-600 text-sm">
              A reusable blog and CMS template with Netlify CMS, React components, 
              and complete blog functionality.
            </p>
          </div>

          {/* Navigation */}
          <div className="col-span-1">
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-gray-900 text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/blog-import" className="text-gray-600 hover:text-gray-900 text-sm">
                  Import
                </Link>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div className="col-span-1">
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Template</h4>
            <ul className="space-y-2">
              <li className="text-gray-600 text-sm">
                Built with React + TypeScript
              </li>
              <li className="text-gray-600 text-sm">
                Powered by Netlify CMS
              </li>
              <li className="text-gray-600 text-sm">
                Styled with Tailwind CSS
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Blog Template. Built for reusability.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;