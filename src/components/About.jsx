import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Briefcase, Award } from 'lucide-react';
import { portfolioData } from '../data';

const About = () => {
  return (
    <section id="about" className="py-24 relative z-10 border-t border-white/5 bg-space-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-bold tracking-wider text-accent uppercase mb-2">Discover</h2>
          <h3 className="font-heading text-3xl md:text-5xl font-bold text-white">About Me</h3>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="glass-panel p-8 md:p-10 rounded-3xl h-full relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 group-hover:bg-accent/20 transition-all duration-700"></div>
              
              <h4 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center text-accent">
                  <BookOpen size={24} />
                </span>
                Background
              </h4>
              <p className="text-slate-300 leading-relaxed text-lg">
                {portfolioData.about.summary}
              </p>
            </div>
          </motion.div>

          {/* Experience & Education */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Education */}
            <div className="glass-panel p-8 rounded-3xl relative overflow-hidden group">
              <div className="absolute -left-10 top-1/2 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-all duration-700"></div>
              <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <Award size={20} className="text-purple-400" />
                Education
              </h4>
              <div className="pl-8 border-l border-white/10 relative">
                <div className="absolute w-3 h-3 bg-space-900 border-2 border-purple-400 rounded-full -left-[6px] top-1"></div>
                <h5 className="font-bold text-white text-lg">{portfolioData.about.education.degree}</h5>
                <p className="text-slate-400">{portfolioData.about.education.university}</p>
                <span className="inline-block mt-2 px-3 py-1 bg-white/5 rounded-full text-xs font-medium text-slate-300 border border-white/5">
                  GPA: {portfolioData.about.education.gpa}
                </span>
              </div>
            </div>

            {/* Experience */}
            <div className="glass-panel p-8 rounded-3xl relative overflow-hidden group flex-1">
              <div className="absolute -right-10 bottom-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl group-hover:bg-accent/20 transition-all duration-700"></div>
              <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <Briefcase size={20} className="text-accent" />
                Experience
              </h4>
              
              {portfolioData.about.experience.map((exp, index) => (
                <div key={index} className="pl-8 border-l border-white/10 relative mb-6 last:mb-0">
                  <div className="absolute w-3 h-3 bg-space-900 border-2 border-accent rounded-full -left-[6px] top-1"></div>
                  <span className="text-xs font-semibold text-accent mb-1 block">{exp.period}</span>
                  <h5 className="font-bold text-white text-lg">{exp.role}</h5>
                  <p className="text-slate-400 mb-3">{exp.company}</p>
                  <ul className="space-y-2">
                    {exp.points.map((point, i) => (
                      <li key={i} className="text-sm text-slate-400 flex items-start gap-2">
                        <span className="text-accent mt-1 text-[10px]">▶</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
