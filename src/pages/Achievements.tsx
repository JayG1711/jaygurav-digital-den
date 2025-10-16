import { Award, Trophy, Target, Shield } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Achievements = () => {
  const achievements = [
    {
      icon: Shield,
      title: "CEH v13 Certified Ethical Hacker",
      date: "2024",
      description: "Comprehensive certification demonstrating advanced knowledge in ethical hacking methodologies, penetration testing, and security assessment techniques.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Target,
      title: "TryHackMe Active Member",
      date: "Ongoing",
      description: "Actively participating in cybersecurity challenges, CTF competitions, and practical security exercises to sharpen penetration testing skills.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Trophy,
      title: "CTF Participations",
      date: "2023-2024",
      description: "Regular participant in Capture The Flag competitions, solving challenges in web exploitation, cryptography, and network security.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Award,
      title: "CompTIA Security+ (In Progress)",
      date: "Expected 2025",
      description: "Working towards achieving Security+ certification to demonstrate comprehensive understanding of core cybersecurity principles and best practices.",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl font-bold mb-4 glow-text">Achievements</h1>
            <p className="text-xl text-muted-foreground">
              Milestones in my cybersecurity journey
            </p>
          </div>

          <div className="space-y-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div
                  key={index}
                  className="glass-card cyber-border rounded-2xl p-8 hover:scale-[1.02] transition-all animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className={`p-6 rounded-xl bg-gradient-to-br ${achievement.color} bg-opacity-10 flex-shrink-0 self-start`}>
                      <Icon className="w-12 h-12 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                        <h2 className="text-2xl font-bold">{achievement.title}</h2>
                        <span className="text-sm text-primary font-medium mt-2 md:mt-0">
                          {achievement.date}
                        </span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 glass-card cyber-border rounded-2xl p-8 text-center">
            <Trophy className="w-16 h-16 text-primary mx-auto mb-4 animate-float" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              More achievements will be added as Jay continues his cybersecurity journey. 
              Stay tuned for updates on certifications, competitions, and professional recognitions.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Achievements;
