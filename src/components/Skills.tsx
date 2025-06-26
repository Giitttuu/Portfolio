
const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "C/C++", level: 95 },
        { name: "Python", level: 94 },
        { name: "JavaScript", level: 85 },
        { name: "Java", level: 80 },
      ]
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "Django", level: 95 },
        { name: "React.js", level: 90 },
        { name: "Node.js", level: 90 },
        { name: "Express.js", level: 92 },
      ]
    },
    {
      title: "Databases & Tools",
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "MySQL", level: 90 },
        { name: "Tailwind CSS", level: 92 },
      ]
    },
    {
      title: "Specialized Technologies",
      skills: [
        { name: "OpenCV", level: 80 },
        { name: "Socket.IO", level: 75 },
        { name: "JWT", level: 70 },
        { name: "Arduino", level: 60 },
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-card/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Skills & Technologies
          </h2>
          <p className="text-foreground/80 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className={`glass-card p-6 rounded-2xl animate-fade-in`}
              style={{ animationDelay: `${categoryIndex * 200}ms` }}
            >
              <h3 className="text-xl font-semibold mb-6 text-primary">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-foreground/90 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-foreground/60 text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary to-blue-400 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
