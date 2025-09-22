import { Button } from '@/components/ui/button';
import { Award, Shield, CheckCircle } from 'lucide-react';
import heroImage from '@/assets/hero-cyber-security.jpg';
import uploadedLogo from '@/assets/uploaded-logo.png';
const HeroSection = () => {
  return <section id="home" className="hero py-20 bg-background relative">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Centered Content */}
        <div className="hero__content flex flex-col items-center text-center">
          <h2 className="hero__eyebrow">Arya Cyber Security Solutions</h2>
          <h1 className="hero-heading">
            AI-Powered Proactive Cyber Defense for Modern Businesses
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl">
            UK-based SecOps experts delivering 24/7 monitoring, incident response, 
            and compliance—built on Microsoft security.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 btn-row">
            <Button variant="orange" asChild>
              <a href="https://forms.gle/5q4XWNmrcvGNVCnq8" target="_blank" rel="noopener noreferrer">
                Free 7-Minute Quick Cyber Security Risk Assessment
              </a>
            </Button>
            <Button variant="orange" asChild>
              <a href="/capabilities">
                View Our Capabilities
              </a>
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="pt-8">
            <div className="hero__badges-wrap">
              <div className="hero__badges-label">Trusted by enterprises, certified by:</div>
              <div className="hero__badges">
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
      </div>
    </section>;
};
export default HeroSection;