import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ServicesGrid from '@/components/ServicesGrid';
import WhyUsSection from '@/components/WhyUsSection';
import TestimonialSection from '@/components/TestimonialSection';
import ToolsEcosystem from '@/components/ToolsEcosystem';
import CtaBanner from '@/components/CtaBanner';
import InsightsSection from '@/components/InsightsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ServicesGrid />
      <WhyUsSection />
      <TestimonialSection />
      <ToolsEcosystem />
      <CtaBanner />
      <InsightsSection />
      <Footer />
    </div>
  );
};

export default Index;
