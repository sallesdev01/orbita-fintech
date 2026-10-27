import { Logo, OrbitMark } from "./logo";

const steps = [
  { n: "01", title: "Abra a conta em 8 minutos", text: "CNPJ, documento com foto e uma selfie. Tudo pelo celular." },
  { n: "02", title: "Escolha quanto guardar", text: "A Órbita sugere a porcentagem do seu regime. Você pode ajustar." },
  { n: "03", title: "Receba e esqueça", text: "Cada Pix já entra dividido. No vencimento, o imposto está lá." },
];

const plans = [
  {
    name: "Essencial",
    price: "R$ 0",
    note: "para sempre",
    items: ["Pix ilimitado", "Cartão de débito PJ", "Reserva automática de imposto", "5 notas fiscais por mês"],
    featured: false,
  },
  {
    name: "Órbita+",
    price: "R$ 29",
    note: "por mês",
    items: ["Tudo do Essencial", "Notas fiscais ilimitadas", "Cartão de crédito PJ", "Previsão do mês", "Contador parceiro com desconto"],
    featured: true,
  },
];

const faq = [
  {
    q: "A Órbita substitui o meu contador?",
    a: "Não. Ela organiza o dia a dia (receber, guardar o imposto, emitir nota). Para declarações e planejamento, o Órbita+ dá desconto com contadores parceiros.",
  },
  {
    q: "Posso mudar a porcentagem guardada?",
    a: "Sim. A sugestão vem do seu regime, mas você ajusta quando quiser, inclusive por cliente.",
  },
  {
    q: "O dinheiro da reserva fica parado?",
    a: "Não. A reserva rende automaticamente e você pode resgatar a qualquer momento.",
  },
  {
    q: "Funciona para MEI?",
    a: "Funciona. Para MEI, a Órbita guarda o valor do DAS e avisa quando o faturamento se aproxima do limite anual.",
  },
];

const footerColumns: [string, string[]][] = [
  ["Produto", ["Conta PJ", "Cartão", "Nota fiscal", "Simulador"]],
  ["Empresa", ["Sobre", "Carreiras", "Imprensa"]],
  ["Ajuda", ["Central de ajuda", "Segurança", "Ouvidoria"]],
];

export function Steps() {
  return (
    <section id="como-funciona" className="mx-auto max-w-7xl px-4 py-24 md:px-8 md:py-32">
      <h2 className="reveal max-w-2xl text-5xl font-semibold leading-[1] tracking-[-0.035em] md:text-7xl">
        Três passos. <span className="serif-italic text-orbit">Zero</span> planilha.
      </h2>
      <ol className="mt-16 grid gap-5 md:grid-cols-3">
        {steps.map((step) => (
          <li key={step.n} className="reveal group rounded-[28px] border border-line p-7 transition-colors hover:border-orbit hover:bg-card">
            <span className="serif-italic text-6xl text-orbit">{step.n}</span>
            <h3 className="mt-10 text-2xl font-semibold tracking-tight">{step.title}</h3>
            <p className="mt-2 text-soft">{step.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function Pricing() {
  return (
    <section id="planos" className="border-y border-line bg-card py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="reveal text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-orbit">Planos</p>
          <h2 className="mt-4 text-5xl font-semibold leading-[1] tracking-[-0.035em] md:text-7xl">
            Comece <span className="serif-italic">grátis</span>.
          </h2>
        </div>
        <div className="mx-auto mt-16 grid max-w-4xl gap-5 md:grid-cols-2">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`reveal relative flex flex-col rounded-[32px] p-8 ${plan.featured ? "bg-orbit text-white" : "border border-line bg-paper"}`}
            >
              {plan.featured && (
                <span className="absolute right-6 top-6 rounded-full bg-mint px-3 py-1 text-xs font-bold text-ink">Mais escolhido</span>
              )}
              <h3 className="text-xl font-semibold">{plan.name}</h3>
              <p className="mt-6 text-6xl font-semibold tracking-tight">
                {plan.price}
                <span className={`ml-2 text-base font-normal ${plan.featured ? "text-white/70" : "text-soft"}`}>{plan.note}</span>
              </p>
              <ul className="mt-8 flex-1 space-y-3">
                {plan.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className={`mt-1 flex size-5 shrink-0 items-center justify-center rounded-full text-xs ${plan.featured ? "bg-mint text-ink" : "bg-ink text-paper"}`}>
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="#inicio"
                className={`mt-10 rounded-full py-4 text-center font-semibold transition-colors ${
                  plan.featured ? "bg-white text-orbit hover:bg-mint hover:text-ink" : "bg-ink text-paper hover:bg-orbit"
                }`}
              >
                {plan.featured ? "Testar 30 dias grátis" : "Abrir conta grátis"}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section id="duvidas" className="mx-auto grid max-w-7xl gap-12 px-4 py-24 md:grid-cols-[1fr_1.4fr] md:px-8 md:py-32">
      <h2 className="reveal text-5xl font-semibold leading-[1] tracking-[-0.035em] md:text-6xl">
        Dúvidas <span className="serif-italic text-orbit">frequentes</span>
      </h2>
      <div className="reveal divide-y divide-line border-y border-line">
        {faq.map((item) => (
          <details key={item.q} className="group py-6">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-xl font-semibold tracking-tight [&::-webkit-details-marker]:hidden">
              {item.q}
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-line text-xl transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="mt-4 max-w-xl text-soft">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="px-4 pb-6 md:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[40px] bg-orbit-deep px-6 py-24 text-center text-white md:py-36">
        <svg viewBox="-300 -300 600 600" className="spin-slow pointer-events-none absolute left-1/2 top-1/2 w-[900px] -translate-x-1/2 -translate-y-1/2 opacity-30" aria-hidden fill="none">
          <circle r="140" stroke="white" />
          <circle r="210" stroke="white" strokeDasharray="4 8" />
          <circle r="280" stroke="white" />
          <circle cx="210" r="10" fill="var(--color-mint)" />
          <circle cx="-140" r="7" fill="var(--color-sun)" />
        </svg>
        <OrbitMark className="relative mx-auto size-16 text-white" />
        <h2 className="relative mt-8 text-5xl font-semibold leading-[0.95] tracking-[-0.04em] md:text-8xl">
          Coloque suas contas
          <br />
          em <span className="serif-italic text-mint">órbita</span>.
        </h2>
        <a href="#planos" className="relative mt-12 inline-block rounded-full bg-white px-8 py-4 font-semibold text-orbit-deep transition hover:-translate-y-0.5 hover:bg-mint">
          Abrir conta grátis
        </a>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="mx-auto max-w-7xl px-4 py-14 md:px-8">
      <div className="flex flex-col justify-between gap-10 md:flex-row">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-soft">A conta PJ de quem trabalha por conta própria.</p>
        </div>
        <div className="grid grid-cols-2 gap-10 text-sm md:grid-cols-3">
          {footerColumns.map(([title, items]) => (
            <div key={title}>
              <p className="font-semibold">{title}</p>
              <ul className="mt-3 space-y-2 text-soft">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#inicio" className="hover:text-ink">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-14 flex flex-col gap-2 border-t border-line pt-6 text-sm text-soft md:flex-row md:justify-between">
        <p className="font-semibold text-ink">Projeto conceito da VYREX. Órbita é uma marca fictícia.</p>
        <p>Nenhum produto financeiro é oferecido nesta página. Fontes: Inter Tight e Instrument Serif (OFL).</p>
      </div>
    </footer>
  );
}
