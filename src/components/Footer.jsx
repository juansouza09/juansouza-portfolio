import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background px-6 py-10 lg:px-8">
      <div className="mx-auto w-full max-w-6xl border-t border-border pt-6 text-sm text-muted-foreground">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <p>Juan Souza — Software Engineer</p>
          <div className="flex items-center gap-4">
            <span>juansouza9.dev@gmail.com</span>
            <span>São Paulo, BR</span>
            <a
              href="https://github.com/juansouza09"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/juansouza9/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
