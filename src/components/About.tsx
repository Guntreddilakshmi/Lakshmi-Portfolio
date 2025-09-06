import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating exceptional digital experiences through code
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              I specialize in building responsive and interactive web applications 
              using <span className="text-primary font-semibold">HTML, CSS, and JavaScript</span>. 
              My projects range from simple games like Tic-Tac-Toe to complete websites 
              and dashboards.
            </p>
            
            <p className="text-lg leading-relaxed">
              I focus on creating <span className="text-accent font-semibold">user-friendly interfaces</span>, 
              smooth navigation, and optimized performance. By combining clean code with 
              modern design practices, I ensure that every project is not only functional 
              but also visually engaging across all devices.
            </p>

          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card className="p-6 bg-gradient-card shadow-card border border-border">
              <div className="text-3xl font-bold text-primary mb-2">1</div>
              <div className="text-muted-foreground">Year Experience</div>
            </Card>
            <Card className="p-6 bg-gradient-card shadow-card border border-border">
              <div className="text-3xl font-bold text-accent mb-2">50+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </Card>
            <Card className="p-6 bg-gradient-card shadow-card border border-border">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </Card>
            <Card className="p-6 bg-gradient-card shadow-card border border-border">
              <div className="text-3xl font-bold text-accent mb-2">24/7</div>
              <div className="text-muted-foreground">Support Available</div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;