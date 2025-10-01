import { Award, Shield, CheckCircle } from 'lucide-react';
import ContactActions from '@/components/ui/contact-actions';
import heroImage from '@/assets/hero-cyber-security.jpg';
import uploadedLogo from '@/assets/uploaded-logo.png';
const HeroSection = () => {
  return <section id="home" className="hero section-spacing bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="hero-heading font-condensed uppercase leading-[0.9] max-w-[80%] mx-auto">COMPLETE CYBER SECURITY SOLUTIONS.</h1>
        <p className="text-lg text-muted-foreground mx-auto">UK-based Security Operation Experts.
Integrated with AI.
Delivering 24.7 Monitoring, Incident Response, and Compliance.
Built on Microsoft security.</p>
        
        <ContactActions variant="hero" />

        {/* Trust Badges */}
        <div className="pt-8">
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
    </section>;
};
export default HeroSection;