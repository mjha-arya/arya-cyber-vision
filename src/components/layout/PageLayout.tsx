import { ReactNode } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
}

/**
 * Reusable page layout wrapper with Navigation and Footer
 * Eliminates duplicate layout code across pages
 */
const PageLayout = ({ children, className = "" }: PageLayoutProps) => {
  return (
    <div className={`min-h-screen bg-gray-800 ${className}`}>
      <Navigation />
      <div className="w-[80%] mx-auto bg-gray-800">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default PageLayout;