import { motion } from 'framer-motion';
import { MessageCircle, MapPin, Stethoscope, ClipboardCheck } from 'lucide-react';
import FloatingBlob from '../three/FloatingBlob.jsx';

const steps = [
  {
    icon: MessageCircle,
    title: 'Agende pelo WhatsApp',
    text: 'Conversa rápida, horários flexíveis e confirmação na hora.',
  },
  {
    icon: MapPin,
    title: 'Chegue com tranquilidade',
    text: 'Recepção acolhedora, sem barulho e com cheiro neutro para reduzir estresse.',
  },
  {
    icon: Stethoscope,
    title: 'Seu pet é atendido com carinho',
    text: 'Manejo de baixo estresse, equipe paciente e sem pressa.',
  },
  {
    icon: ClipboardCheck,
    title: 'Receba orientações e acompanhamento',
    text: 'Plano de cuidados claro, com follow-up pelo WhatsApp.',
  },
];

export default function Experience() {
  return (
    <section
      id="estrutura"
      className="relative py-20 lg:py-32 bg-gradient-petroleo text-creme overflow-hidden"
    >
      {/* Blobs 3D decorativos */}
      <div className="absolute top-0 right-0 w-[28rem] h-[28rem] opacity-40 pointer-events-none">
        <FloatingBlob color="#83d0dc" distort={0.5} speed={1.5} />
      </div>
      <div className="absolute bottom-0 left-0 w-80 h-80 opacity-30 pointer-events-none">
        <FloatingBlob color="#f6ecd6" distort={0.6} speed={2} />
      </div>

      {/* Grid de pontos decorativo */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none"
           style={{
             backgroundImage: 'radial-gradient(circle, #f6ecd6 1px, transparent 1px)',
             backgroundSize: '32px 32px',
           }}
      />

      <div className="container-page relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <span className="eyebrow-dark">
            Experiência Vetz
          </span>
          <h2 className="section-title-light mt-4">
            Uma experiência veterinária mais leve para{' '}
            <span className="text-aqua-300">você e seu pet</span>
          </h2>
          <p className="mt-5 text-creme/80 text-lg leading-relaxed max-w-2xl">
            Sabemos que levar seu pet ao veterinário pode gerar ansiedade. Por isso, criamos uma
            jornada simples, acolhedora e segura — do agendamento ao pós-consulta.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Linha horizontal (desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r
                          from-transparent via-aqua-300/40 to-transparent" />

          <div className="grid lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: i * 0.15, ease: 'easeOut' }}
                  className="relative"
                >
                  {/* Bolinha numerada */}
                  <div className="relative flex justify-center lg:justify-start mb-5">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="relative w-24 h-24 rounded-3xl bg-gradient-to-br from-creme-200 to-creme
                                 flex items-center justify-center shadow-glow
                                 text-petroleo-700"
                    >
                      <Icon className="w-10 h-10" strokeWidth={1.8} />
                      <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full
                                       bg-aqua-400 text-petroleo-900 font-display font-bold text-sm
                                       flex items-center justify-center shadow-soft border-2 border-petroleo-700">
                        {i + 1}
                      </span>
                    </motion.div>
                  </div>

                  <div className="text-center lg:text-left">
                    <h3 className="font-display font-bold text-xl text-creme mb-2">
                      {step.title}
                    </h3>
                    <p className="text-creme/75 text-sm leading-relaxed">
                      {step.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
