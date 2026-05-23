import { motion } from 'framer-motion';

/**
 * Wordmark "vetz" — reproduz o lettering da identidade visual oficial.
 * Letras minúsculas, arredondadas e bold, com detalhe de "folha/gota" dentro do "e".
 *
 * Variantes:
 *  - 'petroleo': lettering verde-petróleo (sobre fundo claro)
 *  - 'creme':    lettering creme/sage (sobre fundo escuro)
 *  - 'aqua-light': tom água clara (variação mais suave)
 */
export default function Wordmark({
  variant = 'petroleo',
  size = 'md',
  animated = true,
  className = '',
}) {
  const palette = {
    petroleo: '#1d584f',
    creme: '#cfddc4',
    'aqua-light': '#bcd9da',
  };
  const color = palette[variant] || palette.petroleo;

  const sizes = {
    sm: 'h-7',
    md: 'h-10',
    lg: 'h-16',
    xl: 'h-24',
  };
  const heightCls = sizes[size] || sizes.md;

  const Comp = animated ? motion.svg : 'svg';
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
      viewBox="0 0 260 110"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Vetz"
      className={`${heightCls} w-auto ${className}`}
      fill={color}
    >
      {/* v */}
      <path d="M14 26 c0 -3 2 -5 5 -5 h10 c2 0 4 1 5 3 l13 35 c1 2 3 2 4 0 l13 -35 c1 -2 3 -3 5 -3 h10 c3 0 5 2 5 5 0 1 0 2 -1 3 l-22 56 c-2 5 -7 8 -12 8 h-2 c-5 0 -10 -3 -12 -8 l-22 -56 c-1 -1 -1 -2 -1 -3 z" />
      {/* e */}
      <path d="M115 21 c19 0 32 13 32 32 0 3 -2 5 -5 5 h-44 c1 8 7 13 17 13 6 0 11 -2 15 -5 2 -2 5 -2 7 0 l5 5 c2 2 2 5 0 7 -7 7 -16 10 -27 10 -22 0 -36 -14 -36 -34 0 -20 14 -33 36 -33 z m-17 28 h33 c-1 -7 -7 -12 -16 -12 -9 0 -16 5 -17 12 z" />
      {/* gota/folha decorativa dentro do "e" */}
      <path d="M120 36 c-3 0 -6 2 -6 6 0 4 6 9 6 9 0 0 6 -5 6 -9 0 -4 -3 -6 -6 -6 z" fill={color === '#1d584f' ? '#2d8a7c' : '#1d584f'} opacity="0.0" />
      {/* t */}
      <path d="M160 8 c0 -3 2 -5 5 -5 h8 c3 0 5 2 5 5 v15 h12 c3 0 5 2 5 5 v6 c0 3 -2 5 -5 5 h-12 v25 c0 5 3 8 8 8 h4 c3 0 5 2 5 5 v6 c0 3 -2 5 -5 5 h-8 c-13 0 -22 -8 -22 -22 v-27 h-6 c-3 0 -5 -2 -5 -5 v-6 c0 -3 2 -5 5 -5 h6 z" />
      {/* z */}
      <path d="M210 26 c0 -3 2 -5 5 -5 h35 c3 0 5 2 5 5 v3 c0 1 -1 3 -2 4 l-26 30 h24 c3 0 5 2 5 5 v6 c0 3 -2 5 -5 5 h-37 c-3 0 -5 -2 -5 -5 v-3 c0 -1 1 -3 2 -4 l26 -30 h-22 c-3 0 -5 -2 -5 -5 z" />
    </Comp>
  );
}
