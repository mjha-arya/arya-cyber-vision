import ContactActions from '@/components/ui/contact-actions';

const CtaBanner = () => {
  return (
    <section className="section-spacing-sm bg-light-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="section-heading element-spacing font-condensed uppercase">
          Ready to Reduce Risk?
        </h2>
        <p className="text-lg text-muted-foreground title-spacing max-w-2xl mx-auto">
          Start with a free security health check. Gain expert insight into your current posture and discover opportunities to strengthen your defences.
        </p>
        <ContactActions variant="cta" className="justify-center" />
      </div>
    </section>
  );
};

export default CtaBanner;