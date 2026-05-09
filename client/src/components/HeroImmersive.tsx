import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

/**
 * HeroImmersive Component
 * Full-bleed parallax hero with letter-by-letter animation
 * Background image with smooth parallax effect
 */

const heroText = "Sua visão merece exclusividade";

export default function HeroImmersive() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="full-bleed relative w-screen h-screen overflow-hidden pt-20">
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=1200&h=1200&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          y: scrollY * 0.5,
        }}
      >
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
      </motion.div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-start px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="max-w-xl sm:max-w-2xl">
          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-1 w-12 bg-gradient-to-r from-accent to-yellow-500 rounded-full"></div>
            <p className="text-accent font-semibold text-sm md:text-base tracking-widest uppercase">
              Bem-vindo à Mangabeira
            </p>
          </motion.div>

          {/* Main Headline with Letter Animation */}
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {heroText.split("").map((letter, index) => (
              <motion.span key={index} variants={letterVariants}>
                {letter}
              </motion.span>
            ))}
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-lg md:text-xl text-white/90 mb-8 max-w-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Experiência premium em visagismo especializado, laboratório digital de precisão e atendimento humanizado. Porque seus olhos merecem o melhor.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 pb-32 md:pb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <motion.a
              href="https://wa.me/558399032125"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-luxury text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Falar com Consultora
            </motion.a>

            <motion.a
              href="#experiencia"
              className="px-8 py-4 rounded-full font-semibold border-2 border-white text-white hover:bg-white hover:text-primary transition-all duration-300 text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Conhecer Mais
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8 text-white/60" />
      </motion.div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-24 md:h-32">
        <svg
          className="w-full h-full text-background"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </section>
  );
}
