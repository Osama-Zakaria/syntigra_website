import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, Filter, Server, Layers, Box } from 'lucide-react';
import { EASE_ENTERPRISE } from './MotionSystem';

type Stage = 'extract' | 'transform' | 'load';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
};

export const ETLVisualizer = () => {
  const [activeStage, setActiveStage] = useState<Stage>('extract');
  const isMobile = useIsMobile();

  const stages: { id: Stage; label: string; icon: React.ElementType, desc: string }[] = [
    { id: 'extract', label: 'Extract', icon: Database, desc: 'Raw Data Ingestion' },
    { id: 'transform', label: 'Transform', icon: Filter, desc: 'Cleaning & Structuring' },
    { id: 'load', label: 'Load', icon: Server, desc: 'Warehousing & Availability' },
  ];

  return (
    // Changed bg to white, added light border and shadow
    <div className="w-full max-w-5xl mx-auto rounded-2xl bg-slate-950 border-slate-800 shadow-2xl relative group">
      {/* Header / Tabs */}
      <div className="flex bg-slate-900 border-slate-800 sticky top-0 z-20 overflow-x-auto scrollbar-hide">
        {stages.map((stage) => (
          <button
            key={stage.id}
            onClick={() => setActiveStage(stage.id)}
            className={`flex-1 min-w-[100px] relative py-4 md:py-6 px-2 md:px-4 text-center transition-colors duration-300 outline-none select-none touch-manipulation ${
              activeStage === stage.id ? 'text-brand-orange' : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            <div className="flex flex-col items-center justify-center space-y-2 z-10 relative">
              <stage.icon className={`w-5 h-5 md:w-6 md:h-6 ${activeStage === stage.id ? 'text-brand-orange' : 'text-slate-400 dark:text-slate-600'}`} />
              <span className="text-xs md:text-sm font-display font-medium tracking-wide uppercase">{stage.label}</span>
            </div>
            
            {/* Active Tab Background */}
            {activeStage === stage.id && (
              <motion.div
                layoutId="active-tab"
                className="absolute inset-0 bg-blue-50/50 dark:bg-blue-900/20 border-b-2 border-brand-orange"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Visualization Area */}
      <div className="relative h-[400px] md:h-[450px] w-full bg-[#0F172A] dark:bg-[#020617] overflow-hidden flex flex-col items-center justify-center p-4 md:p-8">
        
        {/* Background Grid */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
            style={{ 
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                backgroundSize: '20px 20px'
            }}
        />

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-4xl h-full flex flex-col justify-between">
          
          {/* Animated Stage Description */}
          <div className="text-center mb-4 md:mb-6 h-12 relative px-2 pointer-events-none">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStage}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.3 }}
                className="absolute w-full"
              >
                 <h3 className="text-lg md:text-xl font-bold text-white mb-1">
                   {stages.find(s => s.id === activeStage)?.label} Phase
                 </h3>
                 <p className="text-slate-400 text-sm md:text-sm truncate md:whitespace-normal px-4">
                   {activeStage === 'extract' && "Raw data ingestion from distributed sources."}
                   {activeStage === 'transform' && "Data cleaning, structuring & enrichment."}
                   {activeStage === 'load' && "Optimized data warehousing & availability."}
                 </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Main Stage Viewport - Animated Border & Glow Effect on Change */}
          <motion.div 
            className="flex-grow relative border border-slate-700 bg-slate-800/50 rounded-xl overflow-hidden backdrop-blur-sm flex items-center justify-center"
            initial={false}
          >
             {/* Transition Flash Effects */}
             <AnimatePresence>
                 <motion.div
                   key={`flash-${activeStage}`}
                   className="absolute inset-0 z-50 pointer-events-none rounded-xl"
                   initial={{ boxShadow: "0 0 0px rgba(37,99,235,0)", borderColor: "rgba(37,99,235,0)" }}
                   animate={{ 
                       boxShadow: ["0 0 0px rgba(37,99,235,0)", "0 0 30px rgba(37,99,235,0.3)", "0 0 0px rgba(37,99,235,0)"],
                       borderColor: ["rgba(37,99,235,0)", "rgba(37,99,235,0.8)", "rgba(112, 128, 144, 0.3)"]
                   }}
                   transition={{ duration: 0.6 }}
                   style={{ borderWidth: '2px' }}
                 />
                 <motion.div
                    key={`overlay-${activeStage}`}
                    className="absolute inset-0 bg-blue-500/10 z-40 pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 0.4 }}
                 />
             </AnimatePresence>

             <AnimatePresence mode="wait" initial={false}>
                {activeStage === 'extract' && (
                  <motion.div 
                    key="extract"
                    className="absolute inset-0"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.6, ease: EASE_ENTERPRISE }}
                  >
                    <ExtractView isMobile={isMobile} />
                  </motion.div>
                )}
                {activeStage === 'transform' && (
                  <motion.div 
                    key="transform"
                    className="absolute inset-0"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.6, ease: EASE_ENTERPRISE }}
                  >
                    <TransformView isMobile={isMobile} />
                  </motion.div>
                )}
                {activeStage === 'load' && (
                  <motion.div 
                    key="load"
                    className="absolute inset-0"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.6, ease: EASE_ENTERPRISE }}
                  >
                    <LoadView isMobile={isMobile} />
                  </motion.div>
                )}
             </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// --- Sub-Components ---

const ExtractView = ({ isMobile }: { isMobile: boolean }) => {
  // Mobile: Reduced nodes or particles
  const particlesPerNode = isMobile ? 1 : 3;
  const nodes = [0, 1, 2];

  return (
    <div className="w-full h-full relative flex items-center justify-between px-6 md:px-16 scale-90 md:scale-100 origin-center">
      {/* Sources Left */}
      <div className="flex flex-col space-y-6 md:space-y-8 z-10">
        {nodes.map((i) => (
          <div key={i} className="relative group">
             {/* Node */}
             <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-slate-700 border border-slate-500 flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.1)] relative z-20 group-hover:border-brand-yellow transition-colors duration-300">
               <Database className="w-5 h-5 md:w-6 md:h-6 text-slate-300 group-hover:text-brand-yellow transition-colors duration-300" />
               <div className="absolute top-0 right-0 -mt-1 -mr-1 w-2.5 h-2.5 md:w-3 md:h-3 bg-brand-yellow rounded-full animate-pulse shadow-[0_0_8px_#06B6D4]" />
             </div>
             
             {Array.from({ length: particlesPerNode }).map((_, p) => {
                const yOffset = (1 - i) * 80; 
                return (
                  <motion.div
                    key={p}
                    className="absolute top-1/2 left-1/2 w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-brand-yellow"
                    style={{ boxShadow: '0 0 6px #06B6D4', zIndex: 10 }}
                    initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
                    animate={{ 
                      x: [0, 80, 200], 
                      y: [0, yOffset * 0.4, yOffset], 
                      opacity: [0, 1, 0],
                      scale: [0.8, 1, 0.4] 
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: p * 0.6 + i * 0.2, ease: "easeInOut" }}
                  />
                );
             })}
          </div>
        ))}
      </div>

      <div className="z-10 relative flex items-center pl-4 md:pl-0">
         <div className="h-48 w-px border-l-2 border-dashed border-slate-600 mr-8 hidden md:block"></div>
         <div className="relative">
            <div className="text-[10px] md:text-xs text-slate-400 font-mono rotate-90 whitespace-nowrap mb-2 absolute -left-8 md:-left-12 top-1/2 -translate-y-1/2">INGESTION</div>
            <div className="w-24 md:w-32 h-20 overflow-hidden relative mask-image-l">
                {Array.from({ length: isMobile ? 4 : 8 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute h-[2px] bg-gradient-to-r from-brand-yellow/0 via-brand-yellow to-brand-yellow/0 rounded-full"
                    style={{ width: Math.random() * 30 + 20, top: Math.random() * 100 + '%' }}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 150, opacity: [0, 1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity, delay: Math.random(), ease: "linear" }}
                  />
                ))}
            </div>
         </div>
      </div>
    </div>
  );
};

const TransformView = ({ isMobile }: { isMobile: boolean }) => {
  return (
    <div className="w-full h-full relative flex items-center justify-center overflow-hidden">
       <div className="absolute left-0 h-full w-1/4 md:w-1/3 flex items-center justify-end pr-2 md:pr-8">
          {Array.from({ length: isMobile ? 3 : 6 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-brand-yellow"
              initial={{ x: -100, y: (Math.random() - 0.5) * 60, opacity: 0 }}
              animate={{ x: 20, y: 0, opacity: [0, 1, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.3, ease: "linear" }}
            />
          ))}
       </div>

       <div className="relative z-10 w-48 h-48 md:w-64 md:h-64 bg-slate-800/80 border border-slate-600 rounded-2xl backdrop-blur-xl flex flex-col items-center justify-center overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-brand-pink/5 animate-pulse-slow" />
          <div className="grid grid-cols-3 gap-2 md:gap-3 p-3 md:p-4">
             {Array.from({ length: 9 }).map((_, i) => (
               <motion.div
                 key={i}
                 className="w-8 h-8 md:w-10 md:h-10 rounded border border-slate-600 flex items-center justify-center bg-slate-700"
                 animate={{
                   borderColor: ["#475569", "#7C3AED", "#10B981", "#475569"],
                   backgroundColor: ["#334155", "rgba(124, 58, 237, 0.2)", "rgba(16, 185, 129, 0.2)", "#334155"],
                   borderRadius: ["4px", "8px", "2px", "4px"]
                 }}
                 transition={{ duration: 3, repeat: Infinity, delay: i * 0.15 }}
               >
                 <motion.div
                    animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.15 }}
                 >
                   <Box className="w-3 h-3 md:w-4 md:h-4 text-white" />
                 </motion.div>
               </motion.div>
             ))}
          </div>
          <div className="mt-2 md:mt-4 text-[10px] md:text-[10px] font-mono text-brand-pink tracking-widest uppercase">Transforming</div>
       </div>

       <div className="absolute right-0 h-full w-1/4 md:w-1/3 flex items-center pl-2 md:pl-8">
          {Array.from({ length: isMobile ? 2 : 4 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-4 h-4 md:w-6 md:h-6 rounded bg-brand-orange/20 border border-brand-orange/60"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 100, opacity: [0, 1, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 + i * 0.5, ease: "linear" }}
            />
          ))}
       </div>
    </div>
  );
};

const LoadView = ({ isMobile }: { isMobile: boolean }) => {
  return (
    <div className="w-full h-full relative flex items-center justify-center px-4 md:px-16">
      {/* Incoming Data Stream - Left Side */}
      <div className="flex-1 flex items-center justify-end pr-4 md:pr-8 relative h-32">
         {Array.from({ length: isMobile ? 3 : 5 }).map((_, i) => (
           <motion.div
             key={i}
             className="absolute right-0 w-6 h-6 md:w-8 md:h-8 rounded bg-brand-orange border border-white/20 shadow-[0_0_15px_rgba(16,185,129,0.6)] flex items-center justify-center z-20"
             initial={{ x: -180, opacity: 0, scale: 0.5 }}
             animate={{ 
               x: [-180, 0], 
               opacity: [0, 1, 1, 0], 
               scale: [0.5, 1, 0.8] 
             }}
             transition={{ duration: 2, repeat: Infinity, delay: i * 0.4, ease: "easeOut" }}
           >
             <div className="w-3 h-3 md:w-4 md:h-4 bg-white/40 rounded-sm" />
           </motion.div>
         ))}
      </div>

      {/* Warehouse Container */}
      <motion.div 
        className="relative z-10 w-32 h-48 md:w-48 md:h-64 bg-slate-800 rounded-t-2xl border-x border-t border-slate-600 flex flex-col justify-end overflow-hidden"
        animate={{ 
          boxShadow: [
            "0 0 20px rgba(16, 185, 129, 0.0)", 
            "0 0 50px rgba(16, 185, 129, 0.4)", 
            "0 0 20px rgba(16, 185, 129, 0.0)"
          ],
          borderColor: ["#475569", "#10B981", "#475569"]
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
         {/* Internal Grid Pattern */}
         <div className="absolute inset-0 opacity-30 z-0" 
              style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '16px 16px' }} 
         />

         {/* Liquid Fill Animation */}
         <motion.div 
           className="w-full relative z-0"
           style={{ 
             background: 'linear-gradient(to top, rgba(16,185,129,0.8), rgba(16,185,129,0.2))',
             boxShadow: 'inset 0 0 20px rgba(16,185,129,0.5)'
           }}
           initial={{ height: "15%" }}
           animate={{ height: ["15%", "90%"] }}
           transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
         >
            {/* Glowing Surface Line */}
            <motion.div 
              className="absolute top-0 w-full h-[3px] bg-white shadow-[0_0_20px_#10B981]"
              animate={{ opacity: [0.8, 1, 0.8], boxShadow: ["0 0 10px #10B981", "0 0 25px #10B981", "0 0 10px #10B981"] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            
            {/* Rising Data Bubbles */}
            {Array.from({ length: isMobile ? 4 : 8 }).map((_, k) => (
                <motion.div
                    key={k}
                    className="absolute bg-white/60 w-1.5 h-1.5 rounded-full"
                    style={{ left: `${Math.random() * 90 + 5}%` }}
                    initial={{ bottom: "-10%", opacity: 0 }}
                    animate={{ bottom: "110%", opacity: [0, 1, 0] }}
                    transition={{ duration: 2 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2, ease: "linear" }}
                />
            ))}
         </motion.div>

         {/* Server Racks Overlay (Foreground) */}
         <div className="absolute inset-0 flex flex-col justify-evenly px-3 py-2 pointer-events-none z-10">
            {[1,2,3,4,5].map(i => (
              <div key={i} className="w-full h-[1px] bg-slate-500/50 flex justify-between items-center px-1">
                 <motion.div 
                   className="w-1.5 h-1.5 rounded-full bg-brand-orange"
                   animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.2, 1] }}
                   transition={{ duration: 0.5 + Math.random(), repeat: Infinity, delay: Math.random() }}
                 />
                 <motion.div 
                   className="w-1.5 h-1.5 rounded-full bg-brand-orange"
                   animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.2, 1] }}
                   transition={{ duration: 0.5 + Math.random(), repeat: Infinity, delay: Math.random() }}
                 />
              </div>
            ))}
         </div>
         
         {/* Label */}
         <div className="absolute bottom-3 w-full text-center z-20">
            <span className="text-[9px] md:text-[10px] font-bold text-brand-orange bg-slate-900/90 px-3 py-1 rounded-full border border-brand-orange/30 tracking-wider shadow-lg">
              DATA WAREHOUSE
            </span>
         </div>
      </motion.div>
    </div>
  );
};