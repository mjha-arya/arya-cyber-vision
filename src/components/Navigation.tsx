import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', href: '/', isRoute: true },
    { name: 'Services', href: '#services', isRoute: false },
    { name: 'Capabilities', href: '/capabilities', isRoute: true },
    { name: 'Industries', href: '#industries', isRoute: false },
    { name: 'Case Studies', href: '#case-studies', isRoute: false },
    { name: 'Insights', href: '#insights', isRoute: false },
    { name: 'About Us', href: '#about', isRoute: false },
    { name: 'Contact', href: '#contact', isRoute: false },
  ];

  const renderNavItem = (item: any) => {
    if (item.isRoute) {
      return (
        <Link
          key={item.name}
          to={item.href}
          className="nav-link text-sm font-medium"
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
          className="nav-link text-sm font-medium"
        >
          {item.name}
        </a>
      );
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center -translate-x-[160px]">
            <div className="flex items-baseline space-x-2">
              <span className="text-2xl font-bold text-primary">ARYA</span>
              <span className="text-sm font-medium text-dark">CYBER SECURITY SOLUTIONS</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 translate-x-[290px]">
            {navItems.map((item) => renderNavItem(item))}
            <Button className="btn-primary">
              Book a Security Assessment
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
              <Button className="btn-primary w-full mt-4">
                Book a Security Assessment
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;