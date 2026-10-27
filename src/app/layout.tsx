import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Inter_Tight } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Órbita — A conta PJ de quem trabalha por conta própria",
  description:
    "Receba por Pix, separe o imposto automaticamente e veja quanto sobra de verdade. Projeto conceito da VYREX; Órbita é uma marca fictícia.",
};

export const viewport: Viewport = {
  themeColor: "#f3f1ec",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${interTight.variable} ${instrumentSerif.variable} antialiased`}>
      <body className="min-h-svh bg-paper font-sans text-ink">{children}</body>
    </html>
  );
}
