import { motion } from 'framer-motion';
import {
  Stethoscope,
  Syringe,
  TestTube2,
  HeartPulse,
  Ambulance,
  Scissors,
  Bone,
  Sparkles,
  Apple,
  PawPrint,
  ArrowUpRight,
} from 'lucide-react';

const services = [
  {
    icon: Stethoscope,
    title: 'Consulta veterinária',
    text: 'Avaliação clínica completa com profissionais experientes e atenção total ao seu pet.',
    color: 'petroleo',
  },
  {
    icon: Syringe,
    title: 'Vacinação',
    text: 'Protocolo vacinal atualizado para cães e gatos, com carteirinha digital.',
    color: 'aqua',
  },
  {
    icon: TestTube2,
    title: 'Exames laboratoriais',
    text: 'Hemograma, bioquímica, urina, fezes e mais — coleta rápida e resultado seguro.',
    color: 'creme',
  },
  {
    icon: HeartPulse,
    title: 'Check-up preventivo',
    text: 'Identifique sinais cedo e prolongue a qualidade de vida do seu melhor amigo.',
    color: 'petroleo',
  },
  {
    icon: Ambulance,
    title: 'Emergência veterinária',
    text: 'Orientação imediata pelo WhatsApp e atendimento prioritário quando importa.',
    color: 'aqua',
  },
  {
    icon: Scissors,
    title: 'Castração',
    text: 'Procedimento seguro, com pré-operatório, anestesia e acompanhamento pós.',
    color: 'creme',
  },
  {
    icon: Bone,
    title: 'Odontologia pet',
    text: 'Limpeza, profilaxia e cuidado bucal para evitar dores e doenças sistêmicas.',
    color: 'petroleo',
  },
  {
    icon: Sparkles,
    title: 'Dermatologia veterinária',
    text: 'Tratamentos para alergias, coceira, queda de pelo e problemas de pele.',
    color: 'aqua',
  },
  {
    icon: Apple,
    title: 'Nutrição animal',
    text: 'Plano alimentar individual conforme idade, raça, porte e condição clínica.',
    color: 'creme',
  },
  {
    icon: PawPrint,
    title: 'Cães e gatos',
    text: 'Atendimento especializado para as duas espécies, com manejo de baixo estresse.',
    color: 'petroleo',
  },
];

const colorClasses = {
  petroleo: 'bg-petroleo-100 text-petroleo-700',
  aqua: 'bg-aqua-100 text-aqua-700',
  creme: 'bg-creme-100 text-creme-600',
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Services() {
  return (
    <section id="servicos" className="relative py-20 lg:py-28 bg-creme-50 overflow-hidden">
      {/* Decoração */}
      <div className="absolute top-10 right-0 w-72 h-72 bg-aqua-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-creme-200/50 rounded-full blur-3xl pointer-events-none" />

      <div className="container-page relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-14 lg:mb-20"
        >
          <span className="eyebrow">
            <PawPrint className="w-3.5 h-3.5" />
            Serviços
          </span>
          <h2 className="section-title mt-4">
            Tudo que seu pet precisa em <span className="text-petroleo-600">um só lugar</span>
          </h2>
          <p className="section-subtitle mt-5 mx-auto">
            Da rotina à emergência, a Vetz oferece um portfólio completo para que você
            tenha tranquilidade em qualquer fase da vida do seu pet.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 md:gap-6"
        >
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <motion.article
                key={s.title}
                variants={item}
                whileHover={{ y: -6 }}
                className="card-3d p-6 cursor-pointer group"
              >
                {/* Ícone com fundo colorido */}
                <div
                  className={`w-14 h-14 rounded-2xl ${colorClasses[s.color]}
                             flex items-center justify-center mb-5
                             group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500
                             shadow-soft`}
                >
                  <Icon className="w-7 h-7" strokeWidth={2.2} />
                </div>

                <h3 className="font-display font-bold text-lg text-petroleo-900 mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-petroleo-700/80 leading-relaxed">
                  {s.text}
                </p>

                <div className="mt-5 flex items-center gap-1.5 text-petroleo-600 text-sm font-semibold
                               opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Saiba mais
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
