import { motion } from 'framer-motion';
import { MessageCircle, PawPrint, Heart } from 'lucide-react';
import Logo from '../ui/Logo.jsx';
import { whatsappLink } from '../../App.jsx';

export default function FinalCTA() {
  return (
    <section id="contato" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Fundo verde-petróleo com logo creme em destaque */}
      <div className="absolute inset-0 bg-gradient-to-br from-petroleo-800 via-petroleo-700 to-petroleo-900" />
      <div className="absolute inset-0 bg-animated-gradient opacity-10" />

      {/* Elementos 3D flutuantes (2D decorativos) */}
      <motion.div
        animate={{ y: [0, -16, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-16 left-10 w-20 h-20 rounded-3xl bg-aqua-300/30 backdrop-blur-md
                   flex items-center justify-center border border-aqua-300/50"
      >
        <PawPrint className="w-10 h-10 text-creme" />
      </motion.div>

      <motion.div
        animate={{ y: [0, 14, 0], rotate: [0, -6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute top-32 right-16 w-16 h-16 rounded-2xl bg-creme/15 backdrop-blur-md
                   flex items-center justify-center border border-creme/30"
      >
        <Heart className="w-8 h-8 text-creme fill-red-400/60" />
      </motion.div>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-20 left-20 w-14 h-14 rounded-2xl bg-aqua-200/20 backdrop-blur-md
                   border border-aqua-200/40"
      />

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute bottom-32 right-10 w-12 h-12 rounded-full bg-creme/20 backdrop-blur-md
                   border border-creme/30"
      />

      <div className="container-page relative text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="inline-block mb-8"
        >
          <Logo variant="creme" size="lg" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display font-extrabold text-creme
                     text-3xl sm:text-4xl lg:text-5xl max-w-3xl mx-auto leading-tight"
        >
          Pronto para cuidar melhor do seu pet?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-5 text-creme/85 text-lg max-w-xl mx-auto leading-relaxed"
        >
          Agende uma consulta agora e ofereça ao seu melhor amigo o cuidado que ele merece.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-10"
        >
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center gap-3 px-8 py-4 rounded-full
                       bg-creme hover:bg-white text-petroleo-800 font-display font-bold
                       text-base sm:text-lg shadow-glow hover:shadow-glowStrong
                       transition-all duration-300 cursor-pointer overflow-hidden group"
          >
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity
                             bg-gradient-to-r from-transparent via-aqua-200/40 to-transparent
                             -translate-x-full group-hover:translate-x-full duration-1000" />
            <MessageCircle className="w-5 h-5 relative" />
            <span className="relative">Agendar consulta pelo WhatsApp</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
