import PageLayout from '@/components/layout/PageLayout';
import HeroSection from '@/components/HeroSection';
import ServicesGrid from '@/components/ServicesGrid';
import WhyUsSection from '@/components/WhyUsSection';
import TestimonialSection from '@/components/TestimonialSection';
import ToolsEcosystem from '@/components/ToolsEcosystem';
import CtaBanner from '@/components/CtaBanner';
import InsightsSection from '@/components/InsightsSection';

const Index = () => {
  return (
    <PageLayout>
      <div className="bg-card text-card-foreground w-[80%] mx-auto">
        <HeroSection />
        <ServicesGrid />
        <WhyUsSection />
        <TestimonialSection />
        <ToolsEcosystem />
        <CtaBanner />
        <InsightsSection />
      </div>
    </PageLayout>
  );
};

export default Index;
