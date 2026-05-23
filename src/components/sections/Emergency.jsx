import { motion } from 'framer-motion';
import { Ambulance, Phone, AlertTriangle } from 'lucide-react';
import { whatsappLink } from '../../App.jsx';

const EMERGENCY_MSG = 'Olá! Meu pet precisa de atendimento de emergência. Pode me orientar?';

export default function Emergency() {
  return (
    <section className="relative py-20 lg:py-24 overflow-hidden">
      {/* Fundo contrastante */}
      <div className="absolute inset-0 bg-gradient-to-br from-petroleo-800 via-petroleo-700 to-petroleo-900" />
      <div className="absolute inset-0 opacity-30"
           style={{
             backgroundImage: `radial-gradient(circle at 20% 30%, rgba(217,71,71,0.35) 0%, transparent 50%),
                               radial-gradient(circle at 80% 70%, rgba(131,208,220,0.25) 0%, transparent 50%)`,
           }}
      />

      <div className="container-page relative">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative rounded-[2.5rem] bg-white/5 backdrop-blur-xl
                       border border-creme/20 p-8 sm:p-12 lg:p-16
                       shadow-card overflow-hidden"
          >
            {/* Ícone de emergência flutuante */}
            <motion.div
              animate={{ y: [0, -12, 0], rotate: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-6 right-6 sm:top-10 sm:right-10
                         w-20 h-20 sm:w-28 sm:h-28 rounded-3xl
                         bg-gradient-to-br from-red-500 to-red-600
                         flex items-center justify-center shadow-glowStrong"
            >
              <Ambulance className="w-10 h-10 sm:w-14 sm:h-14 text-creme" strokeWidth={2} />
            </motion.div>

            <div className="max-w-xl">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                              bg-red-500/20 text-red-100 text-xs font-bold uppercase tracking-wider
                              border border-red-400/30">
                <AlertTriangle className="w-3.5 h-3.5" />
                Emergência 24h
              </span>

              <h2 className="mt-5 font-display font-extrabold text-creme
                            text-3xl sm:text-4xl lg:text-5xl leading-tight">
                Seu pet precisa de atendimento{' '}
                <span className="text-red-300">agora</span>?
              </h2>

              <p className="mt-5 text-creme/80 text-base sm:text-lg leading-relaxed">
                Fale com nossa equipe pelo WhatsApp e receba orientação rápida para
                saber o melhor caminho. Cada minuto importa quando se trata de quem você ama.
              </p>

              <motion.a
                href={whatsappLink(EMERGENCY_MSG)}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="mt-8 inline-flex items-center gap-3 px-7 py-4
                           rounded-full bg-red-500 hover:bg-red-400 text-white
                           font-display font-bold text-base sm:text-lg
                           shadow-glow animate-pulse-soft cursor-pointer
                           transition-colors"
              >
                <Phone className="w-5 h-5" />
                Chamar no WhatsApp agora
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
