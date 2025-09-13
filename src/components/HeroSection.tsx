import { Button } from '@/components/ui/button';
import { Award, Shield, CheckCircle } from 'lucide-react';
import heroImage from '@/assets/hero-cyber-security.jpg';
import aryaCyberLogo from '@/assets/arya-cyber-logo.png';

const HeroSection = () => {
  return (
    <section id="home" className="py-20 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <h1 className="hero-heading">
              Proactive Cyber Defense for Modern Businesses
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              UK-based SecOps experts delivering 24/7 monitoring, incident response, 
              and compliance—built on Microsoft security.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
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

          {/* Right Column - Image */}
          <div className="relative">
            <img
              src={heroImage}
              alt="Cybersecurity defense illustration showing digital shield and network protection"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
      
      {/* Top-left Logo */}
      <img
        src={aryaCyberLogo}
        alt=""
        aria-hidden="true"
        className="hero__mark--tl"
      />
    </section>
  );
};

export default HeroSection;