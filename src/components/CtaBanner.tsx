import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CtaBanner = () => {
  return (
    <section className="py-16 bg-light-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="section-heading mb-4">
          Ready to reduce risk? Let's start with a free security health check.
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Get expert insights into your current security posture and discover opportunities 
          to strengthen your defenses.
        </p>
        <Button className="btn-primary text-lg px-8 py-4">
          Talk to an Expert
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </section>
  );
};

export default CtaBanner;