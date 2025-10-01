import PageLayout from '@/components/layout/PageLayout';
import ServiceCard from '@/components/ui/service-card';
import { SERVICES_DATA } from '@/lib/constants';

const Services = () => {

  return (
    <PageLayout>
      <div className="bg-card text-card-foreground w-[80%] mx-auto">
      
      {/* Hero Section */}
      <section className="section-spacing px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="section-heading title-spacing font-condensed uppercase">
            Comprehensive Cybersecurity Services
          </h1>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            From proactive monitoring to incident response, we provide enterprise-grade
            security solutions tailored for modern businesses.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-spacing-sm px-4">
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
      </div>
    </PageLayout>
  );
};

export default Services;