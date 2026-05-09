import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

/**
 * Header Component - Luxury Transparent Header
 * Becomes opaque on scroll with smooth transition
 */

// Helper function to remove accents and special characters
const sanitizeLink = (text: string): string => {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Remove accents
    .replace(/[^a-z0-9]/g, ""); // Remove special characters
};

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled
          ? "bg-primary/95 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-full px-3 sm:px-4 md:px-8 py-3 sm:py-4 md:py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-accent to-yellow-600 flex items-center justify-center">
              <span className="text-white font-bold text-lg md:text-xl">MO</span>
            </div>
            <span
              className={`font-semibold text-lg md:text-xl transition-colors ${
                isScrolled ? "text-primary-foreground" : "text-primary"
              }`}
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Mangabeira Óptica
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {["Experiência", "Marcas", "Depoimentos", "Contato"].map(
              (item, index) => (
                <motion.a
                  key={index}
                  href={`#${sanitizeLink(item)}`}
                  className={`font-medium transition-colors ${
                    isScrolled
                      ? "text-primary-foreground hover:text-accent"
                      : "text-primary hover:text-accent"
                  }`}
                  whileHover={{ scale: 1.05 }}
                >
                  {item}
                </motion.a>
              )
            )}
          </nav>

          {/* CTA Button */}
          <motion.a
            href="https://wa.me/558399032125"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block btn-luxury text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Falar com Especialista
          </motion.a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X
                className={`w-6 h-6 ${
                  isScrolled ? "text-primary-foreground" : "text-primary"
                }`}
              />
            ) : (
              <Menu
                className={`w-6 h-6 ${
                  isScrolled ? "text-primary-foreground" : "text-primary"
                }`}
              />
            )}
          </button>
        </div>

        {/* Mobile Menu Backdrop */}
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.nav
            className="md:hidden mt-4 space-y-3 pb-4 bg-primary/95 rounded-lg p-4 relative z-50"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {["Experiência", "Marcas", "Depoimentos", "Contato"].map(
              (item, index) => (
                <a
                  key={index}
                  href={`#${sanitizeLink(item)}`}
                  className={`block font-medium transition-colors ${
                    isScrolled
                      ? "text-primary-foreground hover:text-accent"
                      : "text-primary hover:text-accent"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              )
            )}
            <a
              href="https://wa.me/558399032125"
              target="_blank"
              rel="noopener noreferrer"
              className="block btn-luxury text-center text-sm mt-4"
            >
              Falar com Especialista
            </a>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
}
