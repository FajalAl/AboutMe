import { 
  Code, 
  Database, 
  Cloud,
  Shield,
  Monitor,
  Brain,
  Server,
  Cpu
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Frameworks",
      icon: Code,
      color: "text-green-400",
      skills: [
        { name: "Python", level: 88 },
        { name: "JavaScript (ES6+)", level: 85 },
        { name: "React.js", level: 82 },
        { name: "PHP", level: 75 },
      ]
    },
    {
      title: "Backend & Databases",
      icon: Database,
      color: "text-blue-400",
      skills: [
        { name: "REST API Development", level: 90 },
        { name: "PostgreSQL", level: 85 },
        { name: "Firebase", level: 78 },
        { name: "Server-side Validation", level: 88 },
        { name: "Transaction Logging", level: 85 }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      color: "text-cyan-400",
      skills: [
        { name: "Google Cloud Platform", level: 82 },
        { name: "Git / GitHub", level: 90 },
        { name: "Deployment & Scaling", level: 78 },
      ]
    },
    {
      title: "Security & Compliance",
      icon: Shield,
      color: "text-red-400",
      skills: [
        { name: "ISO/IEC 27001:2022 ISMS", level: 88 },
        { name: "Risk Assessment", level: 85 },
        { name: "Audit Methodology", level: 82 },
        { name: "Access Management", level: 80 }
      ]
    }
  ];

  const certifications = [
    "ISO/IEC 27001:2022 Lead Auditor",
    "ISC2 Cybersecurity Candidate (CC)",
    "B.Tech Information Technology — TUK"
  ];

  const additionalSkills = [
    { icon: Brain, name: "Computer Vision (OpenCV)", description: "Real-time object detection & image processing pipelines" },
    { icon: Monitor, name: "Enterprise Systems", description: "Microsoft 365, Dynamics NAV, Dynamics 365, Google Workspace" },
    { icon: Server, name: "M-PESA Integration", description: "Safaricom Daraja API — live transaction callbacks & confirmations" },
    { icon: Cpu, name: "Infrastructure", description: "LAN diagnostics, PBX configuration, Arduino prototyping" }
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          Skills & Expertise
        </h2>

        {/* Technical Skills */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="cyber-card p-6 rounded-xl">
              <div className="flex items-center mb-6">
                <category.icon className={`h-8 w-8 ${category.color} mr-3`} />
                <h3 className="text-2xl font-semibold text-foreground">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-foreground/80 font-medium">{skill.name}</span>
                      <span className="text-foreground/60 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center mb-8 text-foreground">
            Certifications & Credentials
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-primary/10 border border-primary/20 rounded-lg px-4 py-2 text-primary font-medium hover:bg-primary/20 transition-colors"
              >
                {cert}
              </div>
            ))}
          </div>
        </div>

        {/* Additional Skills */}
        <div>
          <h3 className="text-2xl font-semibold text-center mb-8 text-foreground">
            Additional Capabilities
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalSkills.map((skill, index) => (
              <div
                key={index}
                className="cyber-card p-6 rounded-xl text-center group hover:glow-border transition-all duration-300"
              >
                <skill.icon className="h-8 w-8 text-accent mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h4 className="font-semibold mb-2 text-foreground">{skill.name}</h4>
                <p className="text-foreground/70 text-sm">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
