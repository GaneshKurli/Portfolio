import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-background py-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        
        {/* Copyright */}
        <div className="text-foreground/60 text-sm flex items-center">
          &copy; {currentYear} Ganesh Kurli. All rights reserved.
        </div>

        {/* Tagline */}
        <div className="text-muted text-sm italic text-foreground/50">
          Turning data into insights and impactful decisions.
        </div>

        {/* Social Links */}
        <div className="flex space-x-6">
          <a
            href="https://github.com/GaneshKurli"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/60 hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-md"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/in/ganesh-kurli"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/60 hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-md"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:ganeshkurli845@gmail.com"
            className="text-foreground/60 hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-md"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
