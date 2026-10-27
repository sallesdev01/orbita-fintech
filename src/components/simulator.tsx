"use client";

import { useId, useState } from "react";

const brl = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });

// Valores de referência para a simulação (estimativa, não é consultoria tributária).
const MEI_DAS = 81;
const MEI_LIMIT_MONTH = 6750;
const SIMPLES_RATE = 0.06;

type Regime = "mei" | "simples";

export function Simulator() {
  const [revenue, setRevenue] = useState(9000);
  const [regime, setRegime] = useState<Regime>("simples");
  const sliderId = useId();

  const tax = regime === "mei" ? MEI_DAS : revenue * SIMPLES_RATE;
  const free = revenue - tax;
  const share = tax / revenue;
  const overMei = regime === "mei" && revenue > MEI_LIMIT_MONTH;
  const circumference = 2 * Math.PI * 70;

  return (
    <section id="simulador" className="bg-ink py-24 text-paper md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 md:grid-cols-2 md:items-center md:px-8">
        <div className="reveal">
          <p className="text-sm font-semibold uppercase tracking-widest text-mint">Simulador</p>
          <h2 className="mt-4 text-5xl font-semibold leading-[1] tracking-[-0.035em] md:text-7xl">
            Quanto sobra <span className="serif-italic text-lilac">de verdade</span> no fim do mês?
          </h2>
          <p className="mt-6 max-w-md text-lg text-paper/70">
            Mexa no faturamento e veja quanto a Órbita guardaria de imposto para você não levar susto na hora de pagar.
          </p>
        </div>

        <div className="reveal rounded-[32px] bg-paper p-6 text-ink md:p-10">
          <div className="inline-flex rounded-full bg-line p-1" role="radiogroup" aria-label="Regime tributário">
            {(
              [
                ["simples", "Simples Nacional"],
                ["mei", "MEI"],
              ] as const
            ).map(([key, label]) => (
              <button
                key={key}
                type="button"
                role="radio"
                aria-checked={regime === key}
                onClick={() => setRegime(key)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${regime === key ? "bg-ink text-paper" : "text-soft hover:text-ink"}`}
              >
                {label}
              </button>
            ))}
          </div>

          <label htmlFor={sliderId} className="mt-8 block text-sm text-soft">
            Faturamento do mês
          </label>
          <p className="mt-1 text-5xl font-semibold tracking-tight tabular-nums">{brl.format(revenue)}</p>
          <input
            id={sliderId}
            type="range"
            min={2000}
            max={30000}
            step={500}
            value={revenue}
            onChange={(e) => setRevenue(Number(e.target.value))}
            className="mt-5 w-full accent-[var(--color-orbit)]"
          />

          <div className="mt-8 grid grid-cols-[auto_1fr] items-center gap-6">
            <svg viewBox="0 0 160 160" className="size-32 -rotate-90" aria-hidden>
              <circle cx="80" cy="80" r="70" fill="none" stroke="var(--color-orbit)" strokeWidth="18" />
              <circle
                cx="80"
                cy="80"
                r="70"
                fill="none"
                stroke="var(--color-mint)"
                strokeWidth="18"
                strokeDasharray={`${circumference * share} ${circumference}`}
                className="transition-[stroke-dasharray] duration-500"
              />
            </svg>
            <dl className="space-y-4">
              <div>
                <dt className="flex items-center gap-2 text-sm text-soft">
                  <span className="size-3 rounded-full bg-mint" /> Imposto guardado
                </dt>
                <dd className="text-2xl font-semibold tabular-nums">{brl.format(tax)}</dd>
              </div>
              <div>
                <dt className="flex items-center gap-2 text-sm text-soft">
                  <span className="size-3 rounded-full bg-orbit" /> Livre para usar
                </dt>
                <dd className="text-2xl font-semibold tabular-nums text-orbit">{brl.format(free)}</dd>
              </div>
            </dl>
          </div>

          <p className={`mt-6 rounded-2xl px-4 py-3 text-sm ${overMei ? "bg-sun" : "bg-line/60 text-soft"}`} aria-live="polite">
            {overMei
              ? "Acima do limite do MEI (R$ 81 mil por ano). A Órbita avisa antes e ajuda na migração para o Simples."
              : regime === "mei"
                ? "MEI paga um valor fixo por mês (DAS). Simulação com valor aproximado."
                : "Simulação com a alíquota inicial do Simples Nacional para serviços (6%)."}
          </p>
        </div>
      </div>
    </section>
  );
}
