"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, User, Tag, PenTool } from "lucide-react";
import Image, { StaticImageData } from "next/image";

interface Project {
  id: string;
  title: string;
  category: string;
  client: string;
  description: string;
  details: string;
  tools: string[];
  year: string;
  image: StaticImageData;
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-brand-dark/65 backdrop-blur-md"
        />

        {/* Modal Wrapper */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="bg-brand-cream border border-brand-gold/25 rounded-3xl overflow-hidden w-full max-w-5xl shadow-2xl relative z-10 max-h-[90vh] flex flex-col md:flex-row"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 bg-brand-dark/80 text-brand-cream hover:bg-brand-gold hover:text-brand-dark rounded-full transition-colors duration-200"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>

          {/* Left Side: Mockup Image Container */}
          <div className="md:w-1/2 bg-brand-dark/5 flex items-center justify-center p-6 border-b md:border-b-0 md:border-r border-brand-gold/15 overflow-y-auto max-h-[45vh] md:max-h-[90vh]">
            <div className="relative w-full h-full min-h-[300px] md:min-h-[500px] flex items-center justify-center">
              <Image
                src={project.image}
                alt={project.title}
                className="object-contain max-h-[300px] md:max-h-[550px] w-auto h-auto rounded-xl shadow-lg"
                priority
              />
            </div>
          </div>

          {/* Right Side: Case Study / Technical details */}
          <div className="md:w-1/2 p-8 md:p-12 overflow-y-auto max-h-[45vh] md:max-h-[90vh] flex flex-col justify-between">
            <div>
              {/* Category Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-brand-gold/30 bg-brand-gold/10 mb-4">
                <Tag size={12} className="text-brand-gold" />
                <span className="font-poppins text-[10px] font-bold tracking-wider text-brand-gold uppercase">
                  {project.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-poppins font-extrabold text-3xl md:text-4xl text-brand-dark tracking-tight leading-tight mb-4">
                {project.title}
              </h3>

              {/* Description */}
              <p className="font-inter text-sm md:text-base text-brand-dark/70 leading-relaxed mb-6 font-semibold border-l-2 border-brand-gold pl-3">
                {project.description}
              </p>

              {/* Comprehensive creative process details */}
              <div className="font-inter text-sm text-brand-dark/65 leading-relaxed space-y-4 mb-8">
                <h4 className="font-poppins font-bold text-sm text-brand-dark uppercase tracking-wider mb-2">
                  Design Brief & Execution
                </h4>
                <p>{project.details}</p>
              </div>
            </div>

            {/* Sidebar Meta info Block */}
            <div className="space-y-4 pt-6 border-t border-brand-gold/15">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <User size={16} className="text-brand-gold" />
                  <div>
                    <span className="block text-[10px] font-mono text-brand-dark/50 uppercase">Client</span>
                    <span className="font-inter text-xs md:text-sm font-semibold text-brand-dark">{project.client}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-brand-gold" />
                  <div>
                    <span className="block text-[10px] font-mono text-brand-dark/50 uppercase">Timeline</span>
                    <span className="font-inter text-xs md:text-sm font-semibold text-brand-dark">{project.year}</span>
                  </div>
                </div>
              </div>

              {/* Tech Stack used */}
              <div className="pt-2">
                <div className="flex items-center gap-2 mb-2">
                  <PenTool size={16} className="text-brand-gold" />
                  <span className="font-mono text-[10px] text-brand-dark/50 uppercase">Tools Stack</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2.5 py-1 text-[10px] font-medium text-brand-dark border border-brand-gold/20 bg-brand-card rounded-md"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
