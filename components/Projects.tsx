import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Gamepad2, BarChart3, ShoppingCart, Calendar } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      icon: Gamepad2,
      title: "Interactive Tic-Tac-Toe",
      description: "A modern take on the classic game with smooth animations, AI opponent, and responsive design.",
      technologies: ["JavaScript", "CSS3", "HTML5", "Game Logic"],
      gradient: "from-blue-500 to-purple-600"
    },
    {
      icon: BarChart3,
      title: "Placement Dashboard",
      description: "Comprehensive placement management system with student tracking, company coordination, and analytics.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "React", "Flask", "MySQL"],
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Platform",
      description: "Full-featured online store with cart functionality, payment integration, and admin panel.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      gradient: "from-green-500 to-blue-600"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and creative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="group overflow-hidden bg-gradient-card shadow-card border border-border hover:shadow-glow transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-6 space-y-4">
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${project.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <project.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-secondary border border-border rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4 pt-4">
                  <Button variant="outline" size="sm" className="flex items-center space-x-2">
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </Button>
                  <Button size="sm" className="flex items-center space-x-2">
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center pt-12">
          <Button variant="outline" size="lg">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;