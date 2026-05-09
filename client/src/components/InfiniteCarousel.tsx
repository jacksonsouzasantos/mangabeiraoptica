import { motion } from "framer-motion";

/**
 * InfiniteCarousel Component
 * Continuous horizontal scroll carousel with faces wearing glasses
 * Creates active feed appearance
 */

const carouselImages = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&h=800&fit=crop",
    brand: "Ray-Ban",
    style: "Aviador Classico",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=800&h=800&fit=crop",
    brand: "Carmin",
    style: "Armacao Moderna",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&h=800&fit=crop",
    brand: "Nike",
    style: "Esportivo Premium",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800&h=800&fit=crop",
    brand: "Vogue",
    style: "Tendencia Fashion",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=800&fit=crop",
    brand: "Lacoste",
    style: "Classico Sofisticado",
  },
];

export default function InfiniteCarousel() {
  return (
    <section id="marcas" className="full-bleed relative w-screen py-12 sm:py-20 md:py-32 bg-gradient-to-b from-background to-secondary/30 overflow-hidden">
      <div className="container mx-auto px-3 sm:px-4 mb-8 sm:mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-accent font-semibold text-sm md:text-base tracking-widest uppercase mb-4">
            Galeria de Estilos
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-primary mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Rostos que Inspiram
          </h2>
          <p className="text-base md:text-lg text-foreground/70 max-w-2xl mx-auto">
            Veja como nossos clientes se transformam com o visagismo perfeito
          </p>
        </motion.div>
      </div>

      {/* Carousel Container */}
      <div className="relative w-full overflow-hidden py-6 sm:py-8">
        <motion.div
          className="flex gap-4 sm:gap-6 md:gap-8 px-3 sm:px-4"
          animate={{ x: [0, -2000] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {/* Duplicate items for infinite loop */}
          {[...carouselImages, ...carouselImages].map((item, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 w-48 sm:w-64 md:w-80 h-48 sm:h-64 md:h-80 rounded-2xl overflow-hidden shadow-soft-lg hover:shadow-soft-lg transition-all duration-300 group cursor-pointer bg-white flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.brand}
                className="w-4/5 h-4/5 object-contain group-hover:scale-110 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <p className="text-white font-semibold text-lg">
                    {item.brand}
                  </p>
                  <p className="text-white/80 text-sm">{item.style}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Gradient Overlays for smooth edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <p className="text-foreground/60 text-sm">
          ← Deslize para explorar mais estilos →
        </p>
      </motion.div>
    </section>
  );
}
