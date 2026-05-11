import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Database, Zap, Shield, Globe, Cpu, Layers, BarChart3, FileCheck } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { RevealOnScroll } from '../components/RevealOnScroll';
import { MotionCard } from '../components/MotionSystem';
import { DashboardMockup, ReportMockup, InfraBlueprint } from '../components/VisualComponents';
import { motion } from 'framer-motion';

export const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20 pb-20">
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Grid with opacity */}
          <div className="absolute top-0 left-0 w-full h-full grid-bg opacity-100"></div>
          
          {/* Animated Background Blobs - Adjusted for Light Mode */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2], 
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-purple/20 rounded-full blur-[120px]" 
          />
          <motion.div 
            animate={{ 
              x: [0, 50, 0],
              y: [0, -50, 0],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-brand-orange/10 rounded-full blur-[100px]" 
          />
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-purple/20 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <RevealOnScroll>
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-brand-orange/30 bg-slate-900/50 text-brand-orange text-sm font-medium mb-8 backdrop-blur-md shadow-lg shadow-brand-orange/5">
              <span className="flex h-2 w-2 rounded-full bg-brand-orange mr-2 animate-pulse"></span>
              Next-Gen Enterprise Data Infrastructure
            </div>
          </RevealOnScroll>
          
          <RevealOnScroll delay={200}>
            {/* Changed text-white to text-slate-900 */}
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
              Engineered Data.<br />
              <span className="text-gradient">Intelligent Decisions.</span>
            </h1>
          </RevealOnScroll>
          
          <RevealOnScroll delay={400}>
            {/* Changed text-slate-300 to text-slate-600 */}
            <p className="max-w-2xl mx-auto text-lg text-slate-400 mb-10 leading-relaxed font-light">
              Syntigra builds high-performance ETL pipelines, real-time integration architectures, and scalable cloud data systems for the world's most data-driven enterprises.
            </p>
          </RevealOnScroll>
          
          <RevealOnScroll delay={600}>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
              <Link to="/contact" className="px-8 py-4 rounded-lg bg-brand-orange hover:bg-orange-600 text-white font-bold transition-all duration-300 shadow-xl shadow-brand-orange/20 hover:shadow-brand-orange/40">
                Book Consultation
              </Link>
              <Link to="/services" className="px-8 py-4 rounded-lg bg-slate-900/50 border border-slate-700 text-slate-200 hover:text-brand-orange font-bold transition-all duration-300 flex items-center group hover:border-brand-orange/50 backdrop-blur-md">
                View Solutions
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </RevealOnScroll>

          {/* New Platform Preview Image */}
          <RevealOnScroll delay={800}>
             <div className="relative mx-auto max-w-5xl rounded-xl border border-slate-800 bg-slate-900/50 p-2 md:p-4 backdrop-blur-xl shadow-2xl">
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-brand-orange/10 blur-[60px] -z-10"></div>
                <DashboardMockup />
                {/* Decoration overlay */}
                <div className="absolute -right-12 -bottom-12 w-24 h-24 bg-brand-purple/30 blur-2xl rounded-full"></div>
             </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Stats / Trust - White/Gray Background */}
      <section className="py-12 border-y border-slate-800 bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Data Processed', value: '5PB+' },
              { label: 'Uptime SLA', value: '99.99%' },
              { label: 'Integrations', value: '200+' },
              { label: 'Enterprise Clients', value: '50+' },
            ].map((stat, idx) => (
              <RevealOnScroll key={idx} delay={idx * 100}>
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-brand-orange uppercase tracking-wider font-bold">{stat.label}</div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 relative bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Enterprise-Grade Solutions</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Our comprehensive suite of data engineering services ensures your infrastructure is robust, scalable, and ready for AI.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Database, title: 'Advanced ETL', desc: 'Transform raw data into actionable insights with high-throughput pipelines.' },
              { icon: Zap, title: 'Real-Time Streaming', desc: 'Sub-millisecond latency processing for immediate decision making.' },
              { icon: Layers, title: 'System Integration', desc: 'Seamlessly connect ERP, CRM, and custom legacy systems.' },
              { icon: Cpu, title: 'API Automation', desc: 'Intelligent API orchestration and management at scale.' },
              { icon: Globe, title: 'Cloud Infrastructure', desc: 'Architecting scalable data lakes and warehouses on AWS, Azure, & GCP.' },
              { icon: Shield, title: 'Security & Governance', desc: 'Bank-grade encryption and compliance frameworks built-in.' },
            ].map((service, idx) => (
              <RevealOnScroll key={idx} delay={idx * 100}>
                {/* MotionCard auto-applies white bg and shadow */}
                <MotionCard className="h-full p-8" glowColor="#2563eb">
                   <div className="w-12 h-12 bg-brand-purple/10 border-brand-purple/20">
                    <service.icon className="w-6 h-6 text-brand-orange" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-slate-400 leading-relaxed mb-4">{service.desc}</p>
                  <Link to="/services" className="text-brand-orange hover:text-cyan-600 text-sm font-medium flex items-center">
                    Learn more <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </MotionCard>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Feature Section: Reports & Insights */}
      <section className="py-24 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50 dark:from-blue-900/10 to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-16">
                <div className="lg:w-1/2">
                    <RevealOnScroll>
                        <div className="inline-flex items-center px-3 py-1 rounded-full border border-brand-orange/30 bg-brand-orange/10 text-brand-orange text-xs font-bold mb-4">
                            <FileCheck className="w-3 h-3 mr-2" />
                            COMPLIANCE READY
                        </div>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                            Automated Governance & <br/><span className="text-gradient">Intelligent Reporting</span>
                        </h2>
                        <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                            Stop chasing data quality issues manually. Syntigra generates comprehensive health reports, anomaly detection alerts, and compliance certificates automatically.
                        </p>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                            {[
                                { t: 'Audit Trails', d: 'Full history of every data change.' },
                                { t: 'Quality Scores', d: 'Real-time reliability metrics.' },
                                { t: 'Cost Analysis', d: 'Granular cloud spend breakdowns.' },
                                { t: 'SLA Tracking', d: 'Uptime and latency monitoring.' },
                            ].map((f, i) => (
                                <div key={i} className="flex items-start">
                                    <div className="mt-1.5 w-2 h-2 rounded-full bg-brand-orange shadow-lg shadow-brand-orange/40 mr-3"></div>
                                    <div>
                                        <h4 className="text-white font-bold text-sm">{f.t}</h4>
                                        <p className="text-slate-500 text-xs">{f.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <Link to="/cases" className="text-brand-orange border-b-2 border-brand-orange/30 pb-1 hover:border-brand-orange transition-all font-bold">
                            View Success Stories
                        </Link>
                    </RevealOnScroll>
                </div>
                
                <div className="lg:w-1/2 relative">
                    <RevealOnScroll delay={200}>
                        <div className="relative z-10 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900 group">
                            <img 
                                src="/assets/dashboard-mockup.png" 
                                alt="Syntigra Dashboard Mockup" 
                                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                                <div className="text-white font-bold">Real-time Engineering Insights</div>
                            </div>
                        </div>
                        {/* Decorative blobs */}
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-orange/20 blur-3xl rounded-full animate-pulse"></div>
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-purple/20 blur-3xl rounded-full animate-pulse delay-700"></div>
                    </RevealOnScroll>
                </div>
            </div>
        </div>
      </section>

      {/* Product Highlight: Windows Service Agent */}
      <section className="py-24 bg-slate-950 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-orange/50 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
                <div className="lg:w-1/2">
                    <RevealOnScroll>
                        <div className="inline-flex items-center px-4 py-2 rounded-full border border-brand-purple/30 bg-brand-purple/10 text-brand-purple text-sm font-bold mb-6">
                            <Cpu className="w-4 h-4 mr-2" />
                            LOCAL DATA COLLECTION
                        </div>
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
                            Syntigra <span className="text-brand-orange">Service Agent</span>
                        </h2>
                        <p className="text-slate-400 text-xl leading-relaxed mb-8">
                            Streamline your data ingestion processes with our intuitive and efficient Windows data collector. Designed for rapid deployment and minimal configuration.
                        </p>
                        
                        <div className="space-y-6 mb-10">
                            {[
                                { t: 'Rapid Deployment', d: 'Get up and running in minutes with zero complex dependencies.' },
                                { t: 'Local Data Extraction', d: 'Automatically transform disparate local data into consumable formats.' },
                                { t: 'Direct ETL Feeding', d: 'Seamlessly push local assets directly into your central data pipelines.' }
                            ].map((item, i) => (
                                <div key={i} className="flex items-start bg-slate-900/50 p-4 rounded-xl border border-slate-800 hover:border-brand-purple/50 transition-all">
                                    <div className="w-10 h-10 rounded-lg bg-brand-purple/20 flex items-center justify-center mr-4 shrink-0">
                                        <Zap className="w-5 h-5 text-brand-purple" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold mb-1">{item.t}</h4>
                                        <p className="text-slate-500 text-sm">{item.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button className="px-8 py-4 rounded-lg bg-white text-slate-950 font-black hover:bg-slate-200 transition-all flex items-center">
                            Download Agent for Windows
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </button>
                    </RevealOnScroll>
                </div>

                <div className="lg:w-1/2 relative">
                    <RevealOnScroll delay={200}>
                        <div className="relative z-10 rounded-2xl overflow-hidden border border-brand-purple/30 shadow-2xl bg-slate-900 group">
                            <img 
                                src="/assets/agent-ui.png" 
                                alt="Syntigra Service Agent UI" 
                                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                                <div className="text-white font-bold">Active Local Data Stream</div>
                            </div>
                        </div>
                        {/* Orbiting particles / decoration */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-purple/20 blur-3xl rounded-full animate-pulse"></div>
                    </RevealOnScroll>
                </div>
            </div>
        </div>
      </section>

      {/* Feature / Analytics Preview with Blueprint */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-display font-bold text-white">How We Operate</h2>
                    <p className="text-slate-400 mt-2">A simplified view of our complex engineering process.</p>
                </div>
            </RevealOnScroll>
            
            <RevealOnScroll delay={100}>
                {/* InfraBlueprint handles its own internal coloring, check component */}
                <InfraBlueprint />
            </RevealOnScroll>
        </div>
      </section>

      {/* Immersive Image Section - Team/Infrastructure */}
      <section className="py-0 relative h-[400px] md:h-[500px] overflow-hidden">
        <div className="absolute inset-0">
            {/* Unsplash Image: Server Room / Data Center */}
            <img 
                src="https://images.unsplash.com/photo-1558494949-ef526b0042a0?auto=format&fit=crop&q=80" 
                alt="Syntigra Data Center" 
                className="w-full h-full object-cover"
            />
            {/* Light gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end pb-20">
            <RevealOnScroll>
                <h2 className="text-4xl font-display font-bold text-white mb-4">Built by Engineers, <br/>For Engineers</h2>
                <p className="text-slate-200 max-w-xl text-lg mb-8">
                    We don't just provide software; we provide the human expertise to architect systems that can handle petabytes of data without breaking a sweat.
                </p>
                <Link to="/contact" className="inline-flex items-center px-6 py-3 border border-white/40 hover:bg-white hover:text-black text-white rounded-lg transition-all duration-300 font-medium">
                    Meet Our Team <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
            </RevealOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="bg-white dark:bg-slate-900 p-12 rounded-2xl text-center relative overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-orange via-syntigra-cyan to-brand-pink"></div>
              
              <div className="absolute inset-0 z-0 bg-gradient-to-b from-blue-50 dark:from-blue-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <h2 className="relative z-10 text-3xl md:text-5xl font-display font-bold text-white mb-6">Ready to scale your data infrastructure?</h2>
              <p className="relative z-10 text-slate-600 dark:text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
                Join the forward-thinking enterprises that trust Syntigra for their mission-critical data operations.
              </p>
              <div className="relative z-10 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Link to="/contact" className="px-8 py-4 rounded-lg bg-brand-orange hover:bg-orange-600 text-white font-bold transition-all shadow-lg hover:shadow-blue-500/40">
                  Start Your Project
                </Link>
                <Link to="/cases" className="px-8 py-4 rounded-lg bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-white font-medium border border-slate-300 dark:border-slate-600 transition-all hover:border-slate-400">
                  View Case Studies
                </Link>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
};