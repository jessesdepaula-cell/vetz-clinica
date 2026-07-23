import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  ShieldCheck,
  Search,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Loader2,
  RotateCcw,
  History,
  Trash2,
  Info,
} from 'lucide-react';
import {
  formatCPF,
  sanitizeCPF,
  evaluatePreApproval,
  saveToHistory,
  loadHistory,
  clearHistory,
} from '../data/preApprovalEngine.js';

const FAIXA_STYLE = {
  verde: {
    icon: CheckCircle2,
    ring: 'ring-green-300',
    bg: 'bg-green-50',
    border: 'border-green-200',
    text: 'text-green-700',
    dot: 'bg-green-500',
    badge: 'bg-green-100 text-green-800',
  },
  amarelo: {
    icon: AlertTriangle,
    ring: 'ring-amber-300',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    text: 'text-amber-700',
    dot: 'bg-amber-500',
    badge: 'bg-amber-100 text-amber-800',
  },
  vermelho: {
    icon: XCircle,
    ring: 'ring-red-300',
    bg: 'bg-red-50',
    border: 'border-red-200',
    text: 'text-red-700',
    dot: 'bg-red-500',
    badge: 'bg-red-100 text-red-800',
  },
};

const brl = (n) =>
  Number(n || 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

const maskCpfHistory = (cpf) =>
  cpf ? `***.${cpf.slice(3, 6)}.${cpf.slice(6, 9)}-**` : '';

export default function PreApproval() {
  const [cpf, setCpf] = useState('');
  const [nome, setNome] = useState('');
  const [valor, setValor] = useState('');
  const [consent, setConsent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState(() => loadHistory());

  const goHome = () => {
    window.location.hash = '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await evaluatePreApproval({
        cpf,
        nome: nome.trim(),
        valor: valor ? Number(valor) : null,
        consentimento: consent,
      });
      setResult(res);
      setHistory(saveToHistory(res));
    } catch (err) {
      setError(err.message || 'Não foi possível concluir a consulta.');
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setCpf('');
    setNome('');
    setValor('');
    setConsent(false);
    setError('');
    setResult(null);
  };

  const handleClearHistory = () => {
    if (!window.confirm('Limpar o histórico de consultas deste dispositivo?')) return;
    clearHistory();
    setHistory([]);
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
            <span className="font-display font-extrabold text-lg text-petroleo-900">
              Pré-aprovação
            </span>
          </button>
          <span className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold text-petroleo-500">
            <ShieldCheck className="w-4 h-4" />
            Uso interno do vendedor
          </span>
        </div>
      </header>

      <main className="container-page py-10 lg:py-14">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <span className="eyebrow">
              <Search className="w-3.5 h-3.5" />
              Análise de crédito
            </span>
            <h1 className="font-display font-extrabold text-3xl lg:text-4xl text-petroleo-900 mt-3">
              Pré-aprovação por CPF
            </h1>
            <p className="text-petroleo-600 mt-2 max-w-2xl">
              Informe o CPF do cliente para estimar a probabilidade de aprovação
              do financiamento antes de montar a ficha no banco.
            </p>
          </div>

          {/* Aviso de ambiente simulado */}
          <div className="mb-8 flex items-start gap-3 p-4 rounded-2xl bg-aqua-50 border border-aqua-100 text-sm text-petroleo-700">
            <Info className="w-5 h-5 flex-shrink-0 text-petroleo-500 mt-0.5" />
            <p>
              <strong>Ambiente de demonstração.</strong> Os resultados são{' '}
              <strong>simulados</strong> e não representam uma consulta real ao
              Serasa ou a bancos. Ao contratar um provedor de crédito, a consulta
              real é ligada no backend sem alterar esta tela.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Formulário / Resultado */}
            <div>
              <AnimatePresence mode="wait">
                {!result ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    onSubmit={handleSubmit}
                    className="card-3d p-6 sm:p-8 space-y-5"
                  >
                    <Field label="CPF do cliente" required>
                      <input
                        value={formatCPF(cpf)}
                        onChange={(e) => setCpf(sanitizeCPF(e.target.value))}
                        inputMode="numeric"
                        className="input font-mono tracking-wide"
                        placeholder="000.000.000-00"
                        required
                      />
                    </Field>

                    <Field label="Nome do cliente">
                      <input
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        className="input"
                        placeholder="Opcional — ajuda a identificar no histórico"
                      />
                    </Field>

                    <Field label="Valor da moto (R$)">
                      <input
                        value={valor}
                        onChange={(e) => setValor(e.target.value.replace(/\D/g, ''))}
                        inputMode="numeric"
                        className="input"
                        placeholder="Opcional — ex.: 18000"
                      />
                    </Field>

                    <label className="flex items-start gap-3 p-3 rounded-xl bg-petroleo-50/60 border border-petroleo-100 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={consent}
                        onChange={(e) => setConsent(e.target.checked)}
                        className="mt-0.5 w-4 h-4 accent-petroleo-700"
                        required
                      />
                      <span className="text-xs text-petroleo-700 leading-relaxed">
                        Confirmo que o cliente <strong>autorizou</strong> a consulta
                        do seu CPF para fins de análise de crédito, conforme a{' '}
                        <strong>LGPD</strong> (Lei nº 13.709/2018).
                      </span>
                    </label>

                    {error && (
                      <div className="flex items-center gap-2 text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-3 py-2">
                        <XCircle className="w-4 h-4 flex-shrink-0" />
                        {error}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-petroleo-700 hover:bg-petroleo-600 text-creme font-semibold shadow-soft hover:shadow-glow transition-all cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Consultando…
                        </>
                      ) : (
                        <>
                          <Search className="w-4 h-4" />
                          Analisar CPF
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <ResultCard key="result" result={result} onReset={reset} />
                )}
              </AnimatePresence>
            </div>

            {/* Histórico */}
            <div>
              <div className="card-3d p-6 sm:p-8">
                <div className="flex items-center justify-between mb-5">
                  <h2 className="inline-flex items-center gap-2 font-display font-bold text-petroleo-900">
                    <History className="w-5 h-5 text-petroleo-600" />
                    Últimas consultas
                  </h2>
                  {history.length > 0 && (
                    <button
                      onClick={handleClearHistory}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-petroleo-500 hover:text-red-600 transition cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      Limpar
                    </button>
                  )}
                </div>

                {history.length === 0 ? (
                  <p className="text-sm text-petroleo-500 py-8 text-center">
                    Nenhuma consulta ainda. As análises feitas aparecem aqui.
                  </p>
                ) : (
                  <ul className="space-y-2.5">
                    {history.map((h, i) => {
                      const style = FAIXA_STYLE[h.faixa] || FAIXA_STYLE.amarelo;
                      return (
                        <li
                          key={`${h.cpf}-${h.consultadoEm}-${i}`}
                          className="flex items-center gap-3 p-3 rounded-xl bg-white border border-petroleo-100"
                        >
                          <span className={`w-2.5 h-2.5 rounded-full ${style.dot}`} />
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold text-petroleo-900 truncate">
                              {h.nome || 'Cliente sem nome'}
                            </p>
                            <p className="text-xs text-petroleo-500 font-mono">
                              {maskCpfHistory(h.cpf)}
                            </p>
                          </div>
                          <span className={`text-xs font-bold px-2 py-1 rounded-full ${style.badge}`}>
                            {h.score}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function ResultCard({ result, onReset }) {
  const style = FAIXA_STYLE[result.faixa] || FAIXA_STYLE.amarelo;
  const Icon = style.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={`card-3d p-6 sm:p-8 ring-2 ${style.ring}`}
    >
      <div className={`flex items-center gap-3 p-4 rounded-2xl ${style.bg} ${style.border} border mb-6`}>
        <Icon className={`w-8 h-8 flex-shrink-0 ${style.text}`} />
        <div>
          <p className={`font-display font-bold text-lg leading-tight ${style.text}`}>
            {result.titulo}
          </p>
          {result.nome && (
            <p className="text-sm text-petroleo-600">{result.nome}</p>
          )}
        </div>
      </div>

      {/* Score */}
      <div className="flex items-end justify-between mb-2">
        <span className="text-xs font-semibold text-petroleo-500 uppercase tracking-wider">
          Score estimado
        </span>
        <span className="text-3xl font-display font-extrabold text-petroleo-900">
          {result.score}
          <span className="text-base text-petroleo-400 font-semibold"> / 1000</span>
        </span>
      </div>
      <div className="w-full h-2.5 rounded-full bg-petroleo-100 overflow-hidden mb-6">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${(result.score / 1000) * 100}%` }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className={`h-full rounded-full ${style.dot}`}
        />
      </div>

      {/* Recomendação para o vendedor */}
      <div className="mb-6">
        <p className="text-xs font-semibold text-petroleo-500 uppercase tracking-wider mb-1.5">
          Recomendação para o vendedor
        </p>
        <p className="text-sm text-petroleo-800 leading-relaxed">
          {result.recomendacao}
        </p>
      </div>

      {/* Detalhes */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <div className="p-3 rounded-xl bg-petroleo-50/60 border border-petroleo-100">
          <p className="text-xs text-petroleo-500 mb-0.5">Limite estimado</p>
          <p className="font-bold text-petroleo-900">{brl(result.limiteEstimado)}</p>
        </div>
        <div className="p-3 rounded-xl bg-petroleo-50/60 border border-petroleo-100">
          <p className="text-xs text-petroleo-500 mb-0.5">CPF consultado</p>
          <p className="font-mono font-semibold text-petroleo-900">
            {formatCPF(result.cpf)}
          </p>
        </div>
      </div>

      {result.fatores?.length > 0 && (
        <div className="mb-6">
          <p className="text-xs font-semibold text-petroleo-500 uppercase tracking-wider mb-2">
            Fatores considerados
          </p>
          <ul className="space-y-1.5">
            {result.fatores.map((f, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-petroleo-700">
                <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${style.dot}`} />
                {f}
              </li>
            ))}
          </ul>
        </div>
      )}

      {result.simulado && (
        <p className="text-[11px] text-petroleo-400 mb-5 leading-relaxed">
          ⚠️ Resultado simulado ({result.fonte}). Não use para decisão real de
          crédito enquanto o provedor oficial não estiver ligado.
        </p>
      )}

      <button
        onClick={onReset}
        className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white border border-petroleo-200 text-petroleo-700 font-semibold hover:bg-petroleo-50 transition cursor-pointer"
      >
        <RotateCcw className="w-4 h-4" />
        Nova consulta
      </button>
    </motion.div>
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
