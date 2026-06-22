"use client";

import { motion } from "framer-motion";
import { ArrowRight, Compass, Layers, Palette } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center pt-32 pb-12 md:pt-40 md:pb-16 px-6 md:px-12 overflow-hidden bg-brand-cream"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-brand-gold/5 blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-brand-gold/10 blur-3xl" />

      {/* Grid Overlay for Editorial Design Feel */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(167,146,119,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(167,146,119,0.03)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Text Content */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-gold/30 bg-brand-cream/50 backdrop-blur-md mb-6 w-fit"
          >
            <span className="h-2 w-2 rounded-full bg-brand-gold animate-pulse" />
            <span className="font-poppins text-xs font-semibold tracking-wider text-brand-dark uppercase">
              Available for Freelance & Contract
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-poppins font-extrabold text-5xl md:text-7xl xl:text-8xl tracking-tight text-brand-dark leading-[0.95] mb-6"
          >
            DHANARAJ
            <span className="block mt-2 text-3xl md:text-5xl font-light tracking-wide text-brand-gold font-poppins">
              Visual Sculptor & Designer
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-inter text-base md:text-lg text-brand-dark/70 leading-relaxed max-w-xl mb-10"
          >
            Crafting premium brand identities, print layouts, and digital experiences that captivate audiences. Specialized in transforming abstract ideas into concrete visual languages that communicate, inspire, and elevate brands.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center"
          >
            <a
              href="#works"
              className="group px-8 py-4 rounded-full bg-brand-dark text-brand-cream hover:bg-brand-gold hover:text-brand-dark text-center font-poppins text-base font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              Explore Selected Works
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 rounded-full border-2 border-brand-dark/20 text-brand-dark hover:border-brand-gold hover:bg-brand-gold/10 text-center font-poppins text-base font-semibold transition-all duration-300"
            >
              Let&apos;s Talk
            </a>
          </motion.div>

          {/* Micro Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="grid grid-cols-3 gap-4 md:gap-6 pt-8 mt-8 md:pt-12 md:mt-12 border-t border-brand-gold/20 max-w-lg"
          >
            <div>
              <span className="block font-poppins font-bold text-2xl text-brand-dark">1.8</span>
              <span className="block font-inter text-xs text-brand-dark/50 uppercase tracking-wider">Years Experience</span>
            </div>
            <div>
              <span className="block font-poppins font-bold text-2xl text-brand-dark">50+</span>
              <span className="block font-inter text-xs text-brand-dark/50 uppercase tracking-wider">Designs Delivered</span>
            </div>
            <div>
              <span className="block font-poppins font-bold text-2xl text-brand-dark">100%</span>
              <span className="block font-inter text-xs text-brand-dark/50 uppercase tracking-wider">Client Delight</span>
            </div>
          </motion.div>
        </div>

        {/* Artistic Graphic Composition */}
        <div className="lg:col-span-5 relative flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative w-72 h-72 sm:w-96 sm:h-96"
          >
            {/* Outer Spinning Border */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-[40px] border-2 border-dashed border-brand-gold/30"
            />

            {/* Middle Rotating Box */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute inset-4 sm:inset-6 rounded-[30px] border border-brand-dark/10 bg-brand-cream/40 backdrop-blur-sm"
            />

            {/* Center Content */}
            <div className="absolute inset-8 sm:inset-12 rounded-[24px] bg-brand-card border border-brand-gold/20 flex flex-col justify-center items-center p-4 sm:p-8 shadow-xl animate-fade-in">
              {/* Creative Floating Icons */}
              <div className="flex gap-4 mb-4 sm:mb-6">
                <div className="p-2 sm:p-3 bg-brand-cream rounded-xl text-brand-gold border border-brand-gold/10">
                  <Palette className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="p-2 sm:p-3 bg-brand-cream rounded-xl text-brand-dark border border-brand-gold/10 animate-bounce">
                  <Layers className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="p-2 sm:p-3 bg-brand-cream rounded-xl text-brand-gold border border-brand-gold/10">
                  <Compass className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
              </div>

              <h3 className="font-poppins font-bold text-base sm:text-lg text-brand-dark text-center mb-1 sm:mb-2">
                Brand. Print. Digital.
              </h3>
              <p className="font-inter text-[10px] sm:text-xs text-brand-dark/60 text-center leading-relaxed">
                Applying structural grid systems and balanced color theories to bring products and narratives to life.
              </p>

              {/* Decorative design ruler details */}
              <div className="absolute bottom-3 sm:bottom-4 left-4 right-4 sm:left-6 sm:right-6 flex justify-between items-center text-[8px] sm:text-[10px] font-mono text-brand-gold/50 border-t border-brand-gold/20 pt-1.5 sm:pt-2">
                <span>01 // IDENTITY</span>
                <span>02 // PRINT</span>
                <span>03 // ADS</span>
              </div>
            </div>

            {/* Tiny accent badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 px-4 py-2 rounded-xl bg-brand-cream border border-brand-gold/20 shadow-md font-poppins text-xs font-bold text-brand-dark flex items-center gap-1.5"
            >
              🎨 Layouts
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-4 -left-4 px-4 py-2 rounded-xl bg-brand-cream border border-brand-gold/20 shadow-md font-poppins text-xs font-bold text-brand-dark flex items-center gap-1.5"
            >
              📐 Print Ready
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
