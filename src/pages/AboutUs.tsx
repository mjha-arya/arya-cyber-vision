import PageLayout from '@/components/layout/PageLayout';
import ContactActions from '@/components/ui/contact-actions';
import founderPhotoUpdated from '@/assets/founder-photo-updated.png';
import { SOLUTIONS_DATA, CONTACT_INFO } from '@/lib/constants';

const AboutUs = () => {

  return (
    <PageLayout>
      
      {/* Header Section */}
      <header className="bg-dark py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl-plus font-bold text-white font-condensed uppercase">About Us</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 section-spacing">
        {/* Hero - Founder Bio */}
        <section className="content-spacing">
          <h2 className="text-2xl-plus font-bold text-foreground title-spacing text-center font-condensed uppercase">About the Founder</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg-plus leading-relaxed text-foreground">
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
        </section>

        {/* Story Section */}
        <section className="content-spacing">
          <h2 className="text-2xl-plus font-bold text-foreground title-spacing text-center font-condensed uppercase">Our Story</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg-plus leading-relaxed text-foreground text-center">
              Founded in UK, Arya Cyber Security Solutions exists to revolutionise the way cyber security services are provided. We deliver automation-led SecOps, pragmatic architectures, and audit-ready reporting that teams can run every day. We already serve SMBs and enterprise clients across regulated and high-growth sectors.
            </p>
          </div>
        </section>

        {/* Impact & Trust */}
        <section className="content-spacing">
          <h2 className="text-2xl-plus font-bold text-foreground title-spacing text-center font-condensed uppercase">Impact & Trust</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-service">
              <h3 className="text-xl-plus font-semibold text-foreground mb-4 font-condensed uppercase">Elite Credentials</h3>
              <p className="text-base-plus text-muted-foreground">
                CEH, OSCP, AZ-500, AZ-304, AZ-303, Azure AI; 30+ years combined team experience.
              </p>
            </div>
            <div className="card-service">
              <h3 className="text-xl-plus font-semibold text-foreground mb-4 font-condensed uppercase">Proven Delivery</h3>
              <p className="text-base-plus text-muted-foreground">
                High-stakes programs on time, on budget, audit-ready.
              </p>
            </div>
            <div className="card-service">
              <h3 className="text-xl-plus font-semibold text-foreground mb-4 font-condensed uppercase">Trusted by Leaders</h3>
              <p className="text-base-plus text-muted-foreground">
                Serving SMBs & enterprises in finance, legal, media, and energy.
              </p>
            </div>
          </div>
        </section>

        {/* Approach */}
        <section className="content-spacing">
          <h2 className="text-2xl-plus font-bold text-foreground title-spacing text-center font-condensed uppercase">Our Approach</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-service">
              <h3 className="text-xl-plus font-semibold text-foreground mb-4 font-condensed uppercase">Outcomes-First KPIs</h3>
              <p className="text-base-plus text-muted-foreground">
                Risk reduction, audit readiness, cycle-time improvements.
              </p>
            </div>
            <div className="card-service">
              <h3 className="text-xl-plus font-semibold text-foreground mb-4 font-condensed uppercase">Automation by Design</h3>
              <p className="text-base-plus text-muted-foreground">
                SOAR playbooks & integrations that free analysts for high-value work.
              </p>
            </div>
            <div className="card-service">
              <h3 className="text-xl-plus font-semibold text-foreground mb-4 font-condensed uppercase">Executive Clarity</h3>
              <p className="text-base-plus text-muted-foreground">
                Board-ready reporting & prioritised remediation that stands up to audits.
              </p>
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section className="content-spacing">
          <h2 className="text-2xl-plus font-bold text-foreground title-spacing text-center font-condensed uppercase">Our Solutions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {SOLUTIONS_DATA.map((solution, index) => (
              <div key={index} className="card-service">
                <h3 className="text-lg-plus font-semibold text-foreground mb-3 font-condensed uppercase">{solution.name}</h3>
                <p className="text-sm-plus text-muted-foreground leading-relaxed">{solution.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Sticky CTAs for Mobile */}
      <ContactActions variant="mobile" />

      {/* Desktop CTAs */}
      <section className="hidden md:block bg-light-bg section-spacing">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground element-spacing font-condensed uppercase">
            Ready to Secure Your Business?
          </h2>
          <p className="text-lg text-muted-foreground title-spacing max-w-2xl mx-auto">
            Get expert insights and strengthen your cybersecurity posture with our proven solutions.
          </p>
          <ContactActions variant="desktop" />
        </div>
      </section>

    </PageLayout>
  );
};

export default AboutUs;