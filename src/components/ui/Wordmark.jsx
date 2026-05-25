import { motion } from 'framer-motion';

/**
 * Wordmark "vetz" — usa a logo oficial da marca (PNG em /public).
 *
 * Variantes:
 *  - 'petroleo':   logo verde-petróleo (sobre fundo claro)
 *  - 'creme':      logo creme/sage (sobre fundo escuro)
 *  - 'aqua-light': logo azul-água claro (variação suave)
 */
const SRC = {
  petroleo: '/logo-vetz-dark.png',
  creme: '/logo-vetz-light.png',
  'aqua-light': '/logo-vetz-soft.png',
};

const SIZES = {
  sm: 'h-10',
  md: 'h-14',
  lg: 'h-24',
  xl: 'h-40',
};

export default function Wordmark({
  variant = 'petroleo',
  size = 'md',
  animated = true,
  className = '',
}) {
  const src = SRC[variant] || SRC.petroleo;
  const heightCls = SIZES[size] || SIZES.md;

  const Comp = animated ? motion.img : 'img';
  const animProps = animated
    ? {
        initial: { opacity: 0, y: 8 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.6 },
        transition: { duration: 0.6, ease: 'easeOut' },
      }
    : {};

  return (
    <Comp
      {...animProps}
      src={src}
      alt="Vetz"
      className={`${heightCls} w-auto select-none ${className}`}
      draggable={false}
    />
  );
}
