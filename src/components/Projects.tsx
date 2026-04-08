import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import project1Image from '@/assets/project-1.jpg';
import project2Image from '@/assets/project-2.jpg';

const Projects = () => {
  const projects = [
    {
      title: "E-Receipts Web Application",
      description: "A production-ready full-stack application enabling businesses to issue digital receipts with real-time M-PESA payment synchronization. Engineered RESTful payment confirmation APIs integrated with Safaricom's M-PESA Daraja platform, handling live transaction callbacks. Designed a normalized PostgreSQL schema ensuring persistent, auditable financial records across concurrent payment events. Deployed and scaled on Google Cloud with stable uptime under test load conditions.",
      image: project1Image,
      tools: ["React", "PostgreSQL", "Google Cloud", "M-PESA API", "REST API"],
      githubUrl: "https://github.com/favouralivitsa",
      featured: true
    },
    {
      title: "Computer Vision Object Detection App",
      description: "A real-time object detection pipeline for image-based monitoring, optimized for low-resource hardware environments. Developed a frame preprocessing and bounding-box classification pipeline achieving sub-100ms detection latency per frame. Tuned model and runtime parameters to sustain consistent frame rates on resource-constrained devices, broadening deployment viability.",
      image: project2Image,
      tools: ["Python", "OpenCV", "Feature-based Image Processing"],
      githubUrl: "https://github.com/favouralivitsa",
      featured: true
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          Featured Projects
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="cyber-card rounded-xl overflow-hidden group"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-foreground/70 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tools */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tools.map((tool, toolIndex) => (
                    <span
                      key={toolIndex}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View on GitHub
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Projects */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-primary/50 text-primary hover:bg-primary/10"
            onClick={() => window.open('https://github.com/favouralivitsa', '_blank')}
          >
            <Github className="mr-2 h-5 w-5" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
