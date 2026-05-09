import { motion } from "framer-motion";
import { Eye, Zap, Heart } from "lucide-react";

/**
 * ExperienceSection Component
 * Design Philosophy: Elegância Orgânica
 * - 3 colunas com ícones em círculos gradientes
 * - Animações ao scroll (fade-in + scale)
 * - Cards com sombra soft e bordas arredondadas
 * - Ícones customizados em dourado
 */

interface ExperienceCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const cards: ExperienceCard[] = [
  {
    icon: <Eye className="w-8 h-8" />,
    title: "Visagismo Especializado",
    description:
      "Escolha da armação ideal baseada no formato do seu rosto, tipo de pele e estilo pessoal. Consultoria completa para realçar sua beleza natural.",
    color: "from-accent to-accent/60",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Laboratório Digital",
    description:
      "Precisão absoluta e entrega ágil das suas lentes. Tecnologia de ponta para garantir a melhor qualidade visual e conforto.",
    color: "from-secondary to-secondary/60",
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Atendimento Humanizado",
    description:
      "Consultoria personalizada para sua saúde visual. Equipe dedicada a entender suas necessidades e oferecer as melhores soluções.",
    color: "from-primary to-primary/60",
  },
];

export default function ExperienceSection() {
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
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10"></div>

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
            Por que escolher
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            A Experiência Mangabeira
          </h2>
          <p className="text-base md:text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Três pilares que definem nosso compromisso com você: excelência em visagismo, tecnologia de ponta e humanidade em cada atendimento.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group"
            >
              <div className="card-premium h-full flex flex-col items-start">
                {/* Icon Circle */}
                <div
                  className={`w-16 h-16 rounded-full bg-gradient-to-br ${card.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {card.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-semibold text-primary mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  {card.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed flex-grow">
                  {card.description}
                </p>

                {/* Decorative line */}
                <div className="w-12 h-1 bg-gradient-to-r from-accent to-transparent rounded-full mt-6 group-hover:w-20 transition-all duration-300"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 md:mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-foreground/60 mb-6">
            Pronto para descobrir sua melhor versão?
          </p>
          <a
            href="https://wa.me/558399032125?text=Olá%20Mangabeira%20Ótica!%20Gostaria%20de%20agendar%20uma%20consultoria%20de%20visagismo."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-block"
          >
            Agendar Consultoria Gratuita
          </a>
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
