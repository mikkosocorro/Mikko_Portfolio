import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Image from "next/image";
import {
  BookOpen,
  Facebook,
  Github,
  Hammer,
  Instagram,
  Mail,
  TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Mikko Socorro, a passionate BSIT 2nd year student who loves technology and problem solving.",
};

const socials = [
  { label: "GitHub", href: "https://github.com", Icon: Github },
  { label: "Facebook", href: "https://facebook.com", Icon: Facebook },
  { label: "Instagram", href: "https://instagram.com", Icon: Instagram },
  { label: "Email", href: "mailto:hello@example.com", Icon: Mail },
];

const highlights = [
  {
    title: "Learning",
    text: "Always open to new technologies and ideas.",
    Icon: BookOpen,
  },
  {
    title: "Building",
    text: "Creating projects to improve my skills.",
    Icon: Hammer,
  },
  {
    title: "Growing",
    text: "Aiming for a better future in tech.",
    Icon: TrendingUp,
  },
];

const delay = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

export default function AboutPage() {
  return (
    <section className="relative overflow-hidden px-6 pb-28 pt-36 lg:px-10 lg:pt-40">
      <div className="pointer-events-none absolute -left-40 top-20 h-[520px] w-[520px] rounded-full bg-accent/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Left column */}
          <div>
            <p
              className="fade-up text-sm font-semibold tracking-[0.3em] text-glow"
              style={delay(0)}
            >
              ABOUT ME
            </p>

            <h1
              className="mt-5 font-extrabold leading-[0.85] tracking-tighter"
              style={{ fontSize: "clamp(3.75rem, 11vw, 8.5rem)" }}
            >
              <span className="fade-up block text-white" style={delay(100)}>
                Mikko
              </span>
              <span
                className="fade-up block bg-gradient-to-r from-glow to-accent bg-clip-text text-transparent"
                style={delay(200)}
              >
                Socorro
              </span>
            </h1>

            <p
              className="fade-up mt-8 inline-block rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] text-glow"
              style={delay(300)}
            >
              BSIT 2ND YEAR STUDENT
            </p>

            <p
              className="fade-up mt-6 max-w-lg text-lg leading-relaxed text-gray-400"
              style={delay(380)}
            >
              A passionate IT student who loves technology, problem solving, and
              creating meaningful projects. Always eager to learn new skills and
              take on new challenges.
            </p>

            <ul
              className="fade-up mt-8 flex gap-3"
              style={delay(460)}
              aria-label="Social links"
            >
              {socials.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    aria-label={label}
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:bg-accent hover:text-white hover:shadow-blue"
                  >
                    <Icon size={20} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right column */}
          <div
            className="fade-up mx-auto w-full max-w-md lg:max-w-none"
            style={delay(300)}
          >
            <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-panel shadow-soft transition-all duration-500 hover:border-glow/50 hover:shadow-blue">
              <Image
                src="/images/mikko-socorro-portrait.png"
                alt="Mikko Socorro wearing a black suit and tie"
                width={1101}
                height={1429}
                priority
                className="h-auto w-full transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Highlight cards */}
        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {highlights.map(({ title, text, Icon }, i) => (
            <div
              key={title}
              className="fade-up group rounded-3xl border border-white/10 bg-panel p-8 shadow-soft transition-all duration-500 hover:-translate-y-2 hover:border-glow/50 hover:shadow-blue"
              style={delay(500 + i * 100)}
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/15 text-glow transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                <Icon size={22} />
              </span>
              <h2 className="mt-6 text-2xl font-bold tracking-tight text-white">
                {title}
              </h2>
              <p className="mt-2 leading-relaxed text-gray-400">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
