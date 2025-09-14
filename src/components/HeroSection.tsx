import { Button } from '@/components/ui/button';
import { Award, Shield, CheckCircle } from 'lucide-react';
import aryaLogo from '@/assets/arya-logo.png';

const HeroSection = () => {
  return (
    <section id="home" className="hero py-20 bg-background relative">
      {/* Arya Logo - Top Left */}
      <img
        src={aryaLogo}
        alt=""
        aria-hidden="true"
        className="hero__logo"
      />
      

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Centered Content */}
        <div className="hero__content">
          <h1 className="hero-heading">
            Proactive Cyber Defense for Modern Businesses
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl">
            UK-based SecOps experts delivering 24/7 monitoring, incident response, 
            and compliance—built on Microsoft security.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 btn-row">
            <Button className="btn-primary">
              Book a Security Assessment
            </Button>
            <Button className="btn-secondary">
              Download Capabilities Deck (PDF)
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="pt-8">
            <p className="text-sm text-muted-foreground mb-4">Trusted by enterprises, certified by:</p>
            <div className="flex flex-wrap items-center gap-8">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Shield className="w-5 h-5" />
                <span className="text-sm font-medium">Microsoft Security</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Award className="w-5 h-5" />
                <span className="text-sm font-medium">ISO 27001</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle className="w-5 h-5" />
                <span className="text-sm font-medium">Cyber Essentials Plus</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;