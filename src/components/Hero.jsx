import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { Download, ChevronDown } from 'lucide-react';
import { portfolioData } from '../data';

const Star = ({ delay, top, left, size }) => (
  <div 
    className="absolute bg-white rounded-full animate-twinkle"
    style={{
      top: `${top}%`,
      left: `${left}%`,
      width: `${size}px`,
      height: `${size}px`,
      animationDelay: `${delay}s`,
    }}
  />
);

const Hero = () => {
  // Generate random stars
  const stars = Array.from({ length: 40 }).map((_, i) => ({
    id: i,
    delay: Math.random() * 5,
    top: Math.random() * 100,
    left: Math.random() * 100,
    size: Math.random() * 2 + 1
  }));

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Starry Background */}
      <div className="absolute inset-0 z-0">
        {stars.map(star => (
          <Star key={star.id} {...star} />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="inline-block relative">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-space-800 shadow-[0_0_30px_rgba(44,103,237,0.4)] mx-auto relative z-10 bg-space-800">
              <img 
                src={portfolioData.hero.profileImage} 
                alt="Profile" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = "https://ui-avatars.com/api/?name=Bayu&background=0A1229&color=fff";
                }}
              />
            </div>
            {/* Orbit rings */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-white/5 rounded-full animate-[spin_10s_linear_infinite]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-white/5 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-white font-heading mb-4 tracking-tight">
            Hi, I'm <span className="text-accent glow-text">{portfolioData.hero.name.split(' ')[1]}</span>
          </h1>
          
          <div className="text-xl md:text-3xl text-slate-300 font-medium h-12 mb-6">
            I am a{' '}
            <span className="text-accent font-semibold">
              <Typewriter
                words={portfolioData.hero.titles}
                loop={0}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </div>

          <p className="max-w-2xl mx-auto text-slate-400 leading-relaxed mb-10 text-sm md:text-base">
            {portfolioData.hero.description}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a 
              href="#portfolio"
              className="px-8 py-3 rounded-full bg-accent hover:bg-blue-600 text-white font-medium transition-all shadow-[0_0_20px_rgba(44,103,237,0.4)] hover:shadow-[0_0_30px_rgba(44,103,237,0.6)] transform hover:-translate-y-1"
            >
              View Projects
            </a>
            <a 
              href="/CV M BAYU.pdf"
              download="CV_Muhammad_Bayu_Prasetyo.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full glass-panel hover:bg-white/10 text-white font-medium transition-all flex items-center gap-2"
            >
              <Download size={18} /> Resume
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;
