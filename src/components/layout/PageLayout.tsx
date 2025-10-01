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
      <div>
        <Navigation />
        <div className="w-full lg:w-[80%] mx-auto bg-card text-card-foreground">
          {children}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default PageLayout;