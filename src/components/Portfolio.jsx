import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Code2, ShieldCheck, Database } from 'lucide-react';
import { portfolioData } from '../data';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('projects');

  const tabs = [
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Tech Stack' },
    { id: 'certificates', label: 'Certificates' },
  ];

  return (
    <section id="portfolio" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-wider text-accent uppercase mb-2">Showcase</h2>
          <h3 className="font-heading text-3xl md:text-5xl font-bold text-white">Portfolio</h3>
        </div>

        {/* Custom Tabs */}
        <div className="flex justify-center mb-12">
          <div className="glass-panel p-1 rounded-full inline-flex relative">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-6 py-2.5 rounded-full text-sm font-medium transition-colors z-10 ${
                  activeTab === tab.id ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="active-tab"
                    className="absolute inset-0 bg-accent rounded-full shadow-[0_0_15px_rgba(44,103,237,0.5)]"
                    initial={false}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-20">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            {activeTab === 'projects' && (
              <motion.div
                key="projects"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {portfolioData.projects.map((project, idx) => (
                  <div key={idx} className="glass-panel rounded-3xl overflow-hidden group mb-8 last:mb-0">
                    <div className="grid grid-cols-1 lg:grid-cols-2 lg:h-[400px]">
                      <div className="relative h-64 lg:h-full bg-space-800 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-tr from-space-900/80 to-transparent z-10 pointer-events-none"></div>
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute bottom-4 left-4 z-20 flex flex-wrap gap-2">
                          {project.tech.slice(0, 3).map((t, i) => (
                            <span key={i} className="px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-xs font-medium text-white border border-white/10">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="p-8 md:p-12 flex flex-col justify-center">
                        <div className="text-xs font-bold text-accent tracking-wider uppercase mb-2">{project.method}</div>
                        <h4 className="text-2xl md:text-3xl font-bold text-white mb-6">
                          {project.title}
                        </h4>
                        <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-8">
                          {project.description}
                        </p>
                        
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium transition-all group-hover:border-accent/50 w-max"
                        >
                          <ExternalLink size={18} /> View Repository
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === 'skills' && (
              <motion.div
                key="skills"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                <div className="glass-panel p-8 rounded-3xl text-center group hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-16 h-16 mx-auto bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                    <Code2 size={32} />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-4">Web Development</h4>
                  <div className="flex flex-wrap justify-center gap-2">
                    {portfolioData.skills.web.map((skill, i) => (
                      <span key={i} className="px-3 py-1.5 rounded-lg bg-white/5 text-sm font-medium text-slate-300 border border-white/5 hover:border-blue-500/50 hover:text-white transition-colors">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="glass-panel p-8 rounded-3xl text-center group hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-16 h-16 mx-auto bg-purple-500/10 rounded-2xl flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform">
                    <Database size={32} />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-4">Data & Database</h4>
                  <div className="flex flex-wrap justify-center gap-2">
                    {portfolioData.skills.database.map((skill, i) => (
                      <span key={i} className="px-3 py-1.5 rounded-lg bg-white/5 text-sm font-medium text-slate-300 border border-white/5 hover:border-purple-500/50 hover:text-white transition-colors">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="glass-panel p-8 rounded-3xl text-center group hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-16 h-16 mx-auto bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                    <ShieldCheck size={32} />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-4">Systems & Tools</h4>
                  <div className="flex flex-wrap justify-center gap-2">
                    {portfolioData.skills.tools.map((skill, i) => (
                      <span key={i} className="px-3 py-1.5 rounded-lg bg-white/5 text-sm font-medium text-slate-300 border border-white/5 hover:border-accent/50 hover:text-white transition-colors">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'certificates' && (
              <motion.div
                key="certificates"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {portfolioData.certificates.map((cert, idx) => (
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" key={idx} className="block group">
                    <div className="glass-panel rounded-3xl overflow-hidden group-hover:border-accent/50 transition-colors">
                      <div className="h-56 relative overflow-hidden bg-space-800">
                        <img 
                          src={cert.image} 
                          alt={cert.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                          <div className="w-12 h-12 rounded-full bg-white text-accent flex items-center justify-center shadow-xl">
                            <ExternalLink size={20} />
                          </div>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="text-xs font-semibold text-accent mb-2">{cert.issuer}</div>
                        <h4 className="text-lg font-bold text-white mb-2">{cert.title}</h4>
                        <div className="flex justify-between items-center text-sm text-slate-400">
                          <span className="font-mono text-xs bg-white/5 px-2 py-1 rounded">{cert.credentialId}</span>
                          <span>{cert.period}</span>
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
