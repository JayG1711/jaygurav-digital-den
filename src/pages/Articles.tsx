import { FileText, ExternalLink, Github } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Articles = () => {
  const articles = [
    {
      title: "Dark Web Investigations: Tools, Techniques, and Challenges",
      description: "Comprehensive guide on investigating the dark web, exploring various tools and methodologies used in digital forensics and threat intelligence.",
      repo: "Dark-Web-Investigations-Tools-Techniques-and-Challenges",
      url: "https://github.com/JayG1711/-Dark-Web-Investigations-Tools-Techniques-and-Challenges",
      tags: ["Dark Web", "Digital Forensics", "OSINT"]
    },
    {
      title: "Basics of Software Design",
      description: "Fundamental principles and best practices in software design, covering architecture patterns, design principles, and implementation strategies.",
      repo: "Basics-of-Software-Design",
      url: "https://github.com/JayG1711/Basics-of-Software-Design",
      tags: ["Software Engineering", "Design Patterns", "Architecture"]
    },
    {
      title: "Personalized Google Website Portfolio",
      description: "Creating a professional portfolio website with modern design principles and best practices for showcasing technical projects and achievements.",
      repo: "Personalized-Google-Website-Portfolio",
      url: "https://github.com/JayG1711/Personalized-Google-Website-Portfolio",
      tags: ["Web Development", "Portfolio", "Design"]
    },
    {
      title: "Applications of Turing Machines in AI and Problem Solving",
      description: "Exploring the theoretical foundations of computation and their practical applications in artificial intelligence and algorithmic problem-solving.",
      repo: "Applications-of-Turing-Machines-in-Artificial-Intelligence-and-Problem-Solving",
      url: "https://github.com/JayG1711/Applications-of-Turing-Machines-in-Artificial-Intelligence-and-Problem-Solving",
      tags: ["AI", "Theoretical CS", "Algorithms"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl font-bold mb-4 glow-text">Articles & Research</h1>
            <p className="text-xl text-muted-foreground">
              Technical write-ups and research on cybersecurity, AI, and software engineering
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {articles.map((article, index) => (
              <div
                key={index}
                className="glass-card cyber-border rounded-2xl p-6 hover:scale-[1.02] transition-all animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {article.title}
                    </h2>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {article.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                  <Github className="w-4 h-4" />
                  <span className="font-mono truncate">{article.repo}</span>
                </div>

                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group">
                    Read on GitHub
                    <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Button>
                </a>
              </div>
            ))}
          </div>

          <div className="mt-16 glass-card cyber-border rounded-2xl p-8 text-center">
            <FileText className="w-16 h-16 text-primary mx-auto mb-4 animate-float" />
            <h3 className="text-2xl font-bold mb-4">More Coming Soon</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Cybersecurity articles and technical write-ups will be published here regularly. 
              Follow along as I explore new topics in ethical hacking, AI security, and digital forensics.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Articles;
