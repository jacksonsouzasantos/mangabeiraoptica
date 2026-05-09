import { motion } from "framer-motion";
import { Star } from "lucide-react";

/**
 * SocialProofSection Component
 * Design Philosophy: Elegância Orgânica
 * - Depoimentos de clientes reais
 * - Avaliações 5 estrelas do Google
 * - Cards com sombra soft
 * - Animações ao scroll
 */

interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Maria Silva",
    role: "Cliente desde 2022",
    content:
      "Encontrei meus óculos perfeitos na Mangabeira Ótica! O atendimento foi impecável e o visagismo realmente fez diferença. Recomendo muito!",
    rating: 5,
    avatar: "MS",
  },
  {
    name: "Ana Costa",
    role: "Cliente desde 2021",
    content:
      "Qualidade excepcional nas lentes e muita atenção ao detalhe. A equipe entende realmente do que está fazendo. Voltarei com certeza!",
    rating: 5,
    avatar: "AC",
  },
  {
    name: "Juliana Oliveira",
    role: "Cliente desde 2023",
    content:
      "Melhor experiência de compra de óculos que já tive. Consultoria personalizada, ambiente aconchegante e resultado perfeito!",
    rating: 5,
    avatar: "JO",
  },
];

export default function SocialProofSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background via-background to-primary/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent font-semibold text-sm md:text-base tracking-widest uppercase mb-4">
            O que dizem sobre nós
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Depoimentos de Quem Confia
          </h2>
          <div className="flex items-center justify-center gap-2 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-6 h-6 fill-accent text-accent"
              />
            ))}
          </div>
          <p className="text-lg font-semibold text-primary mb-2">
            Nota máxima na região
          </p>
          <p className="text-foreground/70">
            Mais de 80 avaliações 5 estrelas no Google
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group"
            >
              <div className="card-premium h-full flex flex-col">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-accent text-accent"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground/80 leading-relaxed mb-6 flex-grow italic">
                  {testimonial.content}
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-6 border-t border-border">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center text-white font-semibold text-sm">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-primary text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-foreground/60">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 py-12 px-6 md:px-10 bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl border border-border"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {[
            { number: "80+", label: "Avaliações 5 Estrelas" },
            { number: "500+", label: "Clientes Satisfeitos" },
            { number: "15+", label: "Marcas Premium" },
            { number: "100%", label: "Recomendação" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                {stat.number}
              </p>
              <p className="text-sm md:text-base text-foreground/70">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Wave Divider */}
      <div className="relative h-20 md:h-32 mt-20 overflow-hidden">
        <svg
          className="absolute bottom-0 w-full h-full text-background"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,50 Q300,0 600,50 T1200,50 L1200,0 L0,0 Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </section>
  );
}
