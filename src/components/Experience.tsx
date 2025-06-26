
const Experience = () => {
  const experiences = [
    {
      title: "Software Developer Intern",
      company: "Graphic Era Hill University",
      duration: "2024",
      description: [
        "Developed a comprehensive admin dashboard system using Django and React.js",
        "Created secure RESTful APIs with role-based access control",
        "Implemented data visualization features for administrative insights",
        "Collaborated with cross-functional teams to deliver scalable solutions"
      ],
      technologies: ["Django", "React.js", "PostgreSQL", "RESTful APIs", "JWT"]
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Professional Experience
          </h2>
          <p className="text-foreground/80 text-lg max-w-2xl mx-auto">
            Real-world experience building scalable applications and working with teams
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <div 
              key={experience.title}
              className={`glass-card p-8 rounded-2xl animate-fade-in`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-semibold text-primary mb-2">
                    {experience.title}
                  </h3>
                  <p className="text-xl text-foreground/90 mb-2">
                    {experience.company}
                  </p>
                  <p className="text-foreground/60">
                    {experience.duration}
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <ul className="space-y-3">
                  {experience.description.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-foreground/80 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
