"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { Folder, ArrowUpRight, Search } from "lucide-react";
import ProjectModal from "./ProjectModal";

// Import all 12 images from src/assets
import imgEducationTrust from "@/assets/IMG-20241016-WA0021.jpg";
import imgBurgerFlyer from "@/assets/IMG-20241113-WA0002(1).jpg";
import imgPhotoFrame from "@/assets/IMG-20241214-WA0011.jpg";
import imgWeddingDecor from "@/assets/IMG-20250102-WA0015.jpg";
import imgNailSpa from "@/assets/IMG-20250106-WA0000.jpg";
import imgCalendarFrame from "@/assets/IMG-20250106-WA0002.jpg";
import imgMegaSaleFrame from "@/assets/IMG-20250106-WA0004.jpg";
import imgFoodMenu from "@/assets/IMG-20250213-WA0009.jpg";
import imgBiryaniFlyer from "@/assets/IMG-20250213-WA0011.jpg";
import imgMangoIceCream from "@/assets/IMG-20250218-WA0006.jpg";
import imgSpecialWatch from "@/assets/IMG-20250224-WA0008.jpg";
import imgKavintechSolutions from "@/assets/smo copy.jpg";

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

export default function PortfolioGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories = [
    "All",
    "Brand Identity",
    "F&B Branding",
    "Advertising",
    "Print & Production",
  ];

  const projects: Project[] = [
    {
      id: "kavintech",
      title: "Kavintech Solutions Campaign",
      category: "Brand Identity",
      client: "Kavintech Solutions",
      description: "Sleek corporate social media poster with hexagon frames and tech layout.",
      details: "Designed a premium corporate advertisement template utilizing custom hexagonal frames to communicate networking, IT infrastructure, and digital synergy. Focused on typographic alignment and corporate branding colors to create a modern layout.",
      tools: ["Adobe Photoshop", "Adobe Illustrator"],
      year: "2025",
      image: imgKavintechSolutions,
    },
    {
      id: "edu-trust",
      title: "Education Trust Campaign",
      category: "Brand Identity",
      client: "Dream Future Education Trust",
      description: "Large format print banner featuring high contrast layout grids and trust themes.",
      details: "Crafted a structured, dual-color academic campaign poster. Segmented sections of course details, address information, and action steps using clean grids. Strictly adhered to corporate blue and gold accents to convey trust, stability, and education excellence.",
      tools: ["Adobe Photoshop", "Adobe InDesign"],
      year: "2024",
      image: imgEducationTrust,
    },
    {
      id: "food-menu",
      title: "Restaurant Menu Design",
      category: "F&B Branding",
      client: "time to eat / Golden Restaurant",
      description: "Dark theme food menu featuring structured grids and glowing orange accents.",
      details: "Designed a dark-mode editorial menu layout for print and digital tablets. Implemented custom orange blocks and circular dish containers against a matte charcoal gray background, improving readability and enhancing user appetite under dim dining light.",
      tools: ["Adobe Illustrator", "Adobe InDesign"],
      year: "2025",
      image: imgFoodMenu,
    },
    {
      id: "burger-flyer",
      title: "Double Cheery Burger Poster",
      category: "F&B Branding",
      client: "time to eat Fast Foods",
      description: "High impact commercial food flyer with dynamic sticker details.",
      details: "Engineered a high-energy advertising graphic. Placed a highly-detailed central burger asset surrounded by split red/yellow backdrops. Added custom sales discount badges and contact bars to direct visual attention to the primary CTA.",
      tools: ["Adobe Photoshop", "Adobe Illustrator"],
      year: "2024",
      image: imgBurgerFlyer,
    },
    {
      id: "mango-cream",
      title: "Mango Ice Cream Poster",
      category: "F&B Branding",
      client: "Yammy Mango Dessert Spa",
      description: "Refreshing social media design utilizing milk-splashes and organic fruit layering.",
      details: "Created a refreshing product graphic for digital marketing. Utilized multi-layered elements including milk splashes, floating mint leaves, and mango chunks to establish motion. Coordinated soft shadows and fruit highlights to give a premium look.",
      tools: ["Adobe Photoshop"],
      year: "2025",
      image: imgMangoIceCream,
    },
    {
      id: "biryani-poster",
      title: "Golden Biryani Promotion",
      category: "F&B Branding",
      client: "Golden Restaurant",
      description: "Culinary poster showcasing heritage cuisine with low-distraction dark backdrop.",
      details: "Crafted a dark-textured advertisement layout for a signature Biryani dish. Avoided noisy layouts, using focused circular food containers and crisp typography to make the culinary imagery stand out and attract customers.",
      tools: ["Adobe Photoshop", "Canva"],
      year: "2025",
      image: imgBiryaniFlyer,
    },
    {
      id: "watch-ad",
      title: "Special Watch Showcase",
      category: "Advertising",
      client: "Wid Watch Collection",
      description: "Luxury watch product ad with perspective studio lighting and reflection mockup.",
      details: "Designed a minimalist luxury watch campaign poster. Modeled a gray perspective studio background with soft product reflections. Utilized depth-of-field blurring on flanking watch elements to draw the eye to the central watch, using classy typography.",
      tools: ["Adobe Photoshop", "Adobe Illustrator"],
      year: "2025",
      image: imgSpecialWatch,
    },
    {
      id: "nail-spa",
      title: "Nail Spa Brand Flyer",
      category: "Advertising",
      client: "Ant Nail Arts",
      description: "High fashion salon flyer using curved layout sections and beauty typography.",
      details: "Developed a lifestyle advertising flyer for a beauty salon. Blended a close-up model portrait with curved magenta gradients. Arranged a list of spa services with clean font tracking, letter-spacing, and line-heights for a premium presentation.",
      tools: ["Adobe Illustrator", "Adobe InDesign"],
      year: "2025",
      image: imgNailSpa,
    },
    {
      id: "wedding-decor",
      title: "Grand Wedding Venue Poster",
      category: "Advertising",
      client: "Shree Event Venues",
      description: "Maroon and cream royal layout showcasing event spaces in diamond grids.",
      details: "Developed a premium event and catering flyer. Built a decorative diamond-shaped layout grid to highlight different angles of hall decorations. Styled with royal maroon color blocks and ornate borders to appeal to wedding clients.",
      tools: ["Adobe Photoshop", "Canva"],
      year: "2025",
      image: imgWeddingDecor,
    },
    {
      id: "photo-frame",
      title: "Gt Surya Framing Catalog",
      category: "Print & Production",
      client: "Gt Surya Digital Printing",
      description: "Commercial pricing flyer structured for framed photography marketing.",
      details: "Designed a local storefront print flyer displaying pricing tiers for framed photo prints. Balanced large text numbers and sample frame mockups, providing high legibility for direct mail print marketing.",
      tools: ["Canva", "Adobe Photoshop"],
      year: "2024",
      image: imgPhotoFrame,
    },
    {
      id: "calendar-frame",
      title: "Calendar Frame Catalog",
      category: "Print & Production",
      client: "Gt Surya Digital Printing",
      description: "Print marketing poster displaying calendars with religious and portrait layouts.",
      details: "Assembled a seasonal catalog poster showcasing calendar frames. Handled grid packaging of multiple product photos alongside price text to deliver an organized catalog flyer for print production.",
      tools: ["Adobe Photoshop", "Canva"],
      year: "2025",
      image: imgCalendarFrame,
    },
    {
      id: "mega-sale",
      title: "Mega Sale Print Poster",
      category: "Print & Production",
      client: "Gt Surya Digital Press",
      description: "Retail campaign poster utilizing red brush strokes and high impact discount tags.",
      details: "Created a high-energy promotional poster for a print shop sale. Utilized a vivid red brush stroke background, a loud megaphone icon, and large contrast badges to attract immediate customer attention for retail display.",
      tools: ["Adobe Photoshop", "Canva"],
      year: "2025",
      image: imgMegaSaleFrame,
    },
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="works" className="py-12 md:py-16 px-6 md:px-12 bg-brand-cream relative">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="h-1 w-8 bg-brand-gold" />
              <span className="font-poppins text-xs font-bold tracking-widest text-brand-gold uppercase">
                Selected Works
              </span>
            </div>
            <h2 className="font-poppins font-extrabold text-4xl md:text-5xl text-brand-dark tracking-tight leading-tight">
              Design Gallery
            </h2>
          </div>

          {/* Subheading */}
          <p className="font-inter text-sm md:text-base text-brand-dark/60 max-w-md leading-relaxed">
            A curated showcase of print-ready designs, restaurant menus, product advertisements, and corporate campaigns created for diverse business niches.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 md:gap-3 border-b border-brand-gold/15 pb-6 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2.5 rounded-full font-poppins text-xs md:text-sm font-semibold tracking-wide transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-brand-dark text-brand-cream shadow-md"
                  : "bg-brand-card hover:bg-brand-gold/10 text-brand-dark border border-brand-gold/15"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Grid with Framer Motion Layout animations */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative cursor-pointer glass-card rounded-2xl overflow-hidden aspect-[4/5] flex flex-col justify-end p-6 border border-brand-gold/15"
                onClick={() => setActiveProject(project)}
              >
                {/* Image Container with Hover Scale */}
                <div className="absolute inset-0 bg-brand-cream overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105 group-hover:blur-[2px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#091A17]/95 via-[#091A17]/40 to-transparent opacity-75 group-hover:opacity-90 transition-opacity duration-300" />
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="font-mono text-[10px] text-brand-gold tracking-widest uppercase mb-1 flex items-center gap-1.5">
                    <Folder size={10} />
                    {project.category}
                  </span>
                  
                  <h3 className="font-poppins font-bold text-xl text-white tracking-wide leading-snug mb-2 flex items-center justify-between">
                    {project.title}
                    <ArrowUpRight className="w-5 h-5 text-brand-gold opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                  </h3>

                  <p className="font-inter text-xs text-white/70 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                    {project.description}
                  </p>
                  
                  {/* Tools snippet */}
                  <div className="flex flex-wrap gap-1.5 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {project.tools.slice(0, 2).map((tool) => (
                      <span
                        key={tool}
                        className="px-2 py-0.5 text-[9px] font-medium text-brand-cream border border-brand-cream/20 bg-brand-dark/40 rounded"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Hover Icon Overlay */}
                <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="p-3 bg-brand-cream rounded-full border border-brand-gold/25 shadow-lg text-brand-dark hover:bg-brand-gold hover:text-brand-dark transition-colors duration-200">
                    <Search size={16} />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state if any */}
        {filteredProjects.length === 0 && (
          <div className="py-24 text-center">
            <p className="font-inter text-brand-dark/50">No designs found in this category.</p>
          </div>
        )}

        {/* Project Modal */}
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
        
      </div>
    </section>
  );
}
