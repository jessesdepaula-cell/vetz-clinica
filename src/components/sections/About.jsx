import { motion } from 'framer-motion';
import { Award, Users, Clock, Heart } from 'lucide-react';
import PetScene from '../three/PetScene.jsx';

const stats = [
  { icon: Users, value: '+5.000', label: 'Pets atendidos' },
  { icon: Clock, value: '8 anos', label: 'De experiência' },
  { icon: Award, value: '100%', label: 'Equipe certificada' },
  { icon: Heart, value: '24/7', label: 'Suporte WhatsApp' },
];

export default function About() {
  return (
    <section id="sobre" className="relative py-20 lg:py-28 bg-white overflow-hidden">
      {/* Decoração */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-creme-100/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-20 w-72 h-72 bg-aqua-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="container-page relative grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Visual 3D */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative order-2 lg:order-1"
        >
          <div className="relative aspect-square max-w-md mx-auto">
            <div className="absolute inset-6 rounded-[3rem] bg-gradient-to-br from-aqua-100 via-creme-100 to-petroleo-100" />
            <div className="absolute inset-0 drop-shadow-3d">
              <PetScene />
            </div>

            {/* Cards informativos sobrepostos */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-2 left-2 card-3d px-4 py-2.5"
            >
              <div className="flex items-center gap-2">
                <span className="text-2xl">🏥</span>
                <div>
                  <div className="text-[0.65rem] uppercase font-bold text-petroleo-600 tracking-wider">Clínica</div>
                  <div className="text-sm font-display font-bold text-petroleo-800">100% pet friendly</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1.5 }}
              className="absolute -bottom-2 right-0 card-3d px-4 py-2.5"
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-7 h-7 rounded-full bg-petroleo-300 border-2 border-white" />
                  <div className="w-7 h-7 rounded-full bg-aqua-300 border-2 border-white" />
                  <div className="w-7 h-7 rounded-full bg-creme-300 border-2 border-white" />
                </div>
                <div>
                  <div className="text-[0.65rem] uppercase font-bold text-petroleo-600 tracking-wider">Equipe</div>
                  <div className="text-sm font-display font-bold text-petroleo-800">Certificada CRMV</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="order-1 lg:order-2"
        >
          <span className="eyebrow">
            Sobre a Vetz
          </span>
          <h2 className="section-title mt-4">
            Um novo jeito de cuidar de quem você <span className="text-petroleo-600">ama</span>
          </h2>
          <p className="section-subtitle mt-5">
            A Vetz nasceu para transformar o cuidado veterinário em uma experiência mais próxima,
            moderna e acolhedora. Unimos tecnologia, atendimento humanizado e amor pelos animais
            para oferecer saúde, prevenção e bem-estar em cada detalhe.
          </p>

          {/* Stats grid */}
          <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4">
            {stats.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="p-5 rounded-2xl bg-creme-50 border border-petroleo-100/60
                             hover:bg-petroleo-50 hover:border-petroleo-200 transition cursor-default"
                >
                  <Icon className="w-6 h-6 text-petroleo-600 mb-2" strokeWidth={2.2} />
                  <div className="font-display font-extrabold text-2xl text-petroleo-900">
                    {s.value}
                  </div>
                  <div className="text-xs text-petroleo-700 font-medium">{s.label}</div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
