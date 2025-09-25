import { Shield, Search, AlertTriangle, FileCheck, ArrowRight } from 'lucide-react';

const ServicesGrid = () => {
  const services = [
    {
      icon: Shield,
      title: "Managed SOC",
      description: "24/7 detection & response powered by Microsoft Sentinel and Defender.",
      features: ["Microsoft Sentinel", "Defender", "Entra"],
    },
    {
      icon: Search,
      title: "Penetration Testing",
      description: "Real-world attack simulation across web, cloud, and people.",
      features: ["Web", "Cloud", "Social Engineering"],
    },
    {
      icon: AlertTriangle,
      title: "Incident Response",
      description: "Breach triage, containment, forensics—fast.",
      features: ["IR Retainer", "1-hour SLA", "Forensics"],
    },
    {
      icon: FileCheck,
      title: "Compliance & Governance",
      description: "Accelerate ISO 27001, Cyber Essentials Plus, and NCSC CAF.",
      features: ["ISO 27001", "NCSC CAF", "Cyber Essentials Plus"],
    },
  ];

  return (
    <section id="services" className="py-20 bg-light-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-heading mb-4 font-condensed uppercase">
            Comprehensive Cybersecurity Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From proactive monitoring to incident response, we provide enterprise-grade 
            security solutions tailored for modern businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card-service group cursor-pointer">
              <div className="mb-6">
                <div className="w-12 h-12 bg-mid/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-mid" />
                </div>
                <h3 className="text-xl font-semibold text-dark mb-3 font-condensed uppercase">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground">
                      • {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex items-center text-primary group-hover:text-mid transition-colors">
                <span className="text-sm font-medium">Learn more</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;