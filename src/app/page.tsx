import { Features } from "@/components/features";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Faq, FinalCta, Footer, Pricing, Steps } from "@/components/sections";
import { Simulator } from "@/components/simulator";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Steps />
        <Simulator />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
