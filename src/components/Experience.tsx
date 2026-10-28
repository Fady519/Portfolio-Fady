'use client';

import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, Award, Calendar, MapPin } from 'lucide-react';
import { COURSES, EDUCATION, CERTIFICATIONS } from '@/lib/data';

export default function Experience() {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 80, damping: 15 }
    }
  };

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-white/[0.01]">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[20%] left-[-10%] w-[300px] h-[300px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="font-outfit text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Education & <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Courses</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6" />
          <p className="text-gray-400 font-outfit text-lg max-w-2xl mx-auto leading-relaxed">
            My degree, the courses I completed and their certificates.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Left Column: Courses */}
          <div className="lg:col-span-6 flex flex-col gap-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-outfit text-2xl font-bold text-white">Courses</h3>
            </div>

            <div className="relative border-l-2 border-white/5 pl-8 ml-5 flex flex-col gap-10">
              {COURSES.map((course) => (
                <motion.div
                  key={course.title}
                  variants={itemVariants as any}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-100px' }}
                  className="relative group"
                >
                  {/* Timeline point accent node */}
                  <span className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full bg-[#030712] border-2 border-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                  </span>

                  <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-primary/30 transition-colors duration-300 relative">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                      <div>
                        <h4 className="font-outfit font-extrabold text-xl text-white group-hover:text-primary transition-colors">
                          {course.title}
                        </h4>
                        <span className="text-sm font-semibold text-secondary font-outfit block mt-0.5">
                          {course.provider}
                        </span>
                      </div>
                      <div className="flex flex-col items-end gap-1 text-xs text-gray-500 font-mono">
                        <span className="flex items-center gap-1.5 bg-white/5 border border-white/5 px-2.5 py-1 rounded-md text-gray-300">
                          <Calendar className="w-3 h-3 text-secondary" />
                          {course.duration}
                        </span>
                        <span className="flex items-center gap-1.5 text-gray-400">
                          <MapPin className="w-3 h-3" />
                          {course.location}
                        </span>
                      </div>
                    </div>

                    <ul className="list-none flex flex-col gap-2.5 text-sm text-gray-400">
                      {course.description.map((bullet, bidx) => (
                        <li key={bidx} className="flex gap-2 items-start leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0 mt-2" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Education & Certifications */}
          <div className="lg:col-span-6 flex flex-col gap-10">
            
            {/* Education Sub-section */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-secondary" />
                </div>
                <h3 className="font-outfit text-2xl font-bold text-white">Education</h3>
              </div>

              <div className="relative border-l-2 border-white/5 pl-8 ml-5 flex flex-col gap-6">
                {EDUCATION.map((edu) => (
                  <motion.div
                    key={edu.degree}
                    variants={itemVariants as any}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    className="relative group"
                  >
                    <span className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full bg-[#030712] border-2 border-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="w-2.5 h-2.5 rounded-full bg-secondary" />
                    </span>

                    <div className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-secondary/30 transition-colors duration-300">
                      <h4 className="font-outfit font-bold text-lg text-white group-hover:text-secondary transition-colors">
                        {edu.degree}
                      </h4>
                      <p className="text-sm font-semibold text-gray-400 font-outfit mt-1">
                        {edu.institution}
                      </p>
                      <div className="flex items-center justify-between gap-4 mt-3 text-xs text-gray-500 font-mono">
                        <span className="flex items-center gap-1.5 bg-white/5 border border-white/5 px-2 py-0.5 rounded-md text-gray-300">
                          <Calendar className="w-3 h-3 text-primary" />
                          {edu.duration}
                        </span>
                        <span className="flex items-center gap-1.5 text-gray-400">
                          <MapPin className="w-3 h-3" />
                          {edu.location}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications Sub-section */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <Award className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-outfit text-2xl font-bold text-white">Certificates</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ml-1">
                {CERTIFICATIONS.map((cert, idx) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ type: 'spring', stiffness: 100, damping: 15, delay: idx * 0.05 }}
                    className="glass-panel p-5 rounded-xl border border-white/10 hover:border-accent/40 transition-all duration-300 relative group overflow-hidden flex flex-col justify-between"
                  >
                    <div className="absolute top-0 right-0 w-16 h-16 bg-accent/5 rounded-full blur-xl group-hover:bg-accent/10 transition-colors pointer-events-none" />

                    <div>
                      <h4 className="font-outfit font-bold text-sm text-white group-hover:text-accent transition-colors leading-tight mb-1">
                        {cert.name}
                      </h4>
                      {cert.credentialId && (
                        <span className="text-[10px] text-gray-500 font-mono block mb-2">
                          ID: {cert.credentialId}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between text-xs text-gray-400 mt-3 pt-2 border-t border-white/5">
                      <span className="truncate max-w-[130px]">{cert.issuer}</span>
                      <div className="flex items-center gap-2">
                        {cert.link && (
                          <a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[11px] text-accent hover:underline font-mono"
                            title="View Certificate"
                          >
                            View
                          </a>
                        )}
                        <span className="bg-white/5 border border-white/5 px-2 py-0.5 rounded font-mono text-gray-300 shrink-0">
                          {cert.year}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
