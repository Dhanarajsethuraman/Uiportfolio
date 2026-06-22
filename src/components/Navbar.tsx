"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Works", href: "#works" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-4 glass-nav shadow-sm"
          : "py-6 bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="group flex items-center gap-2">
          <span className="font-poppins font-bold text-2xl tracking-wider text-brand-dark transition-colors group-hover:text-brand-gold">
            DHANARAJ
          </span>
          <span className="h-2 w-2 rounded-full bg-brand-gold group-hover:scale-150 transition-transform duration-300"></span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-inter text-sm font-medium tracking-wide text-brand-dark/80 hover:text-brand-gold transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="px-6 py-2.5 rounded-full bg-brand-dark text-brand-cream hover:bg-brand-gold hover:text-brand-dark font-poppins text-sm font-medium transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-brand-dark hover:text-brand-gold transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass-nav shadow-lg border-t border-brand-gold/10 py-6 px-8 animate-fade-in">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-inter text-base font-semibold text-brand-dark hover:text-brand-gold transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-3 rounded-full bg-brand-dark text-brand-cream hover:bg-brand-gold hover:text-brand-dark font-poppins text-sm font-medium transition-all duration-300 shadow-md"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
