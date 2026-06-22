"use client";

import { ArrowUp } from "lucide-react";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-brand-dark text-brand-cream py-16 px-6 md:px-12 border-t border-brand-gold/20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Logo and brief info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <a href="#home" className="group flex items-center gap-2 mb-3">
            <span className="font-poppins font-bold text-2xl tracking-wider text-brand-cream hover:text-brand-gold transition-colors">
              DHANARAJ
            </span>
            <span className="h-2 w-2 rounded-full bg-brand-gold" />
          </a>
          <p className="font-inter text-xs text-brand-cream/85 max-w-xs leading-relaxed">
            Premium Brand Identity, Commercial Print Design, Restaurant Menus, and Graphic layouts. Crafted with precision in Mayiladuthurai, India.
          </p>
        </div>

        {/* Links and Back to top */}
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
          <p className="font-inter text-xs text-brand-cream/75">
            &copy; {new Date().getFullYear()} Dhanaraj. All Rights Reserved.
          </p>
          
          {/* Scroll to Top */}
          <button
            onClick={handleScrollToTop}
            className="p-3 bg-brand-cream/10 border border-brand-cream/20 hover:border-brand-gold hover:bg-brand-gold hover:text-brand-dark rounded-full text-brand-cream transition-all duration-300 shadow-md group"
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
