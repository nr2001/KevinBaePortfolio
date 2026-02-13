"use client";

import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function ContactClient() {
  const [focused, setFocused] = useState<string | null>(null);

  const searchParams = useSearchParams();
  const selectedPackage = searchParams.get("package");

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Prefill message when arriving from Shop package click
  useEffect(() => {
    if (selectedPackage) {
      setForm((prev) => ({
        ...prev,
        message: `Hi, I'm interested in the ${selectedPackage} package.`,
      }));
    }
  }, [selectedPackage]);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed");

      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen px-10 pt-40 bg-gray-50 text-black">
      <div className="max-w-3xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-semibold mb-12"
        >
          Contact
        </motion.h1>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-10"
        >
          {/* Name */}
          <div className="relative">
            <label
              className={`absolute left-0 transition-all ${
                focused === "name" || form.name
                  ? "-top-5 text-sm text-gray-600"
                  : "top-2 text-base text-gray-400"
              }`}
            >
              Name
            </label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              onFocus={() => setFocused("name")}
              onBlur={() => setFocused(null)}
              type="text"
              required
              className="w-full border-b border-gray-300 bg-transparent py-2 outline-none"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <label
              className={`absolute left-0 transition-all ${
                focused === "email" || form.email
                  ? "-top-5 text-sm text-gray-600"
                  : "top-2 text-base text-gray-400"
              }`}
            >
              Email
            </label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              onFocus={() => setFocused("email")}
              onBlur={() => setFocused(null)}
              type="email"
              required
              className="w-full border-b border-gray-300 bg-transparent py-2 outline-none"
            />
          </div>

          {/* Message */}
          <div className="relative">
            <label
              className={`absolute left-0 transition-all ${
                focused === "message" || form.message
                  ? "-top-5 text-sm text-gray-600"
                  : "top-2 text-base text-gray-400"
              }`}
            >
              Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              onFocus={() => setFocused("message")}
              onBlur={() => setFocused(null)}
              required
              className="w-full border-b border-gray-300 bg-transparent py-2 outline-none h-28 resize-none"
            />
          </div>

          {/* Submit */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            disabled={loading}
            className="px-8 py-3 border border-black text-black hover:bg-black hover:text-white transition disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>

          {success && (
            <p className="text-green-600">Message sent successfully.</p>
          )}
          {error && <p className="text-red-600">{error}</p>}
        </motion.form>
      </div>
    </main>
  );
}
