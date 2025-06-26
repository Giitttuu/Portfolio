
const About = () => {
  return (
    <section id="about" className="section-padding bg-card/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
              About Me
            </h2>
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                I'm Lokesh Singh, a B.Tech student specializing in Computer
                Science, passionate about building scalable web apps and
                intelligent systems. I have experience with the full MERN stack
                and have worked on real-world projects involving admin
                dashboards, chat apps, and machine learning tools.
              </p>
              <p>
                I've been selected for elite programs like Amazon ML Summer
                School and Microsoft SEFA 2024, and consistently rank in the top
                tier of coding platforms like LeetCode and Codeforces.
              </p>
              <p>
                I love turning ideas into reliable digital products and
                mentoring others through my college's coding club, always
                striving to create solutions that make a meaningful impact.
              </p>
            </div>
          </div>

          <div className="animate-fade-in-right">
            <div className="glass-card p-8 rounded-2xl">
              <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <img
                  src=".\public\Profile_Pic_Lokesh.jpg"
                  alt="Lokesh Singh"
                  className="w-40 h-40 rounded-full object-cover"
                />
              </div>
              <div className="text-center space-y-2">
                <h3 className="text-xl font-semibold text-primary">
                  Lokesh Singh
                </h3>
                <p className="text-foreground/70">
                  Full-Stack Developer & ML Enthusiast
                </p>
                <p className="text-sm text-foreground/60">
                  B.Tech Computer Science
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
