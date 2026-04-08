import { Shield, Cloud, Code, Award } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.jpg';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Developer",
      description: "Production-grade apps integrating M-PESA payments on Google Cloud with React & PostgreSQL"
    },
    {
      icon: Shield,
      title: "Security-First Engineer",
      description: "ISO/IEC 27001:2022 Lead Auditor & ISC2 Cybersecurity Candidate bringing ISMS rigour to every build"
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Google Cloud Platform deployments, Git workflows, and scalable backend architecture"
    },
    {
      icon: Award,
      title: "Applied AI",
      description: "Real-time computer vision pipelines with OpenCV optimized for low-resource hardware environments"
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          About Me
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo and Bio */}
          <div className="space-y-8">
            <div className="relative w-80 h-80 mx-auto lg:mx-0">
              <img
                src={profilePhoto}
                alt="Favour Alivitsa"
                className="w-full h-full object-cover rounded-2xl cyber-card"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-cyber-blue/20 to-cyber-purple/20"></div>
            </div>
            
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-semibold mb-4 text-foreground">
                Building for Emerging Markets
              </h3>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Hi, I'm Favour — a backend and full-stack developer based in Nairobi, Kenya. 
                I specialise in transactional systems for emerging markets, having delivered a 
                production-grade application integrating M-PESA payment infrastructure on Google 
                Cloud and developed real-time computer vision pipelines optimized for low-resource 
                environments.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed mt-4">
                I hold an ISO/IEC 27001:2022 Lead Auditor certification and an ISC2 Cybersecurity 
                candidacy, which means I combine solid software delivery with a security-first 
                engineering mindset. Currently serving as an ICT Officer Intern at the Kenya Film 
                Classification Board under the Presidential Digital Talent Program.
              </p>
            </div>
          </div>

          {/* Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="cyber-card p-6 rounded-xl text-center group hover:glow-border transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4 group-hover:bg-primary/20 transition-colors">
                  <highlight.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-foreground">
                  {highlight.title}
                </h4>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;