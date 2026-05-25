"use client";

import "./globals.css";
import Navbar from "../components/Navbar";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Footer from "../components/Footer";
import React from "react";
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-cormorant",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body className={`${cormorant.variable} bg-gray-50 text-black overflow-x-hidden`}>
        <Navbar />

          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen flex flex-col"
          >
            {/* ✅ MAIN CONTENT */}
            <main className="flex-1 bg-white">
              {children}
            </main>

            {/* ✅ FOOTER */}
            <Footer />
          </motion.div>
      </body>
    </html>
  );
}
