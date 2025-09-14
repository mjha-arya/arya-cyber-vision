import { Shield, Search, AlertTriangle, FileText } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: "Managed SOC",
      description: "24/7 detection & response powered by Microsoft Sentinel and Defender.",
      features: [
        "Microsoft Sentinel",
        "Defender",
        "Entra"
      ]
    },
    {
      icon: Search,
      title: "Penetration Testing",
      description: "Real-world attack simulation across web, cloud, and people.",
      features: [
        "Web",
        "Cloud",
        "Social Engineering"
      ]
    },
    {
      icon: AlertTriangle,
      title: "Incident Response",
      description: "Breach triage, containment, forensics—fast.",
      features: [
        "IR Retainer",
        "1-hour SLA",
        "Forensics"
      ]
    },
    {
      icon: FileText,
      title: "Compliance & Governance",
      description: "Accelerate ISO 27001, Cyber Essentials Plus, and NCSC CAF.",
      features: [
        "ISO 27001",
        "NCSC CAF",
        "Cyber Essentials Plus"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-foreground mb-6">
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
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="h-full border border-border hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex flex-col h-full">
                      {/* Icon */}
                      <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                        <IconComponent className="w-8 h-8 text-primary" />
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-xl font-bold text-foreground mb-4">
                        {service.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-muted-foreground mb-6 flex-grow">
                        {service.description}
                      </p>
                      
                      {/* Features */}
                      <div className="space-y-2 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                            {feature}
                          </div>
                        ))}
                      </div>
                      
                      {/* Learn More Link */}
                      <a 
                        href="#contact" 
                        className="text-primary font-medium hover:text-primary/80 transition-colors inline-flex items-center"
                      >
                        Learn more
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;