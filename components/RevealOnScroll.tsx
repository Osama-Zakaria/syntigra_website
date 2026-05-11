import React from 'react';
import { motion } from 'framer-motion';
import { EASE_ENTERPRISE } from './MotionSystem';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // delay in ms
  width?: "fit-content" | "100%";
}

export const RevealOnScroll: React.FC<RevealProps> = ({ 
  children, 
  className = '', 
  delay = 0,
  width = "100%"
}) => {
  return (
    // Removed overflow: 'hidden' to fix layout overlap issues and shadow clipping
    <div style={{ width }} className={className}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 40, filter: 'blur(4px)' },
          visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        transition={{ 
          duration: 0.8, 
          delay: delay / 1000, 
          ease: EASE_ENTERPRISE 
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};