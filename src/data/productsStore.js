const STORAGE_KEY = 'vetz:products:v1';

export const DEFAULT_PRODUCTS = [
  {
    id: 'p1',
    name: 'Ração Premium Cães Adultos',
    description: 'Alimentação completa e balanceada para cães adultos de todas as raças. Rica em proteínas e ômega 3.',
    price: 'R$ 189,90',
    image: '🐶',
    category: 'Alimentação',
  },
  {
    id: 'p2',
    name: 'Ração Premium Gatos',
    description: 'Fórmula especial para gatos com taurina, ômega e fibras naturais para um pelo brilhante.',
    price: 'R$ 164,50',
    image: '🐱',
    category: 'Alimentação',
  },
  {
    id: 'p3',
    name: 'Antipulgas e Carrapatos',
    description: 'Proteção mensal contra pulgas, carrapatos e parasitas externos. Seguro e eficaz.',
    price: 'R$ 89,00',
    image: '🛡️',
    category: 'Saúde',
  },
  {
    id: 'p4',
    name: 'Kit Higiene Bucal Pet',
    description: 'Escova + pasta enzimática sabor frango. Previne tártaro, mau hálito e doenças bucais.',
    price: 'R$ 49,90',
    image: '🦷',
    category: 'Higiene',
  },
  {
    id: 'p5',
    name: 'Brinquedo Interativo',
    description: 'Estimula a mente e reduz o estresse. Recheável com petiscos. Material atóxico.',
    price: 'R$ 38,00',
    image: '🎾',
    category: 'Lazer',
  },
  {
    id: 'p6',
    name: 'Cama Ortopédica Pet',
    description: 'Espuma viscoelástica que conforta articulações de pets idosos ou com mobilidade reduzida.',
    price: 'R$ 249,00',
    image: '🛏️',
    category: 'Conforto',
  },
];

export function loadProducts() {
  if (typeof window === 'undefined') return DEFAULT_PRODUCTS;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_PRODUCTS;
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) && parsed.length ? parsed : DEFAULT_PRODUCTS;
  } catch {
    return DEFAULT_PRODUCTS;
  }
}

export function saveProducts(products) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
  window.dispatchEvent(new CustomEvent('vetz:products-updated'));
}

export function resetProducts() {
  if (typeof window === 'undefined') return;
  window.localStorage.removeItem(STORAGE_KEY);
  window.dispatchEvent(new CustomEvent('vetz:products-updated'));
}

export function newProductId() {
  return 'p_' + Math.random().toString(36).slice(2, 9);
}
