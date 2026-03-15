import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Snappier springs for less lag
  const springConfig = { damping: 20, stiffness: 300 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        window.getComputedStyle(target).cursor === 'pointer';
      
      setIsHovering(!!isClickable);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isVisible, mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      {/* Container following mouse anchor */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        className="relative flex flex-col items-center"
      >
        {/* The Box - Offset upwards */}
        <motion.div
          animate={{
            width: isHovering ? 50 : 32,
            height: isHovering ? 50 : 32,
            rotate: isHovering ? 45 : 0,
            borderRadius: isHovering ? '12px' : '4px',
            y: isHovering ? -30 : -24, // Positioned above the center
          }}
          transition={{ type: 'spring', damping: 15, stiffness: 200 }}
          className="border-2 border-blue-400/60 shadow-[0_0_10px_rgba(96,165,250,0.3)]"
        />

        {/* The Dot (Croser) - Anchored at mouse center */}
        <motion.div 
          animate={{
            scale: isHovering ? 1.4 : 1,
            opacity: isHovering ? 1 : 0.8,
            y: isHovering ? 5 : 0, // Slight downward shift on hover
          }}
          className="w-1.5 h-1.5 bg-blue-400 rounded-full shadow-[0_0_8px_rgba(96,165,250,0.8)] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" 
        />

        {/* Outer Glow */}
        <motion.div
          animate={{
            width: isHovering ? 80 : 60,
            height: isHovering ? 80 : 60,
            opacity: isHovering ? 0.25 : 0.1,
            y: isHovering ? -30 : -24,
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-400 blur-2xl rounded-full"
        />
      </motion.div>
    </div>
  );
}
