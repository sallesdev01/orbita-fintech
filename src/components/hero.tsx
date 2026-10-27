import type { CSSProperties } from "react";
import { CountUp } from "./count-up";
import { OrbitMark } from "./logo";

// Atraso de animação por elemento (lido pelo CSS em --d).
const delay = (value: string) => ({ "--d": value }) as CSSProperties;

const entries = [
  { who: "Estúdio Lumen", what: "Pix recebido", value: "+ R$ 2.400,00", tone: "text-ink" },
  { who: "Reserva de imposto", what: "6% guardado", value: "− R$ 144,00", tone: "text-orbit" },
  { who: "Clínica Bem-Estar", what: "Pix recebido", value: "+ R$ 1.850,00", tone: "text-ink" },
  { who: "Coworking Vila", what: "Débito", value: "− R$ 390,00", tone: "text-soft" },
];

const avatars = [
  { initials: "MA", bg: "bg-lilac" },
  { initials: "JP", bg: "bg-mint" },
  { initials: "RC", bg: "bg-sun" },
  { initials: "LS", bg: "bg-card" },
];

function Phone() {
  return (
    <div className="relative z-10 w-[280px] rounded-[46px] bg-ink p-2.5 shadow-[0_40px_80px_-20px_rgba(26,36,153,0.45)] md:w-[300px]">
      <div className="overflow-hidden rounded-[38px] bg-paper">
        <div className="flex items-center justify-between px-6 pb-2 pt-4 text-[11px] font-semibold">
          <span>9:41</span>
          <span className="h-5 w-20 rounded-full bg-ink" aria-hidden />
          <span>5G</span>
        </div>
        <div className="px-4 pb-5">
          <div className="flex items-center justify-between py-2">
            <div>
              <p className="text-[11px] text-soft">Bom dia,</p>
              <p className="text-sm font-semibold">Marina Alves</p>
            </div>
            <OrbitMark className="size-7 text-orbit" />
          </div>

          <div className="relative mt-2 overflow-hidden rounded-3xl bg-orbit p-4 text-white">
            <svg viewBox="0 0 200 120" className="absolute -right-10 -top-8 w-52 opacity-30" aria-hidden fill="none">
              <circle cx="120" cy="50" r="40" stroke="white" />
              <circle cx="120" cy="50" r="62" stroke="white" />
              <circle cx="120" cy="50" r="84" stroke="white" />
            </svg>
            <p className="text-[11px] opacity-80">Livre para usar</p>
            <CountUp value={8420.5} className="mt-1 block text-[26px] font-semibold tracking-tight" />
            <div className="mt-3 flex items-center gap-2 text-[11px]">
              <span className="rounded-full bg-mint px-2 py-0.5 font-semibold text-ink">Imposto guardado</span>
              <span className="tabular-nums">R$ 1.137,00</span>
            </div>
          </div>

          <div className="mt-3 grid grid-cols-3 gap-2 text-center text-[10px] font-medium">
            {["Pix", "Nota", "Cartão"].map((label) => (
              <span key={label} className="rounded-2xl bg-card py-2.5 shadow-sm">
                {label}
              </span>
            ))}
          </div>

          <p className="mt-4 text-[11px] font-semibold text-soft">Hoje</p>
          <ul className="mt-2 space-y-2">
            {entries.map((entry, i) => (
              <li
                key={entry.who}
                className="rise flex items-center justify-between rounded-2xl bg-card px-3 py-2.5 shadow-sm"
                style={delay(`${0.6 + i * 0.15}s`)}
              >
                <div>
                  <p className="text-[12px] font-semibold leading-tight">{entry.who}</p>
                  <p className="text-[10px] text-soft">{entry.what}</p>
                </div>
                <span className={`text-[12px] font-semibold tabular-nums ${entry.tone}`}>{entry.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function Orbits() {
  const rings = [
    { r: 200, t: "28s", dot: "fill-orbit" },
    { r: 270, t: "42s", dot: "fill-mint" },
    { r: 340, t: "60s", dot: "fill-sun" },
  ];
  return (
    <svg viewBox="-360 -360 720 720" className="pointer-events-none absolute left-1/2 top-1/2 w-[720px] -translate-x-1/2 -translate-y-1/2" aria-hidden>
      {rings.map((ring, i) => (
        <g key={ring.r}>
          <circle r={ring.r} fill="none" stroke="#cfcabd" strokeWidth="1.5" strokeDasharray={i === 1 ? "4 8" : undefined} />
          <g className="spin-slow origin-center" style={{ animationDuration: ring.t, animationDirection: i % 2 ? "reverse" : "normal" }}>
            <circle cx={ring.r} cy="0" r="9" className={ring.dot} stroke="var(--color-ink)" strokeWidth="2" />
          </g>
        </g>
      ))}
    </svg>
  );
}

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 pb-20 pt-14 md:grid-cols-[1.05fr_1fr] md:px-8 md:pb-28 md:pt-20">
        <div>
          <p className="rise inline-flex items-center gap-2 rounded-full border border-line bg-card px-3 py-1.5 text-sm">
            <span className="rounded-full bg-mint px-2 py-0.5 text-xs font-semibold">Novo</span>
            Reserva automática de imposto
          </p>
          <h1 className="rise mt-7 text-[13vw] font-semibold leading-[0.95] tracking-[-0.04em] md:text-[5.6rem]" style={delay("0.1s")}>
            Você cuida do trabalho. A <span className="serif-italic text-orbit">Órbita</span> cuida do dinheiro.
          </h1>
          <p className="rise mt-7 max-w-lg text-lg leading-relaxed text-soft md:text-xl" style={delay("0.2s")}>
            A conta PJ para autônomos e MEIs: recebe por Pix, guarda o imposto sozinha e mostra quanto sobra de verdade no mês.
          </p>
          <div className="rise mt-9 flex flex-wrap items-center gap-4" style={delay("0.3s")}>
            <a href="#planos" className="rounded-full bg-orbit px-7 py-4 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-orbit-deep">
              Abrir conta grátis
            </a>
            <a href="#como-funciona" className="group font-semibold">
              Ver como funciona <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
          <div className="rise mt-12 flex items-center gap-4" style={delay("0.4s")}>
            <div className="flex -space-x-2.5">
              {avatars.map((a) => (
                <span key={a.initials} className={`flex size-10 items-center justify-center rounded-full border-2 border-paper text-xs font-bold ${a.bg}`}>
                  {a.initials}
                </span>
              ))}
            </div>
            <p className="text-sm text-soft">
              <strong className="text-ink">48 mil autônomos</strong> já colocaram as contas em órbita.
            </p>
          </div>
        </div>

        <div className="relative flex min-h-[640px] items-center justify-center">
          <Orbits />
          <Phone />
          <div className="float absolute left-0 top-16 z-20 rounded-2xl bg-card px-4 py-3 shadow-xl md:-left-4">
            <p className="text-[11px] text-soft">Pix recebido</p>
            <p className="font-semibold tabular-nums">+ R$ 2.400,00</p>
          </div>
          <div className="float absolute bottom-24 right-0 z-20 hidden rounded-2xl bg-mint md:block px-4 py-3 shadow-xl md:-right-2" style={delay("-2s")}>
            <p className="text-[11px]">Nota fiscal</p>
            <p className="font-semibold">Emitida ✓</p>
          </div>
          <div className="float absolute right-2 top-10 z-0 hidden rounded-2xl bg-lilac md:block px-4 py-3 shadow-lg md:right-6" style={delay("-4s")}>
            <p className="text-[11px]">Imposto do mês</p>
            <p className="font-semibold">100% guardado</p>
          </div>
        </div>
      </div>
    </section>
  );
}
