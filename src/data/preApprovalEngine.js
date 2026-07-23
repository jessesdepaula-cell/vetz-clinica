/**
 * Motor de pré-aprovação de crédito (pré-análise de CPF).
 *
 * ⚠️  IMPORTANTE — LEIA ANTES DE IR PARA PRODUÇÃO
 * -------------------------------------------------------------------------
 * Hoje este arquivo usa um PROVIDER SIMULADO (mock). Ele NÃO consulta Serasa,
 * Boa Vista, SPC nem banco nenhum — ele gera um resultado determinístico só
 * para o fluxo funcionar de ponta a ponta e o vendedor ver a experiência.
 *
 * Quando você fechar contrato (Banco Honda / financeira / agregador), a
 * consulta real de CPF PRECISA rodar num BACKEND, nunca no navegador:
 *   - A chave/token da API não pode ir para o front (qualquer um veria).
 *   - CPF + score são dados pessoais sensíveis (LGPD). Precisam trafegar por
 *     um servidor seu, com a base legal (consentimento) registrada.
 *
 * Para plugar o provider real, implemente `realProvider` chamando o SEU
 * endpoint de backend e troque a constante `PROVIDER` lá embaixo. A tela e o
 * resto do fluxo não mudam.
 * -------------------------------------------------------------------------
 */

const STORAGE_KEY = 'vetz:preaprovacao:v1';

/* ------------------------------------------------------------------ */
/*  Utilidades de CPF                                                  */
/* ------------------------------------------------------------------ */

/** Remove tudo que não for dígito. */
export function sanitizeCPF(value) {
  return (value || '').replace(/\D/g, '').slice(0, 11);
}

/** Formata como 000.000.000-00 (parcial enquanto o usuário digita). */
export function formatCPF(value) {
  const d = sanitizeCPF(value);
  if (d.length <= 3) return d;
  if (d.length <= 6) return `${d.slice(0, 3)}.${d.slice(3)}`;
  if (d.length <= 9) return `${d.slice(0, 3)}.${d.slice(3, 6)}.${d.slice(6)}`;
  return `${d.slice(0, 3)}.${d.slice(3, 6)}.${d.slice(6, 9)}-${d.slice(9)}`;
}

/** Validação real dos dígitos verificadores do CPF (algoritmo oficial). */
export function isValidCPF(value) {
  const cpf = sanitizeCPF(value);
  if (cpf.length !== 11) return false;
  // Rejeita sequências repetidas (000..., 111..., etc.)
  if (/^(\d)\1{10}$/.test(cpf)) return false;

  const calcDigit = (base) => {
    let sum = 0;
    const factorStart = base.length + 1;
    for (let i = 0; i < base.length; i += 1) {
      sum += Number(base[i]) * (factorStart - i);
    }
    const rest = (sum * 10) % 11;
    return rest === 10 ? 0 : rest;
  };

  const digit1 = calcDigit(cpf.slice(0, 9));
  const digit2 = calcDigit(cpf.slice(0, 10));
  return digit1 === Number(cpf[9]) && digit2 === Number(cpf[10]);
}

/* ------------------------------------------------------------------ */
/*  Classificação do resultado                                        */
/* ------------------------------------------------------------------ */

/**
 * Traduz um score (0–1000) numa faixa de semáforo com orientação
 * para o vendedor. As faixas seguem a lógica usual de mercado de crédito;
 * ajuste os cortes conforme a política da financeira que você usar.
 */
export function classify(score) {
  if (score >= 700) {
    return {
      faixa: 'verde',
      titulo: 'Alta probabilidade de aprovação',
      recomendacao:
        'Pode seguir com confiança. Monte a ficha e envie para o banco — o perfil tende a passar.',
    };
  }
  if (score >= 500) {
    return {
      faixa: 'amarelo',
      titulo: 'Chance moderada — vale tentar',
      recomendacao:
        'Dá para tentar, mas reforce entrada maior ou avalie um avalista. Depende da política do banco no momento.',
    };
  }
  return {
    faixa: 'vermelho',
    titulo: 'Baixa probabilidade de aprovação',
    recomendacao:
      'Perfil arriscado para financiamento tradicional. Ofereça entrada alta, consórcio ou um valor de moto menor.',
  };
}

/* ------------------------------------------------------------------ */
/*  Provider SIMULADO (mock)                                          */
/* ------------------------------------------------------------------ */

