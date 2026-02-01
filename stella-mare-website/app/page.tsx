import Image from "next/image";
import Link from "next/link";
import { brandStory } from "@/data/brand";
"use client";

import HeroCarousel from "@/components/HeroCarousel";
import ProductFeatures from "@/components/ProductFeatures";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/data/translations";

export default function Home() {
  const { language } = useLanguage();
  const t = translations[language].brandStory;

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <HeroCarousel />

      {/* Product Features Section */}
      <ProductFeatures />

      {/* Brand Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-12">
            {t.title}
          </h2>
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-light">
            {t.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
