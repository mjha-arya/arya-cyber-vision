import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', href: '/', isRoute: true },
    { name: 'Services', href: '/services', isRoute: true },
    { name: 'Capabilities', href: '/capabilities', isRoute: true },
    { name: 'About Us', href: '/about-us', isRoute: true },
    { name: 'Contact', href: '/contact', isRoute: true },
  ];

  const renderNavItem = (item: any) => {
    if (item.isRoute) {
      return (
        <Link
          key={item.name}
          to={item.href}
          className="nav-link text-[22px] font-bold text-nav-text whitespace-nowrap"
        >
          {item.name}
        </Link>
      );
    } else {
      // For hash links, navigate to home first if not already there
      const href = location.pathname === '/' ? item.href : `/${item.href}`;
      return (
        <a
          key={item.name}
          href={href}
          className="nav-link text-[22px] font-bold text-nav-text whitespace-nowrap"
        >
          {item.name}
        </a>
      );
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-22">
          {/* Logo */}
          <Link to="/" className="flex items-center translate-x-[40px]">
            <div className="flex items-center space-x-1 whitespace-nowrap">
              <span className="text-[22px] font-bold text-nav-logo">ARYA</span>
              <span className="text-[22px] font-bold text-nav-logo">CYBER SECURITY SOLUTIONS</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-[40px] translate-x-[70px]">
            {navItems.map((item) => renderNavItem(item))}
            <Button variant="orange" asChild>
              <a href="https://forms.gle/5q4XWNmrcvGNVCnq8" target="_blank" rel="noopener noreferrer">
                Check out Free 7-Minute Quick Cyber Security Risk Assessment
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-foreground hover:text-primary"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <div key={item.name} onClick={() => setIsMenuOpen(false)}>
                  {renderNavItem(item)}
                </div>
              ))}
              <Button variant="orange" className="w-full mt-4" asChild>
                <a href="https://forms.gle/5q4XWNmrcvGNVCnq8" target="_blank" rel="noopener noreferrer">
                  Check out the Free 7-Minute Quick Cyber Security Risk Assessment
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;