import { Mail, Github, Linkedin, Send } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com/JayG1711",
      username: "@JayG1711"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/jay-gurav/",
      username: "Jay Gurav"
    },
    {
      icon: Mail,
      label: "TryHackMe",
      url: "https://tryhackme.com/p/Jayg17",
      username: "Jayg17"
    },
    {
      icon: Mail,
      label: "Email",
      url: "mailto:jaygurav2004@gmail.com",
      username: "jaygurav2004@gmail.com"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl font-bold mb-4 glow-text">Get in Touch</h1>
            <p className="text-xl text-muted-foreground">
              Let's connect and discuss cybersecurity, projects, or collaboration opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-8">
              <div className="glass-card cyber-border rounded-2xl p-8 animate-fade-in">
                <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Name</label>
                    <Input
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-background/50 border-border/50 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-background/50 border-border/50 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Message</label>
                    <Textarea
                      placeholder="Your message..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={6}
                      className="bg-background/50 border-border/50 focus:border-primary resize-none"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group">
                    Send Message
                    <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </div>
            </div>

            <div className="space-y-6">
              <div className="glass-card cyber-border rounded-2xl p-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <h2 className="text-2xl font-bold mb-6">Connect With Me</h2>
                <div className="space-y-4">
                  {socialLinks.map((link, index) => {
                    const Icon = link.icon;
                    return (
                      <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 rounded-lg bg-background/30 hover:bg-background/50 border border-border/30 hover:border-primary/50 transition-all group"
                      >
                        <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium group-hover:text-primary transition-colors">
                            {link.label}
                          </p>
                          <p className="text-sm text-muted-foreground">{link.username}</p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="glass-card cyber-border rounded-2xl p-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <h3 className="text-xl font-bold mb-4">Response Time</h3>
                <p className="text-muted-foreground">
                  I typically respond to messages within 24-48 hours. For urgent matters, 
                  please reach out via email or LinkedIn.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
