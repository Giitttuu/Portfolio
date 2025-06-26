
const Achievements = () => {
  const achievements = [
    {
      title: "Amazon ML Summer School 2024",
      description: "Selected from 200+ colleges across India for this prestigious machine learning program",
      icon: "🏆",
      year: "2024"
    },
    {
      title: "Microsoft SEFA 2024",
      description: "Selected from 10,000+ applicants for Microsoft's Software Engineering Foundation Academy",
      icon: "🚀",
      year: "2024"
    },
    {
      title: "LeetCode Top 11%",
      description: "Solved 800+ problems and achieved top 11% ranking globally",
      icon: "💻",
      year: "2024"
    },
    {
      title: "WeCode Hackathon - Rank 3",
      description: "Secured 3rd position in competitive programming hackathon",
      icon: "🥉",
      year: "2024"
    }
  ];

  return (
    <section id="achievements" className="section-padding bg-card/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Achievements & Recognition
          </h2>
          <p className="text-foreground/80 text-lg max-w-2xl mx-auto">
            Key milestones and recognitions that showcase my commitment to excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <div 
              key={achievement.title}
              className={`glass-card p-6 rounded-2xl hover:scale-105 transition-all duration-300 animate-fade-in`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex items-start space-x-4">
                <div className="text-3xl">{achievement.icon}</div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-primary">
                      {achievement.title}
                    </h3>
                    <span className="text-sm text-foreground/60 bg-primary/10 px-2 py-1 rounded">
                      {achievement.year}
                    </span>
                  </div>
                  <p className="text-foreground/80 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
