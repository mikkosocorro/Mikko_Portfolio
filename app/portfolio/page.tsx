import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import PortfolioGrid from "@/components/PortfolioGrid";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "A collection of projects, skills, and learning journey of Mikko Socorro, BSIT 2nd year student.",
};

export default function PortfolioPage() {
  return (
    <section className="relative overflow-hidden px-6 pb-28 pt-40 lg:px-10">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[480px] w-[900px] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <PageIntro
          eyebrow="MY WORK"
          title="PORTFOLIO"
          description="A collection of my projects, skills, and learning journey as a BSIT 2nd Year Student."
        />
        <div className="mt-14">
          <PortfolioGrid />
        </div>
      </div>
    </section>
  );
}
