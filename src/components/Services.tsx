"use client";

import { motion } from "framer-motion";
import { BookOpen, Award, Sparkles, Tv } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Sparkles className="w-10 h-10 text-brand-gold" />,
      title: "Brand Identity Design",
      desc: "Developing cohesive visual identities including logo designs, brand color books, business cards, letterheads, and typography systems.",
      details: ["Logo Mark Creation", "Brand Guidelines", "Stationery Mockups", "Vector Assets"],
    },
    {
      icon: <Tv className="w-10 h-10 text-brand-gold" />,
      title: "Commercial Advertising",
      desc: "Designing high-conversion marketing assets for digital campaigns, social media posts, flyers, billboards, and product posters.",
      details: ["Social Media Graphics", "Promo Posters", "Product Ad Mockups", "Sales Collaterals"],
    },
    {
      icon: <BookOpen className="w-10 h-10 text-brand-gold" />,
      title: "Restaurant & Menu Design",
      desc: "Crafting beautiful print and digital menus, table layouts, and restaurant banners that elevate the culinary brand experience.",
      details: ["Grid Food Menus", "Restaurant Flyers", "Special Offer Ads", "Table Card Formats"],
    },
    {
      icon: <Award className="w-10 h-10 text-brand-gold" />,
      title: "Premium Print Production",
      desc: "Delivering print-ready files set up correctly with crop marks, bleed areas, CMYK profiles, and optimum resolutions for large format prints.",
      details: ["Photo & Calendar Frames", "Event Venue Brochures", "Academic Trust Flyers", "Pre-press Checks"],
    },
  ];

  return (
    <section id="services" className="py-12 md:py-16 px-6 md:px-12 bg-brand-cream relative">
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
            <span className="h-1.5 w-6 bg-brand-gold" />
            <span className="font-poppins text-xs font-bold tracking-widest text-brand-gold uppercase">
              Creative Offerings
            </span>
            <span className="h-1.5 w-6 bg-brand-gold" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-poppins font-bold text-4xl md:text-5xl text-brand-dark max-w-2xl leading-tight"
          >
            Custom Visual Solutions for Every Platform.
          </motion.h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass-card p-6 sm:p-10 rounded-2xl flex flex-col justify-between group transition-all duration-300 hover:shadow-2xl hover:border-brand-gold/45"
            >
              <div>
                <div className="mb-6 p-4 bg-brand-cream rounded-2xl w-fit border border-brand-gold/10 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                
                <h3 className="font-poppins font-bold text-xl md:text-2xl text-brand-dark mb-4 group-hover:text-brand-gold transition-colors">
                  {service.title}
                </h3>
                
                <p className="font-inter text-sm md:text-base text-brand-dark/70 leading-relaxed mb-8">
                  {service.desc}
                </p>
              </div>

              {/* Service details checklist */}
              <div className="border-t border-brand-gold/15 pt-6 mt-4">
                <ul className="grid grid-cols-2 gap-y-3 gap-x-4">
                  {service.details.map((detail) => (
                    <li
                      key={detail}
                      className="font-inter text-xs md:text-sm text-brand-dark/60 flex items-center gap-2"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
