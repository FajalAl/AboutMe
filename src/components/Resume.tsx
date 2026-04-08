import { Download, Eye, Briefcase, GraduationCap, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Resume = () => {
  const experience = [
    {
      title: "ICT Officer Intern",
      company: "Kenya Film Classification Board (KFCB)",
      subtitle: "Presidential Digital Talent Program (PDTP), ICT Authority",
      period: "Jan 2026 – Present",
      bullets: [
        "Digitized and restructured 2+ manual compliance and booking workflows through requirements analysis and system redesign, improving audit traceability and reducing administrative processing time.",
        "Administered Google Workspace and Microsoft Dynamics NAV for 50+ staff, maintaining backend data consistency, user access controls, and system reliability.",
        "Contributed to public-sector digital transformation initiatives, translating operational constraints into structured technical requirements."
      ]
    },
    {
      title: "ICT Intern",
      company: "Echo Network Africa Foundation",
      subtitle: "Nairobi",
      period: "Mar 2025 – May 2025",
      bullets: [
        "Configured and maintained Microsoft 365 and Dynamics 365 systems supporting daily organisational operations.",
        "Standardized data entry and management workflows, reducing data inconsistencies and improving downstream reporting accuracy by 98.5%."
      ]
    },
    {
      title: "ICT & Finance Intern",
      company: "Communications Authority of Kenya",
      subtitle: "Nairobi",
      period: "Jun 2024 – Sep 2024",
      bullets: [
        "Diagnosed and resolved network connectivity issues across LAN infrastructure serving 100+ workstations, minimizing downtime.",
        "Managed user access provisioning and account lifecycle within enterprise productivity systems, enforcing role-based access compliance.",
        "Provided hardware support and performed cable testing and signal validation across physical network layers."
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Technology in Information Technology",
      school: "Technical University of Kenya",
      period: "Nov 2024",
      details: "Graduating cohort — comprehensive IT programme covering software engineering, networking, and systems administration."
    }
  ];

  const certifications = [
    {
      name: "ISO/IEC 27001:2022 Lead Auditor",
      body: "Mastermind Assurance",
      period: "Jul 2025 – Jul 2028"
    },
    {
      name: "ISC2 Cybersecurity Candidate (CC)",
      body: "International Information System Security Certification Consortium (ISC2)",
      period: "Jul 2025 – Jul 2026"
    }
  ];

  return (
    <section id="resume" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          Resume
        </h2>

        {/* Download Section */}
        <div className="text-center mb-12">
          <div className="cyber-card p-8 rounded-xl max-w-md mx-auto">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">Download My Resume</h3>
            <p className="text-foreground/70 mb-6">
              Get the full picture — experience, skills, and certifications in one document.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="animate-glow-pulse"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/resume.pdf';
                  link.download = 'Favour_Alivitsa_Resume.pdf';
                  link.click();
                }}
              >
                <Download className="mr-2 h-5 w-5" />
                Download PDF
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.open('/resume.pdf', '_blank')}
              >
                <Eye className="mr-2 h-5 w-5" />
                View Online
              </Button>
            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="mb-12">
          <div className="flex items-center mb-8">
            <Briefcase className="h-6 w-6 text-primary mr-3" />
            <h3 className="text-2xl font-semibold text-foreground">Professional Experience</h3>
          </div>
          
          <div className="space-y-8">
            {experience.map((job, index) => (
              <div key={index} className="cyber-card p-6 rounded-xl">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
                  <h4 className="text-xl font-semibold text-foreground">{job.title}</h4>
                  <span className="text-primary font-medium">{job.period}</span>
                </div>
                <p className="text-lg text-foreground/80 mb-1">{job.company}</p>
                <p className="text-sm text-foreground/50 italic mb-3">{job.subtitle}</p>
                <ul className="space-y-2">
                  {job.bullets.map((bullet, bi) => (
                    <li key={bi} className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-foreground/70 leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-12">
          <div className="flex items-center mb-8">
            <GraduationCap className="h-6 w-6 text-primary mr-3" />
            <h3 className="text-2xl font-semibold text-foreground">Education</h3>
          </div>
          
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="cyber-card p-6 rounded-xl">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h4 className="text-lg font-semibold text-foreground">{edu.degree}</h4>
                  <span className="text-primary font-medium">{edu.period}</span>
                </div>
                <p className="text-foreground/80 mb-1">{edu.school}</p>
                <p className="text-foreground/70 text-sm">{edu.details}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <div className="flex items-center mb-8">
            <Award className="h-6 w-6 text-primary mr-3" />
            <h3 className="text-2xl font-semibold text-foreground">Certifications</h3>
          </div>
          
          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <div key={index} className="cyber-card p-6 rounded-xl">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
                  <h4 className="text-lg font-semibold text-foreground">{cert.name}</h4>
                  <span className="text-primary font-medium text-sm">{cert.period}</span>
                </div>
                <p className="text-foreground/70 text-sm">{cert.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
