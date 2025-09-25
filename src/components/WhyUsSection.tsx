import { Clock, Shield, TrendingUp } from 'lucide-react';

const WhyUsSection = () => {
  const pillars = [
    {
      icon: Clock,
      title: "24/7 Monitoring by UK-based SOC",
      description: "Round-the-clock protection with local expertise and rapid response times.",
    },
    {
      icon: Shield,
      title: "Microsoft-first Security Stack",
      description: "Built on industry-leading Microsoft security technologies and best practices.",
    },
    {
      icon: TrendingUp,
      title: "Measurable Risk Reduction",
      description: "Quantifiable security improvements with detailed reporting and metrics.",
    },
  ];

  return (
    <section className="section-spacing bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center title-spacing">
          <h2 className="section-heading mb-4 text-dark-foreground font-condensed uppercase">
            Why Leading Businesses Choose AryaCyber
          </h2>
          <p className="text-lg text-dark-foreground/80 max-w-2xl mx-auto">
            Experience the difference of working with a dedicated UK cybersecurity partner 
            committed to your business success.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <pillar.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-dark-foreground mb-4 font-condensed uppercase">
                {pillar.title}
              </h3>
              <p className="text-dark-foreground/80 leading-relaxed">
                {pillar.description}
              </p>
              <div className="mt-4 h-0.5 bg-primary w-12 mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;