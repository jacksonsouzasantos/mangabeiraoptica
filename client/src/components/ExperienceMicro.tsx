import { motion } from "framer-motion";
import { Eye, Zap, Heart } from "lucide-react";

/**
 * ExperienceMicro Component
 * Three pillars with micro-interactions and hover effects
 * Premium glassmorphism design
 */

const experiences = [
  {
    icon: Eye,
    title: "Visagismo Especializado",
    description:
      "Escolha da armação ideal baseada no formato do seu rosto. Nossos especialistas analisam cada detalhe para encontrar o estilo perfeito.",
    color: "from-accent to-yellow-500",
  },
  {
    icon: Zap,
    title: "Laboratório Digital",
    description:
      "Precisão absoluta e entrega ágil das suas lentes. Tecnologia de ponta para garantir qualidade e conforto visual.",
    color: "from-blue-400 to-cyan-500",
  },
  {
    icon: Heart,
    title: "Atendimento Humanizado",
    description:
      "Consultoria personalizada para sua saúde visual. Cada cliente é único e merece atenção especial.",
    color: "from-rose-400 to-pink-500",
  },
];

export default function ExperienceMicro() {
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
      id="experiencia"
      className="full-bleed relative w-screen py-20 md:py-32 bg-gradient-to-b from-secondary/30 to-background"
    >
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10"></div>

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
            Por que escolher
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-primary mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            A Experiência Mangabeira
          </h2>
          <p className="text-base md:text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Três pilares que definem nosso compromisso com você: excelência,
            tecnologia e humanidade.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group"
              >
                <div className="glass-card h-full p-8 md:p-10 flex flex-col hover:shadow-soft-lg transition-all duration-300">
                  {/* Icon Container */}
                  <motion.div
                    className={`w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br ${exp.color} flex items-center justify-center mb-6 group-hover:glow-accent transition-all duration-300`}
                    whileHover={{ scale: 1.1, rotate: 10 }}
                  >
                    <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  </motion.div>

                  {/* Title */}
                  <h3
                    className="text-2xl font-semibold text-primary mb-4"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {exp.title}
                  </h3>

                  {/* Description */}
                  <p className="text-foreground/70 leading-relaxed flex-grow mb-6">
                    {exp.description}
                  </p>

                  {/* Hover CTA */}
                  <motion.div
                    className="flex items-center gap-2 text-accent font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ x: -10 }}
                    whileHover={{ x: 5 }}
                  >
                    <span>Saiba mais</span>
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Accent Line */}
        <motion.div
          className="h-1 w-32 bg-gradient-to-r from-accent to-yellow-500 rounded-full mx-auto mt-16"
          initial={{ width: 0 }}
          whileInView={{ width: 128 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        ></motion.div>
      </div>
    </section>
  );
}
