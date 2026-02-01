"use client";

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language].footer;
  const tContact = translations[language].contact;
  const tProduct = translations[language].product;

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">{t.company}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {tContact.companyName}<br />
              {tContact.address.map((line, i) => (
                <span key={i}>{line}<br/></span>
              ))}
            </p>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.contact}</h3>
            <div className="text-gray-400 text-sm space-y-1">
              <p className="font-medium text-white">CATHY PAN</p>
              <p>Mob: 0086-18248538625</p>
              <p>Tel: 0086-579-85189878</p>
              <p>Email: stellamareglobal@gmail.com</p>
            </div>
          </div>

          {/* Categories Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.categories}</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/product?category=candle" className="hover:text-white transition-colors">
                  {tProduct.candle}
                </Link>
              </li>
              <li>
                <Link href="/product?category=water-lamp" className="hover:text-white transition-colors">
                  {tProduct.waterLamp}
                </Link>
              </li>
              <li>
                <Link href="/product?category=wind-lamp" className="hover:text-white transition-colors">
                  {tProduct.windLamp}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} {t.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
