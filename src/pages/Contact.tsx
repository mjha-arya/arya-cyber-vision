import { Mail, Phone, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Contact Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-5xl font-bold text-foreground mb-16 font-condensed uppercase">
            Ready to Enhance Your Security Posture?
          </h1>
          
          {/* Contact Information Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
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
          <div className="space-y-4">
            <Button 
              variant="orange" 
              className="w-full max-w-2xl h-14 text-lg font-semibold" 
              asChild
            >
              <a href="https://forms.gle/5q4XWNmrcvGNVCnq8" target="_blank" rel="noopener noreferrer">
                Free 7-Minute Quick Cyber Security Risk Assessment
              </a>
            </Button>
            
            <Button 
              variant="coral"
              className="w-full max-w-2xl h-14 text-lg font-semibold"
              asChild
            >
              <a href="https://calendly.com/aryacybersec" target="_blank" rel="noopener noreferrer">
                Book your Free Consultation Call Now
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;