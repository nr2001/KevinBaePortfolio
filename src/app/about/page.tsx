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
        >
          <h1 className="text-4xl font-semibold mb-6">About Me</h1>
          <p className="text-lg leading-relaxed mb-4 opacity-90">
          My name is Kevin Bae — a photographer and videographer dedicated to capturing moments with intention, clarity, and emotion. My style blends creativity with professionalism, ensuring every client feels comfortable, heard, and confident in the process.
          </p>
          <p className="text-lg leading-relaxed mb-4 opacity-90">
          Whether it’s documenting a milestone, telling a story through film, or creating visuals that elevate a brand, I approach every project with care and precision. My goal is simple: to deliver work you can trust, quality you can see, and an experience that feels effortless from start to finish.
          </p>
          <p className="text-lg leading-relaxed opacity-90">
          Thank you for considering me to capture your moment — I treat every project like it truly matters, because simply put, it does.”
          </p>
        </motion.div>

      </div>
    </main>
  );
}
