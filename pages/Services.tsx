import React from 'react';
import { Zap, Activity, BarChart3, Clock, CheckCircle, Server, Database, ArrowRight, Globe, Code2, ShieldCheck, Share2, Braces } from 'lucide-react';
import { RevealOnScroll } from '../components/RevealOnScroll';
import { ETLVisualizer } from '../components/ETLVisualizer';
import { MotionCard } from '../components/MotionSystem';
import { DashboardMockup, InfraBlueprint } from '../components/VisualComponents';
import { PageHero } from '../components/PageHero';

export const Services = () => {
  return (
    <div className="w-full overflow-x-hidden bg-slate-950">
      
      {/* 1. Page Hero - Sets the context */}
      <PageHero 
        badge="Core Capabilities"
        title={<>Enterprise ETL & <span className="text-gradient">Data Pipelines</span></>}
        subtitle="We design, build, and optimize high-throughput data architectures that turn raw inputs into business value with sub-millisecond latency."
        color="blue"
        pattern="grid"
        illustration="data-flow"
      />

      {/* 2. Interactive Engine Section - Slate-50 Background for contrast */}
      <section className="w-full py-24 bg-slate-900 border-b border-slate-200 dark:border-slate-800 relative isolate overflow-hidden">
        {/* Decorative Grid Background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10 text-slate-900 dark:text-slate-100" 
             style={{ 
                 backgroundImage: 'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)', 
                 backgroundSize: '32px 32px'
             }} 
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <RevealOnScroll>
            <div className="mb-16 text-center max-w-3xl mx-auto">
               <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-brand-orange dark:text-blue-300 text-xs font-bold mb-4 uppercase tracking-wider">
                  Proprietary Engine
               </div>
               <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Interactive Data Pipeline</h2>
               <p className="text-slate-400 text-lg leading-relaxed">
                 Visualize how our standardized architecture handles ingestion, transformation, and loading with guaranteed data integrity.
               </p>
            </div>
          </RevealOnScroll>
          
          <RevealOnScroll delay={200}>
            <div className="w-full shadow-2xl rounded-2xl bg-slate-950 border border-slate-200 dark:border-slate-800 p-2 md:p-4">
               <ETLVisualizer />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* 3. High-Level Architecture Blueprint - White Background */}
      <section className="w-full py-24 bg-slate-950 relative isolate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                    <div>
                        <h2 className="text-3xl font-display font-bold text-white mb-4">The Architecture Blueprint</h2>
                        <p className="text-slate-400 text-lg">
                            A holistic view of the modern data stack. We integrate best-in-class technologies to create a seamless flow from source to insight.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className="flex items-center p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-100 dark:border-slate-700">
                            <Server className="w-6 h-6 text-brand-orange mr-3" />
                            <div>
                                <div className="font-bold text-white">99.99%</div>
                                <div className="text-xs text-slate-500 dark:text-slate-400">Uptime SLA</div>
                            </div>
                        </div>
                        <div className="flex items-center p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-100 dark:border-slate-700">
                            <Database className="w-6 h-6 text-brand-pink mr-3" />
                            <div>
                                <div className="font-bold text-white">Zero</div>
                                <div className="text-xs text-slate-500 dark:text-slate-400">Data Loss</div>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>

            <RevealOnScroll delay={200}>
                <div className="bg-slate-950 p-8 md:p-12 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl relative z-10 overflow-hidden">
                    {/* Background decoration inside card */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 dark:bg-blue-900/10 rounded-bl-full -z-10 opacity-50"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-50 dark:bg-purple-900/10 rounded-tr-full -z-10 opacity-50"></div>
                    <InfraBlueprint />
                </div>
            </RevealOnScroll>
        </div>
      </section>

      {/* 4. Real-Time Streaming Section - Slate-50 Background */}
      <section className="w-full py-24 bg-slate-900 border-y border-slate-200 dark:border-slate-800 relative isolate overflow-hidden">
        {/* Floating blurred elements for depth */}
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-cyan-100/40 dark:bg-cyan-900/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column: Text & Features */}
            <div className="relative z-20">
                <RevealOnScroll>
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-900/30 text-brand-yellow text-sm font-bold mb-6 border border-cyan-100 dark:border-cyan-800">
                        <Zap className="w-4 h-4 mr-2" />
                        Speed & Scale
                    </div>
                    <h3 className="text-4xl font-display font-bold text-white mb-6 leading-tight">
                        Real-Time <span className="text-brand-yellow">Stream Processing</span>
                    </h3>
                    <p className="text-slate-400 mb-8 leading-relaxed text-lg">
                        Batch processing isn't enough for modern decision-making. We implement Kafka and Flink-based architectures that process data events as they happen.
                    </p>
                </RevealOnScroll>
                
                <div className="space-y-4">
                  {[
                    'Fraud detection in milliseconds', 
                    'Live inventory updates', 
                    'Real-time personalization', 
                    'IoT sensor monitoring'
                  ].map((item, i) => (
                    <RevealOnScroll key={i} delay={i * 100}>
                        <MotionCard className="p-5" glowColor="#06B6D4">
                        <div className="flex items-center text-slate-800 dark:text-slate-200 font-medium">
                            <div className="w-2 h-2 bg-brand-yellow rounded-full mr-4 shadow-[0_0_8px_#06B6D4]" />
                            {item}
                        </div>
                        </MotionCard>
                    </RevealOnScroll>
                  ))}
                </div>
                
                <RevealOnScroll delay={400}>
                    <div className="mt-8 flex items-center text-brand-orange font-medium cursor-pointer group">
                        Explore Streaming Tech <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"/>
                    </div>
                </RevealOnScroll>
            </div>
            
            {/* Right Column: Visual Metrics Card */}
            <RevealOnScroll delay={200}>
              <div className="relative rounded-2xl bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden min-h-[500px] flex flex-col z-10">
                 {/* Image Background */}
                 <div className="absolute inset-0 z-0">
                    <img 
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80" 
                      alt="Analytics Dashboard" 
                      className="w-full h-full object-cover opacity-10" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/90 to-transparent dark:from-slate-900 dark:via-slate-900/90 dark:to-transparent"></div>
                 </div>
                 
                 {/* Card Header */}
                 <div className="relative z-20 p-8 border-b border-slate-100 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md">
                    <div className="flex items-center justify-between">
                        <h4 className="text-xl font-bold text-white flex items-center">
                            <Activity className="w-5 h-5 mr-2 text-brand-orange" />
                            Live Throughput
                        </h4>
                        <span className="text-xs font-mono text-white bg-red-500 px-2 py-0.5 rounded animate-pulse">LIVE</span>
                    </div>
                 </div>
                 
                 {/* Card Body */}
                 <div className="relative z-20 p-8 space-y-10 flex-grow flex flex-col justify-center">
                    {[
                      { label: 'Latency', val: '12ms', bar: 'width: 15%', color: 'from-blue-500 to-blue-400' },
                      { label: 'Reliability', val: '99.99%', bar: 'width: 99%', color: 'from-green-500 to-emerald-400' },
                      { label: 'Events/Sec', val: '50k', bar: 'width: 75%', color: 'from-purple-500 to-indigo-400' }
                    ].map((m, i) => (
                      <div key={i}>
                        <div className="flex justify-between text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                          <span>{m.label}</span>
                          <span className="text-white font-mono text-lg">{m.val}</span>
                        </div>
                        <div className="h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                          <div className={`h-full bg-gradient-to-r ${m.color} rounded-full`} style={{ width: m.bar.split(': ')[1] }}></div>
                        </div>
                      </div>
                    ))}
                    
                    <div className="mt-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 flex items-start">
                        <CheckCircle className="w-5 h-5 text-brand-orange mr-3 flex-shrink-0" />
                        <p className="text-sm text-slate-600 dark:text-slate-300">
                            Auto-scaling active. System successfully handled 3 traffic spikes in the last hour.
                        </p>
                    </div>
                 </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* 5. API Integrations - White Background */}
      <section className="w-full py-24 bg-slate-950 border-y border-slate-200 dark:border-slate-800 relative isolate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <RevealOnScroll>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 text-sm font-bold mb-4 border border-indigo-100 dark:border-indigo-800">
                        <Globe className="w-4 h-4 mr-2" />
                        Connected Ecosystem
                    </div>
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                        Universal API <span className="text-indigo-600 dark:text-indigo-400">Interoperability</span>
                    </h2>
                    <p className="text-slate-400 text-lg leading-relaxed">
                        Break down data silos. We engineer robust API layers that facilitate secure, high-speed communication between your on-premise mainframes and cloud-native applications.
                    </p>
                </div>
            </RevealOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <RevealOnScroll delay={100}>
                    <MotionCard className="p-8 h-full" glowColor="#4f46e5">
                        <div className="w-12 h-12 rounded-lg bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center mb-6 border border-indigo-100 dark:border-indigo-800">
                            <Code2 className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">RESTful Architecture</h3>
                        <p className="text-slate-400 leading-relaxed mb-4">
                            Standardized, stateless services designed for high-concurrency consumption. We implement robust caching strategies and versioning for long-term stability.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs rounded border border-slate-200 dark:border-slate-700">JSON</span>
                            <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs rounded border border-slate-200 dark:border-slate-700">OpenAPI</span>
                            <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs rounded border border-slate-200 dark:border-slate-700">HATEOAS</span>
                        </div>
                    </MotionCard>
                </RevealOnScroll>

                <RevealOnScroll delay={200}>
                    <MotionCard className="p-8 h-full" glowColor="#ec4899">
                        <div className="w-12 h-12 rounded-lg bg-pink-50 dark:bg-pink-900/30 flex items-center justify-center mb-6 border border-pink-100 dark:border-pink-800">
                            <Braces className="w-6 h-6 text-pink-600 dark:text-pink-400" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">GraphQL Federation</h3>
                        <p className="text-slate-400 leading-relaxed mb-4">
                            Unified data graphs that allow clients to query exactly what they need. Eliminate over-fetching and aggregate data from multiple microservices in a single request.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs rounded border border-slate-200 dark:border-slate-700">Apollo</span>
                            <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs rounded border border-slate-200 dark:border-slate-700">Schema Stitching</span>
                        </div>
                    </MotionCard>
                </RevealOnScroll>

                <RevealOnScroll delay={300}>
                    <MotionCard className="p-8 h-full" glowColor="#0891b2">
                        <div className="w-12 h-12 rounded-lg bg-cyan-50 dark:bg-cyan-900/30 flex items-center justify-center mb-6 border border-cyan-100 dark:border-cyan-800">
                            <Share2 className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">SOAP & Enterprise Bus</h3>
                        <p className="text-slate-400 leading-relaxed mb-4">
                            Mission-critical transactional integrity for legacy financial and healthcare systems. Secure XML-based messaging with strict contracts.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs rounded border border-slate-200 dark:border-slate-700">WSDL</span>
                            <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs rounded border border-slate-200 dark:border-slate-700">WS-Security</span>
                            <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs rounded border border-slate-200 dark:border-slate-700">MuleSoft</span>
                        </div>
                    </MotionCard>
                </RevealOnScroll>
            </div>

            <RevealOnScroll delay={400}>
                <div className="mt-12 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between">
                    <div className="flex items-center mb-4 md:mb-0">
                        <ShieldCheck className="w-8 h-8 text-green-600 dark:text-green-400 mr-4" />
                        <div>
                            <h4 className="text-lg font-bold text-white">Security By Default</h4>
                            <p className="text-slate-600 dark:text-slate-300 text-sm">Every API endpoint is secured with TLS 1.3 encryption and OAuth 2.0 / OIDC authentication protocols.</p>
                        </div>
                    </div>
                    <button className="px-6 py-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 hover:border-indigo-600 dark:hover:border-indigo-400 text-slate-700 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 font-medium rounded-lg transition-colors text-sm shadow-sm">
                        View Security Specs
                    </button>
                </div>
            </RevealOnScroll>
        </div>
      </section>

      {/* 6. Dashboard & Observability - Slate-50 Background (Changed from White for contrast) */}
      <section className="w-full py-24 bg-slate-900 relative isolate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <RevealOnScroll>
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-900/30 text-brand-pink dark:text-purple-300 text-sm font-bold mb-4 border border-purple-100 dark:border-purple-800">
                            <BarChart3 className="w-4 h-4 mr-2" />
                            Observability
                        </div>
                        <h2 className="text-3xl font-bold text-white">Visual Intelligence</h2>
                        <p className="text-slate-400 mt-3 text-lg">
                            Full observability into your data lifecycle. Dashboards that empower stakeholders to detect anomalies before they impact business.
                        </p>
                    </div>
                    <button className="px-6 py-3 bg-white dark:bg-slate-800 text-slate-700 dark:text-white font-medium rounded-lg border border-slate-300 dark:border-slate-600 hover:border-brand-orange hover:text-brand-orange transition-colors shadow-sm whitespace-nowrap">
                        Schedule Demo
                    </button>
                </div>
            </RevealOnScroll>
            
            <RevealOnScroll delay={200} className="w-full">
                {/* Wrapped in a clearly defined container to avoid overlap, changed internal bg to white for pop */}
                <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl bg-slate-950 border border-slate-200 dark:border-slate-800 p-1 md:p-2 z-10">
                    <DashboardMockup />
                </div>
            </RevealOnScroll>
        </div>
      </section>

    </div>
  );
};