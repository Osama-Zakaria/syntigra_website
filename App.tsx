import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Database, 
  Server, 
  Activity, 
  Workflow, 
  X, 
  Code2, 
  Zap, 
  Clock, 
  FileText, 
  CheckCircle2,
  Globe,
  Users,
  Building2,
  Cloud,
  Layers,
  ShoppingBag,
  Home,
  LineChart,
  HeartPulse,
  Cpu,
  Menu,
  Twitter,
  Linkedin,
  Github,
  Mail,
  Phone,
  TrendingUp,
  DollarSign,
  ShieldCheck,
  Lock,
  Calendar,
  ArrowUpRight,
  Briefcase,
  MapPin,
  Send
} from 'lucide-react';

// --- Helper Components ---

const ThreeDIcon = ({ icon: Icon, color }: { icon: React.ElementType, color: string }) => (
  <div className="relative">
    {/* Pulsing Neon Glow */}
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ 
        opacity: [0.3, 0.6, 0.3],
        scale: [1, 1.3, 1],
      }}
      viewport={{ once: false }}
      transition={{ 
        duration: 4, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }}
      className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${color} blur-2xl -z-10`}
    />
    
    <div className={`relative w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br ${color} shadow-lg transform transition-all duration-500 ease-out group-hover:scale-110 group-hover:-translate-y-1 group-hover:rotate-2 group-hover:shadow-2xl`}>
      <div className="absolute inset-0 rounded-2xl bg-white/10 opacity-0 group-hover:opacity-20 transition-opacity"></div>
      {/* 3D Highlight / Bevel */}
      <div className="absolute inset-0 rounded-2xl border-t border-l border-white/40 pointer-events-none"></div>
      <div className="absolute inset-0 rounded-2xl border-b border-r border-black/20 pointer-events-none"></div>
      {/* Inner Depth */}
      <div className="absolute inset-0 rounded-2xl shadow-[inset_0_2px_15px_rgba(255,255,255,0.25),inset_0_-10px_20px_rgba(0,0,0,0.1)] pointer-events-none"></div>
      
      <Icon className="w-8 h-8 text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.4)] relative z-10" strokeWidth={1.5} />
    </div>
  </div>
);

// --- Constants ---

const SERVICES = [
  {
    id: 'extraction',
    title: 'Data Extraction',
    icon: <Database className="w-8 h-8 text-cyan-400" />,
    shortDesc: 'High-velocity data ingestion from disparate sources with <10ms latency.',
    fullDesc: 'We build robust ingestion engines that connect to any source—databases, APIs, SaaS platforms, or mainframes. Our extraction layer handles rate limiting, pagination, and authentication complexities automatically, ensuring no data is left behind.',
    technologies: ['Airbyte', 'Fivetran', 'Custom Python connectors', 'Kafka Connect'],
    benefits: ['Zero-maintenance connectors', 'Schema drift detection', 'Incremental loading', 'Real-time CDC'],
    timeline: '2-4 Weeks'
  },
  {
    id: 'transformation',
    title: 'Data Transformation',
    icon: <Workflow className="w-8 h-8 text-purple-500" />,
    shortDesc: 'Clean, normalize, and enrich raw data into analytics-ready models.',
    fullDesc: 'Turning raw data into gold. We implement dbt-based transformation layers that ensure data quality, lineage, and documentation are first-class citizens in your pipeline. We transform messy JSON into structured tables ready for BI.',
    technologies: ['dbt (Core & Cloud)', 'Spark', 'SQL', 'Pandas/Polars'],
    benefits: ['Automated testing', 'Version controlled logic', 'Visual lineage graphs', 'Modular data modeling'],
    timeline: '4-8 Weeks'
  },
  {
    id: 'warehousing',
    title: 'Data Warehousing',
    icon: <Server className="w-8 h-8 text-blue-500" />,
    shortDesc: 'Scalable storage solutions optimized for performance and cost.',
    fullDesc: 'Architecting your single source of truth. We design Lakehouse architectures that separate compute from storage, allowing infinite scaling without the massive price tag. We implement governance, security, and access control from day one.',
    technologies: ['Snowflake', 'Databricks', 'BigQuery', 'Redshift'],
    benefits: ['Sub-second query speeds', 'RBAC & Row-level security', 'Time-travel/Snapshot isolation', 'Cost governance'],
    timeline: '6-10 Weeks'
  },
  {
    id: 'realtime',
    title: 'Real-time Processing',
    icon: <Activity className="w-8 h-8 text-indigo-500" />,
    shortDesc: 'Event-driven architectures for instant decision making.',
    fullDesc: 'For when "yesterday" isn\'t good enough. We build streaming pipelines that process events in milliseconds for fraud detection, live personalization, and operational monitoring. Turn static reports into live operational intelligence.',
    technologies: ['Apache Kafka', 'Apache Flink', 'AWS Kinesis', 'Materialize'],
    benefits: ['<1s Data Latency', 'Stateful stream processing', 'Windowed aggregations', 'Event replay ability'],
    timeline: '8-12 Weeks'
  }
];

const INTEGRATION_SERVICES = [
  {
    title: 'API Integrations',
    description: 'Design and implementation of scalable REST & GraphQL APIs that serve as the connective tissue of your enterprise.',
    icon: <Globe className="w-6 h-6 text-cyan-400" />
  },
  {
    title: 'CRM Integrations',
    description: 'Bi-directional sync between Salesforce, HubSpot, and your data warehouse to ensure sales and marketing alignment.',
    icon: <Users className="w-6 h-6 text-purple-400" />
  },
  {
    title: 'ERP Integrations',
    description: 'Unlock data trapped in SAP, Oracle, or NetSuite. We build secure pipelines to modernize legacy operational data.',
    icon: <Building2 className="w-6 h-6 text-blue-400" />
  },
  {
    title: 'Cloud & On-Premise Systems',
    description: 'Secure bridging of on-premise mainframes with cloud-native applications using secure VPNs and Direct Connect.',
    icon: <Cloud className="w-6 h-6 text-indigo-400" />
  },
  {
    title: 'Custom Middleware Solutions',
    description: 'Bespoke message queues and processing layers tailored to unique business logic and complex data flows.',
    icon: <Layers className="w-6 h-6 text-emerald-400" />
  }
];

const INDUSTRIES = [
  {
    title: 'Retail & E-Commerce',
    description: 'Unifying customer data across touchpoints to drive personalization and optimize inventory management in real-time.',
    icon: <ThreeDIcon icon={ShoppingBag} color="from-pink-500 to-rose-600 shadow-pink-500/25" />
  },
  {
    title: 'Real Estate & PropTech',
    description: 'Automating property valuation workflows and market analysis by aggregating millions of data points from disparate listings.',
    icon: <ThreeDIcon icon={Home} color="from-emerald-400 to-teal-600 shadow-emerald-500/25" />
  },
  {
    title: 'FinTech & Banking',
    description: 'Building secure, compliant data infrastructure for fraud detection, risk modeling, and high-frequency trading analytics.',
    icon: <ThreeDIcon icon={LineChart} color="from-blue-500 to-indigo-600 shadow-blue-500/25" />
  },
  {
    title: 'Healthcare & Life Sciences',
    description: 'HIPAA-compliant data lakes that break down silos between patient records, research data, and operational metrics.',
    icon: <ThreeDIcon icon={HeartPulse} color="from-red-500 to-orange-600 shadow-red-500/25" />
  },
  {
    title: 'Enterprise SaaS',
    description: 'Scalable multi-tenant analytics architectures that empower your customers with deep insights into their usage patterns.',
    icon: <ThreeDIcon icon={Cpu} color="from-purple-500 to-violet-600 shadow-purple-500/25" />
  }
];

const TECH_STACK = [
  { name: "AWS", category: "Cloud Infrastructure", icon: Cloud, color: "text-orange-400" },
  { name: "Azure", category: "Cloud Infrastructure", icon: Cloud, color: "text-blue-400" },
  { name: "Google Cloud", category: "Cloud Infrastructure", icon: Cloud, color: "text-red-400" },
  { name: "Python", category: "Data Engineering", icon: Code2, color: "text-yellow-400" },
  { name: "Node.js", category: "Backend Services", icon: Server, color: "text-green-500" },
  { name: "Apache Kafka", category: "Event Streaming", icon: Activity, color: "text-purple-400" },
  { name: "Apache Airflow", category: "Orchestration", icon: Workflow, color: "text-teal-400" },
  { name: "Snowflake", category: "Data Warehousing", icon: Database, color: "text-cyan-400" },
];

const CASE_STUDIES = [
  {
    metric: "12x",
    label: "Faster Query Performance",
    description: "Reduced average analytical query time from 4 minutes to 20 seconds for a Fortune 500 retailer via warehouse optimization.",
    icon: <TrendingUp className="w-6 h-6 text-emerald-400" />
  },
  {
    metric: "40%",
    label: "Cloud Cost Reduction",
    description: "Optimized Snowflake compute usage and storage policies, saving over $200k annually in infrastructure costs.",
    icon: <DollarSign className="w-6 h-6 text-green-400" />
  },
  {
    metric: "< 20ms",
    label: "Data Ingestion Latency",
    description: "Built a real-time fraud detection pipeline for a FinTech unicorn processing 50k events per second.",
    icon: <Zap className="w-6 h-6 text-yellow-400" />
  },
  {
    metric: "100%",
    label: "Automated Compliance",
    description: "Implemented zero-touch PII masking and GDPR deletion workflows, eliminating manual operational overhead.",
    icon: <ShieldCheck className="w-6 h-6 text-purple-400" />
  }
];

const BLOG_POSTS = [
  {
    title: "The Death of ETL: Why ELT is Taking Over Modern Data Stacks",
    excerpt: "Traditional ETL pipelines are struggling to keep up with the velocity of generated data. Here's why shifting transformation to the warehouse is the future.",
    date: "March 15, 2024",
    category: "Data Engineering",
    readTime: "5 min read",
    gradient: "from-pink-500/20 to-rose-500/20"
  },
  {
    title: "Optimizing Snowflake Compute for Cost Efficiency",
    excerpt: "A deep dive into warehouse sizing, auto-suspend settings, and clustering keys that saved our clients 40% on their monthly bills.",
    date: "March 10, 2024",
    category: "Cloud Cost",
    readTime: "8 min read",
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    title: "Streaming vs. Batch: When to Use Kafka Over Airflow",
    excerpt: "Real-time isn't always the answer. We break down the architectural trade-offs between event streaming and scheduled batch processing.",
    date: "Feb 28, 2024",
    category: "Architecture",
    readTime: "6 min read",
    gradient: "from-purple-500/20 to-indigo-500/20"
  }
];

const JOBS = [
  {
    title: "Senior Data Engineer",
    type: "Full-time",
    location: "Remote / Hybrid",
    department: "Engineering"
  },
  {
    title: "Solutions Architect",
    type: "Full-time",
    location: "New York, NY",
    department: "Consulting"
  },
  {
    title: "Backend Developer (Go/Rust)",
    type: "Contract",
    location: "Remote",
    department: "Product"
  }
];

// --- Sub-Components (Layout) ---

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Integration', href: '#integration' },
    { name: 'Security', href: '#security' },
    { name: 'Industries', href: '#industries' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'About', href: '#about' },
    { name: 'Careers', href: '#careers' },
    { name: 'Blog', href: '#blog' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-6"
      >
        <div className="container mx-auto">
          <div className={`bg-slate-900/70 backdrop-blur-xl border ${scrolled ? 'border-white/10 shadow-lg shadow-black/20' : 'border-transparent shadow-none'} rounded-2xl px-6 py-3 flex items-center justify-between transition-all duration-300`}>
              {/* Logo */}
              <a href="#" className="flex items-center gap-2 font-display font-bold text-xl tracking-tight text-white cursor-pointer select-none">
                  <div className="w-8 h-8 bg-gradient-to-tr from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-cyan-500/20">
                      <Layers size={18} strokeWidth={2.5} />
                  </div>
                  Syntigra
              </a>

              {/* Desktop Nav */}
              <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
                  {navLinks.slice(0, 5).map((link) => (
                    <motion.a 
                      key={link.name} 
                      href={link.href} 
                      whileHover={{ scale: 1.05, color: "#ffffff" }}
                      className="transition-colors"
                    >
                      {link.name}
                    </motion.a>
                  ))}
              </nav>

              {/* CTA */}
              <div className="flex items-center gap-4">
                  <motion.a 
                    href="#contact" 
                    whileHover={{ scale: 1.05, color: "#ffffff" }}
                    className="hidden md:block px-5 py-2 border border-white/20 text-white font-bold rounded-lg text-sm hover:bg-white/10 transition-all"
                  >
                      Request a Demo
                  </motion.a>
                  <motion.a 
                    href="#contact" 
                    whileHover={{ scale: 1.05, color: "#ffffff", backgroundColor: "#0891b2" }}
                    className="hidden md:block px-5 py-2 bg-white text-slate-950 font-bold rounded-lg text-sm transition-all shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                  >
                      Book Demo
                  </motion.a>
                  <button 
                    className="md:hidden text-white p-1 hover:bg-white/10 rounded-md transition-colors"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  >
                      <Menu size={24} />
                  </button>
              </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-[60] bg-slate-950 flex flex-col p-6"
          >
            <div className="flex items-center justify-between mb-12">
               <a href="#" className="flex items-center gap-2 font-display font-bold text-xl tracking-tight text-white" onClick={() => setIsMobileMenuOpen(false)}>
                  <div className="w-8 h-8 bg-gradient-to-tr from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center text-white">
                      <Layers size={18} strokeWidth={2.5} />
                  </div>
                  Syntigra
              </a>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 bg-slate-900 rounded-full border border-white/10 text-slate-400"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="flex flex-col gap-6 text-2xl font-display font-bold">
              {navLinks.map((link, i) => (
                <motion.a 
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  whileHover={{ scale: 1.02, color: "#ffffff", x: 5 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-slate-300 hover:text-white flex items-center justify-between group border-b border-white/5 pb-4 transition-colors"
                >
                  {link.name}
                  <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all text-cyan-400" />
                </motion.a>
              ))}
            </nav>

            <div className="mt-auto flex flex-col gap-3">
               <motion.a 
                href="#contact" 
                whileHover={{ scale: 1.02, color: "#ffffff" }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-4 border border-white/10 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-white/5 transition-all"
               >
                 Request a Demo
               </motion.a>
               <motion.a 
                href="#contact" 
                whileHover={{ scale: 1.02, color: "#ffffff", backgroundColor: "#0891b2" }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-4 bg-white text-slate-950 font-bold rounded-xl flex items-center justify-center gap-2 transition-all"
               >
                 Book Demo <ArrowRight size={18} />
               </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const Footer = () => {
  const socialAction = (e: React.MouseEvent) => {
    e.preventDefault();
    // In a real app, this would open a link. For now, we prevent jump.
  };

  return (
    <footer className="bg-[#01030d] border-t border-white/5 pt-20 pb-10 relative overflow-hidden">
        {/* Footer Background Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
            <div className="grid md:grid-cols-4 gap-12 mb-16">
                <div className="col-span-1 md:col-span-1">
                    <div className="flex items-center gap-2 font-display font-bold text-xl tracking-tight mb-6 text-white">
                            <div className="w-8 h-8 bg-gradient-to-tr from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center text-white">
                            <Layers size={18} />
                        </div>
                        Syntigra
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">
                        Architecting the future of enterprise data. We build scalable, secure, and intelligent data ecosystems for modern businesses.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" onClick={socialAction} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all border border-white/5">
                          <Twitter size={18} />
                        </a>
                        <a href="#" onClick={socialAction} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all border border-white/5">
                          <Linkedin size={18} />
                        </a>
                        <a href="#" onClick={socialAction} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all border border-white/5">
                          <Github size={18} />
                        </a>
                    </div>
                </div>
                
                <div>
                    <h4 className="font-bold text-white mb-6">Solutions</h4>
                    <ul className="space-y-4 text-sm text-slate-400">
                        <li><a href="#services" className="hover:text-cyan-400 transition-colors flex items-center gap-2 group"><span className="w-1 h-1 rounded-full bg-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>Data Extraction</a></li>
                        <li><a href="#services" className="hover:text-cyan-400 transition-colors flex items-center gap-2 group"><span className="w-1 h-1 rounded-full bg-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>Transformation</a></li>
                        <li><a href="#services" className="hover:text-cyan-400 transition-colors flex items-center gap-2 group"><span className="w-1 h-1 rounded-full bg-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>Warehousing</a></li>
                        <li><a href="#services" className="hover:text-cyan-400 transition-colors flex items-center gap-2 group"><span className="w-1 h-1 rounded-full bg-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>Real-time Streaming</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-white mb-6">Company</h4>
                    <ul className="space-y-4 text-sm text-slate-400">
                        <li><a href="#about" className="hover:text-cyan-400 transition-colors">About Us</a></li>
                        <li><a href="#careers" className="hover:text-cyan-400 transition-colors">Careers</a></li>
                        <li><a href="#case-studies" className="hover:text-cyan-400 transition-colors">Case Studies</a></li>
                        <li><a href="#blog" className="hover:text-cyan-400 transition-colors">Blog</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-white mb-6">Contact</h4>
                    <ul className="space-y-4 text-sm text-slate-400">
                        <li className="flex items-center gap-3"><Mail size={16} className="text-cyan-500" /> info@syntigra.com</li>
                        <li className="flex items-center gap-3"><Phone size={16} className="text-cyan-500" /> +1 (555) 123-4567</li>
                        <li className="flex items-start gap-3">
                          <Building2 size={16} className="text-cyan-500 mt-1 flex-shrink-0" />
                          <span>100 Innovation Dr,<br/>Tech Valley, CA 94025</span>
                        </li>
                    </ul>
                </div>
            </div>
            
            <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
                <p>&copy; 2024 Syntigra Inc. All rights reserved.</p>
                <div className="flex gap-8">
                    <a href="#" onClick={socialAction} className="hover:text-slate-300 transition-colors">Privacy Policy</a>
                    <a href="#" onClick={socialAction} className="hover:text-slate-300 transition-colors">Terms of Service</a>
                    <a href="#" onClick={socialAction} className="hover:text-slate-300 transition-colors">Cookie Settings</a>
                </div>
            </div>
        </div>
    </footer>
  );
}

// --- Sub-Components (Sections) ---

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#020617]">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          animate={{ 
            x: [0, 30, 0], 
            y: [0, -50, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ 
            x: [0, -30, 0], 
            y: [0, 50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ 
            x: [0, 20, 0], 
            y: [0, 20, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[-20%] left-[20%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]"
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/30 backdrop-blur-sm mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="text-xs font-semibold tracking-wide text-cyan-300 uppercase">Next Gen Data Architecture</span>
          </div>
          
          <h1 className="text-8xl md:text-[11rem] font-display font-bold leading-[0.85] mb-10 tracking-tighter">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-slate-500/50">
              Transform Data Into
            </span> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400">
              Intelligence.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-xl leading-relaxed">
            We architect high-performance ETL pipelines, scalable data lakes, and automated integration systems that turn chaos into clarity.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="px-8 py-4 bg-white text-slate-950 font-bold rounded-lg hover:bg-cyan-50 transition-all flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]">
              Start Transformation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#services" className="px-8 py-4 border border-white/10 bg-white/5 backdrop-blur-md text-white font-semibold rounded-lg hover:bg-white/10 transition-all flex items-center justify-center">
              Explore Services
            </a>
          </div>
        </motion.div>

        {/* Abstract 3D/Data Visualization Placeholder */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative h-[400px] lg:h-[600px] w-full flex items-center justify-center"
        >
          {/* Simulated Data Pipeline Visual */}
          <div className="relative w-full h-full">
             <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[400px] md:h-[400px] border border-cyan-500/20 rounded-full"
             />
             <motion.div 
               animate={{ rotate: -360 }}
               transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] md:w-[300px] md:h-[300px] border border-blue-500/20 rounded-full"
             />
             <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] md:w-[200px] md:h-[200px] border border-indigo-500/20 rounded-full"
             />
             
             {/* Floating Cards */}
             <motion.div 
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 2, 0],
                scale: [1, 1.02, 1]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[20%] right-[10%] p-4 glass rounded-xl border-l-4 border-l-cyan-400 max-w-[200px] bg-slate-900/80 backdrop-blur-md"
             >
               <div className="flex items-center gap-3 mb-2">
                 <div className="w-2 h-2 rounded-full bg-green-400"></div>
                 <span className="text-xs font-mono text-cyan-300">PIPELINE ACTIVE</span>
               </div>
               <div className="h-1 w-full bg-slate-700 rounded-full overflow-hidden">
                 <div className="h-full w-2/3 bg-cyan-400"></div>
               </div>
               <div className="flex justify-between mt-2 text-xs text-slate-400">
                 <span>Ingestion</span>
                 <span>24GB/s</span>
               </div>
             </motion.div>

             <motion.div 
              animate={{ 
                y: [0, 20, 0],
                rotate: [0, -2, 0],
                scale: [1, 0.98, 1]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-[25%] left-[5%] p-4 glass rounded-xl border-l-4 border-l-indigo-400 max-w-[200px] bg-slate-900/80 backdrop-blur-md"
             >
                <div className="flex items-center gap-3 mb-2">
                 <Database className="w-4 h-4 text-indigo-400" />
                 <span className="text-xs font-mono text-indigo-300">SNOWFLAKE SYNC</span>
               </div>
               <div className="space-y-1">
                 <div className="h-1.5 w-full bg-slate-700 rounded-full"></div>
                 <div className="h-1.5 w-3/4 bg-slate-700 rounded-full"></div>
               </div>
               <div className="mt-2 text-xs text-green-400 font-mono">
                 ✓ Completed
               </div>
             </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-[#020617] to-transparent z-20"></div>
    </section>
  );
};

const AboutSyntigra = () => {
  return (
    <section className="py-32 relative bg-slate-950 border-b border-white/5 overflow-hidden" id="about">
       {/* Background Elements */}
       <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[160px] pointer-events-none"></div>
       <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          
          {/* Left Column: Positioning & Vision */}
          <div className="lg:w-1/2 sticky top-32">
             <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
             >
                <div className="flex items-center gap-3 text-cyan-400 font-bold tracking-[0.2em] uppercase text-xs mb-6">
                    <div className="w-12 h-[1px] bg-cyan-500/50"></div>
                    <span>The Vision</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 leading-[0.9] tracking-tighter">
                  Architecting the <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500">Nervous System</span> <br/>
                  of Enterprise.
                </h2>
                <p className="text-slate-400 text-xl leading-relaxed mb-8 max-w-lg">
                  Syntigra is a specialized data engineering collective. We don't just move data; we build the high-performance infrastructure that powers modern intelligence.
                </p>
                <p className="text-slate-500 text-lg leading-relaxed mb-12 max-w-lg">
                  In an era where data volume is the bottleneck, we provide the solution. Our cloud-native platforms are designed for infinite scale and sub-second latency.
                </p>
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                   <div className="flex -space-x-3">
                      {[1,2,3,4].map(i => (
                        <div key={i} className="w-12 h-12 rounded-full bg-slate-800 border-2 border-slate-950 flex items-center justify-center text-xs font-bold text-slate-400 overflow-hidden">
                           <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="User" className="w-full h-full object-cover opacity-80" referrerPolicy="no-referrer" />
                        </div>
                      ))}
                   </div>
                   <div>
                      <p className="font-bold text-white text-lg">Trusted by Engineering Leaders</p>
                      <p className="text-slate-500 text-sm">Deploying mission-critical data stacks globally.</p>
                   </div>
                </div>
             </motion.div>
          </div>

          {/* Right Column: Key Differentiators Grid */}
          <div className="lg:w-1/2 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
                <h3 className="text-2xl font-bold text-white mb-4 font-display">Why Syntigra?</h3>
                <div className="h-1 w-12 bg-cyan-500 rounded-full mb-4"></div>
                <p className="text-slate-400 text-lg">Our engineering philosophy is built on four non-negotiable pillars.</p>
            </motion.div>

            <div className="grid gap-6">
              {[
                {
                  title: "Extreme Performance",
                  desc: "We optimize every microsecond. Our pipelines are engineered for sub-10ms latency at petabyte scale.",
                  icon: Zap,
                  color: "text-yellow-400",
                  bg: "bg-yellow-400/10"
                },
                {
                  title: "Elastic Scalability",
                  desc: "Architectures that breathe. Scale from zero to millions of events per second without breaking a sweat.",
                  icon: Cloud,
                  color: "text-blue-400",
                  bg: "bg-blue-400/10"
                },
                {
                  title: "Fortified Security",
                  desc: "Security isn't an afterthought. We implement zero-trust data access and end-to-end encryption by default.",
                  icon: ShieldCheck,
                  color: "text-emerald-400",
                  bg: "bg-emerald-400/10"
                },
                {
                  title: "Autonomous Operations",
                  desc: "Self-healing, self-documenting, and self-scaling. We build systems that manage themselves.",
                  icon: Workflow,
                  color: "text-purple-400",
                  bg: "bg-purple-400/10"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
                  className="p-8 rounded-3xl bg-slate-900/30 border border-white/5 hover:bg-slate-900/50 hover:border-cyan-500/20 transition-all group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-[60px] -mr-16 -mt-16 group-hover:bg-cyan-500/10 transition-colors"></div>
                  
                  <div className="flex gap-6 items-start relative z-10">
                    <div className={`w-14 h-14 rounded-2xl ${item.bg} border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500 shadow-xl`}>
                      <item.icon className={`w-7 h-7 ${item.color}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{item.title}</h3>
                      <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section className="py-24 relative bg-slate-950" id="services">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-3xl md:text-5xl font-display font-bold mb-4"
          >
            ETL & Data Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto"
          >
            End-to-end data engineering solutions. Click on a service to explore technical details.
          </motion.p>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8, ease: "circOut" }}
            className="h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mt-6 rounded-full mx-auto"
          ></motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              layoutId={`service-card-${service.id}`}
              onClick={() => setSelectedService(service)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.1,
                ease: [0.21, 0.47, 0.32, 0.98] 
              }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="glass glass-card p-8 rounded-2xl group cursor-pointer transition-all duration-300 relative flex flex-col border border-white/5 bg-white/5"
            >
              <div className="mb-6 p-4 bg-slate-900/50 rounded-xl inline-block border border-white/5 group-hover:border-cyan-500/20 transition-colors self-start">
                {service.icon}
              </div>
              <motion.h3 layoutId={`service-title-${service.id}`} className="text-xl font-bold mb-3 text-slate-100">{service.title}</motion.h3>
              <p className="text-slate-400 leading-relaxed text-sm mb-6 flex-grow">
                {service.shortDesc}
              </p>
              <div className="flex items-center text-cyan-400 text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity mt-auto">
                View Details <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
              onClick={() => setSelectedService(null)}
            />
            <motion.div
              layoutId={`service-card-${selectedService.id}`}
              className="relative bg-[#020617] border border-white/10 rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl shadow-cyan-500/10 max-h-[90vh] flex flex-col z-50"
              onClick={(e) => e.stopPropagation()}
            >
                {/* Decorative gradients */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[80px] pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 blur-[80px] pointer-events-none"></div>

                <button 
                  onClick={() => setSelectedService(null)}
                  className="absolute top-6 right-6 text-slate-400 hover:text-white bg-slate-800/50 hover:bg-slate-700 p-2 rounded-full transition-colors z-20 backdrop-blur-sm"
                >
                  <X size={20} />
                </button>

                <div className="p-8 md:p-10 overflow-y-auto custom-scrollbar relative z-10">
                    <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8 border-b border-white/5 pb-8">
                        <div className="p-5 bg-slate-900 rounded-2xl border border-white/10 w-fit">
                            {selectedService.icon}
                        </div>
                        <div>
                            <motion.h3 layoutId={`service-title-${selectedService.id}`} className="text-3xl font-bold text-white font-display mb-2">{selectedService.title}</motion.h3>
                             <div className="inline-flex items-center px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/30 text-cyan-400 text-xs font-bold uppercase tracking-wider">
                                Enterprise Solution
                             </div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div>
                            <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                                <FileText size={18} className="text-cyan-500" />
                                Description
                            </h4>
                            <p className="text-slate-300 leading-relaxed text-lg">
                                {selectedService.fullDesc}
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-slate-900/30 p-6 rounded-2xl border border-white/5">
                                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                                    <Code2 size={16} className="text-blue-400" /> Technology Stack
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {selectedService.technologies.map((tech, i) => (
                                        <span key={i} className="px-3 py-1.5 bg-slate-800/50 border border-white/10 rounded-lg text-sm text-cyan-100 font-medium">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                             <div className="bg-slate-900/30 p-6 rounded-2xl border border-white/5">
                                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                                    <Zap size={16} className="text-yellow-400" /> Key Benefits
                                </h4>
                                <ul className="space-y-3">
                                    {selectedService.benefits.map((benefit, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-slate-200">
                                            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0 shadow-[0_0_8px_rgba(34,211,238,0.8)]"></div>
                                            {benefit}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
                            <div className="flex items-center gap-3 bg-slate-900 px-4 py-2 rounded-lg border border-white/5">
                                <Clock size={18} className="text-cyan-400"/> 
                                <span className="text-slate-400 text-sm">Typical Timeline:</span>
                                <span className="text-white font-bold">{selectedService.timeline}</span>
                            </div>
                             <button 
                                onClick={() => {
                                  setSelectedService(null);
                                  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-cyan-500/20 transform hover:-translate-y-0.5"
                             >
                                Discuss Requirements
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

const IntegrationServices = () => {
  return (
    <section className="py-24 relative bg-slate-900/50" id="integration">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-3xl md:text-5xl font-display font-bold mb-4"
          >
            Seamless Integration Ecosystem
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Unified connectivity across your entire technology stack. We bridge the gap between legacy systems and modern cloud infrastructure.
          </motion.p>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8, ease: "circOut" }}
            className="h-1 bg-gradient-to-r from-purple-500 to-indigo-600 mt-6 rounded-full mx-auto"
          ></motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INTEGRATION_SERVICES.map((service, index) => (
            <motion.a
              key={index}
              href="#contact"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.1,
                ease: [0.21, 0.47, 0.32, 0.98] 
              }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="p-8 rounded-3xl bg-slate-950 border border-white/5 hover:border-cyan-500/30 transition-all duration-500 group flex flex-col hover:bg-slate-900/80 relative overflow-hidden cursor-pointer shadow-2xl shadow-black/50"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity scale-[2] pointer-events-none blur-sm">
                 {React.cloneElement(service.icon, { className: `w-32 h-32 ${service.icon.props.className.split(' ').find(c => c.startsWith('text-'))}` })}
              </div>

              <div className="mb-8 p-4 bg-slate-900 rounded-2xl inline-block border border-white/5 group-hover:border-cyan-500/40 group-hover:scale-110 transition-all duration-500 self-start z-10 shadow-inner">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-white z-10 group-hover:text-cyan-300 transition-colors">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm z-10 group-hover:text-slate-300 transition-colors">
                {service.description}
              </p>
              
              <div className="mt-8 pt-6 border-t border-white/5 flex items-center text-xs font-bold text-slate-500 uppercase tracking-widest group-hover:text-cyan-400 transition-colors z-10">
                 Explore Solution <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

const SecurityCompliance = () => {
  return (
    <section className="py-24 relative bg-slate-950 border-y border-white/5 overflow-hidden" id="security">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Content */}
          <div className="lg:w-1/2">
             <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
             >
                <div className="flex items-center gap-2 text-emerald-400 font-bold tracking-wider uppercase text-sm mb-4">
                    <ShieldCheck size={18} />
                    <span>Uncompromising Security</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                    Enterprise-Grade <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">Protection Standards</span>
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed mb-8">
                    Your data is your most valuable asset. We employ a zero-trust architecture with military-grade encryption to ensure your information remains secure, compliant, and sovereign.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-6">
                    {[
                        { title: 'ISO 27001 Certified', desc: 'International standard for information security management.' },
                        { title: 'SOC 2 Type II', desc: 'Rigorous auditing of our security controls and processes.' },
                        { title: 'GDPR & CCPA', desc: 'Built-in compliance frameworks for global data privacy.' },
                        { title: 'AES-256 Encryption', desc: 'Data is encrypted at rest and in transit via TLS 1.3.' }
                    ].map((item, i) => (
                        <div key={i} className="flex gap-4">
                            <div className="w-1.5 h-full bg-slate-800 rounded-full overflow-hidden">
                                <div className="w-full h-1/2 bg-emerald-500"></div>
                            </div>
                            <div>
                                <h4 className="font-bold text-white mb-1">{item.title}</h4>
                                <p className="text-sm text-slate-400">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
             </motion.div>
          </div>

          {/* Right Graphic */}
          <div className="lg:w-1/2 relative">
             <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative z-10 bg-gradient-to-br from-slate-900 to-slate-950 border border-white/10 rounded-2xl p-8 shadow-2xl"
             >
                 {/* Decorative elements representing a secure vault or dashboard */}
                 <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
                     <div className="flex gap-2">
                         <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                         <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                         <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                     </div>
                     <div className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-xs text-emerald-400 font-mono flex items-center gap-2">
                         <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                         SYSTEM SECURE
                     </div>
                 </div>
                 
                 <div className="space-y-4">
                     {/* Mock security logs */}
                     <div className="font-mono text-xs space-y-2">
                        <div className="flex justify-between text-slate-500">
                            <span>timestamp</span>
                            <span>event_type</span>
                            <span>status</span>
                        </div>
                         <div className="flex justify-between text-slate-300 border-l-2 border-emerald-500 pl-3 bg-white/5 p-2 rounded">
                            <span>10:42:05.12</span>
                            <span>ENCRYPTION_HANDSHAKE</span>
                            <span className="text-emerald-400">VERIFIED</span>
                        </div>
                         <div className="flex justify-between text-slate-300 border-l-2 border-emerald-500 pl-3 bg-white/5 p-2 rounded">
                            <span>10:42:05.15</span>
                            <span>ACCESS_CONTROL_CHECK</span>
                            <span className="text-emerald-400">GRANTED</span>
                        </div>
                         <div className="flex justify-between text-slate-300 border-l-2 border-emerald-500 pl-3 bg-white/5 p-2 rounded">
                            <span>10:42:05.28</span>
                            <span>DATA_INGESTION_START</span>
                            <span className="text-emerald-400">SECURE</span>
                        </div>
                     </div>
                     
                     <div className="mt-8 pt-6 border-t border-white/5 grid grid-cols-3 gap-4 text-center">
                         <div>
                             <div className="text-2xl font-bold text-white">99.9%</div>
                             <div className="text-[10px] text-slate-500 uppercase tracking-wider">Uptime</div>
                         </div>
                         <div>
                             <div className="text-2xl font-bold text-white">0</div>
                             <div className="text-[10px] text-slate-500 uppercase tracking-wider">Breaches</div>
                         </div>
                          <div>
                             <div className="text-2xl font-bold text-white">24/7</div>
                             <div className="text-[10px] text-slate-500 uppercase tracking-wider">Monitoring</div>
                         </div>
                     </div>
                 </div>
             </motion.div>
             
             {/* Glow behind box */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-emerald-500/10 blur-[60px] -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Industries = () => {
  return (
    <section className="py-24 relative bg-[#020617] overflow-hidden" id="industries">
       {/* Decorative blob */}
       <div className="absolute top-1/4 -left-64 w-96 h-96 bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none"></div>
       <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-3xl md:text-5xl font-display font-bold mb-4"
          >
            Industries We Serve
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Tailored data strategies for high-compliance and high-velocity sectors.
          </motion.p>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8, ease: "circOut" }}
            className="h-1 bg-gradient-to-r from-pink-500 to-rose-600 mt-6 rounded-full mx-auto"
          ></motion.div>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {INDUSTRIES.map((industry, index) => (
             <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.1,
                ease: [0.21, 0.47, 0.32, 0.98] 
              }}
              className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)] p-8 rounded-2xl bg-slate-900/40 border border-white/5 hover:border-white/10 transition-all hover:bg-slate-900/60 group"
             >
                <div className="flex items-center gap-5 mb-4">
                    <div className="flex-shrink-0">
                        {industry.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-100">{industry.title}</h3>
                </div>
                <p className="text-slate-400 leading-relaxed text-sm">
                    {industry.description}
                </p>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TechnologyStack = () => {
  return (
    <section className="py-24 relative bg-slate-900/50 border-t border-white/5" id="tech-stack">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold mb-4"
          >
            Technology Stack
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto"
          >
            We leverage best-in-class open source and enterprise technologies to build resilient systems.
          </motion.p>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mt-6 rounded-full mx-auto"
          ></motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {TECH_STACK.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(30, 41, 59, 0.8)" }}
              className="p-6 rounded-2xl bg-slate-950 border border-white/5 hover:border-cyan-500/30 transition-all duration-300 group cursor-default"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl bg-slate-900 border border-white/5 group-hover:border-white/10 transition-colors`}>
                   <tech.icon className={`w-6 h-6 ${tech.color}`} />
                </div>
                <div className="w-2 h-2 rounded-full bg-slate-800 group-hover:bg-cyan-400 transition-colors shadow-[0_0_10px_rgba(34,211,238,0)] group-hover:shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
              </div>
              <h3 className="text-lg font-bold text-slate-100 mb-1">{tech.name}</h3>
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">{tech.category}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CaseStudies = () => {
  return (
    <section className="py-24 relative bg-slate-900/30" id="case-studies">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-3xl md:text-5xl font-display font-bold mb-4"
          >
            Proven Impact
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto"
          >
             Delivering measurable ROI through engineering excellence.
          </motion.p>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8, ease: "circOut" }}
            className="h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mt-6 rounded-full mx-auto"
          ></motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CASE_STUDIES.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.1,
                ease: [0.21, 0.47, 0.32, 0.98] 
              }}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl bg-slate-950/50 border border-white/5 hover:border-cyan-500/30 transition-all duration-300 group relative overflow-hidden"
            >
               <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-[50px] pointer-events-none group-hover:bg-cyan-500/10 transition-colors"></div>
               
               <div className="flex items-center gap-3 mb-4 relative z-10">
                   <div className="p-2 bg-slate-900 rounded-lg border border-white/10 text-cyan-400">
                       {study.icon}
                   </div>
                   <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider">{study.label}</h3>
               </div>
               
               <div className="text-4xl md:text-5xl font-display font-bold text-white mb-4 relative z-10">
                   {study.metric}
               </div>
               
               <p className="text-slate-400 text-sm leading-relaxed relative z-10">
                   {study.description}
               </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Blog = () => {
  return (
    <section className="py-24 relative bg-[#020617] border-t border-white/5" id="blog">
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-display font-bold mb-4"
            >
              Latest Insights
            </motion.h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="h-1 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full"
            ></motion.div>
          </div>
          <motion.a 
            href="#blog" 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            onClick={(e) => e.preventDefault()}
            className="text-slate-400 hover:text-white flex items-center gap-2 group transition-colors"
          >
            View all articles <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.15,
                ease: [0.21, 0.47, 0.32, 0.98] 
              }}
              whileHover={{ y: -8 }}
              className="group cursor-pointer flex flex-col h-full"
            >
              {/* Image / Gradient Placeholder */}
              <div className={`h-48 rounded-2xl bg-gradient-to-br ${post.gradient} mb-6 relative overflow-hidden border border-white/5`}>
                 <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors duration-500"></div>
                 {/* Decorative Icon Overlay */}
                 <div className="absolute top-4 right-4 p-2 bg-slate-950/50 backdrop-blur-md rounded-lg border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <ArrowUpRight className="w-5 h-5 text-white" />
                 </div>
              </div>

              {/* Content */}
              <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider mb-3">
                 <span className="text-cyan-400">{post.category}</span>
                 <span className="w-1 h-1 rounded-full bg-slate-600"></span>
                 <span className="text-slate-500">{post.readTime}</span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors leading-tight">
                {post.title}
              </h3>
              
              <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                {post.excerpt}
              </p>

              <div className="mt-auto flex items-center gap-2 text-xs text-slate-500">
                <Calendar className="w-3.5 h-3.5" />
                {post.date}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Careers = () => {
  return (
    <section className="py-24 relative bg-slate-900/50" id="careers">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-3xl md:text-5xl font-display font-bold mb-4"
          >
            Join the Team
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Help us build the data infrastructure of tomorrow.
          </motion.p>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8, ease: "circOut" }}
            className="h-1 bg-gradient-to-r from-emerald-500 to-green-600 mt-6 rounded-full mx-auto"
          ></motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {JOBS.map((job, index) => (
            <motion.a
              key={index}
              href="#contact"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.1,
                ease: [0.21, 0.47, 0.32, 0.98] 
              }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="p-8 rounded-3xl bg-slate-950 border border-white/5 hover:border-cyan-500/30 transition-all duration-500 group hover:bg-slate-900 block shadow-2xl shadow-black/20"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-slate-900/50 rounded-xl border border-white/5 text-emerald-400">
                  <Briefcase size={20} />
                </div>
                <span className="text-xs font-bold px-2 py-1 bg-slate-800 rounded text-slate-400">{job.type}</span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{job.title}</h3>
              
              <div className="space-y-2 mb-6">
                 <div className="flex items-center gap-2 text-sm text-slate-500">
                    <Building2 size={14} />
                    {job.department}
                 </div>
                 <div className="flex items-center gap-2 text-sm text-slate-500">
                    <MapPin size={14} />
                    {job.location}
                 </div>
              </div>

              <div className="flex items-center text-sm font-bold text-slate-300 group-hover:text-white transition-colors cursor-pointer">
                Apply Now <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section className="py-24 relative bg-[#020617] border-t border-white/5" id="contact">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="text-3xl md:text-5xl font-display font-bold mb-6"
            >
              Ready to Transform <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Your Data Stack?</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="text-slate-400 text-lg leading-relaxed mb-8"
            >
              Schedule a consultation with our engineering team. We'll analyze your current architecture and propose a scalable roadmap.
            </motion.p>
            
            <div className="space-y-6">
              {[
                { icon: Mail, text: "info@syntigra.com", label: "Email Us" },
                { icon: Phone, text: "+1 (555) 123-4567", label: "Call Us" },
                { icon: MapPin, text: "100 Innovation Dr, Tech Valley, CA", label: "Visit HQ" }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.3 + (i * 0.1),
                    ease: [0.21, 0.47, 0.32, 0.98] 
                  }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-cyan-400">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">{item.label}</div>
                    <div className="text-white font-medium">{item.text}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.form 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="p-8 rounded-3xl bg-slate-900/50 border border-white/10 relative overflow-hidden"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-[40px] pointer-events-none"></div>
            
            <div className="space-y-4 relative z-10">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-300 ml-1">First Name</label>
                  <input type="text" className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50 transition-colors" placeholder="Jane" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-300 ml-1">Last Name</label>
                  <input type="text" className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50 transition-colors" placeholder="Doe" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-300 ml-1">Email Address</label>
                <input type="email" className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50 transition-colors" placeholder="jane@company.com" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-300 ml-1">Company</label>
                <input type="text" className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50 transition-colors" placeholder="Acme Inc." />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-300 ml-1">Message</label>
                <textarea className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50 transition-colors h-32 resize-none" placeholder="Tell us about your data challenges..."></textarea>
              </div>

              <button className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-bold text-white hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all flex items-center justify-center gap-2 group">
                Send Message <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.form>

        </div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="bg-[#020617] min-h-screen text-white font-sans">
      <Header />
      <Hero />
      <AboutSyntigra />
      <Services />
      <IntegrationServices />
      <SecurityCompliance />
      <Industries />
      <TechnologyStack />
      <CaseStudies />
      <Blog />
      <Careers />
      <Contact />
      <Footer />
    </div>
  );
}