import { LucideIcon, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  variant?: 'grid' | 'detailed';
  className?: string;
}

/**
 * Reusable service card component with consistent styling
 * Supports different variants for various layouts
 */
const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description, 
  features, 
  variant = 'grid',
  className = ""
}: ServiceCardProps) => {
  if (variant === 'detailed') {
    return (
      <Card className={`h-full border border-border hover:shadow-lg transition-shadow ${className}`}>
        <CardContent className="p-8">
          <div className="flex flex-col h-full">
            {/* Icon */}
            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
              <Icon className="w-8 h-8 text-primary" />
            </div>
            
            {/* Title */}
            <h3 className="text-xl font-bold text-foreground mb-4 font-condensed uppercase">
              {title}
            </h3>
            
            {/* Description */}
            <p className="text-muted-foreground mb-6 flex-grow">
              {description}
            </p>
            
            {/* Features */}
            <div className="space-y-2 mb-6">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center text-sm text-muted-foreground">
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
  }

  // Grid variant (default)
  return (
    <div className={`card-service group cursor-pointer ${className}`}>
      <div className="mb-6">
        <div className="w-12 h-12 bg-mid/10 rounded-lg flex items-center justify-center mb-4">
          <Icon className="w-6 h-6 text-mid" />
        </div>
        <h3 className="text-xl font-semibold text-dark mb-3 font-condensed uppercase">
          {title}
        </h3>
        <p className="text-muted-foreground mb-4">
          {description}
        </p>
        <ul className="space-y-2 mb-6">
          {features.map((feature, idx) => (
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
  );
};

export default ServiceCard;