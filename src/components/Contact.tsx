
import { Button } from '@/components/ui/button';
import { Linkedin, Mail , Github} from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Let's Work Together
          </h2>
          <p className="text-foreground/80 text-lg max-w-2xl mx-auto">
            Ready to bring your ideas to life? I'm always excited to discuss new
            projects and opportunities. Let's connect and create something
            amazing!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="animate-fade-in-left">
            <h3 className="text-2xl font-semibold mb-6 text-primary">
              Get In Touch
            </h3>

            <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Mail className="text-primary" size={20} />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-foreground/80">ls.23singh@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Linkedin className="text-primary" size={20} />
                </div>
                <div>
                  <p className="font-medium">LinkedIn</p>
                  <p className="text-foreground/80">
                    https://www.linkedin.com/in/lokesh23singh/
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Github className="text-primary" size={20} />
                </div>
                <div>
                  <p className="font-medium">GitHub</p>
                  <p className="text-foreground/80">
                    https://github.com/Giitttuu
                  </p>
                </div>
              </div>
            </div>

            <a
              href="/Lokesh_Singh_Resume.pdf"
              download="Lokesh_Singh_Resume.pdf"
              className="border-primary/30 hover:bg-primary/10 mb-4 px-4 py-2 border rounded-md inline-block"
            >
              Download CV
            </a>
          </div>

          <div className="animate-fade-in-right">
            <form className="glass-card p-6 rounded-2xl space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                  placeholder="Project inquiry"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 rounded-lg">
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
