import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, Activity, Sun, Moon } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', path: '/services' },
    { name: 'Integrations', path: '/integrations' },
    { name: 'Technology', path: '/technology' },
    { name: 'Case Studies', path: '/cases' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-panel py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 group">
            <img src="/assets/white-icon.png" alt="Syntigra Logo" className="h-9 w-auto group-hover:rotate-6 transition-transform duration-500" />
            <span className="text-2xl font-display font-bold text-white tracking-tight group-hover:text-brand-orange transition-colors">
              <span className="text-gradient">SYNT</span>IGRA
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-brand-orange ${
                  isActive(link.path) ? 'text-brand-orange' : 'text-slate-300'
                }`}
              >
                {link.name}
              </Link>
            ))}

            <Link
              to="/contact"
              className="px-6 py-2.5 rounded-lg bg-brand-orange text-white hover:bg-orange-600 transition-all duration-300 text-sm font-bold shadow-lg shadow-brand-orange/20"
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden glass-panel border-t border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-950">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-brand-orange hover:bg-slate-900 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 mt-4 text-center rounded-md bg-brand-orange text-white font-bold"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export const Footer = () => {
  return (
    // Footer remains dark in both modes, but we ensure borders match dark theme
    <footer className="bg-slate-900 border-t border-slate-800 pt-20 pb-10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <img src="/assets/white-icon.png" alt="Syntigra Logo" className="h-7 w-auto" />
              <span className="text-xl font-display font-bold text-white tracking-tight">
                <span className="text-gradient">SYNT</span>IGRA
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Engineering the future of enterprise data infrastructure. We build the pipelines that power intelligent decisions.
            </p>
            <div className="flex space-x-4">
              {['Twitter', 'LinkedIn', 'GitHub'].map((social) => (
                <a key={social} href="#" className="text-slate-500 hover:text-syntigra-cyan transition-colors text-sm">
                  {social}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Solutions</h4>
            <ul className="space-y-4">
              <li><Link to="/services" className="text-slate-400 hover:text-syntigra-cyan text-sm">Enterprise ETL</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-syntigra-cyan text-sm">Real-time Pipelines</Link></li>
              <li><Link to="/integrations" className="text-slate-400 hover:text-syntigra-cyan text-sm">API Integration</Link></li>
              <li><Link to="/technology" className="text-slate-400 hover:text-syntigra-cyan text-sm">Cloud Infrastructure</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/industries" className="text-slate-400 hover:text-brand-orange text-sm">Industries</Link></li>
              <li><Link to="/cases" className="text-slate-400 hover:text-brand-orange text-sm">Case Studies</Link></li>
              <li><Link to="/security" className="text-slate-400 hover:text-brand-orange text-sm">Security</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-brand-orange text-sm">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Newsletter</h4>
            <p className="text-slate-400 text-sm mb-4">Latest tech insights, weekly.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-slate-800 border border-slate-700 text-white px-4 py-2 rounded-l-md focus:outline-none focus:border-syntigra-blue w-full text-sm"
              />
              <button className="bg-brand-orange hover:bg-orange-600 text-white px-4 py-2 rounded-r-md transition-colors">
                <ChevronRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm">© 2024 Syntigra Inc. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-slate-500 hover:text-white text-sm">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-white text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    // Added transition for theme switch
    <div className="min-h-screen flex flex-col bg-syntigra-bg dark:bg-[#0B1120] text-slate-50 transition-colors duration-300">
      <Navbar />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};