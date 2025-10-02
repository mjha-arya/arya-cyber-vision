import { Star, Quote } from 'lucide-react';

const TestimonialSection = () => {
  const testimonials = [
    {
      quote: "Arya Cyber Security Consulting exceeded expectations by delivering a highly complex project under stringent deadlines without compromising on quality.",
      author: "Steve Kennedy",
      role: "",
      company: "Cloud Sec Ltd, Singapore",
      outcome: "Strengthened security posture",
      timeframe: "Delivered on time and to specification",
    },
    {
      quote: "AryaCyber identified critical gaps in our EDR configuration and delivered a practical, risk-reducing plan. Their closure notes were concise, audit-compliant, and business-ready.",
      author: "Marcus Johnson",
      role: "Lead Engineer",
      company: "Global Professional Services Firm, UK",
      outcome: "Critical vulnerabilities identified",
      timeframe: "Rapid, effective remediation",
    },
  ];

  return (
    <section className="section-spacing bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center title-spacing">
          <h2 className="section-heading mb-4 font-condensed uppercase">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card border border-border rounded-2xl p-8 shadow-sm">
              <div className="flex items-center mb-6">
                <Quote className="w-8 h-8 text-primary mr-3" />
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              
              <blockquote className="text-lg text-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="border-t border-border pt-6">
                <div className="flex justify-between items-start">
                  <div>
                    <cite className="font-semibold text-dark not-italic">
                      {testimonial.author}{testimonial.role && `, ${testimonial.role}`}
                    </cite>
                    <p className="font-semibold text-dark not-italic">
                      {testimonial.company}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-primary font-semibold text-lg">
                      {testimonial.outcome}
                    </div>
                    <div className="text-primary font-semibold text-lg">
                      {testimonial.timeframe}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;