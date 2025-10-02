import { Award, Shield, CheckCircle } from 'lucide-react';
import ContactActions from '@/components/ui/contact-actions';
import heroImage from '@/assets/hero-cyber-security.jpg';
import uploadedLogo from '@/assets/uploaded-logo.png';
const HeroSection = () => {
  return <section id="home" className="hero section-spacing bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary my-12 uppercase">
          Complete Cyber Security Solutions
        </h1>
        <h2 className="text-2xl md:text-3xl text-foreground mx-auto my-6 font-semibold">
          AI-Powered Proactive Cyber Defence for Modern Businesses
        </h2>
        <p className="text-lg text-muted-foreground mx-auto my-8">
          UK-based SecOps specialists providing 24/7 monitoring, incident response, and compliance—built on Microsoft security.
        </p>
        
        <ContactActions variant="cta" />

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