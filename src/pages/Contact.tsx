import { Mail, Phone, Globe } from 'lucide-react';
import PageLayout from '@/components/layout/PageLayout';
import ContactActions from '@/components/ui/contact-actions';

const Contact = () => {
  return (
    <PageLayout>
      <div className="bg-card text-card-foreground">
      
      {/* Contact Section */}
      <section className="section-spacing px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="section-heading content-spacing font-condensed uppercase">
            Ready to Enhance Your Security Posture?
          </h1>
          
          {/* Contact Information Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 content-spacing">
            {/* Email */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2 font-condensed uppercase">Email</h3>
              <a 
                href="mailto:manish@aryacybersec.com"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                manish@aryacybersec.com
              </a>
            </div>
            
            {/* Phone */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2 font-condensed uppercase">Phone</h3>
              <a 
                href="tel:+447984130671"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                +44 7984130671
              </a>
            </div>
            
            {/* Website */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2 font-condensed uppercase">Website</h3>
              <a 
                href="https://aryacybersec.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                aryacybersec.com
              </a>
            </div>
          </div>
          
          {/* Call to Action Buttons */}
          <ContactActions variant="hero" className="justify-center" />
        </div>
      </section>
      </div>
    </PageLayout>
  );
};

export default Contact;