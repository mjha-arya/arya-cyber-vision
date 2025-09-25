import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Shield, Award, Users, Mail, Phone, Globe } from 'lucide-react';
import PageLayout from '@/components/layout/PageLayout';
import { CERTIFICATIONS, CONTACT_INFO, EXTERNAL_LINKS } from '@/lib/constants';

const Capabilities = () => {
  const coreOfferings = [
    {
      title: "Penetration Testing",
      description: "Comprehensive vulnerability assessments to identify and remediate security weaknesses in your infrastructure.",
      icon: Shield
    },
    {
      title: "Secure Source Code Review",
      description: "In-depth analysis of your application code to identify security vulnerabilities and ensure best practices.",
      icon: CheckCircle
    },
    {
      title: "GDPR & Data Protection",
      description: "Compliance consulting and implementation to ensure your organization meets data protection requirements.",
      icon: Shield
    },
    {
      title: "Security Assessments",
      description: "Thorough evaluation of your current security posture with actionable recommendations for improvement.",
      icon: Award
    },
    {
      title: "ISO 27001 Readiness",
      description: "Complete preparation and guidance for ISO 27001 certification to establish robust information security management.",
      icon: CheckCircle
    },
    {
      title: "SOC 2 Compliance",
      description: "Full support for SOC 2 compliance including controls implementation and audit preparation.",
      icon: Award
    }
  ];


  return (
    <PageLayout>
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-background">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl-plus md:text-5xl-plus font-bold text-foreground mb-6 font-condensed uppercase">
              Arya Cyber Security Solutions
            </h1>
            <h2 className="text-2xl-plus md:text-3xl-plus font-semibold text-primary mb-8 font-condensed uppercase">
              Capability Overview
            </h2>
            <p className="text-lg-plus text-muted-foreground">
              Comprehensive cybersecurity services powered by AI and automation, 
              delivered by certified experts with 30+ years of combined experience.
            </p>
          </div>
        </div>
      </section>

      {/* Core Offerings */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl-plus font-bold text-foreground mb-4 font-condensed uppercase">Core Offerings</h2>
            <p className="text-lg-plus text-muted-foreground">
              Comprehensive cybersecurity services tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreOfferings.map((offering, index) => {
              const IconComponent = offering.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <IconComponent className="w-6 h-6 text-primary" />
                      <CardTitle className="text-lg-plus">{offering.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm-plus">
                      {offering.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl-plus font-bold text-foreground mb-4 font-condensed uppercase">Why Arya Cyber Security Solutions</h2>
            <p className="text-lg-plus text-muted-foreground">
              Trusted expertise and cutting-edge solutions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Certified Team */}
            <Card className="text-center">
              <CardHeader>
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl-plus">Certified Team</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {CERTIFICATIONS.map((cert, index) => (
                    <Badge key={index} variant="outline" className="mr-2 mb-2 text-sm-plus">
                      {cert}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Experience */}
            <Card className="text-center">
              <CardHeader>
                <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl-plus">Proven Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl-plus font-bold text-primary mb-2">30+</p>
                <p className="text-base-plus text-muted-foreground">
                  Years of combined experience in cybersecurity across our expert team
                </p>
              </CardContent>
            </Card>

            {/* AI & Automation */}
            <Card className="text-center">
              <CardHeader>
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl-plus">AI & Automation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base-plus text-muted-foreground">
                  AI and Automation-led Security Operations for faster response and reduced MTTR
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact & CTA */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl-plus font-bold text-foreground mb-8 font-condensed uppercase">
            Ready to Enhance Your Security Posture?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-primary mb-3" />
              <h3 className="text-lg-plus font-semibold mb-2 font-condensed uppercase">Email</h3>
              <a href={`mailto:${CONTACT_INFO.email}`} className="text-base-plus text-primary hover:underline">
                {CONTACT_INFO.email}
              </a>
            </div>
            
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-primary mb-3" />
              <h3 className="text-lg-plus font-semibold mb-2 font-condensed uppercase">Phone</h3>
              <a href={`tel:${CONTACT_INFO.phone}`} className="text-base-plus text-primary hover:underline">
                {CONTACT_INFO.phone}
              </a>
            </div>
            
            <div className="flex flex-col items-center">
              <Globe className="w-8 h-8 text-primary mb-3" />
              <h3 className="text-lg-plus font-semibold mb-2 font-condensed uppercase">Website</h3>
              <a href={CONTACT_INFO.fullWebsite} target="_blank" rel="noopener noreferrer" className="text-base-plus text-primary hover:underline">
                {CONTACT_INFO.website}
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <Button variant="orange" className="w-full py-4 text-lg font-semibold" size="lg" asChild>
              <a href={EXTERNAL_LINKS.capabilitiesAssessment} target="_blank" rel="noopener noreferrer">
                Free 7-Minute Quick Cyber Security Risk Assessment
              </a>
            </Button>
            
            <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-4 text-lg font-semibold" size="lg" asChild>
              <a href={EXTERNAL_LINKS.consultation} target="_blank" rel="noopener noreferrer">
                Book your Free Consultation Call Now
              </a>
            </Button>
          </div>
        </div>
      </section>

    </PageLayout>
  );
};

export default Capabilities;