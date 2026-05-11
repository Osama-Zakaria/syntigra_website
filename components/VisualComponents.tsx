import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Shield, CheckCircle, AlertTriangle, FileText, Download } from 'lucide-react';
import { MotionCard } from './MotionSystem';

// -- Mock Data --
const costData = [
  { name: 'Compute', value: 45 },
  { name: 'Storage', value: 25 },
  { name: 'Network', value: 20 },
  { name: 'SaaS', value: 10 },
];
const performanceData = [
  { time: '00:00', tps: 2400 },
  { time: '04:00', tps: 1398 },
  { time: '08:00', tps: 9800 },
  { time: '12:00', tps: 3908 },
  { time: '16:00', tps: 4800 },
  { time: '20:00', tps: 3800 },
];

const COLORS = ['#f05223', '#3a1554', '#ffc43b', '#e79ecf'];

// 1. Dashboard Mockup Component
export const DashboardMockup = () => {
  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-2xl flex flex-col">
      {/* Fake Browser Header */}
      <div className="bg-slate-800 px-4 py-2 flex items-center space-x-2 border-b border-slate-700">
        <div className="flex space-x-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 text-center">
          <div className="bg-slate-900 rounded-md px-3 py-1 text-xs text-slate-400 inline-block border border-slate-700 shadow-sm">
            Syntigra Data Control Plane v2.4
          </div>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6 bg-slate-950">
        
        {/* KPI Cards */}
        <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-4 gap-4">
            {[
                { label: 'Total Ingestion', val: '1.2 PB', change: '+12%', color: 'text-blue-600' },
                { label: 'Active Pipelines', val: '142', change: '+3', color: 'text-green-600' },
                { label: 'Avg Latency', val: '24ms', change: '-8%', color: 'text-cyan-600' },
                { label: 'Error Rate', val: '0.01%', change: 'Stable', color: 'text-purple-600' },
            ].map((kpi, i) => (
                <div key={i} className="bg-slate-900 p-4 rounded-lg border border-slate-800 shadow-sm">
                    <div className="text-slate-500 text-xs uppercase tracking-wider mb-1">{kpi.label}</div>
                    <div className="flex justify-between items-end">
                        <div className="text-xl font-bold text-slate-900">{kpi.val}</div>
                        <div className={`text-xs font-medium ${kpi.color}`}>{kpi.change}</div>
                    </div>
                </div>
            ))}
        </div>

        {/* Charts */}
        <div className="md:col-span-2 bg-slate-900 p-4 rounded-lg border border-slate-800 shadow-sm">
            <h4 className="text-sm font-medium text-slate-800 mb-4 flex items-center">
                <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                Real-time Throughput (TPS)
            </h4>
            <div className="h-48 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={performanceData}>
                        <XAxis dataKey="time" stroke="#94a3b8" fontSize={10} tickLine={false} axisLine={false} />
                        <YAxis stroke="#94a3b8" fontSize={10} tickLine={false} axisLine={false} />
                        <Tooltip 
                            contentStyle={{ backgroundColor: '#fff', borderColor: '#e2e8f0', color: '#0f172a' }}
                            itemStyle={{ color: '#0f172a' }}
                        />
                        <Line type="monotone" dataKey="tps" stroke="#3b82f6" strokeWidth={2} dot={false} activeDot={{ r: 6 }} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>

        <div className="md:col-span-1 bg-slate-900 p-4 rounded-lg border border-slate-800 shadow-sm">
            <h4 className="text-sm font-medium text-slate-800 mb-4 flex items-center">
                <div className="w-2 h-2 rounded-full bg-cyan-500 mr-2"></div>
                Infrastructure Cost
            </h4>
            <div className="h-48 w-full relative">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={costData}
                            cx="50%"
                            cy="50%"
                            innerRadius={40}
                            outerRadius={60}
                            paddingAngle={5}
                            dataKey="value"
                        >
                            {costData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip contentStyle={{ backgroundColor: '#fff', borderColor: '#e2e8f0', color: '#0f172a' }} />
                    </PieChart>
                </ResponsiveContainer>
                {/* Center Text */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <span className="text-xs font-bold text-slate-500">Monthly</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

// 2. Report Document Mockup (Already Light, just ensuring container is good)
export const ReportMockup = () => {
    return (
        <MotionCard className="bg-white text-slate-800 overflow-hidden relative group max-w-sm mx-auto transform rotate-1 hover:rotate-0 transition-transform duration-500 shadow-2xl border border-slate-100" glowColor="#2563eb">
            <div className="h-2 w-full bg-syntigra-blue top-0 absolute"></div>
            <div className="p-8">
                <div className="flex justify-between items-start mb-8">
                    <div>
                        <div className="text-xs text-slate-400 uppercase tracking-widest mb-1">Confidential</div>
                        <h3 className="text-xl font-bold text-slate-900 leading-tight">Q3 Data Governance<br/>Audit Report</h3>
                    </div>
                    <FileText className="w-8 h-8 text-slate-300" />
                </div>
                
                <div className="space-y-4 mb-8">
                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded border border-slate-100">
                        <span className="text-sm font-medium text-slate-600">Data Quality Score</span>
                        <span className="text-sm font-bold text-green-600">98.4%</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded border border-slate-100">
                        <span className="text-sm font-medium text-slate-600">Compliance Status</span>
                        <div className="flex items-center text-green-600 text-xs font-bold uppercase">
                            <CheckCircle className="w-3 h-3 mr-1" /> Passed
                        </div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded border border-slate-100">
                        <span className="text-sm font-medium text-slate-600">Anomalies Detected</span>
                        <div className="flex items-center text-amber-500 text-xs font-bold uppercase">
                            <AlertTriangle className="w-3 h-3 mr-1" /> 2 Low Risk
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-100 pt-6">
                    <p className="text-xs text-slate-400 leading-relaxed mb-4">
                        Automated summary generated by Syntigra Core Engine. This document certifies that all pipelines adhere to SOC2 and GDPR standards.
                    </p>
                    <button className="w-full py-2 bg-slate-900 text-white rounded text-sm font-medium flex items-center justify-center hover:bg-slate-800 transition-colors">
                        <Download className="w-4 h-4 mr-2" /> Download PDF
                    </button>
                </div>
            </div>
            
            {/* Decoration */}
            <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-slate-100 rounded-full blur-2xl opacity-50 pointer-events-none"></div>
        </MotionCard>
    );
};

// 3. Infrastructure Infographic
export const InfraBlueprint = () => {
    return (
        <div className="relative py-8">
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-200 to-transparent -translate-y-1/2 hidden md:block"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
                {[
                    { step: '01', title: 'Connect', desc: 'API, SQL, IoT', icon: '⚡' },
                    { step: '02', title: 'Ingest', desc: 'Stream/Batch', icon: '📥' },
                    { step: '03', title: 'Process', desc: 'Clean & Transform', icon: '⚙️' },
                    { step: '04', title: 'Deliver', desc: 'BI & AI Ready', icon: '📊' },
                ].map((item, i) => (
                    <div key={i} className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-2xl shadow-lg mb-4 relative z-10 group hover:border-brand-orange hover:shadow-xl transition-all duration-300">
                            {item.icon}
                            <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-[10px] font-mono text-slate-500">
                                {item.step}
                            </div>
                        </div>
                        <h4 className="text-white font-bold mb-1">{item.title}</h4>
                        <p className="text-slate-500 text-xs">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}