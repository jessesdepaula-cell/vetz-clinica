# 🐾 Vetz — Clínica Veterinária

Landing page 3D premium, moderna e responsiva para a clínica veterinária **Vetz**.
Stack: **React 18 + Vite + Tailwind CSS + Framer Motion + React Three Fiber (Three.js)**.

---

## ✨ Destaques

- **Cena 3D interativa** com cachorro e gato estilizados, ícones veterinários flutuantes (patinhas, coração, escudo, cápsulas).
- **Identidade visual Vetz**: verde-petróleo profundo, azul-esverdeado claro e creme.
- **Animações suaves** com Framer Motion (parallax, fade-in, hover, scroll reveal).
- **Glassmorphism** sutil nos botões e cards.
- **Responsivo** em mobile, tablet e desktop.
- **Acessibilidade básica**: contraste adequado, `prefers-reduced-motion`, `aria-label` em ícones, textos semânticos.
- **CTAs diretos para WhatsApp** com mensagens pré-preenchidas.
- **SEO básico**: title, meta description, OpenGraph e estrutura semântica.

---

## 🚀 Como rodar localmente

### Pré-requisitos
- **Node.js 18+** (recomendado 20+)
- **npm** ou **pnpm** ou **yarn**

### Passos

```bash
# 1. Entrar na pasta do projeto
cd vetz-clinica

# 2. Instalar dependências
npm install

# 3. Rodar em modo desenvolvimento
npm run dev
# abre em http://localhost:5173

# 4. Build de produção
npm run build

# 5. Preview do build
npm run preview
```

---

## ⚙️ Personalização rápida

### Número do WhatsApp
Edite `src/App.jsx`:

```js
export const WHATSAPP_NUMBER = '5511999999999'; // DDI + DDD + número
export const WHATSAPP_MESSAGE = 'Olá! Quero agendar uma consulta na Vetz.';
```

### Paleta de cores
Edite `tailwind.config.js` (chave `colors`). As cores principais são:
- `petroleo` (verde-petróleo)
- `aqua` (azul-esverdeado)
- `creme` (creme claro)

### Textos e seções
Cada seção é um componente isolado em `src/components/sections/`. Edite o que precisar:
- `Hero.jsx` — primeira dobra
- `Services.jsx` — grade de serviços
- `Differentials.jsx` — por que escolher
- `Experience.jsx` — jornada do tutor (timeline)
- `About.jsx` — sobre a clínica + stats
- `Emergency.jsx` — CTA de emergência
- `Testimonials.jsx` — depoimentos
- `FinalCTA.jsx` — CTA final
- `Footer.jsx` — rodapé

### Logo
O componente `src/components/ui/Logo.jsx` desenha a logo em SVG (patinha + tipografia "Vetz") nas variantes `petroleo` e `creme`. Se você tiver SVGs/PNGs reais da marca, substitua o componente por uma `<img>`.

### Cena 3D
A cena fica em `src/components/three/PetScene.jsx`. Os pets são montados com primitivas (capsule, sphere, torus, cone) inspiradas no universo veterinário. Se quiser usar modelos GLTF reais, importe com `useGLTF` do drei.

---

## 📁 Estrutura

```
vetz-clinica/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── sections/        # Seções da landing
│   │   │   ├── Hero.jsx
│   │   │   ├── Services.jsx
│   │   │   ├── Differentials.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Emergency.jsx
│   │   │   ├── Testimonials.jsx
│   │   │   ├── FinalCTA.jsx
│   │   │   └── Footer.jsx
│   │   ├── three/           # Cenas 3D
│   │   │   ├── PetScene.jsx
│   │   │   └── FloatingBlob.jsx
│   │   ├── ui/
│   │   │   └── Logo.jsx
│   │   └── Navbar.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

---

## 🎨 Paleta de cores

| Token         | Hex       | Uso                        |
|---------------|-----------|----------------------------|
| `petroleo-700`| `#1d584f` | Cor principal (textos, CTAs)|
| `aqua-300`    | `#83d0dc` | Secundária (destaques)     |
| `creme-200`   | `#f6ecd6` | Apoio (sobre fundos escuros)|
| Branco / `creme-50` | `#fff` / `#fdfaf3` | Fundos claros |

---

## 🧩 Bibliotecas

- [React 18](https://react.dev/)
- [Vite 5](https://vitejs.dev/)
- [Tailwind CSS 3](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber)
- [@react-three/drei](https://github.com/pmndrs/drei)
- [Lucide Icons](https://lucide.dev/)

---

## 📝 Licença

Projeto desenvolvido sob medida para a clínica Vetz.
© 2026 Vetz. Todos os direitos reservados.
