import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';
import PageLayout from '@/components/layout/PageLayout';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <PageLayout>
      <div className="bg-card text-card-foreground">
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="mb-4 section-heading font-condensed uppercase">404</h1>
          <p className="mb-4 text-lg text-muted-foreground">Oops! Page not found</p>
          <Button asChild>
            <a href="/">
              <Home className="w-4 h-4 mr-2" />
              Return to Home
            </a>
          </Button>
        </div>
      </div>
      </div>
    </PageLayout>
  );
};

export default NotFound;
