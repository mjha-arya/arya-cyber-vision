import { Shield, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    "Managed SOC",
    "Penetration Testing", 
    "Incident Response",
    "Compliance & Governance"
  ];


  return (
    <footer className="bg-dark text-dark-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Column 1: Logo & Mission */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl-plus font-bold">AryaCyber</span>
            </div>
            <p className="text-base-plus text-dark-foreground/80 leading-relaxed">
              Protecting UK businesses with enterprise-grade cybersecurity solutions. 
              24/7 monitoring, rapid incident response, and Microsoft-first security.
            </p>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-lg-plus font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-base-plus text-dark-foreground/80 hover:text-primary transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>


          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-lg-plus font-semibold mb-4">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-base-plus text-dark-foreground/80">London, UK</p>
                  <p className="text-sm-plus text-dark-foreground/60">Serving businesses nationwide</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:manish@aryacybersec.com" className="text-base-plus text-dark-foreground/80 hover:text-primary transition-colors">
                  manish@aryacybersec.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <a href="tel:+44 7984130671" className="text-base-plus text-dark-foreground/80 hover:text-primary transition-colors">
                  +44 7984130671
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-dark-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm-plus text-dark-foreground/60">
              © {currentYear} Arya Cyber Security Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-sm-plus text-dark-foreground/60 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm-plus text-dark-foreground/60 hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm-plus text-dark-foreground/60 hover:text-primary transition-colors">
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