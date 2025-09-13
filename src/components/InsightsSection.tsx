import { Calendar, ArrowRight } from 'lucide-react';

const InsightsSection = () => {
  const posts = [
    {
      title: "Microsoft Defender for Business: Small Business Security Guide",
      excerpt: "Learn how to implement comprehensive endpoint protection for small to medium businesses using Microsoft's latest security tools.",
      tag: "Blue Team",
      date: "December 8, 2024",
      readTime: "5 min read",
    },
    {
      title: "ISO 27001 Implementation: A Practical Roadmap",
      excerpt: "Step-by-step guide to achieving ISO 27001 certification, including common pitfalls and best practices from our compliance experts.",
      tag: "Compliance",
      date: "December 5, 2024",
      readTime: "8 min read",
    },
    {
      title: "Threat Intelligence Report: Q4 2024 Cybersecurity Trends",
      excerpt: "Analysis of emerging threats, attack vectors, and defensive strategies based on real-world incident response data.",
      tag: "Threat Intel",
      date: "December 1, 2024",
      readTime: "12 min read",
    },
  ];

  const tagColors = {
    "Blue Team": "bg-mid/10 text-mid",
    "Compliance": "bg-secondary/10 text-secondary",
    "Threat Intel": "bg-primary/10 text-primary",
  };

  return (
    <section id="insights" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-heading mb-4">
            Latest Security Insights
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay informed with expert analysis, best practices, and the latest 
            cybersecurity trends from our team of security professionals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article key={index} className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-md transition-shadow group cursor-pointer">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${tagColors[post.tag as keyof typeof tagColors]}`}>
                    {post.tag}
                  </span>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {post.date}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-dark mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    {post.readTime}
                  </span>
                  <div className="flex items-center text-primary group-hover:text-mid transition-colors">
                    <span className="text-sm font-medium">Read more</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;