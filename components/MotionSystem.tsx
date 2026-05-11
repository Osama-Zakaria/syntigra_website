import React, { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'framer-motion';

// -- Animation Standards --

export const EASE_ENTERPRISE = [0.4, 0, 0.2, 1]; // Precise, sharp, professional

export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: EASE_ENTERPRISE,
      delay: delay * 0.1,
    },
  }),
};

// -- 3D Tilt Card Component --

interface MotionCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  onClick?: () => void;
}

export const MotionCard: React.FC<MotionCardProps> = ({ 
  children, 
  className = '', 
  glowColor = '#f05223', // Updated to Brand Orange
  onClick
}) => {
  const ref = useRef<HTMLDivElement>(null);

  // Motion values for mouse position
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for rotation to prevent jitter
  const mouseX = useSpring(x, { stiffness: 500, damping: 40 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 40 });

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Calculate position relative to center of card
    const relativeX = e.clientX - rect.left - width / 2;
    const relativeY = e.clientY - rect.top - height / 2;

    x.set(relativeX);
    y.set(relativeY);
  }

  function onMouseLeave() {
    x.set(0);
    y.set(0);
  }

  // Transform mouse position into rotation (max 2.5 degrees for subtlety)
  const rotateX = useTransform(mouseY, [-200, 200], [2.5, -2.5]);
  const rotateY = useTransform(mouseX, [-200, 200], [-2.5, 2.5]);

  // Dynamic spotlight gradient following mouse - darker for light mode visibility
  const maskImage = useMotionTemplate`radial-gradient(400px at ${mouseX}px ${mouseY}px, black, transparent)`;

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      // Changed base style: White background, Slate-200 border, slight shadow -> Dark Mode: Slate-900 bg, Slate-700 border
      className={`relative rounded-xl bg-slate-900 border border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 group ${className}`}
      onClick={onClick}
    >
      {/* Idle Breathing Glow - Subtle on white */}
      <motion.div
        animate={{ opacity: [0.03, 0.08, 0.03] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background: `radial-gradient(600px circle at 50% 50%, ${glowColor}, transparent 60%)`,
        }}
        className="absolute inset-0 z-0 rounded-xl pointer-events-none"
      />

      {/* Hover Glow Effect */}
      <motion.div
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), ${glowColor}20, transparent 40%)`,
          opacity: 0,
        }}
        className="absolute inset-0 z-0 rounded-xl group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
      />

      {/* Content */}
      <div className="relative z-10 h-full transform-style-3d text-slate-100">
        {children}
      </div>

      {/* Border Highlight - Darker for visibility on white, Lighter for dark mode */}
      <motion.div
        className="absolute inset-0 z-20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none border border-brand-orange/50"
        style={{
           background: `radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(37, 99, 235, 0.05), transparent 40%)`,
           maskImage: maskImage,
           WebkitMaskImage: maskImage
        }}
      />
    </motion.div>
  );
};