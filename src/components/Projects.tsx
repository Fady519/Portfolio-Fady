'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, ShieldCheck, Cpu, AlertCircle, X, ChevronRight } from 'lucide-react';
import { PROJECTS, Project } from '@/lib/data';

type FilterType = 'All' | 'Full-Stack' | 'Backend' | 'Frontend';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filters: FilterType[] = ['All', 'Full-Stack', 'Backend', 'Frontend'];

  const filteredProjects = activeFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeFilter);

  // Gradient helper for mock visual cards
  const projectGradients: Record<string, string> = {
    'e-commerce-api': 'from-blue-600/20 via-indigo-600/20 to-purple-600/20 border-blue-500/20',
    'gym-management-system': 'from-emerald-600/20 via-teal-600/20 to-cyan-600/20 border-emerald-500/20',
    'freshcart-ecommerce': 'from-cyan-600/20 via-blue-600/20 to-indigo-600/20 border-cyan-500/20',
    'cinema-streaming': 'from-purple-600/20 via-pink-600/20 to-rose-600/20 border-purple-500/20',
  };

  const projectIcons: Record<string, string> = {
    'e-commerce-api': '🛒',
    'gym-management-system': '🏋️',
    'freshcart-ecommerce': '🥗',
    'cinema-streaming': '🎬',
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Light glow effects */}
      <div className="absolute top-[20%] left-[-15%] w-[400px] h-[400px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-15%] w-[400px] h-[400px] rounded-full bg-secondary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-outfit text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Premium <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6" />
          <p className="text-gray-400 font-outfit text-lg max-w-2xl mx-auto leading-relaxed">
            A selective showcase of production-grade backends, responsive Single Page Apps, and full-stack systems.
          </p>
        </div>

        {/* Filter Navigation Tab selection */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2.5 rounded-full font-outfit text-sm font-semibold border transition-all duration-300 cursor-pointer ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-primary to-secondary border-primary/20 text-white shadow-md shadow-primary/10'
                  : 'bg-white/5 border-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Cards List Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 100, damping: 15 }}
                className="glass-panel rounded-2xl border border-white/10 overflow-hidden flex flex-col h-[520px] hover:border-primary/30 transition-all duration-300 group shadow-lg"
              >
                {/* Visual mockup banner frame */}
                <div className={`h-48 shrink-0 bg-gradient-to-tr ${projectGradients[project.id]} border-b border-white/5 relative flex items-center justify-center p-6 overflow-hidden`}>
                  {/* Decorative glowing grid background inside image mock */}
                  <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                  
                  {/* Glowing core sphere */}
                  <div className="absolute w-24 h-24 rounded-full bg-white/5 blur-xl group-hover:scale-125 transition-transform duration-500" />
                  
                  {/* Floating abstract code lines */}
                  <div className="absolute top-4 left-4 font-mono text-[9px] text-white/20 select-none hidden sm:block">
                    {`// Namespace Core.Entities\npublic class ProjectEntity : BaseEntity {}`}
                  </div>

                  <span className="text-6xl select-none filter drop-shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    {projectIcons[project.id]}
                  </span>

                  {/* Category label badge */}
                  <span className="absolute top-4 right-4 bg-white/5 border border-white/10 backdrop-blur px-3 py-1 rounded-full text-xs font-mono font-medium text-gray-300">
                    {project.category}
                  </span>
                </div>

                {/* Card Content body */}
                <div className="p-6 sm:p-8 flex flex-col justify-between grow">
                  <div className="flex flex-col gap-3">
                    <h3 className="font-outfit font-extrabold text-2xl text-white group-hover:text-primary transition-colors leading-snug">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Stack tags list */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="bg-white/5 border border-white/5 text-gray-300 text-[10px] font-semibold px-2 py-0.5 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="text-gray-500 text-[10px] font-semibold px-2 py-0.5 bg-white/1 rounded">
                        +{project.techStack.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Actions buttons */}
                  <div className="flex items-center justify-between border-t border-white/5 pt-5 mt-5">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex items-center gap-1 text-xs sm:text-sm font-semibold font-outfit text-primary hover:text-secondary hover:underline transition-colors shrink-0 cursor-pointer"
                    >
                      Deep-Dive Architecture
                      <ChevronRight className="w-4 h-4" />
                    </button>

                    <div className="flex items-center gap-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:text-white text-gray-300 transition-colors"
                        title="GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 px-3.5 py-2 rounded-lg bg-gradient-to-r from-primary to-secondary hover:shadow-md hover:shadow-primary/20 text-white text-xs font-semibold font-outfit transition-all duration-300"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Deep-Dive Project Details Modal */}
        <AnimatePresence>
          {selectedProject && (
            <>
              {/* Dark overlay backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="fixed inset-0 bg-black z-50 backdrop-blur-sm"
              />

              {/* Modal Container */}
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 30 }}
                  transition={{ type: 'spring', stiffness: 100, damping: 15 }}
                  className="w-full max-w-4xl glass-panel border border-white/15 bg-[#030712]/95 rounded-3xl overflow-hidden shadow-2xl relative flex flex-col max-h-[85vh]"
                >
                  {/* Sticky Header */}
                  <div className="sticky top-0 left-0 right-0 px-6 sm:px-8 py-5 border-b border-white/10 bg-[#030712]/80 backdrop-blur-md z-10 flex justify-between items-center">
                    <div>
                      <h3 className="font-outfit font-extrabold text-2xl sm:text-3xl text-white">
                        {selectedProject.title}
                      </h3>
                      <span className="inline-block mt-1 px-2.5 py-0.5 rounded bg-primary/10 border border-primary/20 text-[10px] font-semibold text-primary font-mono uppercase tracking-wider">
                        {selectedProject.category} System
                      </span>
                    </div>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Scrollable details content body */}
                  <div className="p-6 sm:p-8 overflow-y-auto flex flex-col gap-8">
                    
                    {/* General Summary */}
                    <div>
                      <h4 className="font-outfit font-bold text-white text-lg mb-3 flex items-center gap-2">
                        <Cpu className="w-5 h-5 text-secondary" />
                        System Overview
                      </h4>
                      <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                        {selectedProject.longDescription}
                      </p>
                    </div>

                    {/* Architecture specifications */}
                    <div className="p-5 rounded-2xl bg-white/2 border border-white/5">
                      <h4 className="font-outfit font-bold text-white text-base mb-2.5 flex items-center gap-2">
                        <ShieldCheck className="w-4.5 h-4.5 text-primary" />
                        Architecture & Structural Design
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {selectedProject.architecture}
                      </p>
                    </div>

                    {/* Challenges & Solutions */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="p-5 rounded-2xl bg-[#ef4444]/5 border border-[#ef4444]/10">
                        <h5 className="font-outfit font-bold text-[#ef4444] text-sm mb-2 flex items-center gap-2">
                          <AlertCircle className="w-4.5 h-4.5" />
                          Key Architectural Challenge
                        </h5>
                        <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                          {selectedProject.challenges}
                        </p>
                      </div>

                      <div className="p-5 rounded-2xl bg-[#22c55e]/5 border border-[#22c55e]/10">
                        <h5 className="font-outfit font-bold text-[#22c55e] text-sm mb-2 flex items-center gap-2">
                          <ShieldCheck className="w-4.5 h-4.5" />
                          Implemented Engineering Solution
                        </h5>
                        <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                          {selectedProject.solutions}
                        </p>
                      </div>
                    </div>

                    {/* Key Features Bullet List */}
                    <div>
                      <h4 className="font-outfit font-bold text-white text-base mb-3.5">
                        Key Features & Capabilities
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 list-none">
                        {selectedProject.features.map((feat, idx) => (
                          <li key={idx} className="flex gap-2.5 items-start text-xs sm:text-sm text-gray-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0 mt-2" />
                            <span className="leading-relaxed">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Detailed Full Stack list */}
                    <div>
                      <h4 className="font-outfit font-bold text-white text-base mb-3">
                        Technology Blueprint
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="bg-white/5 border border-white/10 text-gray-300 text-xs font-semibold px-3 py-1 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* Sticky Footer */}
                  <div className="sticky bottom-0 left-0 right-0 px-6 sm:px-8 py-4 border-t border-white/10 bg-[#030712]/90 backdrop-blur z-10 flex justify-end gap-3">
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-outfit text-sm font-semibold transition-colors"
                    >
                      <Github className="w-4 h-4 text-gray-300" />
                      <span>Code Repository</span>
                    </a>
                    {selectedProject.liveUrl && (
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-outfit text-sm font-semibold hover:shadow-lg transition-shadow"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Launch Demo</span>
                      </a>
                    )}
                  </div>
                </motion.div>
              </div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
