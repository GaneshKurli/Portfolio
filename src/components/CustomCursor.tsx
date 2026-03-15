import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for the cursor movement
  const springConfig = { damping: 25, stiffness: 200 };
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
      {/* Box Cursor */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        className="relative"
      >
        {/* The Box */}
        <motion.div
          animate={{
            width: isHovering ? 50 : 30,
            height: isHovering ? 50 : 30,
            rotate: isHovering ? 45 : 0,
            borderRadius: isHovering ? '12px' : '4px',
          }}
          transition={{ type: 'spring', damping: 20, stiffness: 150 }}
          className="border-2 border-blue-400/50 flex items-center justify-center"
        >
          {/* Internal Dot */}
          <motion.div 
            animate={{
              scale: isHovering ? 1.5 : 1,
              opacity: isHovering ? 0.8 : 0.5,
            }}
            className="w-1.5 h-1.5 bg-blue-400 rounded-full" 
          />
        </motion.div>

        {/* Outer Glow */}
        <motion.div
          animate={{
            width: isHovering ? 70 : 50,
            height: isHovering ? 70 : 50,
            opacity: isHovering ? 0.3 : 0.1,
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-400 blur-xl rounded-full"
        />
      </motion.div>
    </div>
  );
}
