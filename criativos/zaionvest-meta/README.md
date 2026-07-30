# ZaionVest — Criativos Meta Ads

Kit de criativos estáticos para campanha no Meta (Facebook/Instagram), gerado a partir da
identidade oficial do produto (`jessesdepaula-cell/zaionvest`).

## Arquivos exportados (`export/`)

| Arquivo | Formato | Onde usar |
|---|---|---|
| `a-feed-1080x1350.png` | 1080×1350 (4:5) | Imagem única — **criativo principal** de feed |
| `b-story-1080x1920.png` | 1080×1920 (9:16) | Stories / Reels |
| `c-square-1080x1080.png` | 1080×1080 (1:1) | Feed quadrado, Marketplace, Audience Network |
| `d-carrossel-01..05.png` | 5× 1080×1350 | Carrossel (na ordem 01 → 05) |

Todos com o botão **"Veja como funciona."** desenhado na arte, com ondas de clique,
cursor e — no card 05 — seta apontando para o mockup da página de destino.

## Identidade aplicada

Extraída de `zaionvest/tailwind.config.ts` e `zaionvest/marketing/videos/*/build-index.mjs`:

| Token | Valor | Uso no criativo |
|---|---|---|
| `--bg` | `#000000` | fundo |
| `--bg2` | `#0A0D14` | cards / painéis |
| `--bg3` | `#1E2A3A` | bordas de card |
| `--fg` | `#F5F5F5` | texto principal |
| `--muted` | `#8A94A6` | texto secundário |
| `--accent` | `#2563EB` | azul da marca, CTA |
| `--accent2` | `#3B82F6` | destaques de headline |
| `--pos` | `#10B981` | apenas semântica positiva (backtest, robô ativo) |
| `--neg` | `#F43F5E` | apenas semântica negativa (real, robô desligado) |

- **Logo:** `logo.png` oficial (`zaionvest/public/logo.png`), sem redesenho.
- **Tipografia:** Sora 700/800 (títulos), Inter 400–700 (corpo), JetBrains Mono (labels/dados).
- **Fundo:** preto + brilho radial azul + malha 64px — mesma linguagem dos vídeos da marca.

## Copy para o Gerenciador de Anúncios

**Texto principal**

```
Todo robô parece incrível quando mostram apenas o backtest.

A diferença está no que acontece depois.

Na ZaionVest, cada robô é acompanhado, revalidado constantemente e pode ser desligado
automaticamente caso deixe de entregar resultado.

Você escolhe entre centenas de estratégias que passam por um processo contínuo de validação.
```

**Título**

```
O problema não é encontrar um robô. É descobrir QUAL realmente continua funcionando.
```

**Descrição**

```
Centenas de estratégias sob validação contínua.
```

**Chamada para ação:** `Saiba mais` (o botão desenhado na arte diz "Veja como funciona.")

### Divisão do texto no carrossel

| Card | Texto na arte |
|---|---|
| 01 | O problema não é encontrar um robô. É descobrir QUAL realmente continua funcionando. |
| 02 | Todo robô parece incrível quando mostram apenas o backtest. / A diferença está no que acontece depois. |
| 03 | Na ZaionVest, cada robô é acompanhado, revalidado constantemente e pode ser desligado automaticamente caso deixe de entregar resultado. |
| 04 | Você escolhe entre centenas de estratégias que passam por um processo contínuo de validação. |
| 05 | Veja como funciona. |

## Observações

- O texto original recebido escrevia **"Zionvest"**; a marca oficial é **"ZaionVest"** (conforme
  logo e repositório). A grafia correta foi usada em todas as peças.
- Os identificadores de robô (`ZV-27`, `ZV-14`, `ZV-09`) e os horários ("revalidado há 4 min")
  são **ilustrativos**. Se a Meta ou o jurídico exigir, troque por dados reais do monitor ou
  remova os rótulos numéricos.
- Os gráficos backtest × dinheiro real são ilustrações conceituais, não performance real.
  Não representam promessa de retorno.

## Regerar as artes

```bash
cd criativos/zaionvest-meta
NODE_PATH=$(npm root -g) node render.cjs
```

Edite `creative.html` (cada peça é uma `.frame` com `id`) e rode de novo — os PNGs saem em
`export/` no tamanho exato, prontos para upload.
