"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // Simulate sending email
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    }, 1500);
  };

  const contacts = [
    {
      icon: <Mail className="w-5 h-5 text-brand-gold" />,
      label: "Email",
      value: "dhanarajsethuraman@gmail.com",
      href: "mailto:dhanarajsethuraman@gmail.com",
    },
    {
      icon: <Phone className="w-5 h-5 text-brand-gold" />,
      label: "Phone",
      value: "+91 75399 61879",
      href: "tel:+917539961879",
    },
    {
      icon: <MapPin className="w-5 h-5 text-brand-gold" />,
      label: "Location",
      value: "Mayiladuthurai, Tamil Nadu, India",
      href: "https://maps.google.com/?q=Mayiladuthurai,TamilNadu,India",
    },
  ];

  return (
    <section id="contact" className="py-12 md:py-16 px-6 md:px-12 bg-brand-card relative">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-4"
          >
            <span className="h-1 w-6 bg-brand-gold" />
            <span className="font-poppins text-xs font-bold tracking-widest text-brand-gold uppercase">
              Get in Touch
            </span>
            <span className="h-1 w-6 bg-brand-gold" />
          </motion.div>
          
          <h2 className="font-poppins font-extrabold text-4xl md:text-5xl text-brand-dark max-w-2xl leading-tight">
            Let&apos;s Craft Something Timeless.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Info & Details */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h3 className="font-poppins font-bold text-2xl text-brand-dark mb-6">
                Project Discussions & Collaborations
              </h3>
              <p className="font-inter text-sm md:text-base text-brand-dark/70 leading-relaxed mb-10">
                Have a campaign to design, a restaurant menu to layout, or a brand identity to build from scratch? Drop me a message or reach out directly. I usually respond within 24 hours.
              </p>

              {/* Contact Info blocks */}
              <div className="space-y-6">
                {contacts.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-4 p-4 rounded-xl border border-brand-gold/15 bg-brand-cream/40 hover:border-brand-gold/40 transition-colors group"
                  >
                    <div className="p-3 bg-brand-cream border border-brand-gold/10 rounded-xl group-hover:scale-105 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <span className="block font-mono text-[9px] text-brand-dark/45 uppercase tracking-wider">
                        {item.label}
                      </span>
                      <span className="font-inter text-sm font-semibold text-brand-dark group-hover:text-brand-gold transition-colors">
                        {item.value}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <div className="p-8 md:p-10 rounded-3xl glass-card relative overflow-hidden">
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Grid Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block font-poppins text-xs font-semibold text-brand-dark mb-2 uppercase tracking-wide">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-5 py-3.5 rounded-xl border border-brand-gold/20 bg-brand-cream/80 text-brand-dark text-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block font-poppins text-xs font-semibold text-brand-dark mb-2 uppercase tracking-wide">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full px-5 py-3.5 rounded-xl border border-brand-gold/20 bg-brand-cream/80 text-brand-dark text-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block font-poppins text-xs font-semibold text-brand-dark mb-2 uppercase tracking-wide">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Branding / Layout / Print Design Project"
                    className="w-full px-5 py-3.5 rounded-xl border border-brand-gold/20 bg-brand-cream/80 text-brand-dark text-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block font-poppins text-xs font-semibold text-brand-dark mb-2 uppercase tracking-wide">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project brief, dimensions, platform guidelines, or print spec requirements..."
                    className="w-full px-5 py-3.5 rounded-xl border border-brand-gold/20 bg-brand-cream/80 text-brand-dark text-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === "sending" || status === "success"}
                  className="w-full py-4 px-6 rounded-xl bg-brand-dark text-brand-cream hover:bg-brand-gold hover:text-brand-dark text-center font-poppins text-sm font-semibold tracking-wider uppercase transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === "sending" ? (
                    <span>Sending Message...</span>
                  ) : status === "success" ? (
                    <span>Message Sent Successfully!</span>
                  ) : (
                    <>
                      <span>Send Project Request</span>
                      <Send size={14} className="animate-pulse" />
                    </>
                  )}
                </button>
              </form>

              {/* Status Alert Overlay */}
              <AnimatePresence>
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute inset-0 bg-brand-cream/95 flex flex-col justify-center items-center p-6 text-center z-20"
                  >
                    <div className="p-4 bg-brand-gold/15 border border-brand-gold/25 rounded-full mb-4 text-brand-gold">
                      <MessageSquare size={36} />
                    </div>
                    <h3 className="font-poppins font-bold text-xl text-brand-dark mb-2">
                      Thank You!
                    </h3>
                    <p className="font-inter text-sm text-brand-dark/70 max-w-sm leading-relaxed">
                      Your visual project request has been sent to Dhanaraj. I will review the brief and get back to you shortly.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
