import { Star, Quote } from 'lucide-react';

const TestimonialSection = () => {
  const testimonials = [
    {
      quote: "AryaCyber transformed our security posture completely. We've seen a 70% reduction in phishing-driven incidents within just 90 days of implementation.",
      author: "Sarah Mitchell",
      role: "CISO",
      company: "TechCorp Ltd",
      outcome: "70% reduction in phishing incidents",
      timeframe: "90 days",
    },
    {
      quote: "Their Microsoft-first approach aligned perfectly with our existing infrastructure. The 24/7 SOC gives us peace of mind that we've never had before.",
      author: "David Thompson",
      role: "IT Director",
      company: "Manufacturing Solutions UK",
      outcome: "99.9% threat detection rate",
      timeframe: "6 months",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-heading mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how we've helped organizations strengthen their cybersecurity posture 
            and reduce risk across their operations.
          </p>
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
                      {testimonial.author}
                    </cite>
                    <p className="text-muted-foreground text-sm">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-primary font-semibold text-lg">
                      {testimonial.outcome}
                    </div>
                    <div className="text-muted-foreground text-sm">
                      in {testimonial.timeframe}
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