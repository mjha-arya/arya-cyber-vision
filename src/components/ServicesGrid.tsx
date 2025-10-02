import ServiceCard from '@/components/ui/service-card';
import { SERVICES_DATA } from '@/lib/constants';

const ServicesGrid = () => {

  return (
    <section id="services" className="section-spacing bg-light-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center title-spacing">
          <h2 className="section-heading mb-4 font-condensed uppercase">
            Comprehensive Cybersecurity Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From proactive monitoring to rapid response, we deliver enterprise-grade security tailored to modern business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES_DATA.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              variant="grid"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;