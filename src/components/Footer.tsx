
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { name: "GitHub", url: "#", icon: Github },
    { name: "LinkedIn", url: "#", icon: Linkedin },
    { name: "Email", url: "mailto:lokesh.singh@example.com", icon: Mail },
  ];

  return (
    <footer className="bg-card/40 border-t border-border/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">Lokesh Singh</h3>
            <p className="text-foreground/80 leading-relaxed">
              Full-Stack Developer & ML Enthusiast passionate about transforming 
              ideas into scalable digital solutions. Always learning, always building.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-primary">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-foreground/80 hover:text-primary transition-colors">About</a></li>
              <li><a href="#projects" className="text-foreground/80 hover:text-primary transition-colors">Projects</a></li>
              <li><a href="#skills" className="text-foreground/80 hover:text-primary transition-colors">Skills</a></li>
              <li><a href="#achievements" className="text-foreground/80 hover:text-primary transition-colors">Achievements</a></li>
              <li><a href="#experience" className="text-foreground/80 hover:text-primary transition-colors">Experience</a></li>
              <li><a href="#contact" className="text-foreground/80 hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-primary">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.url} 
                  className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                  title={link.name}
                >
                  <link.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-border/30 mt-8 pt-8 text-center">
          <p className="text-foreground/60">
            © {currentYear} Lokesh Singh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
