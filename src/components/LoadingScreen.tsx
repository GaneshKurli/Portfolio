import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function LoadingScreen({ onLoadingComplete }: { onLoadingComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onLoadingComplete, 500);
          return 100;
        }
        return prev + Math.floor(Math.random() * 5) + 1;
      });
    }, 50);
    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.83, 0, 0.17, 1] } }}
    >
      <div className="relative flex flex-col items-center">
        {/* Logo Animation */}
        <motion.div
          className="text-6xl font-black mb-8 tracking-tighter"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">GK.</span>
        </motion.div>

        {/* Progress Bar Container */}
        <div className="w-64 h-1 bg-foreground/5 rounded-full overflow-hidden relative">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-cyan-400"
            initial={{ width: '0%' }}
            animate={{ width: `${progress}%` }}
          />
        </div>

        {/* Progress Counter */}
        <div className="mt-4 flex flex-col items-center gap-1">
          <motion.span 
            className="text-3xl font-mono font-bold text-foreground/80"
          >
            {progress}%
          </motion.span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-foreground/30 font-bold">
            Initializing Systems
          </span>
        </div>

        {/* Decorative Circles */}
        <motion.div 
          className="absolute -inset-24 border border-blue-500/10 rounded-full"
          animate={{ rotate: 360, scale: [1, 1.05, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div 
          className="absolute -inset-32 border border-cyan-500/5 rounded-full"
          animate={{ rotate: -360, scale: [1, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {/* Background Scanning Line */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent h-20 w-full pointer-events-none"
        animate={{ top: ['-20%', '120%'] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
      />
    </motion.div>
  );
}
