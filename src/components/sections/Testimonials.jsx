import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Mariana Alves',
    pet: 'Tutora da Mel 🐱',
    text: 'Levei minha gatinha para vacinação e fomos muito bem atendidas. A equipe foi cuidadosa e explicou tudo com calma. Saímos confiantes.',
    initial: 'M',
    bg: 'bg-petroleo-700',
  },
  {
    name: 'Rafael Martins',
    pet: 'Tutor do Thor 🐶',
    text: 'Meu cachorro sempre ficava nervoso em clínicas, mas na Vetz foi diferente. Ambiente tranquilo e atendimento excelente. Recomendo demais.',
    initial: 'R',
    bg: 'bg-aqua-500',
  },
  {
    name: 'Camila Rocha',
    pet: 'Tutora da Nina 🐱',
    text: 'Agendei pelo WhatsApp e foi super rápido. Atendimento moderno, bonito e muito humano. A Nina já saiu fazendo amizade com o veterinário!',
    initial: 'C',
    bg: 'bg-creme-500',
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="relative py-20 lg:py-28 bg-creme-50 overflow-hidden">
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem]
                      bg-aqua-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="container-page relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="eyebrow">
            <Star className="w-3.5 h-3.5 fill-petroleo-700" />
            Depoimentos
          </span>
          <h2 className="section-title mt-4">
            Quem confia na Vetz <span className="text-petroleo-600">recomenda</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.article
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: 'easeOut' }}
              whileHover={{ y: -8, rotateX: 2, rotateY: -2 }}
              style={{ transformStyle: 'preserve-3d' }}
              className="relative p-7 rounded-3xl bg-white shadow-soft hover:shadow-card
                         border border-white transition-all duration-500
                         flex flex-col"
            >
              <Quote className="w-10 h-10 text-petroleo-200 mb-4" />

              {/* Estrelas */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, k) => (
                  <Star key={k} className="w-4 h-4 fill-creme-500 text-creme-500" />
                ))}
              </div>

              <p className="text-petroleo-800 leading-relaxed text-base flex-1">
                "{t.text}"
              </p>

              <div className="mt-6 flex items-center gap-3 pt-5 border-t border-petroleo-100">
                <div className={`w-12 h-12 rounded-full ${t.bg} text-creme
                                flex items-center justify-center font-display font-bold text-lg
                                shadow-soft`}>
                  {t.initial}
                </div>
                <div>
                  <div className="font-display font-bold text-petroleo-900">{t.name}</div>
                  <div className="text-xs text-petroleo-600">{t.pet}</div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
