import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

export function SideSocials() {
  const socials = [
    { icon: Github, href: 'https://github.com/GaneshKurli', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/ganesh-kurli', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:ganeshkurli845@gmail.com', label: 'Email' },
    { icon: MapPin, href: '#contact', label: 'India' },
  ];

  return (
    <>
      {/* Left Social Rail */}
      <motion.div 
        className="fixed bottom-0 left-6 lg:left-12 hidden md:flex flex-col items-center z-40"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div className="flex flex-col gap-6 mb-6">
          {socials.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target={social.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="text-foreground/40 hover:text-blue-400 transition-all duration-300 hover:-translate-y-1 p-1"
              aria-label={social.label}
              whileHover={{ scale: 1.15 }}
            >
              <social.icon size={20} strokeWidth={1.5} />
            </motion.a>
          ))}
        </div>
        {/* The line */}
        <div className="w-[1px] h-24 bg-gradient-to-t from-blue-500/50 to-transparent" />
      </motion.div>

      {/* Right Email Rail */}
      <motion.div 
        className="fixed bottom-0 right-6 lg:right-12 hidden md:flex flex-col items-center z-40"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <motion.a
          href="mailto:ganeshkurli845@gmail.com"
          className="text-xs font-medium tracking-[0.2em] [writing-mode:vertical-rl] mb-6 text-foreground/40 hover:text-blue-400 transition-all duration-300 hover:-translate-y-1"
          whileHover={{ scale: 1.05 }}
        >
          ganeshkurli845@gmail.com
        </motion.a>
        {/* The line */}
        <div className="w-[1px] h-24 bg-gradient-to-t from-cyan-500/50 to-transparent" />
      </motion.div>
    </>
  );
}
