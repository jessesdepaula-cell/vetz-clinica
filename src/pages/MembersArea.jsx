import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  Lock,
  LogOut,
  Plus,
  Pencil,
  Trash2,
  Save,
  X,
  RefreshCcw,
  ShieldCheck,
  User,
} from 'lucide-react';
import Wordmark from '../components/ui/Wordmark.jsx';
import useProducts from '../hooks/useProducts.js';
import { newProductId, resetProducts, DEFAULT_PRODUCTS } from '../data/productsStore.js';

const AUTH_KEY = 'vetz:auth:v1';
const DEMO_USER = 'admin@vetz.vet';
const DEMO_PASS = 'vetz123';

const EMPTY_FORM = {
  id: '',
  name: '',
  description: '',
  price: '',
  image: '🐾',
  category: '',
};

const EMOJI_CHOICES = ['🐶', '🐱', '🐾', '🦴', '🎾', '🛏️', '🛡️', '🦷', '💊', '🧴', '🧼', '🍖', '🐦', '🐰'];

function readAuth() {
  try {
    return window.localStorage.getItem(AUTH_KEY) === '1';
  } catch {
    return false;
  }
}

export default function MembersArea() {
  const [authed, setAuthed] = useState(() => readAuth());
  const [products, setProducts] = useProducts();
  const [form, setForm] = useState(EMPTY_FORM);
  const [editing, setEditing] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const email = fd.get('email');
    const pass = fd.get('password');
    if (email === DEMO_USER && pass === DEMO_PASS) {
      window.localStorage.setItem(AUTH_KEY, '1');
      setAuthed(true);
    } else {
      alert('Credenciais inválidas. Use admin@vetz.vet / vetz123');
    }
  };

  const handleLogout = () => {
    window.localStorage.removeItem(AUTH_KEY);
    setAuthed(false);
  };

  const startNew = () => {
    setForm({ ...EMPTY_FORM, id: newProductId() });
    setEditing(false);
    setShowForm(true);
  };

  const startEdit = (product) => {
    setForm({ ...product });
    setEditing(true);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    if (!window.confirm('Tem certeza que deseja remover este produto?')) return;
    setProducts(products.filter((p) => p.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.description.trim()) {
      alert('Informe nome e descrição do produto.');
      return;
    }
    if (editing) {
      setProducts(products.map((p) => (p.id === form.id ? form : p)));
    } else {
      setProducts([...products, form]);
    }
    setShowForm(false);
    setForm(EMPTY_FORM);
  };

  const handleReset = () => {
    if (!window.confirm('Restaurar a lista de produtos para o padrão? Suas alterações serão perdidas.')) return;
    resetProducts();
    setProducts(DEFAULT_PRODUCTS);
  };

  const goHome = () => {
    window.location.hash = '';
  };

  return (
    <div className="min-h-screen bg-creme-50 text-petroleo-900">
      {/* Topbar */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-xl border-b border-petroleo-100">
        <div className="container-page flex items-center justify-between py-4">
          <button
            onClick={goHome}
            className="flex items-center gap-3 cursor-pointer group"
            aria-label="Voltar ao site"
          >
            <ArrowLeft className="w-5 h-5 text-petroleo-700 group-hover:-translate-x-1 transition-transform" />
            <Wordmark size="sm" animated={false} />
            <span className="hidden sm:inline text-petroleo-600 text-sm font-semibold">
              · Área de Membros
            </span>
          </button>

          {authed && (
            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-petroleo-50 hover:bg-petroleo-100 text-petroleo-700 text-sm font-semibold transition cursor-pointer"
            >
              <LogOut className="w-4 h-4" />
              Sair
            </button>
          )}
        </div>
      </header>

      {/* Conteúdo */}
      {!authed ? <LoginView onLogin={handleLogin} /> : (
        <AdminView
          products={products}
          form={form}
          setForm={setForm}
          editing={editing}
          showForm={showForm}
          setShowForm={setShowForm}
          onNew={startNew}
          onEdit={startEdit}
          onDelete={handleDelete}
          onSubmit={handleSubmit}
          onReset={handleReset}
        />
      )}
    </div>
  );
}

function LoginView({ onLogin }) {
  return (
    <main className="container-page py-16 lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md mx-auto card-3d p-8 sm:p-10"
      >
        <div className="text-center mb-8">
          <div className="inline-flex w-14 h-14 rounded-2xl bg-petroleo-100 text-petroleo-700 items-center justify-center mb-4">
            <Lock className="w-7 h-7" />
          </div>
          <h1 className="font-display font-extrabold text-2xl text-petroleo-900">
            Área de Membros
          </h1>
          <p className="mt-2 text-sm text-petroleo-600">
            Acesse para gerenciar os produtos da loja Vetz.
          </p>
        </div>

        <form onSubmit={onLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-petroleo-700 mb-1.5 uppercase tracking-wider">
              E-mail
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-petroleo-400" />
              <input
                name="email"
                type="email"
                required
                defaultValue="admin@vetz.vet"
                className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-petroleo-100 bg-white focus:outline-none focus:ring-2 focus:ring-aqua-300 text-sm"
                placeholder="seu@email.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-petroleo-700 mb-1.5 uppercase tracking-wider">
              Senha
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-petroleo-400" />
              <input
                name="password"
                type="password"
                required
                defaultValue="vetz123"
                className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-petroleo-100 bg-white focus:outline-none focus:ring-2 focus:ring-aqua-300 text-sm"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full mt-2 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-petroleo-700 hover:bg-petroleo-600 text-creme font-semibold shadow-soft hover:shadow-glow transition-all cursor-pointer"
          >
            <ShieldCheck className="w-4 h-4" />
            Entrar
          </button>
        </form>

        <div className="mt-6 p-3 rounded-xl bg-aqua-50 border border-aqua-100 text-xs text-petroleo-700">
          <p className="font-semibold mb-1">Credenciais de demonstração</p>
          <p>E-mail: <code className="font-mono">admin@vetz.vet</code></p>
          <p>Senha: <code className="font-mono">vetz123</code></p>
        </div>
      </motion.div>
    </main>
  );
}

function AdminView({
  products, form, setForm, editing, showForm, setShowForm,
  onNew, onEdit, onDelete, onSubmit, onReset,
}) {
  return (
    <main className="container-page py-10 lg:py-14">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
        <div>
          <span className="eyebrow">
            <ShieldCheck className="w-3.5 h-3.5" />
            Painel de gestão
          </span>
          <h1 className="font-display font-extrabold text-3xl lg:text-4xl text-petroleo-900 mt-3">
            Produtos da Vetz
          </h1>
          <p className="text-petroleo-600 mt-2">
            Adicione, edite ou remova produtos exibidos no site público.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            onClick={onReset}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-petroleo-100 text-petroleo-700 text-sm font-semibold hover:bg-petroleo-50 transition cursor-pointer"
          >
            <RefreshCcw className="w-4 h-4" />
            Restaurar padrão
          </button>
          <button
            onClick={onNew}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-petroleo-700 hover:bg-petroleo-600 text-creme text-sm font-semibold shadow-soft cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            Novo produto
          </button>
        </div>
      </div>

      {/* Lista */}
      {products.length === 0 ? (
        <div className="card-3d p-10 text-center text-petroleo-600">
          Nenhum produto cadastrado. Clique em "Novo produto" para começar.
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((p) => (
            <article key={p.id} className="card-3d p-5 flex flex-col">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-aqua-100 to-creme-100 flex items-center justify-center text-2xl shadow-soft">
                  {p.image || '🐾'}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display font-bold text-petroleo-900 truncate">{p.name}</h3>
                  {p.category && (
                    <span className="inline-block mt-1 text-xs px-2 py-0.5 rounded-full bg-petroleo-50 text-petroleo-700">
                      {p.category}
                    </span>
                  )}
                </div>
              </div>
              <p className="text-sm text-petroleo-700/80 leading-relaxed line-clamp-3 flex-1">
                {p.description}
              </p>
              <div className="mt-4 pt-3 border-t border-petroleo-100/60 flex items-center justify-between">
                <span className="font-semibold text-petroleo-700">
                  {p.price || 'Sob consulta'}
                </span>
                <div className="flex gap-1">
                  <button
                    onClick={() => onEdit(p)}
                    className="p-2 rounded-full hover:bg-petroleo-50 text-petroleo-700 cursor-pointer"
                    aria-label={`Editar ${p.name}`}
                  >
                    <Pencil className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onDelete(p.id)}
                    className="p-2 rounded-full hover:bg-red-50 text-red-600 cursor-pointer"
                    aria-label={`Remover ${p.name}`}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* Modal de edição */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-petroleo-950/50 backdrop-blur-sm flex items-end sm:items-center justify-center p-4"
            onClick={() => setShowForm(false)}
          >
            <motion.form
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 30, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              onSubmit={onSubmit}
              className="w-full max-w-lg bg-white rounded-3xl shadow-card p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-display font-bold text-xl text-petroleo-900">
                  {editing ? 'Editar produto' : 'Novo produto'}
                </h2>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="p-2 rounded-full hover:bg-petroleo-50 text-petroleo-700 cursor-pointer"
                  aria-label="Fechar"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4">
                <Field label="Nome do produto" required>
                  <input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="input"
                    placeholder="Ex.: Ração Premium..."
                    required
                  />
                </Field>

                <Field label="Descrição" required>
                  <textarea
                    value={form.description}
                    onChange={(e) => setForm({ ...form, description: e.target.value })}
                    rows={3}
                    className="input resize-none"
                    placeholder="Detalhes do produto, indicação, composição..."
                    required
                  />
                </Field>

                <div className="grid grid-cols-2 gap-4">
                  <Field label="Preço">
                    <input
                      value={form.price}
                      onChange={(e) => setForm({ ...form, price: e.target.value })}
                      className="input"
                      placeholder="R$ 99,90"
                    />
                  </Field>
                  <Field label="Categoria">
                    <input
                      value={form.category}
                      onChange={(e) => setForm({ ...form, category: e.target.value })}
                      className="input"
                      placeholder="Saúde, Higiene..."
                    />
                  </Field>
                </div>

                <Field label="Ícone (emoji)">
                  <div className="flex flex-wrap gap-2">
                    {EMOJI_CHOICES.map((emo) => (
                      <button
                        key={emo}
                        type="button"
                        onClick={() => setForm({ ...form, image: emo })}
                        className={`w-10 h-10 rounded-xl text-xl flex items-center justify-center transition cursor-pointer ${
                          form.image === emo
                            ? 'bg-petroleo-700 ring-2 ring-aqua-300'
                            : 'bg-creme-100 hover:bg-creme-200'
                        }`}
                      >
                        {emo}
                      </button>
                    ))}
                  </div>
                </Field>
              </div>

              <div className="mt-8 flex gap-3">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="flex-1 px-5 py-2.5 rounded-full bg-white border border-petroleo-100 text-petroleo-700 font-semibold hover:bg-petroleo-50 transition cursor-pointer"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-petroleo-700 hover:bg-petroleo-600 text-creme font-semibold transition cursor-pointer"
                >
                  <Save className="w-4 h-4" />
                  Salvar
                </button>
              </div>
            </motion.form>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

function Field({ label, required, children }) {
  return (
    <label className="block">
      <span className="block text-xs font-semibold text-petroleo-700 mb-1.5 uppercase tracking-wider">
        {label} {required && <span className="text-red-500">*</span>}
      </span>
      {children}
    </label>
  );
}
