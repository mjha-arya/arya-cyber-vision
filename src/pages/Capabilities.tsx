import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Shield, Award, Users, Mail, Phone, Globe } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

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

  const certifications = [
    "CEH (Certified Ethical Hacker)",
    "OSCP (Offensive Security Certified Professional)",
    "AZ-500 (Microsoft Azure Security Technologies)",
    "AZ-304 (Microsoft Azure Architect Design)",
    "AZ-303 (Microsoft Azure Architect Technologies)",
    "Azure AI"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Arya Cyber Security Solutions
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-8">
              Capability Overview
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
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
            <h2 className="text-3xl font-bold text-foreground mb-4">Core Offerings</h2>
            <p className="text-lg text-muted-foreground">
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
                      <CardTitle className="text-lg">{offering.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm">
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
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Arya Cyber Security Solutions</h2>
            <p className="text-lg text-muted-foreground">
              Trusted expertise and cutting-edge solutions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Certified Team */}
            <Card className="text-center">
              <CardHeader>
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Certified Team</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {certifications.map((cert, index) => (
                    <Badge key={index} variant="outline" className="mr-2 mb-2">
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
                <CardTitle>Proven Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-primary mb-2">30+</p>
                <p className="text-muted-foreground">
                  Years of combined experience in cybersecurity across our expert team
                </p>
              </CardContent>
            </Card>

            {/* AI & Automation */}
            <Card className="text-center">
              <CardHeader>
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>AI & Automation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
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
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Ready to Enhance Your Security Posture?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-semibold mb-2">Email</h3>
              <a href="mailto:manish@aryacybersec.com" className="text-primary hover:underline">
                manish@aryacybersec.com
              </a>
            </div>
            
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-semibold mb-2">Phone</h3>
              <a href="tel:+447984130671" className="text-primary hover:underline">
                +44 7984 130671
              </a>
            </div>
            
            <div className="flex flex-col items-center">
              <Globe className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-semibold mb-2">Website</h3>
              <a href="https://aryacybersec.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                aryacybersec.com
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg font-semibold" size="lg" asChild>
              <a href="https://forms.gle/Rg1Y6zaobDXizAgk7" target="_blank" rel="noopener noreferrer">
                Check out the Free 7-Minute Quick Cyber Security Risk Assessment
              </a>
            </Button>
            
            <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-4 text-lg font-semibold" size="lg" asChild>
              <a href="https://calendar.app.google/4gwrjsKJ9k862yJbA" target="_blank" rel="noopener noreferrer">
                Book your Free Consultation Call Now
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Capabilities;