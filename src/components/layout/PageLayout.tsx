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
    <div className={`min-h-screen bg-background ${className}`}>
      <div className="w-full bg-gray-300">
        <div className="w-full lg:w-[75%] mx-auto">
          <Navigation />
          <div>
            {children}
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default PageLayout;