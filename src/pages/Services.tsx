import PageLayout from '@/components/layout/PageLayout';
import ServiceCard from '@/components/ui/service-card';
import { SERVICES_DATA } from '@/lib/constants';

const Services = () => {

  return (
    <PageLayout>
      
      {/* Hero Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-foreground mb-6 font-condensed uppercase">
            Comprehensive Cybersecurity Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            From proactive monitoring to incident response, we provide enterprise-grade
            security solutions tailored for modern businesses.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES_DATA.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                variant="detailed"
              />
            ))}
          </div>
        </div>
      </section>

    </PageLayout>
  );
};

export default Services;