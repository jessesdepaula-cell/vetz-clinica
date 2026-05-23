import { useEffect, useState, useCallback } from 'react';
import { loadProducts, saveProducts } from '../data/productsStore.js';

export default function useProducts() {
  const [products, setProducts] = useState(() => loadProducts());

  useEffect(() => {
    const refresh = () => setProducts(loadProducts());
    window.addEventListener('vetz:products-updated', refresh);
    window.addEventListener('storage', refresh);
    return () => {
      window.removeEventListener('vetz:products-updated', refresh);
      window.removeEventListener('storage', refresh);
    };
  }, []);

  const update = useCallback((next) => {
    setProducts(next);
    saveProducts(next);
  }, []);

  return [products, update];
}
