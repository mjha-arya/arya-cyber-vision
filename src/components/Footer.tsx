import { Shield, Mail, Phone, MapPin } from 'lucide-react';
import { SERVICES_DATA, CONTACT_INFO } from '@/lib/constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();


  return (
    <footer className="bg-dark text-dark-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: Logo & Mission */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-primary rounded-md flex items-center justify-center">
                <Shield className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold">AryaCyber</span>
            </div>
            <p className="text-sm text-dark-foreground/70 leading-relaxed max-w-md">
              Protecting UK businesses with enterprise-grade cybersecurity solutions. 
              24/7 monitoring, rapid incident response, and Microsoft-first security.
            </p>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-sm font-semibold mb-3 font-condensed uppercase text-dark-foreground">Services</h3>
            <ul className="space-y-2">
              {SERVICES_DATA.map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-xs text-dark-foreground/60 hover:text-primary transition-colors">
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-sm font-semibold mb-3 font-condensed uppercase text-dark-foreground">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="w-3 h-3 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs text-dark-foreground/60">{CONTACT_INFO.location}</p>
                  <p className="text-xs text-dark-foreground/50">{CONTACT_INFO.locationDescription}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-3 h-3 text-primary flex-shrink-0" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-xs text-dark-foreground/60 hover:text-primary transition-colors break-all">
                  {CONTACT_INFO.email}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-3 h-3 text-primary flex-shrink-0" />
                <a href={`tel:${CONTACT_INFO.phone}`} className="text-xs text-dark-foreground/60 hover:text-primary transition-colors">
                  {CONTACT_INFO.phone}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-dark-foreground/20 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            <p className="text-xs text-dark-foreground/50">
              © {currentYear} Arya Cyber Security Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-xs text-dark-foreground/50 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-xs text-dark-foreground/50 hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-xs text-dark-foreground/50 hover:text-primary transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;