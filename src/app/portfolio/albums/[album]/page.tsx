"use client";

import { useEffect, useState, useRef } from "react";
import { useParams } from "next/navigation";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import FadeInImage from "../../../../components/FadeInImage";
import Link from "next/link";

import React from "react";

/* ================= TYPES ================= */

type Category = "engagements" | "graduations" | "events" | "freelance";

type PortfolioItem = {
  id: number;
  category: Category;
  type: "photo" | "video";
  src: string;
  title: string;
  description?: string;
};

/* ================= PARALLAX ITEM ================= */

function ParallaxItem({
  item,
  instant,
  onClick,
}: {
  item: PortfolioItem;
  instant?: boolean;
  onClick: () => void;
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
          <FadeInImage
            src={item.src}
            instant={instant}
            className="w-full h-[75vh] object-cover"
          />
        ) : (
          <video
            src={item.src}
            className="w-full h-[75vh] object-cover"
            muted
          />
        )}
      </motion.div>
    </motion.div>
  );
}

/* ================= PAGE ================= */

export default function AlbumPage() {
  const params = useParams();
  const album =
    typeof params.album === "string" ? params.album : params.album?.[0];

  const [items, setItems] = useState<PortfolioItem[]>([]);
  const [selected, setSelected] = useState<PortfolioItem | null>(null);

  useEffect(() => {
    if (!album) return;

    fetch("/data/portfolio.json")
      .then((res) => res.json())
      .then((data: PortfolioItem[]) => {
        const filtered = data.filter((i) => i.category === album);
        setItems(filtered);
      })
      .catch(console.error);
  }, [album]);

  const currentIndex = items.findIndex((i) => i.id === selected?.id);

  const showPrev = () => {
    if (currentIndex > 0) setSelected(items[currentIndex - 1]);
  };

  const showNext = () => {
    if (currentIndex < items.length - 1) setSelected(items[currentIndex + 1]);
  };


  return (
    <main className="min-h-screen bg-[#f7f7f5] text-gray-900">
      <div className="max-w-7xl mx-auto pl-12 pr-20 pt-40 pb-40">
          {/* Back Button */}
          {/* Back Button (left) */}
      <Link
        href="/portfolio?tab=albums"
        className="inline-block mb-6 text-xs uppercase tracking-widest opacity-50 hover:opacity-100 transition"
      >
        ← Back to Albums
      </Link>

      {/* Centered Album Title */}
      <div className="w-full text-center mb-12">
        <p className="uppercase tracking-widest text-xs opacity-60">
          {album} Album
        </p>
      </div>


        
        

        {/* Gallery */}
        <div className="flex flex-col items-center gap-32">
          {items.map((item, index) => (
            <ParallaxItem
              key={item.id}
              item={item}
              instant={index === 0}
              onClick={() => setSelected(item)}
            />
          ))}
        </div>

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

                {/* Prev */}
                {currentIndex > 0 && (
                  <button
                    onClick={showPrev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl opacity-70 hover:opacity-100 transition"
                  >
                    ‹
                  </button>
                )}

                {/* Next */}
                {currentIndex < items.length - 1 && (
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
