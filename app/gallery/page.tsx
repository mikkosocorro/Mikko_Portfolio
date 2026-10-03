import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A collection of photos capturing the journey, experiences, and favorite things of Mikko Socorro.",
};

export default function GalleryPage() {
  return (
    <section className="relative overflow-hidden px-6 pb-28 pt-40 lg:px-10">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[480px] w-[900px] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <PageIntro
          eyebrow="MY MOMENTS"
          title="GALLERY"
          description="A collection of photos capturing my journey, experiences, and things I love."
        />
        <div className="mt-14">
          <GalleryGrid />
        </div>
      </div>
    </section>
  );
}
