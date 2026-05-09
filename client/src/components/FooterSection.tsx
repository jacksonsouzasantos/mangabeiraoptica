import { motion } from "framer-motion";
import { MessageCircle, Instagram, MapPin, Clock, Phone } from "lucide-react";

/**
 * FooterSection Component
 * Design Philosophy: Elegância Orgânica
 * - Mapa Google Maps embutido
 * - Informações de contato e horários
 * - Botões flutuantes WhatsApp e Instagram
 * - Links e informações da loja
 */

export default function FooterSection() {
  return (
    <>
      {/* Footer Main */}
      <footer className="bg-primary text-primary-foreground py-16 md:py-20 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10"></div>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
            {/* Column 1: About */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-semibold mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Mangabeira Ótica
              </h3>
              <p className="text-primary-foreground/80 leading-relaxed mb-6">
                Sua visão merece exclusividade. Experiência premium em visagismo especializado, laboratório digital e atendimento humanizado.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com/mangabeiraopticaa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-accent/20 hover:bg-accent/40 flex items-center justify-center transition-colors"
                >
                  <Instagram className="w-5 h-5 text-accent" />
                </a>
                <a
                  href="https://wa.me/558399032125"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-accent/20 hover:bg-accent/40 flex items-center justify-center transition-colors"
                >
                  <MessageCircle className="w-5 h-5 text-accent" />
                </a>
              </div>
            </motion.div>

            {/* Column 2: Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-xl font-semibold mb-6 flex items-center gap-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                <Clock className="w-5 h-5 text-accent" />
                Horário de Funcionamento
              </h4>
              <div className="space-y-3 text-primary-foreground/80">
                <div className="flex justify-between">
                  <span>Segunda a Sexta</span>
                  <span className="font-semibold text-accent">08:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábado</span>
                  <span className="font-semibold text-accent">08:00 - 14:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingo</span>
                  <span className="font-semibold text-accent">Fechado</span>
                </div>
              </div>
            </motion.div>

            {/* Column 3: Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-xl font-semibold mb-6 flex items-center gap-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                <MapPin className="w-5 h-5 text-accent" />
                Localização
              </h4>
              <div className="space-y-3 text-primary-foreground/80">
                <p>
                  <span className="font-semibold">Rua Josefa Taveira, 184</span>
                  <br />
                  Mangabeira 1, Paraíba
                </p>
                <a
                  href="tel:+558399032125"
                  className="flex items-center gap-2 hover:text-accent transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  (83) 99603-2125
                </a>
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="h-px bg-accent/20 my-12"></div>

          {/* Bottom */}
          <motion.div
            className="text-center text-primary-foreground/60 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p>
              &copy; 2026 Mangabeira Ótica. Todos os direitos reservados. | Desenvolvido com
              <span className="text-accent"> ❤️</span> para sua visão.
            </p>
          </motion.div>
        </div>
      </footer>

      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
        {/* WhatsApp Button */}
        <motion.a
          href="https://wa.me/558399032125?text=Olá%20Mangabeira%20Ótica!%20Gostaria%20de%20agendar%20uma%20consultoria%20de%20visagismo."
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center text-white shadow-lg transition-all duration-300 group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <MessageCircle className="w-6 h-6" />
          <span className="absolute right-16 bg-green-500 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            Fale Conosco
          </span>
        </motion.a>

        {/* Instagram Button */}
        <motion.a
          href="https://instagram.com/mangabeiraopticaa"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 flex items-center justify-center text-white shadow-lg transition-all duration-300 group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Instagram className="w-6 h-6" />
          <span className="absolute right-16 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            Instagram
          </span>
        </motion.a>
      </div>
    </>
  );
}
