import React from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Technology } from './pages/Technology';
import CaseStudies from './pages/CaseStudies';
import { Check, Mail, MapPin, Phone, Shield, Lock, FileText, Briefcase, Activity, Cpu, ArrowRight } from 'lucide-react';
import { RevealOnScroll } from './components/RevealOnScroll';
import { PageHero } from './components/PageHero';

// -- Simple placeholder pages for the mockup where specialized logic isn't strictly necessary --

const Contact = () => (
  <div className="pb-20 bg-slate-950">
    <PageHero 
        badge="Get In Touch"
        title="Start Your Project"
        subtitle="Discuss your data infrastructure needs with our principal engineers. We are ready to help you scale."
        color="orange"
        pattern="dots"
    />
    
    <div className="max-w-3xl mx-auto px-4 -mt-12 relative z-10">
      <RevealOnScroll>
        <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-xl">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-400 mb-2 uppercase tracking-wider">First Name</label>
                <input type="text" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all placeholder:text-slate-700" placeholder="John" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-400 mb-2 uppercase tracking-wider">Last Name</label>
                <input type="text" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all placeholder:text-slate-700" placeholder="Doe" />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-bold text-slate-400 mb-2 uppercase tracking-wider">Work Email</label>
              <input type="email" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all placeholder:text-slate-700" placeholder="john@company.com" />
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-400 mb-2 uppercase tracking-wider">Project Details</label>
              <textarea className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white h-32 focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all placeholder:text-slate-700" placeholder="Tell us about your data challenges..."></textarea>
            </div>

            <button type="button" className="w-full bg-brand-orange hover:bg-orange-600 text-white font-bold py-4 rounded-lg transition-all shadow-xl shadow-brand-orange/20 hover:shadow-brand-orange/40 hover:-translate-y-0.5">
              Request Consultation
            </button>
          </form>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center border-t border-slate-800 pt-8">
            <div>
              <Mail className="w-6 h-6 text-brand-orange mx-auto mb-2" />
              <p className="text-sm text-slate-400">hello@syntigra.com</p>
            </div>
            <div>
              <Phone className="w-6 h-6 text-brand-orange mx-auto mb-2" />
              <p className="text-sm text-slate-400">+1 (555) 123-4567</p>
            </div>
            <div>
              <MapPin className="w-6 h-6 text-brand-orange mx-auto mb-2" />
              <p className="text-sm text-slate-400">San Francisco, CA</p>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </div>
  </div>
);

const Integrations = () => (
  <div className="pb-24 bg-slate-950">
    <PageHero 
        badge="Ecosystem"
        title={<>Seamless <span className="text-gradient">Integrations</span></>}
        subtitle="Connecting your entire ecosystem from legacy mainframes to modern cloud APIs with pre-built connectors."
        color="orange"
        pattern="waves"
    />

    <div className="max-w-7xl mx-auto px-4 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {['Salesforce', 'SAP', 'HubSpot', 'Oracle', 'Stripe', 'Shopify', 'Slack', 'Jira'].map((name, i) => (
            <RevealOnScroll key={name} delay={i * 50}>
            <div className="h-32 bg-slate-900 rounded-xl flex items-center justify-center border border-slate-800 hover:border-brand-orange shadow-sm hover:shadow-lg transition-all group">
                <span className="text-xl font-bold text-slate-300 group-hover:text-white">{name}</span>
            </div>
            </RevealOnScroll>
        ))}
        </div>
        
        <RevealOnScroll delay={300}>
        <div className="mt-20 p-12 bg-slate-900 rounded-2xl border border-slate-800 shadow-xl text-center">
            <h3 className="text-3xl font-bold text-white mb-4">Custom Middleware Solutions</h3>
            <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            When out-of-the-box connectors fail, we engineer custom middleware layers that ensure data integrity and security between disparate systems.
            </p>
            <div className="w-1/2 mx-auto h-2 bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-brand-orange via-brand-pink to-brand-yellow w-full animate-pulse"></div>
            </div>
        </div>
        </RevealOnScroll>
    </div>
  </div>
);

const Security = () => (
  <div className="pb-24 bg-slate-950">
    <PageHero 
        badge="Trust & Safety"
        title="Security & Compliance"
        subtitle="Your data security is paramount. We build compliant infrastructure from day one."
        color="slate"
        pattern="grid"
    />

    <div className="max-w-7xl mx-auto px-4 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
            { title: 'GDPR & CCPA', desc: 'Built-in privacy controls and right-to-be-forgotten mechanisms.' },
            { title: 'SOC 2 Type II', desc: 'Audited processes and controls for security and availability.' },
            { title: 'End-to-End Encryption', desc: 'AES-256 encryption at rest and TLS 1.3 in transit.' },
        ].map((item, i) => (
            <RevealOnScroll key={i} delay={i * 100}>
            <div className="bg-slate-900 p-8 rounded-xl border border-slate-800 shadow-md hover:shadow-xl transition-all text-center h-full group">
                <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center mx-auto mb-6 group-hover:bg-slate-700 transition-colors border border-slate-700">
                    <Lock className="w-8 h-8 text-slate-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
            </RevealOnScroll>
        ))}
        </div>
    </div>
  </div>
);

