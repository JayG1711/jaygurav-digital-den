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
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm">Cybersecurity Professional</span>
            </div>

            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4 glow-text">
                Jay Gurav
              </h1>
              <p className="text-xl text-primary font-medium mb-6">
                Cybersecurity Enthusiast | Ethical Hacker | B.Tech Student
              </p>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Hi, I'm Jay Gurav — a passionate cybersecurity enthusiast and ethical hacker 
              currently pursuing my B.Tech in Cyber Security at Shah and Anchor Kutchhi 
              Engineering College. I'm deeply interested in discovering vulnerabilities, 
              building defensive tools, and exploring how AI can strengthen digital security. 
              My goal is to make the digital world safer through research, innovation, and 
              hands-on cybersecurity projects.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8">
                  Contact Me
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/projects">
                <Button variant="outline" className="border-primary/50 hover:bg-primary/10">
                  View Projects
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="glass-card cyber-border rounded-2xl p-8 space-y-6">
              <div className="aspect-square rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <Shield className="w-24 h-24 text-primary mx-auto animate-float" />
                  <p className="text-sm text-muted-foreground">Professional Photo</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="glass-card p-4 rounded-lg text-center hover:scale-105 transition-transform">
                  <Terminal className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground">Ethical Hacking</p>
                </div>
                <div className="glass-card p-4 rounded-lg text-center hover:scale-105 transition-transform">
                  <Lock className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground">Security Research</p>
                </div>
                <div className="glass-card p-4 rounded-lg text-center hover:scale-105 transition-transform">
                  <Shield className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground">Defense Tools</p>
                </div>
              </div>
            </div>

            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
