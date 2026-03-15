import { motion } from 'framer-motion';
import { BarChart2, Database, LineChart, ChevronDown, Cpu, Globe, Zap, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';

// --- Typewriter Hook ---
function useTypewriter(text: string, speed = 80, startDelay = 600) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDisplayed('');
    setDone(false);
    let i = 0;
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayed(text.slice(0, i + 1));
        i++;
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);
      return () => clearInterval(interval);
    }, startDelay);
    return () => clearTimeout(timeout);
  }, [text, speed, startDelay]);

  return { displayed, done };
}

export function Hero() {
  const { displayed, done } = useTypewriter('Ganesh Kurli', 90, 800);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden transition-colors duration-300 pointer-events-none"
    >
      {/* ── Cyber Frames & HUD Elements ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top-left corner frame */}
        <motion.div 
          className="absolute top-24 left-24 w-32 h-32 border-l-2 border-t-2 border-blue-500/20"
          initial={{ opacity: 0, x: -20, y: -20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        />
        {/* Bottom-right corner frame */}
        <motion.div 
          className="absolute bottom-24 right-24 w-40 h-40 border-r-2 border-b-2 border-cyan-500/20"
          initial={{ opacity: 0, x: 20, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        />
        
        {/* Scanning Pulse */}
        <motion.div 
          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent"
          animate={{ top: ['0%', '100%'] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {/* ── Floating Tech Icons ── */}
      <motion.div
        className="absolute top-1/4 left-1/4 text-blue-400/20 hidden xl:block"
        animate={{ y: [-15, 15, -15], rotate: [0, 10, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Cpu size={56} />
      </motion.div>
      <motion.div
        className="absolute bottom-1/3 right-1/4 text-purple-400/20 hidden xl:block"
        animate={{ y: [15, -15, 15], rotate: [0, -10, 0], scale: [1.1, 1, 1.1] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Globe size={48} />
      </motion.div>
      <motion.div
        className="absolute top-1/3 right-1/4 text-cyan-400/15 hidden xl:block"
        animate={{ scale: [1, 1.2, 1], rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
      >
        <Zap size={40} />
      </motion.div>

      {/* ── Content ── */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto pointer-events-auto">
        
        {/* Glitchy Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="relative inline-block px-5 py-2 mb-8 text-[10px] font-bold tracking-[0.4em] uppercase text-blue-400 bg-blue-500/5 border border-blue-500/20 rounded-md overflow-hidden group">
            <span className="relative z-10 font-mono tracking-widest">System Online // Available</span>
            <motion.div 
              className="absolute inset-0 bg-blue-500/10"
              animate={{ left: ['-100%', '200%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', repeatDelay: 1 }}
            />
          </span>
        </motion.div>

        {/* Header Text */}
        <motion.p
          className="text-sm sm:text-base text-foreground/40 font-mono mb-4 tracking-[0.2em] uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          [ Initializing Portfolio... ]
        </motion.p>

        {/* Name — Typewriter with Shadow Glow */}
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter mb-6 min-h-[1.2em] relative">
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
            {displayed}
          </span>
          {!done && (
            <motion.span
              className="inline-block w-[6px] h-[0.8em] ml-2 bg-blue-400 align-middle shadow-[0_0_10px_rgba(59,130,246,0.8)]"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.6, repeat: Infinity }}
            />
          )}
        </h1>

        {/* Title with Sub-text */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col items-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground/90 flex items-center gap-4 mb-8">
            <span className="w-8 h-[1px] bg-blue-500/30" />
            Aspiring <span className="text-blue-400">Data Analyst</span>
            <span className="w-8 h-[1px] bg-blue-500/30" />
          </h2>
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
        >
          <a
            href="#projects"
            className="relative group px-10 py-4 bg-blue-500 text-white font-bold rounded-none overflow-hidden transition-all duration-300"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Database size={18} />
              EXPLORE REPOS
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute top-0 right-0 w-2 h-2 bg-white/20 transform translate-x-1 -translate-y-1 rotate-45" />
            <div className="absolute bottom-0 left-0 w-2 h-2 bg-white/20 transform -translate-x-1 translate-y-1 rotate-45" />
          </a>
          <a
            href="#contact"
            className="group px-10 py-4 border-2 border-foreground/10 text-foreground font-bold hover:border-blue-500/50 transition-all duration-300 bg-transparent relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Mail size={18} />
              GET IN TOUCH
            </span>
            <motion.div 
              className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity"
            />
          </a>
        </motion.div>
      </div>

      {/* ── Scroll UI ── */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
      >
        <div className="flex flex-col items-center gap-2 text-foreground/20 group cursor-pointer hover:text-blue-400 transition-colors">
          <span className="text-[10px] font-bold tracking-[0.5em] uppercase">Initialize Scroll</span>
          <div className="w-px h-16 bg-gradient-to-b from-blue-500/50 to-transparent relative">
            <motion.div 
              className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-blue-400 rounded-full shadow-[0_0_10px_rgba(59,130,246,1)]"
              animate={{ top: ['0%', '100%', '0%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
          <ChevronDown size={20} className="mt-2 animate-bounce" />
        </div>
      </motion.div>

      {/* Background Ambience Icons */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <LineChart size={300} className="absolute -top-20 -right-20 text-blue-500/5 rotate-12" />
        <BarChart2 size={250} className="absolute -bottom-20 -left-20 text-cyan-500/5 -rotate-12" />
      </div>
    </section>
  );
}
