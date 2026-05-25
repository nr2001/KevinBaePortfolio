import { Suspense } from "react";
import ContactClient from "./ContactClient";
import React from "react";

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50" />}>
      <ContactClient />
    </Suspense>
  );
}
