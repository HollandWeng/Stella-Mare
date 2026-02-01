"use client";

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';

export default function HeroCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })]);
  const { language } = useLanguage();
  const t = translations[language].hero;

  const slides = [
    {
      image: '/images/hero/蜡烛.png',
      title: 'STELLA MARE',
      subtitle: t.candle
    },
    {
      image: '/images/hero/水灯.png',
      title: 'STELLA MARE',
      subtitle: t.waterLamp
    },
    {
      image: '/images/hero/风灯.png',
      title: 'STELLA MARE',
      subtitle: t.windLamp
    }
  ];

  return (
    <div className="relative w-full h-[600px] overflow-hidden bg-gray-900" ref={emblaRef}>
      <div className="flex h-full">
        {slides.map((slide, index) => (
          <div className="relative flex-[0_0_100%] min-w-0 h-full" key={index}>
            <div className="absolute inset-0">
               <Image
                 src={slide.image}
                 alt={slide.subtitle}
                 fill
                 className="object-cover"
                 priority={index === 0}
               />
               <div className="absolute inset-0 bg-black/30" /> {/* Overlay for readability */}
            </div>
            
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-4">
              <h2 className="text-3xl md:text-5xl font-serif font-bold tracking-widest mb-4 drop-shadow-lg">
                {slide.title}
              </h2>
              <p className="text-xl md:text-3xl font-serif font-light tracking-wide drop-shadow-md border-t border-white/50 pt-4 mt-2">
                {slide.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
