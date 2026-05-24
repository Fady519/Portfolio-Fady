'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Mail, Phone, MapPin, Send, MessageCircle, Github, Linkedin, CheckCircle, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PERSONAL_INFO } from '@/lib/data';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    // Simulate real API submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      reset();
    } catch (e) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-[40%] left-[-15%] w-[400px] h-[400px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-15%] w-[350px] h-[350px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-outfit text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Get In <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6" />
          <p className="text-gray-400 font-outfit text-lg max-w-2xl mx-auto leading-relaxed">
            Have an exciting opportunity, a freelance project, or simply want to say hello? Drop a line below!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Contact Cards Details */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            <div className="flex flex-col gap-6">
              <h3 className="font-outfit font-extrabold text-2xl text-white leading-snug">
                Let's discuss your next project
              </h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                I'm open to full-time junior positions in Egypt and remote globally, as well as freelancing or contract gigs.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              {/* Email Card */}
              <div className="flex gap-4 p-4 rounded-xl bg-white/2 border border-white/5 hover:border-primary/20 transition-colors duration-300">
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="text-xs text-gray-500 font-mono block">Email Address</span>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="font-outfit text-sm sm:text-base font-semibold text-white hover:text-primary transition-colors">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              {/* Phone Card */}
              <div className="flex gap-4 p-4 rounded-xl bg-white/2 border border-white/5 hover:border-secondary/20 transition-colors duration-300">
                <div className="w-11 h-11 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0 border border-secondary/20">
                  <Phone className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <span className="text-xs text-gray-500 font-mono block">Phone Number</span>
                  <a href={`tel:${PERSONAL_INFO.phone}`} className="font-outfit text-sm sm:text-base font-semibold text-white hover:text-secondary transition-colors">
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>

              {/* Location Card */}
              <div className="flex gap-4 p-4 rounded-xl bg-white/2 border border-white/5">
                <div className="w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 border border-accent/20">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <span className="text-xs text-gray-500 font-mono block">Current Location</span>
                  <span className="font-outfit text-sm sm:text-base font-semibold text-white">
                    {PERSONAL_INFO.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Action WhatsApp Button */}
            <div className="flex flex-col gap-4">
              <a
                href={PERSONAL_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 text-[#25D366] font-outfit font-semibold transition-all duration-300 shadow-md shadow-[#25D366]/5"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Instant Chat on WhatsApp</span>
              </a>

              {/* Social profile grids links */}
              <div className="flex gap-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:text-white text-gray-300 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span className="text-xs font-semibold font-mono">GitHub</span>
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:text-white text-gray-300 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  <span className="text-xs font-semibold font-mono">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-white/10 shadow-lg">
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
                
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-xs font-bold font-mono text-gray-400 uppercase tracking-wide px-1">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    {...register('name', { required: 'Please enter your name.' })}
                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-white font-outfit text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all ${
                      errors.name ? 'border-[#ef4444]/40 bg-[#ef4444]/2' : 'border-white/5'
                    }`}
                  />
                  {errors.name && (
                    <span className="text-xs text-[#ef4444] px-1 font-medium">{errors.name.message}</span>
                  )}
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs font-bold font-mono text-gray-400 uppercase tracking-wide px-1">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    {...register('email', {
                      required: 'Please enter your email.',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Please enter a valid email address.'
                      }
                    })}
                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-white font-outfit text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all ${
                      errors.email ? 'border-[#ef4444]/40 bg-[#ef4444]/2' : 'border-white/5'
                    }`}
                  />
                  {errors.email && (
                    <span className="text-xs text-[#ef4444] px-1 font-medium">{errors.email.message}</span>
                  )}
                </div>

                {/* Subject */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="subject" className="text-xs font-bold font-mono text-gray-400 uppercase tracking-wide px-1">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="Freelance Project Inquiry"
                    {...register('subject', { required: 'Please enter a subject.' })}
                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-white font-outfit text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all ${
                      errors.subject ? 'border-[#ef4444]/40 bg-[#ef4444]/2' : 'border-white/5'
                    }`}
                  />
                  {errors.subject && (
                    <span className="text-xs text-[#ef4444] px-1 font-medium">{errors.subject.message}</span>
                  )}
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-xs font-bold font-mono text-gray-400 uppercase tracking-wide px-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Detail your inquiry..."
                    {...register('message', {
                      required: 'Please write your message.',
                      minLength: { value: 10, message: 'Message should be at least 10 characters long.' }
                    })}
                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-white font-outfit text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all resize-none ${
                      errors.message ? 'border-[#ef4444]/40 bg-[#ef4444]/2' : 'border-white/5'
                    }`}
                  />
                  {errors.message && (
                    <span className="text-xs text-[#ef4444] px-1 font-medium">{errors.message.message}</span>
                  )}
                </div>

                {/* Status Messages Alerts */}
                <AnimatePresence>
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="p-4 rounded-xl bg-[#22c55e]/10 border border-[#22c55e]/20 text-[#22c55e] text-sm flex items-center gap-2"
                    >
                      <CheckCircle className="w-5 h-5 shrink-0" />
                      <span>Thank you! Your message was sent successfully.</span>
                    </motion.div>
                  )}
                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="p-4 rounded-xl bg-[#ef4444]/10 border border-[#ef4444]/20 text-[#ef4444] text-sm flex items-center gap-2"
                    >
                      <AlertCircle className="w-5 h-5 shrink-0" />
                      <span>Oops! An error occurred. Please try again.</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="glow-btn flex items-center justify-center gap-2 w-full mt-2 py-3.5 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-outfit font-semibold hover:shadow-lg hover:shadow-primary/25 disabled:opacity-50 active:scale-95 transition-all duration-300 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4.5 h-4.5 rounded-full border-2 border-white/20 border-t-white animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
