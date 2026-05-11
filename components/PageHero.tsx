import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { RevealOnScroll } from './RevealOnScroll';

interface PageHeroProps {
  title: React.ReactNode;
  subtitle: string;
  badge?: string;
  color?: "blue" | "purple" | "cyan" | "green" | "slate" | "indigo" | "teal" | "orange";
  pattern?: "grid" | "dots" | "waves";
  illustration?: "abstract" | "data-flow";
}

export const PageHero: React.FC<PageHeroProps> = ({ 
  title, 
  subtitle, 
  badge, 
  color = "blue",
  pattern = "grid",
  illustration = "abstract"
}) => {
  const shouldReduceMotion = useReducedMotion();
  
  // Define color palettes based on the selected theme
  // Added dark mode variants
  const getTheme = () => {
    switch(color) {
      case 'purple': 
        return { 
          bgGradient: 'from-purple-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900',
          accent: 'bg-purple-500',
          blob1: 'bg-purple-300 dark:bg-purple-900/30',
          blob2: 'bg-indigo-300 dark:bg-indigo-900/30',
          line: 'border-purple-200 dark:border-purple-800',
          text: 'text-purple-600 dark:text-purple-400'
        };
      case 'indigo': 
        return { 
          bgGradient: 'from-indigo-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900',
          accent: 'bg-indigo-500',
          blob1: 'bg-indigo-300 dark:bg-indigo-900/30',
          blob2: 'bg-purple-300 dark:bg-purple-900/30',
          line: 'border-indigo-200 dark:border-indigo-800',
          text: 'text-indigo-600 dark:text-indigo-400'
        };
      case 'cyan': 
        return { 
          bgGradient: 'from-cyan-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900',
          accent: 'bg-cyan-500',
          blob1: 'bg-cyan-300 dark:bg-cyan-900/30',
          blob2: 'bg-blue-300 dark:bg-blue-900/30',
          line: 'border-cyan-200 dark:border-cyan-800',
          text: 'text-cyan-600 dark:text-cyan-400'
        };
      case 'teal': 
        return { 
          bgGradient: 'from-teal-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900',
          accent: 'bg-teal-500',
          blob1: 'bg-teal-300 dark:bg-teal-900/30',
          blob2: 'bg-emerald-300 dark:bg-emerald-900/30',
          line: 'border-teal-200 dark:border-teal-800',
          text: 'text-teal-600 dark:text-teal-400'
        };
      case 'green': 
        return { 
          bgGradient: 'from-emerald-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900',
          accent: 'bg-emerald-500',
          blob1: 'bg-emerald-300 dark:bg-emerald-900/30',
          blob2: 'bg-teal-300 dark:bg-teal-900/30',
          line: 'border-emerald-200 dark:border-emerald-800',
          text: 'text-emerald-600 dark:text-emerald-400'
        };
      case 'orange': 
        return { 
          bgGradient: 'from-orange-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900',
          accent: 'bg-orange-500',
          blob1: 'bg-orange-300 dark:bg-orange-900/30',
          blob2: 'bg-amber-300 dark:bg-amber-900/30',
          line: 'border-orange-200 dark:border-orange-800',
          text: 'text-orange-600 dark:text-orange-400'
        };
      case 'slate': 
        return { 
          bgGradient: 'from-slate-100 via-white to-slate-50 dark:from-slate-800 dark:via-slate-950 dark:to-slate-900',
          accent: 'bg-slate-500',
          blob1: 'bg-slate-400 dark:bg-slate-700/30',
          blob2: 'bg-gray-300 dark:bg-gray-700/30',
          line: 'border-slate-300 dark:border-slate-700',
          text: 'text-slate-600 dark:text-slate-400'
        };
      case 'brand':
        return { 
          bgGradient: 'from-slate-950 via-slate-900 to-slate-950',
          accent: 'bg-brand-orange',
          blob1: 'bg-brand-purple/20',
          blob2: 'bg-brand-pink/20',
          line: 'border-brand-purple/30',
          text: 'text-brand-orange'
        };
      case 'blue':
      default: 
        return { 
          bgGradient: 'from-slate-950 via-slate-900 to-slate-950',
          accent: 'bg-brand-orange',
          blob1: 'bg-brand-purple/20',
          blob2: 'bg-brand-pink/20',
          line: 'border-brand-purple/30',
          text: 'text-brand-orange'
        };
    }
  };

  const theme = getTheme();

  return (
    <section className={`relative pt-32 pb-28 overflow-hidden border-b border-slate-200 dark:border-slate-800 isolate`}>
        {/* Base Gradient Layer */}
        <div className={`absolute inset-0 bg-gradient-to-br ${theme.bgGradient} opacity-80 -z-20`} />

        {illustration === 'data-flow' ? (
          /* SVG Data Flow Background */
          <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
            <svg className="absolute w-full h-full opacity-70" viewBox="0 0 1440 800" fill="none" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                {/* 1. Structural Lines (Dark Slate #0B1120) */}
                <motion.path 
                    d="M-200,600 C300,550 800,750 1640,500"
                    stroke="currentColor"
                    className="text-slate-900 dark:text-slate-600"
                    strokeWidth="1.5"
                    strokeOpacity="0.08"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2.5, ease: "easeOut" }}
                />
                <motion.path 
                    d="M-200,200 C400,300 1000,100 1640,300"
                    stroke="currentColor"
                    className="text-slate-900 dark:text-slate-600"
                    strokeWidth="1.5"
                    strokeOpacity="0.08"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 3, delay: 0.2, ease: "easeOut" }}
                />

                {/* 2. Flowing Data Streams (Blue #2563EB & Cyan #06B6D4) */}
                {!shouldReduceMotion && (
                    <>
                        {/* Primary Data Line - Blue */}
                        <motion.path
                            d="M-200,400 Q720,200 1640,400"
                            stroke="#2563EB"
                            strokeWidth="2"
                            fill="none"
                            strokeOpacity="0.4"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ 
                                pathLength: [0, 1],
                                opacity: [0, 0.4, 0]
                            }}
                            transition={{ 
                                duration: 4, 
                                repeat: Infinity, 
                                ease: "linear",
                                repeatDelay: 0.5
                            }}
                        />
                         {/* Secondary Data Line - Cyan Dashed */}
                         <motion.path
                            d="M-200,450 Q720,250 1640,450"
                            stroke="#06B6D4"
                            strokeWidth="2"
                            strokeDasharray="8 12"
                            fill="none"
                            strokeOpacity="0.3"
                            initial={{ strokeDashoffset: 400 }}
                            animate={{ strokeDashoffset: -400 }}
                            transition={{ 
                                duration: 15, 
                                repeat: Infinity, 
                                ease: "linear"
                            }}
                        />
                    </>
                )}

                {/* 3. Abstract Geometric Shapes */}
                {/* Rotating Square (Blue) */}
                <motion.rect
                    x="15%" y="25%" width="40" height="40"
                    stroke="#2563EB"
                    strokeWidth="2"
                    fill="none"
                    opacity="0.15"
                    animate={!shouldReduceMotion ? {
                        rotate: 360,
                        y: [0, -30, 0]
                    } : {}}
                    transition={{
                        rotate: { duration: 30, repeat: Infinity, ease: "linear" },
                        y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                    }}
                />
                
                 {/* Floating Circle (Cyan) */}
                <motion.circle
                    cx="85%" cy="65%" r="20"
                    stroke="#06B6D4"
                    strokeWidth="2"
                    fill="none"
                    opacity="0.2"
                    animate={!shouldReduceMotion ? {
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.4, 0.2]
                    } : {}}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Hexagon approximation (Dark) */}
                <motion.path
                    d="M100,50 L143,75 L143,125 L100,150 L57,125 L57,75 Z"
                    transform="translate(80, 500) scale(0.6)"
                    stroke="currentColor"
                    className="text-slate-900 dark:text-slate-600"
                    strokeWidth="2"
                    opacity="0.05"
                    fill="none"
                     animate={!shouldReduceMotion ? {
                        rotate: -360
                    } : {}}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                />
            </svg>
          </div>
        ) : (
          /* Default Abstract Blobs Background */
          <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
              {/* 1. Large Fluid Blobs (Blurred) */}
              <motion.div 
                  animate={{ 
                      y: [0, -40, 0], 
                      x: [0, 20, 0],
                      scale: [1, 1.1, 1],
                      opacity: [0.15, 0.25, 0.15] 
                  }}
                  transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                  className={`absolute -top-[20%] -right-[10%] w-[800px] h-[800px] rounded-full filter blur-[120px] mix-blend-multiply dark:mix-blend-screen ${theme.blob1}`}
              />
              <motion.div 
                  animate={{ 
                      y: [0, 50, 0], 
                      x: [0, -30, 0],
                      scale: [1, 1.2, 1],
                      opacity: [0.1, 0.2, 0.1] 
                  }}
                  transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  className={`absolute top-[20%] -left-[10%] w-[600px] h-[600px] rounded-full filter blur-[100px] mix-blend-multiply dark:mix-blend-screen ${theme.blob2}`}
              />

              {/* 2. Geometric Floating Elements */}
              {/* Circle Outline */}
              <motion.div 
                className={`absolute top-[15%] left-[20%] w-24 h-24 rounded-full border border-dashed ${theme.line} opacity-40`}
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
              {/* Square Outline */}
              <motion.div 
                className={`absolute bottom-[20%] right-[15%] w-32 h-32 rounded-xl border ${theme.line} opacity-30`}
                animate={{ rotate: -180, y: [0, -20, 0] }}
                transition={{ rotate: { duration: 40, ease: "linear", repeat: Infinity }, y: { duration: 5, ease: "easeInOut", repeat: Infinity } }}
              />
              {/* Small Particles */}
              {Array.from({ length: 5 }).map((_, i) => (
                  <motion.div
                      key={i}
                      className={`absolute w-1.5 h-1.5 rounded-full ${theme.accent} opacity-40`}
                      style={{
                          left: `${20 + Math.random() * 60}%`,
                          top: `${20 + Math.random() * 60}%`,
                      }}
                      animate={{
                          y: [0, -30, 0],
                          opacity: [0.2, 0.6, 0.2]
                      }}
                      transition={{
                          duration: 3 + Math.random() * 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: i * 0.5
                      }}
                  />
              ))}
          </div>
        )}

        {/* 3. Technical Grid Overlay (Common) */}
        <div className="absolute inset-0 z-0 opacity-[0.07] pointer-events-none">
            <div 
                className="absolute inset-0 text-slate-900 dark:text-slate-100" 
                style={{ 
                    backgroundImage: pattern === 'grid' 
                        ? 'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)' 
                        : pattern === 'dots'
                            ? 'radial-gradient(currentColor 1px, transparent 1px)'
                            : 'repeating-linear-gradient(45deg, currentColor 0, currentColor 1px, transparent 0, transparent 50%)',
                    backgroundSize: pattern === 'grid' ? '40px 40px' : pattern === 'dots' ? '24px 24px' : '10px 10px',
                    maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)'
                }} 
            />
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
             <RevealOnScroll>
                {badge && (
                    <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-slate-200/60 dark:border-slate-700/60 bg-white/50 dark:bg-slate-800/50 backdrop-blur-md shadow-sm mb-8">
                        <span className={`w-2 h-2 rounded-full ${theme.accent} animate-pulse shadow-[0_0_8px_currentColor]`}></span>
                        <span className={`text-xs font-bold uppercase tracking-widest ${theme.text}`}>{badge}</span>
                    </div>
                )}
                
                <h1 className="text-5xl md:text-7xl font-display font-bold text-slate-900 dark:text-white mb-6 leading-[1.1] tracking-tight">
                    {title}
                </h1>
             </RevealOnScroll>
             
             <RevealOnScroll delay={200}>
                <div className="flex justify-center">
                    <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed font-light">
                        {subtitle}
                    </p>
                </div>
             </RevealOnScroll>
        </div>
    </section>
  );
};