import { motion } from 'framer-motion';
import { ShoppingBag, Tag, MessageCircle } from 'lucide-react';
import useProducts from '../../hooks/useProducts.js';
import { whatsappLink } from '../../App.jsx';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Products() {
  const [products] = useProducts();

  return (
    <section id="produtos" className="relative py-20 lg:py-28 bg-creme-50 overflow-hidden">
      {/* Decoração */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[36rem] h-[36rem] bg-aqua-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="container-page relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-14 lg:mb-20"
        >
          <span className="eyebrow">
            <ShoppingBag className="w-3.5 h-3.5" />
            Produtos
          </span>
          <h2 className="section-title mt-4">
            Tudo para o bem-estar do seu pet,{' '}
            <span className="text-petroleo-600">selecionado pela Vetz</span>
          </h2>
          <p className="section-subtitle mt-5 mx-auto">
            Alimentação, saúde, conforto e lazer. Curadoria veterinária com produtos
            testados e aprovados pelos nossos profissionais.
          </p>
        </motion.div>

        {products.length === 0 ? (
          <div className="text-center py-16 text-petroleo-600">
            Nenhum produto cadastrado no momento.
          </div>
        ) : (
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
          >
            {products.map((p) => (
              <motion.article
                key={p.id}
                variants={item}
                whileHover={{ y: -6 }}
                className="card-3d p-6 cursor-pointer group flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-aqua-100 to-creme-100 flex items-center justify-center text-3xl shadow-soft group-hover:scale-110 transition-transform">
                    {p.image || '🐾'}
                  </div>
                  {p.category && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-petroleo-50 text-petroleo-700 text-xs font-semibold">
                      <Tag className="w-3 h-3" />
                      {p.category}
                    </span>
                  )}
                </div>

                <h3 className="font-display font-bold text-lg text-petroleo-900 mb-2">
                  {p.name}
                </h3>
                <p className="text-sm text-petroleo-700/80 leading-relaxed flex-1">
                  {p.description}
                </p>

                <div className="mt-5 flex items-center justify-between pt-4 border-t border-petroleo-100/60">
                  <span className="font-display font-bold text-petroleo-700 text-lg">
                    {p.price || 'Sob consulta'}
                  </span>
                  <a
                    href={whatsappLink(`Olá! Tenho interesse no produto: ${p.name}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full bg-petroleo-700 hover:bg-petroleo-600 text-creme text-xs font-semibold transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    Pedir
                  </a>
                </div>
              </motion.article>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
