# Órbita — landing page conceito

Landing page conceito criada pela [VYREX](https://github.com/sallesdev01/vyrex-site) para a **Órbita**, uma conta PJ fictícia para autônomos e MEIs.

> Projeto conceito. Órbita é uma marca fictícia e nenhum produto financeiro é oferecido.

## O que tem na página

- Hero com celular montado em HTML/CSS, saldo que conta até o valor e anéis de órbita animados.
- Grade de recursos (bento) com ilustrações feitas em código: divisão do Pix, nota fiscal, cartão e previsão do mês.
- Simulador interativo: faturamento e regime (Simples ou MEI), com o imposto guardado e o valor livre.
- Passos, planos, dúvidas (sem JavaScript, com `<details>`) e chamada final.
- Nenhuma imagem externa: toda a arte é SVG e CSS.

## Stack

Next.js 16 (App Router), React 19, Tailwind CSS 4 e TypeScript. Fontes Inter Tight e Instrument Serif (SIL Open Font License) via `next/font`.

## Rodar

```bash
npm install
npm run dev      # http://localhost:3011
```

Produção:

```bash
npm run build
npm run start
```
