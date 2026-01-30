"use client";

import React from "react";
import styles from "./shop.module.css";
import { useRouter } from "next/navigation";


export default function ShopPage() {
    const router = useRouter();
  const packages = [
    {
      name: "Essential",
      price: "$XXX",
      badge: null,
      features: [
        "1-hour session",
        "1 location",
        "20 edited photos",
        "3–5 day turnaround",
        "Online gallery",
      ],
    },
    {
      name: "Standard",
      price: "$XXX",
      badge: "Most Popular",
      features: [
        "2-hour session",
        "Up to 2 locations",
        "40–60 edited photos",
        "15–30 sec highlight reel",
        "Priority editing (2–4 days)",
        "Online gallery",
      ],
    },
    {
      name: "Premium",
      price: "$XXX",
      badge: null,
      features: [
        "4-hour session",
        "Multiple locations",
        "80+ edited photos",
        "1–2 min cinematic video",
        "Same-week turnaround",
        "Full-res + social-optimized files",
      ],
    },
  ];

  return (
    <section className={styles.shopSection}>
      <h1 className={styles.shopTitle}>Packages</h1>
      <p className={styles.shopSubtitle}>
        Simple pricing. No surprises.
      </p>

      <div className={styles.pricingGrid}>
        {packages.map((pkg) => (
          <div
            key={pkg.name}
            className={`${styles.card} ${
              pkg.badge ? styles.featured : ""
            }`}
          >
            {pkg.badge && (
              <span className={styles.badge}>{pkg.badge}</span>
            )}

            <h2 className={styles.packageTitle}>{pkg.name}</h2>
            <p className={styles.price}>{pkg.price}</p>

            <ul className={styles.featureList}>
            {pkg.features.map((feature) => (
                <li key={feature} className={styles.featureItem}>
                {feature}
                </li>
            ))}
            </ul>

            <button
              className={styles.cta}
              onClick={() => router.push(`/contact?package=${encodeURIComponent(pkg.name)}`)}
            >
              Book Now
            </button>

          </div>
        ))}
      </div>
    </section>
  );
}
