import { motion } from 'framer-motion';

/**
 * Logo Vetz — usa a imagem oficial em /public.
 * Mesma marca do Wordmark; mantido como componente separado por compatibilidade.
 *
 * Variantes:
 *  - 'petroleo': sobre fundo claro
 *  - 'creme':    sobre fundo escuro
 */
const SRC = {
  petroleo: '/logo-vetz-dark.png',
  creme: '/logo-vetz-light.png',
};

const SIZES = {
  sm: 'h-12',
  md: 'h-16',
  lg: 'h-32',
  xl: 'h-44',
};

export default function Logo({ variant = 'petroleo', size = 'md', animated = true, className = '' }) {
  const src = SRC[variant] || SRC.petroleo;
  const heightCls = SIZES[size] || SIZES.md;

  const Comp = animated ? motion.img : 'img';
  const animProps = animated
    ? {
        initial: { scale: 0.85, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
        transition: { type: 'spring', stiffness: 120, damping: 14, delay: 0.05 },
      }
    : {};

  return (
    <Comp
      {...animProps}
      src={src}
      alt="Logo Vetz"
      className={`${heightCls} w-auto select-none ${className}`}
      draggable={false}
    />
  );
}
