import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Check if device is touch screen
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-pointer') ||
        target.closest('.cursor-pointer')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  // Use simple CSS to hide default cursor instead of modifying body inline styles
  useEffect(() => {
    document.body.style.cursor = 'none';
    return () => { document.body.style.cursor = 'auto'; };
  }, []);

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-primary-500 pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 1.5 : 1,
          opacity: 0.8
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
      />
      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-primary-500 rounded-full pointer-events-none z-[10000] hidden md:block"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          opacity: 1
        }}
        transition={{ type: "spring", stiffness: 1000, damping: 40, mass: 0.1 }}
      />
    </>
  );
};

export default CustomCursor;
