import type { ReactNode } from "react";

const professions = [
  "Designers",
  "Fotógrafas",
  "Devs",
  "Psicólogos",
  "Personal trainers",
  "Arquitetas",
  "Social media",
  "Nutricionistas",
  "Tradutores",
  "Editoras de vídeo",
];

function Card({ className = "", children }: { className?: string; children: ReactNode }) {
  return <div className={`reveal relative overflow-hidden rounded-[28px] border border-line bg-card p-7 ${className}`}>{children}</div>;
}

function SplitBar() {
  return (
    <div className="mt-8 space-y-3" aria-hidden>
      <div className="flex items-center justify-between text-sm">
        <span className="text-soft">Pix de Estúdio Lumen</span>
        <span className="font-semibold tabular-nums">R$ 2.400,00</span>
      </div>
      <div className="flex h-14 overflow-hidden rounded-2xl">
        <div className="flex w-[94%] items-center bg-orbit px-4 text-sm font-semibold text-white">Livre · R$ 2.256</div>
        <div className="flex w-[6%] min-w-24 items-center justify-center bg-mint text-sm font-semibold">6% · R$ 144</div>
      </div>
      <p className="text-sm text-soft">Separado em 0,4 s, antes de você abrir o app.</p>
    </div>
  );
}

function Invoice() {
  return (
    <div className="relative mt-8 rotate-[-3deg] rounded-2xl border border-line bg-paper p-5 shadow-sm transition-transform duration-500 group-hover:rotate-0" aria-hidden>
      <p className="text-xs font-semibold uppercase tracking-widest text-soft">NFS-e nº 0482</p>
      <p className="mt-3 text-sm">Identidade visual · Estúdio Lumen</p>
      <div className="mt-4 flex items-end justify-between">
        <span className="text-xl font-semibold tabular-nums">R$ 2.400,00</span>
        <span className="rotate-[-8deg] rounded-md border-2 border-orbit px-2 py-0.5 text-xs font-bold uppercase text-orbit">Emitida</span>
      </div>
    </div>
  );
}

function PaymentCard() {
  return (
    <div
      className="relative mt-8 aspect-[1.6] w-full max-w-72 overflow-hidden rounded-2xl bg-gradient-to-br from-orbit to-orbit-deep p-5 text-white shadow-xl transition-transform duration-500 group-hover:-rotate-2 group-hover:scale-[1.03]"
      aria-hidden
    >
      <svg viewBox="0 0 200 120" className="absolute -right-12 -top-10 w-60 opacity-25" fill="none">
        <circle cx="120" cy="60" r="30" stroke="white" />
        <circle cx="120" cy="60" r="55" stroke="white" />
        <circle cx="120" cy="60" r="80" stroke="white" />
      </svg>
      <p className="text-lg font-semibold">órbita</p>
      <p className="absolute bottom-5 left-5 font-mono text-sm tracking-widest">•••• 4821</p>
      <span className="absolute bottom-5 right-5 rounded bg-mint px-1.5 text-[10px] font-bold text-ink">PJ</span>
    </div>
  );
}

function Forecast() {
  return (
    <svg viewBox="0 0 300 120" className="mt-8 w-full" aria-hidden fill="none">
      <defs>
        <linearGradient id="area" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="var(--color-orbit)" stopOpacity="0.25" />
          <stop offset="1" stopColor="var(--color-orbit)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M0 95 L40 80 L80 86 L120 60 L160 66 L190 45 L190 120 L0 120 Z" fill="url(#area)" />
      <path d="M0 95 L40 80 L80 86 L120 60 L160 66 L190 45" stroke="var(--color-orbit)" strokeWidth="3" strokeLinejoin="round" />
      <path d="M190 45 L230 38 L270 22 L300 18" stroke="var(--color-orbit)" strokeWidth="3" strokeDasharray="6 7" />
      <circle cx="190" cy="45" r="6" fill="var(--color-mint)" stroke="var(--color-ink)" strokeWidth="2" />
      <text x="196" y="72" className="fill-[var(--color-soft)] text-[11px]">hoje</text>
    </svg>
  );
}

export function Features() {
  return (
    <>
      <div className="overflow-hidden border-y border-line bg-card py-5" aria-hidden>
        <div className="marquee flex w-max">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0">
              {professions.map((p) => (
                <span key={`${copy}-${p}`} className="flex items-center gap-6 px-6 text-2xl text-soft md:text-3xl">
                  <span className="serif-italic">{p}</span>
                  <span className="size-2 rounded-full bg-orbit" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <section id="recursos" className="mx-auto max-w-7xl px-4 py-24 md:px-8 md:py-32">
        <div className="reveal max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-orbit">Recursos</p>
          <h2 className="mt-4 text-5xl font-semibold leading-[1] tracking-[-0.035em] md:text-7xl">
            Tudo que um PJ precisa. <span className="serif-italic text-soft">Nada</span> que ele não usa.
          </h2>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          <Card className="md:col-span-2">
            <h3 className="text-2xl font-semibold tracking-tight">Pix que já chega organizado</h3>
            <p className="mt-2 max-w-md text-soft">Cada entrada é dividida na hora: o que é seu vai para o saldo, o imposto vai para a reserva.</p>
            <SplitBar />
          </Card>
          <Card className="group">
            <h3 className="text-2xl font-semibold tracking-tight">Nota fiscal em dois toques</h3>
            <p className="mt-2 text-soft">Emita a NFS-e pelo celular. Os dados do cliente ficam salvos.</p>
            <Invoice />
          </Card>
          <Card className="group">
            <h3 className="text-2xl font-semibold tracking-tight">Cartão PJ sem anuidade</h3>
            <p className="mt-2 text-soft">Débito e crédito com limite que cresce com o seu faturamento.</p>
            <PaymentCard />
          </Card>
          <Card>
            <h3 className="text-2xl font-semibold tracking-tight">Previsão do mês</h3>
            <p className="mt-2 text-soft">Veja hoje quanto deve sobrar no dia 30, com base no seu histórico.</p>
            <Forecast />
          </Card>
          <Card className="bg-ink text-paper">
            <h3 className="text-2xl font-semibold tracking-tight">Rende enquanto espera</h3>
            <p className="mt-2 text-paper/70">O saldo parado rende automaticamente, sem você mexer em nada.</p>
            <p className="mt-10 text-7xl font-semibold tracking-tight text-mint">
              100<span className="text-3xl">% CDI</span>
            </p>
          </Card>
        </div>
      </section>
    </>
  );
}
