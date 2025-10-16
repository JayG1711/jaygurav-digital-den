import { GraduationCap, Award, Target, Camera, Globe, Star } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  const sections = [
    {
      icon: GraduationCap,
      title: "Academic Background",
      content: "Currently pursuing B.Tech in Cyber Security at Shah and Anchor Kutchhi Engineering College (2023-2027). My academic journey focuses on understanding the technical foundations of information security, network defense, and ethical hacking methodologies."
    },
    {
      icon: Award,
      title: "Certifications",
      content: "CEH v13 Certified Ethical Hacker - Demonstrating comprehensive knowledge in ethical hacking and penetration testing. CompTIA Security+ (In Progress) - Building strong foundations in cybersecurity fundamentals and best practices."
    },
    {
      icon: Target,
      title: "Cybersecurity Interests",
      content: "Passionate about hardware hacking, exploring physical security vulnerabilities, and understanding how AI can be leveraged to strengthen cybersecurity defenses. Deep interest in digital forensics and incident response."
    },
    {
      icon: Star,
      title: "Beyond Cybersecurity",
      content: "My curiosity extends to astrophysics, where I explore the mysteries of the universe. I enjoy landscape photography, capturing the beauty of nature, and staying informed about geopolitics to understand global security dynamics."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl font-bold mb-4 glow-text">About Me</h1>
            <p className="text-xl text-muted-foreground">
              Exploring the intersection of security, technology, and innovation
            </p>
          </div>

          <div className="grid gap-8">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <div
                  key={index}
                  className="glass-card cyber-border rounded-2xl p-8 hover:scale-[1.02] transition-transform animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-6">
                    <div className="p-4 rounded-xl bg-primary/10 flex-shrink-0">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold mb-3">{section.title}</h2>
                      <p className="text-muted-foreground leading-relaxed">
                        {section.content}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 glass-card cyber-border rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              From studying the fundamentals of cybersecurity to earning industry certifications, 
              my journey is driven by a passion for making the digital world safer. I believe in 
              continuous learning, hands-on practice, and contributing to the security community 
              through research and knowledge sharing.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
