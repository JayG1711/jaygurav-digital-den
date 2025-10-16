import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Terminal, Lock } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm">Cybersecurity Professional</span>
            </div>

            <div>
              <h1 className="text-6xl md:text-7xl font-bold mb-6 glow-text">
                Jay Gurav
              </h1>
              <p className="text-2xl text-primary font-medium mb-8">
                Cybersecurity Enthusiast | Ethical Hacker | B.Tech Student
              </p>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Hi, I'm Jay Gurav — a passionate cybersecurity enthusiast and ethical hacker 
              currently pursuing my B.Tech in Cyber Security at Shah and Anchor Kutchhi 
              Engineering College. I'm deeply interested in discovering vulnerabilities, 
              building defensive tools, and exploring how AI can strengthen digital security. 
              My goal is to make the digital world safer through research, innovation, and 
              hands-on cybersecurity projects.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Link to="/contact">
                <Button className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg">
                  Contact Me
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/projects">
                <Button variant="outline" className="border-primary/50 hover:bg-primary/10 px-8 py-6 text-lg">
                  View Projects
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
            <div className="glass-card cyber-border rounded-2xl p-8 text-center hover:scale-105 transition-transform group">
              <Terminal className="w-12 h-12 text-primary mx-auto mb-4 group-hover:animate-float" />
              <h3 className="text-xl font-bold mb-2">Ethical Hacking</h3>
              <p className="text-sm text-muted-foreground">
                Penetration testing and vulnerability assessment
              </p>
            </div>
            <div className="glass-card cyber-border rounded-2xl p-8 text-center hover:scale-105 transition-transform group">
              <Lock className="w-12 h-12 text-primary mx-auto mb-4 group-hover:animate-float" />
              <h3 className="text-xl font-bold mb-2">Security Research</h3>
              <p className="text-sm text-muted-foreground">
                Discovering and analyzing security vulnerabilities
              </p>
            </div>
            <div className="glass-card cyber-border rounded-2xl p-8 text-center hover:scale-105 transition-transform group">
              <Shield className="w-12 h-12 text-primary mx-auto mb-4 group-hover:animate-float" />
              <h3 className="text-xl font-bold mb-2">Defense Tools</h3>
              <p className="text-sm text-muted-foreground">
                Building tools to strengthen digital security
              </p>
            </div>
          </div>

          <div className="mt-20 glass-card cyber-border rounded-2xl p-12 text-center relative overflow-hidden">
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
            <Shield className="w-20 h-20 text-primary mx-auto mb-6 animate-float" />
            <h2 className="text-3xl font-bold mb-4">Ready to Collaborate?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's work together on cybersecurity projects, research, or discuss the latest 
              in ethical hacking and digital security.
            </p>
            <Link to="/contact">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg">
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
