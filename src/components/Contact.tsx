import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "lakshmiguntreddi19@gmail.com",
      link: "mailto:lakshmiguntreddi19@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "9392462506",
      link: "tel:9392462506"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Vizianagaram, India",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-secondary/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to start your next project? Let's create something amazing together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Talk</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always interested in new opportunities and exciting projects. 
                Whether you need a website, web application, or just want to discuss 
                an idea, I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((item) => (
                <Card key={item.title} className="p-4 bg-gradient-card shadow-card border border-border">
                  <a 
                    href={item.link}
                    className="flex items-center space-x-4 hover:text-primary transition-colors"
                  >
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="font-semibold">{item.title}</div>
                      <div className="text-muted-foreground">{item.value}</div>
                    </div>
                  </a>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-8 bg-gradient-card shadow-card border border-border">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <Input placeholder="Your Name" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input type="email" placeholder="your@email.com" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <Input placeholder="Project Discussion" />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea 
                  placeholder="Tell me about your project..."
                  rows={6}
                />
              </div>

              <Button type="submit" size="lg" className="w-full flex items-center justify-center space-x-2">
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;