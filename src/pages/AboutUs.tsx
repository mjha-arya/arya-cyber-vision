import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AboutUs = () => {
  const solutions = [
    {
      name: "Penetration Testing",
      description: "Goal-oriented testing across web, mobile, API, network & cloud with risk-ranked findings and reproducible PoCs."
    },
    {
      name: "Secure Source Code Review", 
      description: "Manual + SAST/DAST integrated into the SDLC with developer-ready fixes."
    },
    {
      name: "GDPR & Data Protection",
      description: "DPIAs, RoPA, DPO-as-a-Service, vendor risk & breach response aligned to ICO expectations."
    },
    {
      name: "Security Assessments",
      description: "Risk/maturity (NIST CSF 2.0, CIS v8), cloud posture, and architecture reviews with prioritized remediation."
    },
    {
      name: "ISO 27001 Readiness",
      description: "ISMS scope, risk, SoA, controls, internal audit, and certification preparation."
    },
    {
      name: "SOC 2 Compliance", 
      description: "Gap analysis, control design, evidence management & auditor liaison for Type I/II."
    },
    {
      name: "Security Operations",
      description: "Modern SOC detection, triage, investigation, response & vuln lifecycle management."
    },
    {
      name: "Security Automation",
      description: "SOAR playbooks/orchestration that remove analyst toil and cut MTTR at scale."
    },
    {
      name: "Security Architecture",
      description: "Business-aligned Zero Trust, segmentation & cloud-native guardrails."
    },
    {
      name: "Data Loss Prevention (DLP)",
      description: "Classification, policy enforcement & encryption across endpoints, cloud & email."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header Section */}
      <header className="bg-dark py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white">About Us</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-0 pb-12 mt-16">
        {/* Hero - Founder Bio */}
        <section className="mb-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="-mt-8">
              <p className="text-lg leading-relaxed text-foreground">
                I'm Manish Jha, a SecOps architect with 9+ years securing enterprises across 120+ countries—from leading banks and insurers to media, legal, and energy majors. I build and scale incident response, threat hunting, and cloud-first security that boards trust. My vision: turn security into measurable business value—cut MTTD/MTTR, accelerate audits, and enable faster, safer growth.
              </p>
            </div>
            <div className="text-center ml-44 -mt-7">
              <div className="w-[340px] h-[480px] rounded-full overflow-hidden border-4 border-primary mx-auto mb-4">
                <img 
                  src="/src/assets/founder-photo-new.png" 
                  alt="Manish Jha, Founder of Arya Cyber Security Solutions"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Manish Jha</h2>
              <p className="text-muted-foreground">Founder & SecOps Architect</p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">Our Story</h2>
          <div className="max-w-4xl">
            <p className="text-lg leading-relaxed text-foreground">
              Founded in UK, Arya Cyber Security Solutions exists to revolutionise the way cyber security services are provided. We deliver automation-led SecOps, pragmatic architectures, and audit-ready reporting that teams can run every day. We already serve SMBs and enterprise clients across regulated and high-growth sectors.
            </p>
          </div>
        </section>

        {/* Impact & Trust */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-8">Impact & Trust</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-service">
              <h3 className="text-xl font-semibold text-foreground mb-4">Elite Credentials</h3>
              <p className="text-muted-foreground">
                CEH, OSCP, AZ-500, AZ-304, AZ-303, Azure AI; 30+ years combined team experience.
              </p>
            </div>
            <div className="card-service">
              <h3 className="text-xl font-semibold text-foreground mb-4">Proven Delivery</h3>
              <p className="text-muted-foreground">
                High-stakes programs on time, on budget, audit-ready.
              </p>
            </div>
            <div className="card-service">
              <h3 className="text-xl font-semibold text-foreground mb-4">Trusted by Leaders</h3>
              <p className="text-muted-foreground">
                Serving SMBs & enterprises in finance, legal, media, and energy.
              </p>
            </div>
          </div>
        </section>

        {/* Approach */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-8">Our Approach</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-service">
              <h3 className="text-xl font-semibold text-foreground mb-4">Outcomes-First KPIs</h3>
              <p className="text-muted-foreground">
                Risk reduction, audit readiness, cycle-time improvements.
              </p>
            </div>
            <div className="card-service">
              <h3 className="text-xl font-semibold text-foreground mb-4">Automation by Design</h3>
              <p className="text-muted-foreground">
                SOAR playbooks & integrations that free analysts for high-value work.
              </p>
            </div>
            <div className="card-service">
              <h3 className="text-xl font-semibold text-foreground mb-4">Executive Clarity</h3>
              <p className="text-muted-foreground">
                Board-ready reporting & prioritised remediation that stands up to audits.
              </p>
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-8">Our Solutions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {solutions.map((solution, index) => (
              <div key={index} className="card-service">
                <h3 className="text-lg font-semibold text-foreground mb-3">{solution.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{solution.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Sticky CTAs for Mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border p-4 md:hidden z-40">
        <div className="flex gap-2">
          <Button asChild className="btn-primary flex-1">
            <a href="mailto:manish@aryacybersec.com?subject=Free%20Security%20Assessment%20Request">
              <Mail className="w-4 h-4 mr-2" />
              Book Assessment
            </a>
          </Button>
          <Button asChild variant="outline" className="flex-1">
            <a href="tel:+447984130671">
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </a>
          </Button>
        </div>
      </div>

      {/* Desktop CTAs */}
      <section className="hidden md:block bg-dark py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center gap-6">
            <Button asChild className="btn-primary">
              <a href="mailto:manish@aryacybersec.com?subject=Free%20Security%20Assessment%20Request">
                Book Free Security Assessment
              </a>
            </Button>
            <Button asChild variant="outline" className="text-white border-white hover:bg-white hover:text-dark">
              <a href="tel:+447984130671">
                Free Consultation Call
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer Info */}
      <div className="bg-dark py-6 text-center">
        <p className="text-white text-sm">
          aryacybersec.com | manish@aryacybersec.com | +44 7984 130671
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;