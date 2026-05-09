import { motion } from "framer-motion";
import { Star } from "lucide-react";

/**
 * TestimonialsGlass Component
 * Glassmorphism testimonial cards with stagger effect
 * Premium social proof with 5-star ratings
 */

const testimonials = [
  {
    name: "Maria Silva",
    role: "Cliente desde 2022",
    content:
      "Encontrei meus óculos perfeitos na Mangabeira Ótica! O atendimento foi impecável e o visagismo realmente fez diferença.",
    rating: 5,
    avatar: "MS",
  },
  {
    name: "Ana Costa",
    role: "Cliente desde 2021",
    content:
      "Qualidade excepcional nas lentes e muita atenção ao detalhe. A equipe entende realmente do que está fazendo.",
    rating: 5,
    avatar: "AC",
  },
  {
    name: "Juliana Oliveira",
    role: "Cliente desde 2023",
    content:
      "Melhor experiência de compra de óculos que já tive. Consultoria personalizada e resultado perfeito!",
    rating: 5,
    avatar: "JO",
  },
];

export default function TestimonialsGlass() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="depoimentos"
      className="full-bleed relative w-screen py-20 md:py-32 bg-primary overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-3 sm:px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent font-semibold text-sm md:text-base tracking-widest uppercase mb-4">
            O que dizem sobre nós
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Depoimentos de Quem Confia
          </h2>
          <div className="flex items-center justify-center gap-2 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-accent text-accent" />
            ))}
          </div>
          <p className="text-lg font-semibold text-white mb-2">
            Nota máxima na região
          </p>
          <p className="text-white/80">Mais de 80 avaliações 5 estrelas no Google</p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-12 sm:mb-16"
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
              whileHover={{ y: -10 }}
            >
              <div className="glass-card-dark h-full flex flex-col p-8 md:p-10 hover:shadow-soft-lg transition-all duration-300">
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
                <p className="text-white/90 leading-relaxed mb-6 flex-grow italic text-sm md:text-base">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-6 border-t border-white/10">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-yellow-500 flex items-center justify-center text-primary font-semibold text-sm">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-white/60 text-xs">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 py-8 sm:py-12 px-4 sm:px-6 md:px-10 glass-card"
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
              <p
                className="text-3xl md:text-4xl font-bold text-accent mb-2"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {stat.number}
              </p>
              <p className="text-sm md:text-base text-white/80">{stat.label}</p>
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
            d="M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </section>
  );
}
