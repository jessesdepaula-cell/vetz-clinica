/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Paleta Vetz - inspirada na logo
        petroleo: {
          50: '#eef9f7',
          100: '#d3efea',
          200: '#aaded5',
          300: '#75c5b8',
          400: '#46a596',
          500: '#2d8a7c',
          600: '#226e64',
          700: '#1d584f', // verde-petróleo profundo (principal)
          800: '#194741',
          900: '#163b37',
          950: '#0a2220',
        },
        aqua: {
          50: '#f0fafb',
          100: '#d8f1f4',
          200: '#b6e4eb',
          300: '#83d0dc', // azul-esverdeado claro (secundária)
          400: '#54b6c6',
          500: '#379aac',
          600: '#317e91',
          700: '#2e6776',
          800: '#2d5662',
          900: '#294954',
        },
        creme: {
          DEFAULT: '#f6ecd6', // creme claro (apoio)
          50: '#fdfaf3',
          100: '#faf3e3',
          200: '#f6ecd6',
          300: '#eedcaf',
          400: '#e3c581',
          500: '#d8ad5b',
          600: '#c69345',
        },
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 40px -10px rgba(29, 88, 79, 0.15)',
        card: '0 20px 60px -20px rgba(29, 88, 79, 0.25)',
        glow: '0 0 40px rgba(131, 208, 220, 0.4)',
        glowStrong: '0 0 60px rgba(131, 208, 220, 0.6)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite',
        'float-fast': 'float 3s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 2.5s ease-in-out infinite',
        'shine': 'shine 3s linear infinite',
        'gradient-shift': 'gradientShift 12s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        pulseSoft: {
          '0%, 100%': { transform: 'scale(1)', boxShadow: '0 0 0 0 rgba(217, 71, 71, 0.55)' },
          '50%': { transform: 'scale(1.04)', boxShadow: '0 0 0 18px rgba(217, 71, 71, 0)' },
        },
        shine: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backgroundImage: {
        'gradient-petroleo': 'linear-gradient(135deg, #1d584f 0%, #226e64 50%, #2d8a7c 100%)',
        'gradient-aqua': 'linear-gradient(135deg, #83d0dc 0%, #54b6c6 100%)',
        'hero-radial': 'radial-gradient(ellipse at top, #d3efea 0%, #f6ecd6 60%, #ffffff 100%)',
      },
    },
  },
  plugins: [],
};
