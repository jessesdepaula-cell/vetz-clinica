import { motion } from 'framer-motion';

/**
 * Logo Vetz - inspirada nas três variações enviadas.
 * Combina patinha estilizada + tipografia arredondada moderna.
 * Variantes: 'petroleo' (sobre fundo claro), 'creme' (sobre fundo escuro).
 */
export default function Logo({ variant = 'petroleo', size = 'md', animated = true }) {
  const sizes = {
    sm: { mark: 32, text: 'text-lg' },
    md: { mark: 42, text: 'text-2xl' },
    lg: { mark: 64, text: 'text-4xl' },
  };
  const s = sizes[size] || sizes.md;

  const main = variant === 'creme' ? '#f6ecd6' : '#1d584f';
  const accent = variant === 'creme' ? '#83d0dc' : '#2d8a7c';

  const MarkComponent = animated ? motion.svg : 'svg';
  const markProps = animated
    ? {
        initial: { scale: 0.6, opacity: 0, rotate: -10 },
        animate: { scale: 1, opacity: 1, rotate: 0 },
        transition: { type: 'spring', stiffness: 120, damping: 12, delay: 0.1 },
      }
    : {};

  return (
    <div className="flex items-center gap-2.5 select-none">
      <MarkComponent
        {...markProps}
        width={s.mark}
        height={s.mark}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Logo Vetz"
      >
        {/* Coxim central (pata principal) */}
        <path
          d="M22 38 Q22 28 32 28 Q42 28 42 38 L42 44 Q42 49 37 49 L27 49 Q22 49 22 44 Z"
          fill={main}
        />
        {/* Dedinhos */}
        <ellipse cx="20" cy="24" rx="5" ry="6" fill={main} />
        <ellipse cx="32" cy="19" rx="5.5" ry="6.5" fill={main} />
        <ellipse cx="44" cy="24" rx="5" ry="6" fill={main} />
        {/* Detalhe coração no coxim */}
        <path
          d="M32 36 C30 34 27 35 27 37.5 C27 39.5 32 43 32 43 C32 43 37 39.5 37 37.5 C37 35 34 34 32 36 Z"
          fill={accent}
        />
      </MarkComponent>

      <motion.span
        initial={animated ? { opacity: 0, x: -8 } : false}
        animate={animated ? { opacity: 1, x: 0 } : false}
        transition={{ delay: 0.25, duration: 0.5 }}
        className={`font-display font-extrabold ${s.text} tracking-tight`}
        style={{ color: main }}
      >
        Vetz
      </motion.span>
    </div>
  );
}
