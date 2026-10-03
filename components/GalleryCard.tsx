import Image from "next/image";
import { Expand } from "lucide-react";
import type { GalleryItem } from "@/data/gallery";

export default function GalleryCard({ item }: { item: GalleryItem }) {
  return (
    <figure className="group relative overflow-hidden rounded-3xl border border-white/10 bg-panel shadow-soft transition-all duration-500 hover:border-glow/50 hover:shadow-blue">
      <Image
        src={item.src}
        alt={item.title}
        width={item.width}
        height={item.height}
        unoptimized
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="h-auto w-full transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 flex items-end justify-between bg-gradient-to-t from-ink/90 via-ink/40 to-ink/10 p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <figcaption>
          <p className="text-xs font-semibold tracking-[0.2em] text-glow">
            {item.category.toUpperCase()}
          </p>
          <p className="mt-1 text-xl font-bold tracking-tight text-white">
            {item.title}
          </p>
        </figcaption>
        <span
          aria-hidden="true"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm"
        >
          <Expand size={16} />
        </span>
      </div>
    </figure>
  );
}
