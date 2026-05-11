import React, { useState } from 'react';
import { RevealOnScroll } from '../components/RevealOnScroll';
import { PageHero } from '../components/PageHero';

const techs = [
  { name: 'Snowflake', cat: 'Warehouse', desc: 'The Data Cloud for unified data integration.' },
  { name: 'Databricks', cat: 'Lakehouse', desc: 'Unified analytics platform for data engineering.' },
  { name: 'AWS', cat: 'Cloud', desc: 'Scalable infrastructure with S3, Lambda, and Glue.' },
  { name: 'Google Cloud', cat: 'Cloud', desc: 'BigQuery and Dataflow for massive scale analytics.' },
  { name: 'Apache Kafka', cat: 'Streaming', desc: 'Distributed event streaming platform.' },
  { name: 'Airflow', cat: 'Orchestration', desc: 'Workflow automation and scheduling.' },
  { name: 'dbt', cat: 'Transformation', desc: 'Transforming data in your warehouse.' },
  { name: 'Python', cat: 'Language', desc: 'The backbone of modern data engineering.' },
  { name: 'Terraform', cat: 'IaC', desc: 'Infrastructure as Code for reproducible environments.' },
];

export const Technology = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...Array.from(new Set(techs.map(t => t.cat)))];

  const filteredTechs = filter === 'All' ? techs : techs.filter(t => t.cat === filter);

  return (
    <div className="pb-20 bg-slate-950">
      <PageHero 
        badge="Modern Stack"
        title={<>Our <span className="text-gradient">Technology</span> Stack</>}
        subtitle="We leverage best-in-class tools to build resilient, scalable, and future-proof data ecosystems."
        color="purple"
        pattern="dots"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        {/* Filter */}
        <RevealOnScroll delay={100}>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat 
                    ? 'bg-brand-orange text-white shadow-md' 
                    : 'bg-slate-800 text-slate-300 border border-slate-700 hover:bg-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </RevealOnScroll>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTechs.map((tech, idx) => (
            <RevealOnScroll key={tech.name} delay={idx * 50}>
              <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-brand-orange/50 hover:shadow-xl transition-all duration-300 group cursor-default h-full">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-brand-orange transition-colors">{tech.name}</h3>
                  <span className="text-xs px-2 py-1 rounded bg-slate-800 text-slate-400 border border-slate-700">{tech.cat}</span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">{tech.desc}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </div>
  );
};