import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Chatify",
      description:
        "A real-time chat application built with Socket.IO, featuring instant messaging, user authentication, and responsive design. Supports multiple chat rooms and online status indicators.",
      tech: ["React.js", "Node.js", "Socket.IO", "MongoDB"],
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      link: "https://chatify-chat-app.onrender.com/",
    },
    {
      title: "Saraswati Quiz Platform",
      description:
        "An intelligent quiz platform with adaptive questioning, real-time scoring, and comprehensive analytics. Features role-based access for students and educators.",
      tech: ["React.js", "Django", "PostgreSQL", "JWT"],
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop",
      link: "https://github.com/GEHU-Opensource",
    },
    {
      title: "Face Tracking System",
      description:
        "Computer vision project using OpenCV for real-time face detection and tracking, integrated with Arduino for hardware control and automation responses.",
      tech: ["Python", "OpenCV", "Arduino", "Computer Vision"],
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
      link: "#",
    },
    {
      title: "Admin Dashboard System",
      description:
        "Comprehensive admin dashboard with role-based access control, data visualization, and secure API endpoints. Built during internship at Graphic Era Hill University.",
      tech: ["Django", "React.js", "PostgreSQL", "RESTful APIs"],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      link: "#",
    },
    {
      title: "Section Allocation System",
      description:
        "Automated system for efficient student section allocation based on multiple criteria, featuring conflict resolution and optimization algorithms.",
      tech: ["Python", "Django", "MySQL", "Algorithm Design"],
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Featured Projects
          </h2>
          <p className="text-foreground/80 text-lg max-w-2xl mx-auto">
            A showcase of my recent work, featuring innovative solutions and
            cutting-edge technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="glass-card rounded-2xl overflow-hidden group hover:scale-105 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-primary">
                  {project.title}
                </h3>
                <p className="text-foreground/80 mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    className="w-full border-primary/30 hover:bg-primary/10"
                  >
                    View Project
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
