import { motion } from 'framer-motion';
import { Heart, ShieldCheck, Sparkles, MessageCircleHeart } from 'lucide-react';

const items = [
  {
    icon: Heart,
    title: 'Atendimento humanizado',
    text: 'Cada pet é tratado com respeito, paciência e carinho — sem pressa, sem barulho, sem medo.',
  },
  {
    icon: ShieldCheck,
    title: 'Profissionais experientes',
    text: 'Equipe preparada para oferecer cuidado seguro, responsável e sempre atualizado.',
  },
  {
    icon: Sparkles,
    title: 'Ambiente seguro e confortável',
    text: 'Estrutura pensada para reduzir o estresse dos pets e tutores em cada visita.',
  },
  {
    icon: MessageCircleHeart,
    title: 'Agendamento rápido pelo WhatsApp',
    text: 'Marque sua consulta de forma simples, prática e sem fila de espera.',
  },
];

export default function Differentials() {
  return (
    <section className="relative py-20 lg:py-28 bg-white overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-petroleo-200 to-transparent" />

      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-14"
        >
          <span className="eyebrow">
            <Sparkles className="w-3.5 h-3.5" />
            Por que escolher a Vetz
          </span>
          <h2 className="section-title mt-4">
            Tecnologia, carinho e <span className="text-petroleo-600">confiança</span> em cada atendimento
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
                whileHover={{ scale: 1.03 }}
                className="relative p-7 rounded-3xl bg-gradient-to-br from-creme-50 to-white
                           border border-petroleo-100/60 shadow-soft hover:shadow-card
                           transition-all duration-500 cursor-default group"
              >
                {/* Número decorativo */}
                <span className="absolute top-5 right-6 font-display font-extrabold text-5xl
                                 text-petroleo-100 group-hover:text-petroleo-200 transition-colors">
                  0{i + 1}
                </span>

                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-petroleo-700 text-creme
                                  flex items-center justify-center shadow-soft mb-5
                                  group-hover:rotate-6 transition-transform duration-500">
                    <Icon className="w-7 h-7" strokeWidth={2} />
                  </div>
                  <h3 className="font-display font-bold text-lg text-petroleo-900 mb-2">
                    {it.title}
                  </h3>
                  <p className="text-sm text-petroleo-700/80 leading-relaxed">
                    {it.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
