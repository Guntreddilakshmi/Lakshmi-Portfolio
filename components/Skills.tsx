import { Card } from "@/components/ui/card";
import { Code, Palette, Smartphone, Zap } from "lucide-react";

const Skills = () => {
  const skills = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "HTML, CSS, JavaScript",
      technologies: ["HTML", "CSS", "JavaScript"]
    },
    {
      icon: Palette,
      title: "Programming Languages",
      description: "Java, SQL",
      technologies: ["Java", "SQL"]
    },
    {
      icon: Smartphone,
      title: "Frameworks",
      description: "React.js",
      technologies: ["React.js"]
    },
    {
      icon: Zap,
      title: "Tools",
      description: "GitHub, VS Code",
      technologies: ["GitHub", "VS Code"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-secondary/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card 
              key={skill.title}
              className="p-6 bg-gradient-card shadow-card border border-border hover:shadow-glow transition-all duration-300 group hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <skill.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{skill.description}</p>
                </div>

                <div className="flex flex-wrap gap-2 justify-center">
                  {skill.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 bg-muted/50 rounded text-xs border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;