"use client";

import { useMemo, useState } from "react";
import type { CSSProperties } from "react";
import FilterBar from "@/components/FilterBar";
import GalleryCard from "@/components/GalleryCard";
import {
  galleryFilters,
  galleryItems,
  type GalleryFilter,
} from "@/data/gallery";

export default function GalleryGrid() {
  const [active, setActive] = useState<GalleryFilter>("All");

  const visible = useMemo(
    () =>
      active === "All"
        ? galleryItems
        : galleryItems.filter((item) => item.category === active),
    [active],
  );

  return (
    <div>
      <div className="fade-up" style={{ "--d": "300ms" } as CSSProperties}>
        <FilterBar
          label="Filter photos"
          options={galleryFilters}
          active={active}
          onChange={setActive}
        />
      </div>

      <div
        key={active}
        className="mt-14 columns-1 gap-6 sm:columns-2 lg:columns-3"
      >
        {visible.map((item, i) => (
          <div
            key={item.id}
            className="fade-up mb-6 break-inside-avoid"
            style={{ "--d": `${i * 70}ms` } as CSSProperties}
          >
            <GalleryCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
