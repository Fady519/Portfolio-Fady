'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Server, ShieldCheck, Wrench, Sparkles } from 'lucide-react';
import { SKILLS } from '@/lib/data';

type SkillCategory = 'backend' | 'frontend' | 'architecture' | 'tools';

export default function Skills() {
  const [activeTab, setActiveTab] = useState<SkillCategory>('backend');

  const tabItems = [
    { id: 'backend', label: 'Backend Development', icon: <Server className="w-4 h-4" /> },
    { id: 'frontend', label: 'Frontend & UI/UX', icon: <Code className="w-4 h-4" /> },
    { id: 'architecture', label: 'System Architecture', icon: <ShieldCheck className="w-4 h-4" /> },
    { id: 'tools', label: 'Tools & Security', icon: <Wrench className="w-4 h-4" /> },
  ] as const;

  const currentSkills = SKILLS[activeTab];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Light glow effects */}
      <div className="absolute top-[30%] right-[-10%] w-[350px] h-[350px] rounded-full bg-secondary/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[350px] h-[350px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-outfit text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Technical <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6" />
          <p className="text-gray-400 font-outfit text-lg max-w-2xl mx-auto leading-relaxed">
            A deep-dive overview of my professional engineering tools, design patterns, and programming stack.
          </p>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tabItems.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as SkillCategory)}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl font-outfit text-sm font-semibold border transition-all duration-300 cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-primary/20 to-secondary/20 border-primary/40 text-white shadow-lg shadow-primary/5'
                  : 'bg-white/5 border-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Skills Visual Grid Panel */}
        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 min-h-[400px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full"
            >
              {currentSkills.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={skillVariants as any}
                  className="flex flex-col gap-2 group"
                >
                  <div className="flex justify-between items-center px-1">
                    <span className="font-outfit font-semibold text-white group-hover:text-primary transition-colors flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-secondary transition-all" />
                      {skill.name}
                    </span>
                    <span className="font-mono text-xs text-secondary font-medium">{skill.level}%</span>
                  </div>

                  {/* Visual Progress Slider bar */}
                  <div className="h-2.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5 relative">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      className="h-full rounded-full bg-gradient-to-r from-primary to-secondary relative"
                    >
                      {/* Interactive glowing tip */}
                      <div className="absolute right-0 top-0 bottom-0 w-2 bg-white blur-[2px] opacity-70" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
