import { Button } from '@/components/ui/button';
import { Mail, Phone } from 'lucide-react';
import { CONTACT_INFO, EXTERNAL_LINKS } from '@/lib/constants';

interface ContactActionsProps {
  variant?: 'mobile' | 'desktop' | 'hero';
  className?: string;
}

/**
 * Reusable contact action buttons
 * Eliminates duplicate CTA code across components
 */
const ContactActions = ({ variant = 'desktop', className = "" }: ContactActionsProps) => {
  if (variant === 'mobile') {
    return (
      <div className={`fixed bottom-0 left-0 right-0 bg-background border-t border-border p-4 md:hidden z-40 ${className}`}>
        <div className="flex gap-2">
          <Button asChild variant="coral" className="flex-1">
            <a href={`mailto:${CONTACT_INFO.email}?subject=Free%20Security%20Assessment%20Request`}>
              <Mail className="w-4 h-4 mr-2" />
              Book Assessment
            </a>
          </Button>
          <Button asChild variant="coral" className="flex-1">
            <a href={`tel:${CONTACT_INFO.phone}`}>
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </a>
          </Button>
        </div>
      </div>
    );
  }

  if (variant === 'hero') {
    return (
      <div className={`flex flex-col sm:flex-row gap-4 btn-row ${className}`}>
        <Button variant="orange" asChild>
          <a href={EXTERNAL_LINKS.riskAssessment} target="_blank" rel="noopener noreferrer">
            Free 7-Minute Quick Cyber Security Risk Assessment
          </a>
        </Button>
        <Button variant="orange" asChild>
          <a href="/capabilities">
            View Our Capabilities
          </a>
        </Button>
      </div>
    );
  }

  // Desktop variant (default)
  return (
    <div className={`flex justify-center gap-6 ${className}`}>
      <Button asChild variant="coral">
        <a href={`mailto:${CONTACT_INFO.email}?subject=Free%20Security%20Assessment%20Request`}>
          Book Free Security Assessment
        </a>
      </Button>
      <Button asChild variant="coral">
        <a href={`tel:${CONTACT_INFO.phone}`}>
          Free Consultation Call
        </a>
      </Button>
    </div>
  );
};

export default ContactActions;