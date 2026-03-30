import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-10 px-6">
      <div className="container mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} dev.portfolio — Built with React & ❤️
        </p>
        <div className="flex items-center gap-5">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <Github size={18} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <Linkedin size={18} />
          </a>
          <a href="mailto:hello@example.com" className="text-muted-foreground hover:text-foreground transition-colors">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
