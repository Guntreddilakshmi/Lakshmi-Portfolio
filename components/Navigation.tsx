import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Portfolio
        </div>
        
        <div className="hidden md:flex space-x-8">
          {["about", "skills", "projects", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-muted-foreground hover:text-foreground transition-colors capitalize"
            >
              {item}
            </button>
          ))}
        </div>

        <Button 
          variant="hero" 
          size="sm"
          onClick={() => scrollToSection("contact")}
        >
          Get In Touch
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;