import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send } from 'lucide-react';
import { portfolioData } from '../data';

const Contact = () => {
  return (
    <footer id="contact" className="relative z-10 border-t border-white/5 bg-space-900/80 pt-24 pb-12 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-50"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-32 bg-accent/20 blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          
          {/* Info Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
              Let's build something <span className="text-accent glow-text">extraordinary.</span>
            </h2>
            <p className="text-slate-400 text-lg mb-10 max-w-md">
              Tertarik untuk bekerja sama atau memiliki proyek? Jangan ragu untuk menghubungi saya. Saya selalu terbuka untuk peluang dan kolaborasi baru.
            </p>

            <div className="flex gap-4">
              <a 
                href={`mailto:${portfolioData.hero.socials.email}`}
                className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-slate-300 hover:text-white hover:bg-accent hover:border-accent transition-all group shadow-lg shadow-black/20"
              >
                <Mail size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href={portfolioData.hero.socials.linkedin}
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#0a66c2] hover:border-[#0a66c2] transition-all group shadow-lg shadow-black/20"
              >
                <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href={portfolioData.hero.socials.github}
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/20 hover:border-white/40 transition-all group shadow-lg shadow-black/20"
              >
                <Github size={20} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-panel p-8 rounded-3xl"
          >
            <form className="space-y-6" action="https://formspree.io/f/xgaoaopv" method="POST">
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Nama</label>
                <input 
                  type="text" 
                  name="nama"
                  required
                  className="w-full bg-space-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                  placeholder="Nama Anda"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  className="w-full bg-space-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                  placeholder="email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Pesan</label>
                <textarea 
                  name="pesan"
                  required
                  rows="4"
                  className="w-full bg-space-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none"
                  placeholder="Tulis pesan Anda disini..."
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full py-3 rounded-xl bg-accent hover:bg-blue-600 text-white font-medium transition-all shadow-[0_0_20px_rgba(44,103,237,0.3)] hover:shadow-[0_0_30px_rgba(44,103,237,0.5)] flex items-center justify-center gap-2"
              >
                Kirim Pesan <Send size={18} />
              </button>
            </form>
          </motion.div>

        </div>

        <div className="text-center pt-8 border-t border-white/5">
          <a href="#home" className="font-heading font-bold text-2xl tracking-tight text-white mb-6 inline-block">
            Bayu<span className="text-accent">.</span>
          </a>
          <p className="text-slate-500 text-sm">
            &copy; 2026 {portfolioData.hero.name}. Built with React, Tailwind & Framer Motion.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
