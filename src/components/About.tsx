"use client";

import { motion } from "framer-motion";
import { Award, Compass, Eye, Heart } from "lucide-react";

export default function About() {
  const skills = [
    { name: "Brand Identity Design", level: 95 },
    { name: "Print & Editorial Production", level: 90 },
    { name: "Social Media Advertising", level: 88 },
    { name: "Menu & Layout Design", level: 92 },
    { name: "Typography & Vector Illustration", level: 85 },
    { name: "Color Theory & Grid Systems", level: 95 },
  ];

  const tools = [
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Adobe InDesign",
    "Canva",
    "Figma",
    "Print Pre-press Preparation",
  ];

  const pillars = [
    {
      icon: <Eye className="w-6 h-6 text-brand-gold" />,
      title: "Visual Balance",
      desc: "Creating layouts with meticulous spatial structure, hierarchy, and color harmony.",
    },
    {
      icon: <Compass className="w-6 h-6 text-brand-gold" />,
      title: "Goal-Oriented Design",
      desc: "Every graphic is tailored to achieve business goals: conversion, recall, or identity.",
    },
    {
      icon: <Award className="w-6 h-6 text-brand-gold" />,
      title: "Production Precision",
      desc: "Deep knowledge in pre-press, CMYK color profiles, resolution requirements, and print materials.",
    },
    {
      icon: <Heart className="w-6 h-6 text-brand-gold" />,
      title: "Client Synergy",
      desc: "Working in close alignment with business goals to build campaigns that reflect their brand values.",
    },
  ];

  return (
    <section id="about" className="py-12 md:py-16 px-6 md:px-12 bg-brand-card relative">
      {/* Editorial Decorative Grid Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-brand-gold/10 hidden lg:block" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column: Bio & Vision */}
          <div className="flex flex-col justify-between">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-2 mb-4"
              >
                <span className="h-1 w-8 bg-brand-gold" />
                <span className="font-poppins text-xs font-bold tracking-widest text-brand-gold uppercase">
                  Designer Story
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-poppins font-bold text-4xl md:text-5xl text-brand-dark leading-tight mb-8"
              >
                Creative Direction
                <br />
                With a Story to Tell.
              </motion.h2>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-inter text-brand-dark/75 space-y-6 text-base md:text-lg leading-relaxed max-w-xl"
              >
                <p>
                  I am <strong>Dhanaraj</strong>, a graphic designer dedicated to creating premium visual materials that make brands stand out. Based in India, my work spans corporate branding, commercial flyers, restaurant menu layouts, custom wedding and calendar frames, and digital advertising campaigns.
                </p>
                <p>
                  My philosophy centers on editorial precision and artistic balance. I believe a successful design doesn&apos;t just look beautiful; it builds an emotional bridge between the client and their audience. Whether developing a restaurant identity, product catalogs, or print ads, I ensure every pixel serves a purpose.
                </p>
              </motion.div>
            </div>

            {/* Creative Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12 pt-12 border-t border-brand-gold/20">
              {pillars.map((pillar, idx) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 mt-1">{pillar.icon}</div>
                  <div>
                    <h4 className="font-poppins font-bold text-sm text-brand-dark mb-1">
                      {pillar.title}
                    </h4>
                    <p className="font-inter text-xs text-brand-dark/60 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Skills & Tech */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 mb-4"
            >
              <span className="h-1 w-8 bg-brand-gold" />
              <span className="font-poppins text-xs font-bold tracking-widest text-brand-gold uppercase">
                Core Strengths
              </span>
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-poppins font-bold text-2xl md:text-3xl text-brand-dark mb-8"
            >
              Creative & Technical Competencies
            </motion.h3>

            {/* Skill Bars */}
            <div className="space-y-6 mb-12">
              {skills.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-poppins text-sm font-semibold text-brand-dark">
                      {skill.name}
                    </span>
                    <span className="font-mono text-xs font-semibold text-brand-gold">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 w-full bg-brand-gold/15 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut", delay: index * 0.1 }}
                      className="h-full bg-brand-gold rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Design Toolkit */}
            <div className="p-6 sm:p-8 rounded-2xl border border-brand-gold/20 bg-brand-cream/30 backdrop-blur-sm">
              <h4 className="font-poppins font-bold text-sm text-brand-dark tracking-wide uppercase mb-6 flex items-center gap-2">
                <span className="h-2 w-2 bg-brand-gold rounded-full" />
                Professional Toolkit
              </h4>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-4 py-2 text-xs font-medium text-brand-dark border border-brand-gold/25 bg-brand-cream rounded-lg hover:border-brand-gold transition-colors duration-200"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
