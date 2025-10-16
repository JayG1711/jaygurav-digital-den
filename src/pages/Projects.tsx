import { Code2, Loader2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Projects = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-16 animate-fade-in">
            <h1 className="text-5xl font-bold mb-4 glow-text">Projects</h1>
            <p className="text-xl text-muted-foreground">
              Innovative cybersecurity and AI-based solutions
            </p>
          </div>

          <div className="glass-card cyber-border rounded-2xl p-16 space-y-8">
            <Code2 className="w-20 h-20 text-primary mx-auto animate-float" />
            
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Projects Coming Soon</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Stay tuned for exciting cybersecurity and AI-based tools by Jay Gurav. 
                Projects will be showcased here as they are developed.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="glass-card rounded-lg p-6 border border-dashed border-border/50 hover:border-primary/50 transition-colors"
                >
                  <div className="aspect-video bg-muted/20 rounded-lg mb-4 flex items-center justify-center">
                    <Loader2 className="w-8 h-8 text-muted-foreground/50 animate-spin" />
                  </div>
                  <div className="h-4 bg-muted/20 rounded mb-2" />
                  <div className="h-3 bg-muted/10 rounded w-3/4" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;
