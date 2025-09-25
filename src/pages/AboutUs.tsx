import PageLayout from '@/components/layout/PageLayout';
import ContactActions from '@/components/ui/contact-actions';
import founderPhotoUpdated from '@/assets/founder-photo-updated.png';
import { SOLUTIONS_DATA, CONTACT_INFO } from '@/lib/constants';

const AboutUs = () => {

  return (
    <PageLayout>
      
      {/* Hero Section - About Us */}
      <section className="section-spacing bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center title-spacing">
            <h1 className="section-heading font-condensed uppercase">About Us</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the team revolutionising cybersecurity for UK businesses with proven expertise and innovative solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Bio Section */}
      <section className="section-spacing bg-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center title-spacing">
            <h2 className="section-heading font-condensed uppercase">About the Founder</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-foreground">
                I'm Manish Jha, a SecOps architect with 9+ years securing enterprises across 120+ countries—from leading banks and insurers to media, legal, and energy majors. I build and scale incident response, threat hunting, and cloud-first security that boards trust. My vision: turn security into measurable business value—cut MTTD/MTTR, accelerate audits, and enable faster, safer growth.
              </p>
              <div className="pt-4">
                <h3 className="text-2xl font-bold text-foreground mb-2 font-condensed uppercase">Manish Jha</h3>
                <p className="text-lg text-muted-foreground">Founder & SecOps Architect</p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary">
                <img 
                  src={founderPhotoUpdated} 
                  alt="Manish Jha, Founder of Arya Cyber Security Solutions"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-spacing bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center title-spacing">
            <h2 className="section-heading font-condensed uppercase">Our Story</h2>
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg leading-relaxed text-foreground">
              Founded in UK, Arya Cyber Security Solutions exists to revolutionise the way cyber security services are provided. We deliver automation-led SecOps, pragmatic architectures, and audit-ready reporting that teams can run every day. We already serve SMBs and enterprise clients across regulated and high-growth sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-spacing bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center title-spacing">
            <h2 className="section-heading text-dark-foreground font-condensed uppercase">Why Choose AryaCyber</h2>
            <p className="text-lg text-dark-foreground/80 max-w-2xl mx-auto">
              Elite credentials, proven delivery, and trusted by industry leaders across the UK.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-primary rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold text-dark-foreground mb-4 font-condensed uppercase">Elite Credentials</h3>
              <p className="text-dark-foreground/80 leading-relaxed">
                CEH, OSCP, AZ-500, AZ-304, AZ-303, Azure AI; 30+ years combined team experience.
              </p>
              <div className="mt-4 h-0.5 bg-primary w-12 mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-primary rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold text-dark-foreground mb-4 font-condensed uppercase">Proven Delivery</h3>
              <p className="text-dark-foreground/80 leading-relaxed">
                High-stakes programs on time, on budget, audit-ready.
              </p>
              <div className="mt-4 h-0.5 bg-primary w-12 mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-primary rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold text-dark-foreground mb-4 font-condensed uppercase">Trusted by Leaders</h3>
              <p className="text-dark-foreground/80 leading-relaxed">
                Serving SMBs & enterprises in finance, legal, media, and energy.
              </p>
              <div className="mt-4 h-0.5 bg-primary w-12 mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="section-spacing bg-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center title-spacing">
            <h2 className="section-heading font-condensed uppercase">Our Approach</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Focused on outcomes, powered by automation, delivering executive clarity.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-service">
              <h3 className="text-xl font-semibold text-foreground mb-4 font-condensed uppercase">Outcomes-First KPIs</h3>
              <p className="text-muted-foreground">
                Risk reduction, audit readiness, cycle-time improvements.
              </p>
            </div>
            <div className="card-service">
              <h3 className="text-xl font-semibold text-foreground mb-4 font-condensed uppercase">Automation by Design</h3>
              <p className="text-muted-foreground">
                SOAR playbooks & integrations that free analysts for high-value work.
              </p>
            </div>
            <div className="card-service">
              <h3 className="text-xl font-semibold text-foreground mb-4 font-condensed uppercase">Executive Clarity</h3>
              <p className="text-muted-foreground">
                Board-ready reporting & prioritised remediation that stands up to audits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solutions Section */}
      <section className="section-spacing bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center title-spacing">
            <h2 className="section-heading font-condensed uppercase">Our Solutions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive cybersecurity services tailored for modern businesses.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {SOLUTIONS_DATA.map((solution, index) => (
              <div key={index} className="card-service">
                <h3 className="text-lg font-semibold text-foreground mb-3 font-condensed uppercase">{solution.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing-sm bg-light-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground element-spacing font-condensed uppercase">
            Ready to Secure Your Business?
          </h2>
          <p className="text-lg text-muted-foreground title-spacing max-w-2xl mx-auto">
            Get expert insights and strengthen your cybersecurity posture with our proven solutions.
          </p>
          <ContactActions variant="hero" className="justify-center" />
        </div>
      </section>

      {/* Mobile CTAs */}
      <ContactActions variant="mobile" />

    </PageLayout>
  );
};

export default AboutUs;