import { Star, Quote } from 'lucide-react';

const TestimonialSection = () => {
  const testimonials = [
    {
      quote: "Arya Cyber Security Consulting exceeded our expectations by delivering a highly complex project under extremely stringent timelines without compromising on quality. Their team demonstrated exceptional technical expertise, clear communication, and a proactive approach to problem-solving throughout the engagement. The result was a seamless implementation that not only met but enhanced our security posture, enabling us to stay compliant and operational under tight deadlines.",
      author: "Steve",
      role: "",
      company: "Cloud Sec Ltd, Singapore",
      outcome: "Enhanced security posture",
      timeframe: "Under tight deadlines",
    },
    {
      quote: "AryaCyber Security Solutions pinpointed critical gaps in our EDR configuration across a vast estate and delivered a comprehensive, risk‑mitigating plan. Their presentations to the Cloud Design Forum were concise, confident, and impactful under pressure. The closure notes provided were perfectly scoped—clear, to‑the‑point, and audit‑ready, without inviting unnecessary scrutiny. When rapid fixes were needed, AryaCyber's tactical guidance hit the mark, enabling us to meet urgent business demands before refining functionality. Even our toughest network‑segmentation debates were handled with candour and professionalism. Above all, their ability to listen, weigh diverse opinions, and integrate them into robust SecOps processes is truly exceptional.",
      author: "Marcus Johnson",
      role: "Lead Information Security Engineer",
      company: "Global Professional Services Firm, UK",
      outcome: "Critical gaps identified",
      timeframe: "Rapid fixes delivered",
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