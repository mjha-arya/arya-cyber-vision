import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import uploadedLogo from '@/assets/uploaded-logo.png';

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
          className="nav-link text-base font-medium text-nav-text hover:text-primary transition-colors whitespace-nowrap"
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
          className="nav-link text-base font-medium text-nav-text hover:text-primary transition-colors whitespace-nowrap"
        >
          {item.name}
        </a>
      );
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-20">
          {/* Centered Logo and Navigation */}
          <div className="flex items-center space-x-8">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img
                src={uploadedLogo}
                alt="Arya Cyber Security Solutions"
                className="h-20 w-auto"
              />
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => renderNavItem(item))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden absolute right-4">
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
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;