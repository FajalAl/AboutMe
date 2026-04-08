import { useState } from 'react';
import { Mail, MapPin, Linkedin, Github, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "favouralivitsa@email.com",
      link: "mailto:favouralivitsa@email.com"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Nairobi, Kenya",
      link: "https://maps.google.com/?q=Nairobi+Kenya"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://linkedin.com/in/favouralivitsa",
      color: "hover:text-blue-400"
    },
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com/favouralivitsa",
      color: "hover:text-foreground"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          Get In Touch
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Let's Connect</h3>
              <p className="text-lg text-foreground/80 leading-relaxed mb-8">
                I'm open to discussing new opportunities, collaborating on software or 
                security projects, or just connecting with fellow engineers building for 
                African markets. Whether you have a project in mind or want to say hi, 
                I'd love to hear from you!
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="flex items-center p-4 cyber-card rounded-lg hover:glow-border transition-all duration-300 group"
                >
                  <info.icon className="h-6 w-6 text-primary mr-4 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-sm text-foreground/60 font-medium">{info.label}</p>
                    <p className="text-foreground group-hover:text-primary transition-colors">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-foreground">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 cyber-card rounded-lg ${social.color} transition-all duration-300 hover:glow-border hover:scale-110`}
                    title={social.label}
                  >
                    <social.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="cyber-card p-8 rounded-xl">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-2">
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-background/50 border-border focus:border-primary"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-background/50 border-border focus:border-primary"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground/80 mb-2">
                  Subject *
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-background/50 border-border focus:border-primary"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground/80 mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-background/50 border-border focus:border-primary resize-none"
                  placeholder="Tell me more about your project or question..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full animate-glow-pulse"
              >
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;