/** Hash determinístico simples só para o mock ser estável por CPF. */
function seedFromCPF(cpf) {
  let h = 0;
  for (let i = 0; i < cpf.length; i += 1) {
    h = (h * 31 + Number(cpf[i])) % 100000;
  }
  return h;
}

/**
 * Gera um resultado SIMULADO e determinístico a partir do CPF.
 * Mesmo CPF => mesmo resultado (bom para demonstrar sem parecer aleatório).
 */
async function mockProvider({ cpf, valor }) {
  // Simula latência de rede de uma consulta real.
  await new Promise((r) => setTimeout(r, 700));

  const seed = seedFromCPF(cpf);
  const score = 300 + (seed % 651); // 300–950

  // Fatores fictícios só para preencher a tela de forma realista.
  const fatores = [];
  if (score >= 700) {
    fatores.push('Sem registros de negativação encontrados (simulado)');
    fatores.push('Histórico de pagamentos consistente (simulado)');
  } else if (score >= 500) {
    fatores.push('Sem negativações ativas, mas histórico curto (simulado)');
    fatores.push('Renda presumida compatível com parcelas moderadas (simulado)');
  } else {
    fatores.push('Possíveis pendências financeiras no CPF (simulado)');
    fatores.push('Score abaixo do corte usual das financeiras (simulado)');
  }

  // Limite estimado grosseiro, limitado pelo valor da moto quando informado.
  const limiteBase = Math.round((score / 950) * 45000);
  const limiteEstimado = valor ? Math.min(limiteBase, Number(valor)) : limiteBase;

  return {
    simulado: true,
    fonte: 'MOCK — dados simulados, não é consulta real',
    score,
    limiteEstimado,
    fatores,
  };
}

/* ------------------------------------------------------------------ */
/*  Provider REAL (esqueleto — implementar com seu backend)           */
/* ------------------------------------------------------------------ */

/**
 * Esqueleto do provider real. NÃO chame Serasa/banco direto daqui — chame o
 * SEU backend, que guarda a credencial e faz a consulta com segurança.
 *
 * Exemplo de contrato esperado do backend:
 *   POST /api/pre-aprovacao  { cpf, nome, valor, consentimento }
 *   -> 200 { score, limiteEstimado, fatores, fonte }
 */
// eslint-disable-next-line no-unused-vars
async function realProvider({ cpf, nome, valor, consentimento }) {
  const resp = await fetch('/api/pre-aprovacao', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ cpf, nome, valor, consentimento }),
  });
  if (!resp.ok) throw new Error('Falha na consulta de pré-aprovação');
  const data = await resp.json();
  return { simulado: false, ...data };
}

/* ------------------------------------------------------------------ */
/*  Ponto único de troca do provider                                  */
/* ------------------------------------------------------------------ */

// 👉 Para ligar o real: troque `mockProvider` por `realProvider` aqui.
const PROVIDER = mockProvider;

/**
 * Executa a pré-aprovação. Valida entrada, chama o provider ativo,
 * classifica o resultado e devolve um objeto pronto para a UI.
 */
export async function evaluatePreApproval({ cpf, nome, valor, consentimento }) {
  const cleanCpf = sanitizeCPF(cpf);

  if (!isValidCPF(cleanCpf)) {
    throw new Error('CPF inválido. Confira os números digitados.');
  }
  if (!consentimento) {
    throw new Error('É obrigatório o consentimento do cliente (LGPD) para consultar o CPF.');
  }

  const raw = await PROVIDER({ cpf: cleanCpf, nome, valor, consentimento });
  const classification = classify(raw.score);

  return {
    cpf: cleanCpf,
    nome: nome || '',
    valor: valor || null,
    consultadoEm: new Date().toISOString(),
    ...raw,
    ...classification,
  };
}

/* ------------------------------------------------------------------ */
/*  Histórico de consultas (para o vendedor)                          */
/* ------------------------------------------------------------------ */

export function loadHistory() {
  if (typeof window === 'undefined') return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveToHistory(result) {
  if (typeof window === 'undefined') return loadHistory();
  const entry = {
    cpf: result.cpf,
    nome: result.nome,
    score: result.score,
    faixa: result.faixa,
    consultadoEm: result.consultadoEm,
  };
  const next = [entry, ...loadHistory()].slice(0, 25); // mantém as 25 últimas
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  return next;
}

export function clearHistory() {
  if (typeof window === 'undefined') return;
  window.localStorage.removeItem(STORAGE_KEY);
}
