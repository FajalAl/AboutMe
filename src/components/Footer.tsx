import { Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-border py-12 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold gradient-text mb-2">Favour Alivitsa</h3>
            <p className="text-foreground/70">
              Backend & Full-Stack Developer · Nairobi, Kenya
            </p>
          </div>

          <div className="flex justify-center space-x-8 mb-8">
            <a
              href="#home"
              className="text-foreground/60 hover:text-primary transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-foreground/60 hover:text-primary transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-foreground/60 hover:text-primary transition-colors"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="text-foreground/60 hover:text-primary transition-colors"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="text-foreground/60 hover:text-primary transition-colors"
            >
              Contact
            </a>
          </div>

          <div className="border-t border-border pt-8">
            <p className="text-foreground/60 flex items-center justify-center">
              Made with <Heart className="h-4 w-4 text-red-500 mx-2" /> by Favour Alivitsa
              <span className="mx-2">•</span>
              © 2025 All rights reserved
            </p>
          </div>
        </div>

        {/* Back to Top Button */}
        <Button
          variant="outline"
          size="icon"
          className="fixed bottom-6 right-6 rounded-full bg-background/80 backdrop-blur-sm border-primary/30 hover:bg-primary/10 hover:glow-border"
          onClick={scrollToTop}
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      </div>
    </footer>
  );
};

export default Footer;