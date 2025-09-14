import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Industries', href: '#industries' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Insights', href: '#insights' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center -translate-x-[50px]">
            <div className="flex items-baseline space-x-2">
              <span className="text-2xl font-bold text-primary">ARYA</span>
              <span className="text-sm font-medium text-dark">CYBER SECURITY SOLUTIONS</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 translate-x-[710px]">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="nav-link text-sm font-medium"
              >
                {item.name}
              </a>
            ))}
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
                <a
                  key={item.name}
                  href={item.href}
                  className="nav-link text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
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