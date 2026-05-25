import { Suspense } from "react";
import PortfolioClient from "./PortfolioClient";
import React from "react";

export default function PortfolioPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#f7f7f5]" />}>
      <PortfolioClient />
    </Suspense>
  );
}
