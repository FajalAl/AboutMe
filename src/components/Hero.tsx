import { ArrowDown, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat hero-section"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyber-blue rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-cyber-green rounded-full animate-pulse opacity-40 delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-cyber-purple rounded-full animate-pulse opacity-50 delay-500"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in-up">
          <span className="gradient-text">Favour Alivitsa</span>
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-medium mb-4 text-foreground/90 animate-fade-in-up delay-200">
          Backend & Full-Stack Developer · Security-First Mindset
        </h2>
        
        <p className="text-lg md:text-xl text-foreground/70 mb-8 max-w-2xl mx-auto animate-fade-in-up delay-300">
          Building transactional systems for emerging markets — from M-PESA payment integrations 
          on Google Cloud to real-time computer vision pipelines. ISO/IEC 27001:2022 Lead Auditor 
          & ISC2 Cybersecurity Candidate.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-500">
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 py-3 animate-glow-pulse"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View My Work
            <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary/50 text-primary hover:bg-primary/10 font-medium px-8 py-3"
            onClick={() => {
              const link = document.createElement('a');
              link.href = '/resume.pdf';
              link.download = 'Favour_Alivitsa_Resume.pdf';
              link.click();
            }}
          >
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;