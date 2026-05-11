import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, ShieldCheck, Zap, ArrowRight, BarChart3, Database } from 'lucide-react';
import { Link } from 'react-router-dom';
import { RevealOnScroll } from '../components/RevealOnScroll';


const CaseStudies = () => {
  const cases = [
    {
      title: "Global Logistics Optimization",
      client: "Fortune 500 Logistics Provider",
      stats: [
        { label: "Latency Reduction", value: "92%" },
        { label: "Annual Savings", value: "$2.4M" },
        { label: "Data Migrated", value: "5PB" }
      ],
      description: "Managing 50+ disparate data sources with 40% data inconsistency, causing daily shipping delays. Syntigra implemented a real-time automated ETL pipeline with unified data governance.",
      icon: <TrendingUp className="w-8 h-8 text-brand-orange" />,
      color: "from-orange-500/20 to-transparent"
    },
    {
      title: "FinTech Security & Reporting",
      client: "European Digital Bank",
      stats: [
        { label: "Compliance Time", value: "-98%" },
        { label: "Data Accuracy", value: "100%" },
        { label: "Audit Readiness", value: "Instant" }
      ],
      description: "Struggling with GDPR compliance and manual regulatory reporting. Syntigra deployed an automated governance tracking and 'Compliance-as-Code' reporting engine.",
      icon: <ShieldCheck className="w-8 h-8 text-brand-orange" />,
      color: "from-brand-purple/20 to-transparent"
    }
  ];

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-brand-orange/30 bg-slate-900/50 text-brand-orange text-sm font-bold mb-6 backdrop-blur-md">
              <BarChart3 className="w-4 h-4 mr-2" />
              PROVEN RESULTS
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
              Enterprise <span className="text-gradient">Success Stories</span>
            </h1>
            <p className="text-slate-400 text-xl max-w-3xl mx-auto">
              Discover how Syntigra transforms complex data challenges into high-performance business assets.
            </p>
          </div>
        </RevealOnScroll>

        <div className="space-y-16">
          {cases.map((c, idx) => (
            <RevealOnScroll key={idx} delay={idx * 200}>
              <div className={`relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40 p-8 md:p-12 backdrop-blur-sm group hover:border-brand-orange/50 transition-all duration-500`}>
                <div className={`absolute top-0 right-0 w-full h-full bg-gradient-to-br ${c.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
                
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="mb-6">{c.icon}</div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{c.title}</h2>
                    <div className="text-brand-orange font-bold text-sm uppercase tracking-widest mb-6">{c.client}</div>
                    <p className="text-slate-400 text-lg leading-relaxed mb-8">
                      {c.description}
                    </p>
                    <div className="grid grid-cols-3 gap-6">
                      {c.stats.map((s, i) => (
                        <div key={i}>
                          <div className="text-2xl font-bold text-white mb-1">{s.value}</div>
                          <div className="text-xs text-slate-500 uppercase font-bold tracking-tighter">{s.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="aspect-video rounded-xl bg-slate-800/50 border border-slate-700 overflow-hidden shadow-2xl group-hover:scale-[1.02] transition-transform duration-500">
                      <div className="absolute inset-0 grid-bg opacity-20"></div>
                      <div className="flex items-center justify-center h-full">
                        <Database className="w-20 h-20 text-brand-orange/20 animate-pulse" />
                      </div>
                    </div>
                    {/* Floating decoration */}
                    <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-orange/10 blur-3xl rounded-full"></div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll delay={400}>
          <div className="mt-24 glass-panel p-12 rounded-2xl text-center border-brand-orange/20">
            <h2 className="text-3xl font-display font-bold text-white mb-6">Ready to write your success story?</h2>
            <p className="text-slate-400 mb-10 max-w-2xl mx-auto text-lg">
              Our principal engineers are standing by to audit your current infrastructure and propose a tailored modernization roadmap.
            </p>
            <Link to="/contact" className="inline-flex items-center px-10 py-4 rounded-lg bg-brand-orange hover:bg-orange-600 text-white font-black transition-all shadow-xl shadow-brand-orange/20 hover:shadow-brand-orange/40 hover:-translate-y-1">
              Start Your Migration
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
};

export default CaseStudies;
