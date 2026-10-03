import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { CSSProperties } from "react";

const stats = [
  { value: "BSIT", label: "Program" },
  { value: "2ND YEAR", label: "Student" },
  { value: "100%", label: "Determination" },
];

const delay = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

export default function HomePage() {
  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden pt-20">
      {/* Background visual */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-full lg:w-[62%]">
        <Image
          src="/images/hero.svg"
          alt=""
          fill
          priority
          unoptimized
          sizes="(min-width: 1024px) 62vw, 100vw"
          className="fade-in object-cover object-center opacity-40 lg:opacity-100"
          style={{
            ...delay(200),
            maskImage:
              "linear-gradient(to left, black 55%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to left, black 55%, transparent 100%)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/60" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 py-16 lg:px-10">
        <p
          className="fade-up text-sm font-semibold tracking-[0.3em] text-glow"
          style={delay(0)}
        >
          BSIT 2ND YEAR STUDENT
        </p>

        <h1
          className="mt-6 font-extrabold leading-[0.82] tracking-tighter"
          style={{ fontSize: "clamp(4rem, 15vw, 10.5rem)" }}
        >
          <span className="fade-up block text-white" style={delay(100)}>
            MIKKO
          </span>
          <span
            className="fade-up block bg-gradient-to-r from-glow to-accent bg-clip-text text-transparent"
            style={delay(220)}
          >
            SOCORRO
          </span>
        </h1>

        <p
          className="fade-up mt-10 max-w-md text-lg leading-relaxed text-gray-400 sm:text-xl"
          style={delay(380)}
        >
          Building ideas. Learning today.
          <br />
          Creating a better tomorrow.
        </p>

        <div
          className="fade-up mt-10 flex flex-col gap-4 sm:flex-row"
          style={delay(480)}
        >
          <Link
            href="/portfolio"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-semibold text-white shadow-blue transition-all duration-300 hover:-translate-y-0.5 hover:bg-glow"
          >
            View My Portfolio
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-glow hover:text-glow"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Stats */}
      <div
        className="fade-up relative z-10 border-t border-white/10 bg-ink/60 backdrop-blur-sm"
        style={delay(620)}
      >
        <dl className="mx-auto grid max-w-7xl grid-cols-3 px-6 lg:px-10">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`py-6 sm:py-8 ${i > 0 ? "border-l border-white/10 pl-4 sm:pl-10" : ""}`}
            >
              <dt className="order-2 text-xs text-gray-500 sm:text-sm">
                {stat.label}
              </dt>
              <dd className="text-xl font-extrabold tracking-tight text-white sm:text-4xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
