import type { CSSProperties } from "react";

interface PageIntroProps {
  eyebrow: string;
  title: string;
  description: string;
}

export default function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p
        className="fade-up text-sm font-semibold tracking-[0.3em] text-glow"
        style={{ "--d": "0ms" } as CSSProperties}
      >
        {eyebrow}
      </p>
      <h1
        className="fade-up mt-4 font-extrabold leading-[0.9] tracking-tighter text-white"
        style={
          {
            "--d": "100ms",
            fontSize: "clamp(3.25rem, 12vw, 9rem)",
          } as CSSProperties
        }
      >
        {title}
      </h1>
      <p
        className="fade-up mx-auto mt-6 max-w-xl text-base leading-relaxed text-gray-400 sm:text-lg"
        style={{ "--d": "200ms" } as CSSProperties}
      >
        {description}
      </p>
    </div>
  );
}
