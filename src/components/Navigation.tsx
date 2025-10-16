import { Link, useLocation } from "react-router-dom";
import { Shield } from "lucide-react";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/achievements", label: "Achievements" },
    { path: "/articles", label: "Articles" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <Shield className="w-6 h-6 text-primary group-hover:animate-glow transition-all" />
            <span className="text-xl font-bold glow-text">Jay Gurav</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === item.path
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {item.label}
                {location.pathname === item.path && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            {/* Mobile menu would go here if needed */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
