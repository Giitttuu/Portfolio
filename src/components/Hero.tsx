
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm{' '}
            <span className="gradient-text">Lokesh Singh</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/80 mb-4 max-w-3xl mx-auto leading-relaxed animate-fade-in animation-delay-200">
            Full-Stack Developer & 
            <span className="text-primary font-medium"> ML Enthusiast</span>
          </p>
          
          <p className="text-lg md:text-xl text-foreground/70 mb-8 max-w-2xl mx-auto animate-fade-in animation-delay-400">
            "Transforming ideas into scalable digital solutions."
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in animation-delay-600">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Let's Connect
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-border hover:bg-accent px-8 py-3 rounded-full"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-primary" size={24} />
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-primary/20 rounded-full animate-float" />
      <div className="absolute top-40 right-20 w-6 h-6 bg-primary/10 rounded-full animate-float animation-delay-200" />
      <div className="absolute bottom-32 left-20 w-3 h-3 bg-primary/30 rounded-full animate-float animation-delay-400" />
    </section>
  );
};

export default Hero;
