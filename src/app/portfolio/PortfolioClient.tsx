"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useSearchParams } from "next/navigation";

import FadeInImage from "@/components/FadeInImage";

type Category = "featured" | "engagements" | "graduations" | "events";

type PortfolioItem = {
  id: number;
  category: Category;
  type: "photo" | "video";
  src: string;
  title: string;
  description?: string;
};

function ParallaxItem({
  item,
  onClick,
}: {
  item: PortfolioItem;
  onClick: () => void;
  instant?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 20%"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-25, 25]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 1 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0 }}
      onClick={onClick}
      className="cursor-zoom-in overflow-hidden rounded-lg w-full max-w-6xl"
    >
      <motion.div style={{ y }}>
        {item.type === "photo" ? (
          <FadeInImage src={item.src} className="w-full h-[75vh] object-cover" />
        ) : (
          <video src={item.src} className="w-full h-[75vh] object-cover" muted />
        )}
      </motion.div>
    </motion.div>
  );
}

const albums = [
  { slug: "engagements", title: "Engagement Shoots", cover: "/gallery/engagements/cover.jpg" },
  { slug: "graduations", title: "Graduation Shoots", cover: "/gallery/graduations/cover.jpg" },
  { slug: "events", title: "Special Events", cover: "/gallery/events/cover.jpg" },
  { slug: "freelance", title: "Freelance", cover: "/gallery/freelance/cover.jpg" },
];

const tabs = [
  { value: "featured", label: "FEATURED" },
  { value: "albums", label: "ALBUMS" },
  { value: "videos", label: "VIDEOS" },
] as const;

type Filter = (typeof tabs)[number]["value"];

export default function PortfolioClient() {
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tab") as Filter | null;

  const [items, setItems] = useState<PortfolioItem[]>([]);
  const [filter, setFilter] = useState<Filter>("featured");
  const [selected, setSelected] = useState<PortfolioItem | null>(null);

  // Sync tab from URL ?tab=albums/videos/featured
  useEffect(() => {
    if (tabParam && ["featured", "albums", "videos"].includes(tabParam)) {
      setFilter(tabParam);
    }
  }, [tabParam]);

  useEffect(() => {
    if (items.length > 0) return;
    fetch("/data/portfolio.json")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch(console.error);
  }, [items.length]);

  const filteredItems =
    filter === "featured"
      ? items.filter((i) => i.category === "featured")
      : filter === "albums"
      ? items.filter((i) => i.type === "photo" && i.category !== "featured")
      : items.filter((i) => i.type === "video");

  // determines what modal prev/next should navigate through
  const navigableItems =
    filter === "albums"
      ? items.filter((i) => i.type === "photo" && i.category !== "featured")
      : filter === "videos"
      ? items.filter((i) => i.type === "video")
      : filteredItems;

  const currentIndex = navigableItems.findIndex((i) => i.id === selected?.id);

  const showPrev = () => {
    if (currentIndex > 0) setSelected(navigableItems[currentIndex - 1]);
  };

  const showNext = () => {
    if (currentIndex < navigableItems.length - 1) {
      setSelected(navigableItems[currentIndex + 1]);
    }
  };

  return (
    <main className="min-h-screen bg-[#f7f7f5] text-gray-900">
      <div className="max-w-7xl mx-auto pl-12 pr-20 pt-30 pb-40">
        <p className="uppercase tracking-widest text-xs mb-6 opacity-60">
          Selected Works
        </p>

        {/* Filter Buttons */}
        <div className="flex gap-10 mb-24 text-sm tracking-widest uppercase">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setFilter(tab.value)}
              className={`transition ${
                filter === tab.value ? "font-medium underline" : "opacity-40"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Featured */}
        {filter === "featured" && (
          <div className="flex flex-col gap-48">
            {filteredItems.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.id}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
                >
                  <div className={`${isEven ? "lg:order-1" : "lg:order-2"} order-1`}>
                    <ParallaxItem item={item} onClick={() => setSelected(item)} />
                  </div>

                  <div className={`${isEven ? "lg:order-2" : "lg:order-1"} order-2 flex flex-col justify-center`}>
                    <p className="uppercase tracking-widest text-xs opacity-50 mb-4">
                      Featured
                    </p>
                    <h2 className="text-3xl font-light tracking-wide mb-6">
                      {item.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed max-w-md">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Albums */}
        {filter === "albums" && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {albums.map((album) => (
              <a
                key={album.slug}
                href={`/portfolio/albums/${album.slug}`}
                className="group block"
              >
                <div className="relative overflow-hidden rounded-lg group">
                  <img
                    src={album.cover}
                    className="w-full h-[65vh] object-cover transition-all duration-700 group-hover:scale-105 group-hover:blur-sm"
                    alt={album.title}
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <h3 className="text-white uppercase tracking-widest text-sm">
                      {album.title}
                    </h3>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}

        {/* Videos */}
        {filter === "videos" && (
          <div className="flex flex-col items-center gap-32">
            {items
              .filter((i) => i.type === "video")
              .map((item) => (
                <ParallaxItem key={item.id} item={item} onClick={() => setSelected(item)} />
              ))}
          </div>
        )}

        {/* Fullscreen Modal */}
        <AnimatePresence>
          {selected && (
            <motion.div
              className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 cursor-zoom-out"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative max-w-6xl w-full px-10 flex flex-col items-center gap-6"
                onClick={(e) => e.stopPropagation()}
              >
                <p className="text-gray-400 text-xs tracking-widest uppercase">
                  Click anywhere to close
                </p>

                {selected.type === "photo" ? (
                  <FadeInImage
                    src={selected.src}
                    className="w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
                  />
                ) : (
                  <video
                    src={selected.src}
                    className="w-full max-h-[80vh] rounded-lg shadow-2xl"
                    controls
                    autoPlay
                  />
                )}

                {currentIndex > 0 && (
                  <button
                    onClick={showPrev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl opacity-70 hover:opacity-100 transition"
                  >
                    ‹
                  </button>
                )}

                {currentIndex < navigableItems.length - 1 && (
                  <button
                    onClick={showNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl opacity-70 hover:opacity-100 transition"
                  >
                    ›
                  </button>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
