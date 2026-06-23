"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { Folder, ArrowUpRight, Search } from "lucide-react";
import ProjectModal from "./ProjectModal";

// Import all original images from src/assets (converted to webp)
import imgBurgerFlyer from "@/assets/IMG-20241113-WA0002(1).webp";
import imgPhotoFrame from "@/assets/IMG-20241214-WA0011.webp";
import imgWeddingDecor from "@/assets/IMG-20250102-WA0015.webp";
import imgNailSpa from "@/assets/IMG-20250106-WA0000.webp";
import imgCalendarFrame from "@/assets/IMG-20250106-WA0002.webp";
import imgMegaSaleFrame from "@/assets/IMG-20250106-WA0004.webp";
import imgFoodMenu from "@/assets/IMG-20250213-WA0009.webp";
import imgBiryaniFlyer from "@/assets/IMG-20250213-WA0011.webp";
import imgMangoIceCream from "@/assets/IMG-20250218-WA0006.webp";
import imgSpecialWatch from "@/assets/IMG-20250224-WA0008.webp";
import imgKavintechSolutions from "@/assets/smo.webp";

// Import all 13 newly added images from src/assets (converted to webp)
import imgChickenCutlet from "@/assets/IMG-20260622-WA0025.jpg.webp";
import imgMoruMoruChicken from "@/assets/IMG-20260622-WA0026.jpg.webp";
import imgFriedChickenPromo from "@/assets/IMG-20260622-WA0028.jpg.webp";
import imgChickenPopcorn from "@/assets/IMG-20260622-WA0029.jpg.webp";
import imgLovelyChaatsMenu from "@/assets/IMG-20260622-WA0030.jpg.webp";
import imgEmpireEBikesNoLicence from "@/assets/IMG-20260622-WA0031.jpg.webp";
import imgSignatureWatchAd from "@/assets/IMG-20260622-WA0032.jpg.webp";
import imgGreenAppleCampaign from "@/assets/IMG-20260622-WA0033.jpg.webp";
import imgEngineersDayCampaign from "@/assets/IMG-20260622-WA0034.jpg.webp";
import imgEmpireEBikesWings from "@/assets/IMG-20260622-WA0035.jpg.webp";
import imgRamzanGreetings from "@/assets/IMG-20260622-WA0036.jpg.webp";
import imgZaroidRecruitment from "@/assets/IMG-20260622-WA0037.jpg.webp";
import imgOrderzPOSMockup from "@/assets/IMG-20260622-WA0038.jpg.webp";

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
    {
      id: "chicken-cutlet",
      title: "Chicken Cutlet Poster",
      category: "F&B Branding",
      client: "Lovely Chaats",
      description: "Vibrant F&B product poster with high-contrast background and drop shadow food elements.",
      details: "Designed a premium commercial food poster for a Chicken Cutlet product. Used a textured red background with organic elements like lettuce, lemon, and fresh tomatoes. Coordinated clean typography with drop shadows to make the food asset pop.",
      tools: ["Adobe Photoshop", "Adobe Illustrator"],
      year: "2026",
      image: imgChickenCutlet,
    },
    {
      id: "moru-moru-chicken",
      title: "Moru Moru Chicken Poster",
      category: "F&B Branding",
      client: "Lovely Chaats",
      description: "Crispy fried chicken bucket promotion flyer with dynamic spice particles.",
      details: "Designed a high-impact advertising poster for a crispy chicken bucket product. Implemented gold sparks and spice particle effects against a rich red background. Coordinated bold white typography to draw immediate customer attention.",
      tools: ["Adobe Photoshop"],
      year: "2026",
      image: imgMoruMoruChicken,
    },
    {
      id: "fried-chicken-promo",
      title: "Fried Chicken Promotion",
      category: "F&B Branding",
      client: "Lovely Chaats",
      description: "Delicious fried chicken advertising poster with a striped bucket mockup.",
      details: "Crafted a commercial poster displaying a striped bucket filled with golden-brown fried chicken. Blended background patterns and floating leaves/sparks to convey texture and fresh taste, optimized for social media campaigns.",
      tools: ["Adobe Photoshop", "Canva"],
      year: "2026",
      image: imgFriedChickenPromo,
    },
    {
      id: "chicken-popcorn",
      title: "Chicken Popcorn Poster",
      category: "F&B Branding",
      client: "Lovely Chaats",
      description: "High-contrast food flyer for Chicken Popcorn showing crispy details.",
      details: "Created a modern advertising graphic for a chicken popcorn snack bucket. Placed detailed food assets inside a red-and-white striped bucket, emphasizing the golden texture with studio backlighting.",
      tools: ["Adobe Photoshop"],
      year: "2026",
      image: imgChickenPopcorn,
    },
    {
      id: "lovely-chaats-menu",
      title: "Lovely Chaats Full Menu",
      category: "F&B Branding",
      client: "Lovely Chaats",
      description: "Comprehensive restaurant menu board with visual item frames.",
      details: "Designed a large-format menu poster for a local diner. Managed a structured layout listing 22 menu categories, utilizing side panel item photography, Halal badges, and location details for print readiness.",
      tools: ["Adobe Illustrator", "Canva"],
      year: "2026",
      image: imgLovelyChaatsMenu,
    },
    {
      id: "empire-ebikes-nolicence",
      title: "Empire E-Bikes Campaign",
      category: "Advertising",
      client: "Empire E-Bikes",
      description: "Outdoor e-bike advertisement highlighting licensing convenience.",
      details: "Designed a green, eco-friendly campaign poster for electric vehicles. Placed a blue electric scooter against a wooden fence and grass lawn backdrop under a bright blue sky. Styled bold blue typography for high outdoor readability.",
      tools: ["Adobe Photoshop", "Adobe Illustrator"],
      year: "2026",
      image: imgEmpireEBikesNoLicence,
    },
    {
      id: "signature-watch-ad",
      title: "Signature Watch Ad",
      category: "Advertising",
      client: "Signature Watches",
      description: "Luxury black timepiece showcase on natural stone podiums.",
      details: "Developed a premium product advertisement template. Positioned a minimalist black watch face on rough stone textures against a charcoal gradient backdrop. Utilized smooth lighting highlights to convey elegance and sophistication.",
      tools: ["Adobe Photoshop"],
      year: "2026",
      image: imgSignatureWatchAd,
    },
    {
      id: "green-apple-campaign",
      title: "Green Apple Campaign",
      category: "Advertising",
      client: "Eat Fresh Co.",
      description: "Organic fruit marketing flyer with vibrant green assets.",
      details: "Designed a fresh product advertising card. Structured a split-screen design containing fresh wet green apples in a wicker basket, using bright green tones to emphasize organic quality and a 25% discount banner.",
      tools: ["Adobe Photoshop", "Canva"],
      year: "2026",
      image: imgGreenAppleCampaign,
    },
    {
      id: "engineers-day",
      title: "Engineers Day Campaign",
      category: "Brand Identity",
      client: "GUVI",
      description: "Creative social media campaign utilizing symbolic hardhat silhouettes.",
      details: "Designed a creative Engineers Day poster. Modeled a green engineering hardhat casting a dramatic superhero shadow onto a deep purple corporate background. Coordinated typography that links engineering to heroism.",
      tools: ["Adobe Photoshop", "Adobe Illustrator"],
      year: "2026",
      image: imgEngineersDayCampaign,
    },
    {
      id: "empire-ebikes-wings",
      title: "Wing For Future Campaign",
      category: "Advertising",
      client: "Empire E-Bikes",
      description: "Futuristic e-scooter ad featuring neon wing visual effects.",
      details: "Developed a futuristic campaign graphic for a blue scooter. Designed custom glowing neon wings and a golden halo to represent mobility and green future, blending clouds and high-contrast typography.",
      tools: ["Adobe Photoshop"],
      year: "2026",
      image: imgEmpireEBikesWings,
    },
    {
      id: "guvi-ramzan",
      title: "GUVI Ramzan Greetings",
      category: "Brand Identity",
      client: "GUVI & HCL",
      description: "Festive social media banner featuring custom mascot illustration.",
      details: "Created a festive branding greeting poster. Dressed the brand's green mascot in custom traditional attire against a glowing crescent moon and desert landscape backdrop, coordinating logos for GUVI and HCL.",
      tools: ["Adobe Photoshop", "Adobe Illustrator"],
      year: "2026",
      image: imgRamzanGreetings,
    },
    {
      id: "zaroid-recruitment",
      title: "Zaroid Recruitment Flyer",
      category: "Brand Identity",
      client: "Zaroid Technologies",
      description: "Corporate recruitment poster with custom mascot and career details.",
      details: "Created a walk-in interview flyer. Placed a friendly 3D shopping bag mascot working on a computer desk. Detailed key positions, contact details, and software requirements with corporate blue and orange grids.",
      tools: ["Adobe Photoshop", "Canva"],
      year: "2026",
      image: imgZaroidRecruitment,
    },
    {
      id: "orderz-pos-mockup",
      title: "OrderZ POS App Mockup",
      category: "Brand Identity",
      client: "Zaroid Technologies / Orderz",
      description: "SaaS product mockup detailing mobile app interface features.",
      details: "Designed a marketing banner showcasing a restaurant management app. Integrated a high-fidelity mobile device mockup displaying the app's store listing alongside an smiling chef and delicious product visuals.",
      tools: ["Adobe Illustrator", "Canva"],
      year: "2026",
      image: imgOrderzPOSMockup,
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
