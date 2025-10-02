import { Shield, Search, AlertTriangle, FileCheck, FileText } from 'lucide-react';

// Service data - single source of truth
export const SERVICES_DATA = [
  {
    icon: Shield,
    title: "Managed SOC",
    description: "24/7 detection & response with Microsoft Sentinel and Defender.",
    features: ["Microsoft Sentinel", "Defender", "Entra"],
  },
  {
    icon: Search,
    title: "Penetration Testing",
    description: "Real-world attack simulations across web, cloud, and people.",
    features: ["Web", "Cloud", "Social Engineering"],
  },
  {
    icon: AlertTriangle,
    title: "Incident Response",
    description: "Fast triage, containment, and forensic investigation.",
    features: ["IR Retainer", "1-hour SLA", "Forensics"],
  },
  {
    icon: FileCheck,
    title: "Compliance & Governance",
    description: "Accelerate ISO 27001, Cyber Essentials Plus, and NCSC CAF readiness.",
    features: ["ISO 27001", "NCSC CAF", "Cyber Essentials Plus"],
  },
];

// Contact information - single source of truth
export const CONTACT_INFO = {
  email: "manish@aryacybersec.com",
  phone: "+447984130671",
  website: "aryacybersec.com",
  fullWebsite: "https://aryacybersec.com",
  location: "United Kingdom",
  locationDescription: "Serving businesses nationwide"
};

// External links
export const EXTERNAL_LINKS = {
  riskAssessment: "https://forms.gle/5q4XWNmrcvGNVCnq8",
  consultation: "https://calendar.app.google/4gwrjsKJ9k862yJbA",
  capabilitiesAssessment: "https://forms.gle/Rg1Y6zaobDXizAgk7"
};

// Certifications data
export const CERTIFICATIONS = [
  "CEH (Certified Ethical Hacker)",
  "OSCP (Offensive Security Certified Professional)", 
  "AZ-500 (Microsoft Azure Security Technologies)",
  "AZ-304 (Microsoft Azure Architect Design)",
  "AZ-303 (Microsoft Azure Architect Technologies)",
  "Azure AI"
];

// Solutions data for About Us page
export const SOLUTIONS_DATA = [
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