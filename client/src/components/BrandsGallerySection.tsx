import { motion } from "framer-motion";

/**
 * BrandsGallerySection Component
 * Design Philosophy: Elegância Orgânica
 * - Grid de marcas premium (Ray-Ban, Nike, Vogue, Lacoste)
 * - Imagens com bordas arredondadas e sombra soft
 * - Animações ao scroll
 * - Ambiente moderno da loja
 */

interface GalleryItem {
  image: string;
  title: string;
  category: string;
}

const galleryItems: GalleryItem[] = [
  {
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663579478449/fCxq7fRipRnQEe73dnXxH9/eyeglass-collection-display-DM3PjsVcQfYJM5RndHJQY7.webp",
    title: "Coleção Premium",
    category: "Ray-Ban, Nike, Vogue, Lacoste",
  },
  {
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663579478449/fCxq7fRipRnQEe73dnXxH9/modern-optical-store-AhXp4jRashsipRfvfwYPk3.webp",
    title: "Ambiente Moderno",
    category: "Loja em Mangabeira",
  },
  {
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663579478449/fCxq7fRipRnQEe73dnXxH9/visagismo-consultation-WfDqPwDTbgSbZ5QHhkgWdZ.webp",
    title: "Consultoria Personalizada",
    category: "Visagismo Especializado",
  },
];

export default function BrandsGallerySection() {
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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background to-primary/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10"></div>

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
            Nosso Acervo
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Curadoria de Marcas Premium
          </h2>
          <p className="text-base md:text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Selecionamos as melhores marcas internacionais para oferecer estilo, qualidade e exclusividade em cada armação.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-3xl"
            >
              {/* Image Container */}
              <div className="relative h-80 md:h-96 overflow-hidden rounded-3xl shadow-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-semibold text-white mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    {item.title}
                  </h3>
                  <p className="text-white/90 text-sm">{item.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Brands Showcase */}
        <motion.div
          className="py-12 px-6 md:px-10 bg-white rounded-3xl border border-border shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-center text-2xl font-semibold text-primary mb-8" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Marcas que Confiamos
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              "Ray-Ban",
              "Nike",
              "Vogue",
              "Lacoste",
              "Carmin",
              "Prada",
              "Gucci",
              "Tom Ford",
            ].map((brand, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center p-4 bg-gradient-to-br from-background to-background/50 rounded-2xl hover:shadow-md transition-shadow"
                whileHover={{ scale: 1.05 }}
              >
                <p className="font-semibold text-primary text-center">{brand}</p>
              </motion.div>
            ))}
          </div>
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