const Industries = () => (
  <div className="pb-24 bg-slate-950">
    <PageHero 
        badge="Sectors"
        title="Industries We Serve"
        subtitle="Tailored data solutions for the world's most demanding sectors."
        color="orange"
        pattern="waves"
    />

    <div className="max-w-7xl mx-auto px-4 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
            { title: 'Finance', desc: 'High-frequency trading data, risk modeling, and regulatory reporting.', icon: Briefcase },
            { title: 'Healthcare', desc: 'HIPAA-compliant patient data lakes and interoperability standards.', icon: Activity },
            { title: 'Retail', desc: 'Omnichannel customer 360 views and inventory optimization.', icon: FileText },
            { title: 'Manufacturing', desc: 'IoT sensor streaming and predictive maintenance pipelines.', icon: Cpu }
        ].map((ind, i) => (
            <RevealOnScroll key={i} delay={i * 100}>
            <div className="bg-slate-900 p-10 rounded-xl border border-slate-800 hover:border-brand-orange shadow-md hover:shadow-xl transition-all group">
                <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center mr-5 group-hover:bg-brand-orange transition-colors duration-300 border border-slate-700">
                    <ind.icon className="w-6 h-6 text-brand-orange group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">{ind.title}</h3>
                </div>
                <p className="text-slate-400 text-lg leading-relaxed">{ind.desc}</p>
            </div>
            </RevealOnScroll>
        ))}
        </div>
    </div>
  </div>
);

const Engagement = () => (
    <div className="pb-24 bg-slate-950">
        <PageHero 
            badge="Collaboration"
            title="Engagement Models"
            subtitle="Flexible partnership structures designed to fit your organization's needs."
            color="orange"
            pattern="dots"
        />

        <div className="max-w-7xl mx-auto px-4 pt-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <RevealOnScroll delay={0}>
                <div className="bg-slate-900 p-8 rounded-xl border border-slate-800 shadow-lg h-full flex flex-col">
                    <h3 className="text-xl font-bold text-white mb-4">Project Based</h3>
                    <p className="text-slate-400 mb-6 flex-grow">Defined scope, timeline, and deliverables for specific initiatives.</p>
                    <ul className="text-sm text-slate-500 space-y-3 mt-auto">
                        <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-green-500"/> Fixed Cost</li>
                        <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-green-500"/> Clear Milestones</li>
                    </ul>
                </div>
                </RevealOnScroll>
                
                <RevealOnScroll delay={100}>
                <div className="bg-slate-900 p-8 rounded-xl border-2 border-brand-orange shadow-2xl shadow-brand-orange/10 transform md:-translate-y-4 relative h-full flex flex-col">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-orange px-4 py-1.5 rounded-full text-xs font-black text-white uppercase tracking-widest shadow-lg shadow-brand-orange/30">Most Popular</div>
                    <h3 className="text-xl font-bold text-white mb-4">Dedicated Team</h3>
                    <p className="text-slate-400 mb-6 flex-grow">A squad of data engineers embedded in your organization.</p>
                    <ul className="text-sm text-slate-500 space-y-3 mt-auto">
                        <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-brand-orange font-bold"/> Flexible Backlog</li>
                        <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-brand-orange font-bold"/> Full Integration</li>
                        <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-brand-orange font-bold"/> Long-term Support</li>
                    </ul>
                </div>
                </RevealOnScroll>
                
                <RevealOnScroll delay={200}>
                <div className="bg-slate-900 p-8 rounded-xl border border-slate-800 shadow-lg h-full flex flex-col">
                    <h3 className="text-xl font-bold text-white mb-4">Enterprise Partner</h3>
                    <p className="text-slate-400 mb-6 flex-grow">Strategic consulting and architecture advisory on retainer.</p>
                    <ul className="text-sm text-slate-500 space-y-3 mt-auto">
                        <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-green-500"/> CTO-level Advisory</li>
                        <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-green-500"/> Architecture Review</li>
                    </ul>
                </div>
                </RevealOnScroll>
            </div>
        </div>
    </div>
);


const App = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/integrations" element={<Integrations />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cases" element={<CaseStudies />} />
          <Route path="/security" element={<Security />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/engagement" element={<Engagement />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;