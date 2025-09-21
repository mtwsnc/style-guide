"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ChevronLeft, ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  showBackButton?: boolean;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, showBackButton = true }) => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="bg-gray-50 border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between min-h-[44px]">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center space-x-2 text-sm h-full">
            <Link
              href="/"
              className="flex items-center text-gray-600 hover:text-primary-green transition-colors h-full"
            >
              <Home className="w-4 h-4 mr-1" />
              <span className="leading-none">Home</span>
            </Link>

            {items.map((item, index) => (
              <div key={index} className="flex items-center h-full">
                <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />
                {index === items.length - 1 ? (
                  <span className="text-gray-900 font-medium leading-none flex items-center h-full">{item.label}</span>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-primary-green transition-colors leading-none flex items-center h-full"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Back Button */}
          {showBackButton && (
            <button
              onClick={handleBack}
              className="flex items-center px-3 py-2 text-sm text-gray-600 hover:text-primary-green hover:bg-white rounded-md transition-colors border border-gray-200 hover:border-primary-green h-full"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Back
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;