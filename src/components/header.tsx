import { Logo } from "./logo";

const links = [
  { label: "Recursos", href: "#recursos" },
  { label: "Simulador", href: "#simulador" },
  { label: "Planos", href: "#planos" },
  { label: "Dúvidas", href: "#duvidas" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-paper/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8">
        <a href="#inicio" aria-label="Órbita, início">
          <Logo />
        </a>
        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex gap-8 text-[15px] text-soft">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-ink">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#planos" className="hidden text-[15px] font-medium md:inline">
            Entrar
          </a>
          <a
            href="#planos"
            className="rounded-full bg-ink px-4 py-2.5 text-sm font-semibold text-paper transition-colors hover:bg-orbit md:px-5"
          >
            Abrir conta
          </a>
        </div>
      </div>
    </header>
  );
}
