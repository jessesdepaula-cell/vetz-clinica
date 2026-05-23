import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import Wordmark from '../ui/Wordmark.jsx';

export default function BrandBanner() {
  return (
    <section className="relative py-20 lg:py-28 bg-petroleo-800 overflow-hidden">
      {/* Padrão decorativo discreto (patinhas em radial) */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 30%, #cfddc4 1px, transparent 1px), radial-gradient(circle at 80% 70%, #bcd9da 1px, transparent 1px)',
          backgroundSize: '60px 60px, 80px 80px',
        }}
      />
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-aqua-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-creme/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-page relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center text-center"
        >
          <Wordmark variant="creme" size="xl" />

          <div className="mt-8 flex items-center gap-2 text-creme/80 text-sm font-semibold uppercase tracking-[0.3em]">
            <span className="h-px w-10 bg-creme/30" />
            <Heart className="w-4 h-4 text-aqua-300" />
            <span>cuidado que se vê</span>
            <Heart className="w-4 h-4 text-aqua-300" />
            <span className="h-px w-10 bg-creme/30" />
          </div>

          <p className="mt-6 max-w-2xl text-creme/80 text-lg leading-relaxed">
            Mais do que uma clínica veterinária — somos parte da família dos pets
            que cuidamos todos os dias. Da consulta de rotina à emergência, da
            alimentação ao bem-estar.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
