"use client";
import { motion } from "framer-motion";
import React from "react";

export default function About() {
  return (
    <main className="min-h-screen px-10 pt-40 bg-gray-50 text-black">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/aboutKevin.jpg"
            alt="About"
            className="w-full h-[500px] object-cover rounded-lg"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:-translate-y-4"
        >
          <p className="uppercase tracking-[0.35em] text-[11px] text-[#b8a898] mb-6">
            About
          </p>

          <h1
            className="font-cormorant text-[56px] lg:text-[60px] font-light leading-none tracking-[-0.03em] text-[#1d1d1d] mb-10">
            Kevin Bae
          </h1>

          <div className="w-24 h-px bg-[#cfc3b7] mb-10" />

          <p
            className="font-cormorant italic text-[20px] leading-[1.8] text-[#5e5a56] mb-5">
            My name is Kevin Bae — a photographer and videographer dedicated to
            capturing moments with intention, clarity, and emotion.
          </p>

          <p
            className="font-cormorant italic text-[20px] leading-[1.8] text-[#5e5a56] mb-5">
            My style blends creativity with professionalism, ensuring every client
            feels comfortable, heard, and confident throughout the process.
          </p>

          <p
            className="font-cormorant italic text-[20px] leading-[1.8] text-[#5e5a56] mb-5">
            Whether documenting a milestone, telling a story through film, or creating
            visuals that elevate a brand, I approach every project with care and
            precision.
          </p>

          <p
            className="font-cormorant italic text-[20px] leading-[1.8] text-[#5e5a56] mb-5">
            My goal is simple: to deliver work you can trust, quality you can see, and
            an experience that feels effortless from start to finish.
          </p>
        </motion.div>

      </div>
    </main>
  );
}
