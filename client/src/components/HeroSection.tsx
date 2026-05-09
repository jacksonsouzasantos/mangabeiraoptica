import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

/**
 * HeroSection Component
 * Design Philosophy: Elegância Orgânica
 * - Imagem de modelo com óculos premium à esquerda (70%)
 * - Texto e CTA à direita (30%)
 * - Animações suaves ao carregar
 * - Botão WhatsApp com hover effect
 */

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/10 overflow-hidden pt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-120px)]">
          {/* Imagem - Lado Esquerdo */}
          <motion.div
            className="order-2 lg:order-1 flex justify-center lg:justify-start"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="relative w-full max-w-md">
              {/* Decorative circle background */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-full blur-3xl -z-10 scale-110"></div>

              {/* Image with rounded corners */}
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663579478449/fCxq7fRipRnQEe73dnXxH9/hero-model-glasses-chELdUb9RtVLuRnjRELWYJ.webp"
                alt="Mulher elegante com óculos Ray-Ban premium"
                className="w-full h-auto rounded-3xl shadow-2xl object-cover"
              />

              {/* Floating accent element */}
              <motion.div
                className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent rounded-full opacity-20 blur-2xl"
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              ></motion.div>
            </div>
          </motion.div>

          {/* Texto e CTA - Lado Direito */}
          <motion.div
            className="order-1 lg:order-2 flex flex-col justify-center space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Tagline */}
            <motion.div variants={itemVariants} className="space-y-2">
              <p className="text-accent font-semibold text-sm md:text-base tracking-widest uppercase">
                Bem-vindo à Mangabeira Ótica
              </p>
              <div className="h-1 w-12 bg-gradient-to-r from-accent to-accent/50 rounded-full"></div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Sua visão merece{" "}
              <span className="text-gradient">exclusividade</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-foreground/80 leading-relaxed max-w-md"
            >
              Experiência premium em visagismo especializado, laboratório digital de precisão e atendimento humanizado. Porque seus olhos merecem o melhor.
            </motion.p>

            {/* Features List */}
            <motion.div variants={itemVariants} className="space-y-3 pt-4">
              {[
                "Visagismo especializado para seu rosto",
                "Laboratório digital com entrega ágil",
                "Consultoria personalizada",
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <p className="text-sm md:text-base text-foreground/70">{feature}</p>
                </div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              variants={itemVariants}
              className="pt-6 flex flex-col sm:flex-row gap-4"
            >
              <a
                href="https://wa.me/558399032125?text=Olá%20Mangabeira%20Ótica!%20Gostaria%20de%20agendar%20uma%20consultoria%20de%20visagismo."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center justify-center gap-2 group"
              >
                <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                Falar com Consultora
              </a>
              <button className="btn-outline">
                Conhecer Marcas
              </button>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              variants={itemVariants}
              className="pt-8 border-t border-border flex items-center gap-4"
            >
              <div className="flex -space-x-2">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center text-white text-xs font-bold border-2 border-background"
                  >
                    {i + 1}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm font-semibold text-primary">
                  Mais de 80 avaliações 5 estrelas
                </p>
                <p className="text-xs text-foreground/60">Nota máxima na região</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="relative h-20 md:h-32 mt-12 overflow-hidden">
        <svg
          className="absolute bottom-0 w-full h-full text-background"
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
