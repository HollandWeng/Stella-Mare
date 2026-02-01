"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage, Language } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';

export default function Navbar() {
  const { language, setLanguage } = useLanguage();
  const t = translations[language].navbar;

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value as Language);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-28">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
               <div className="relative h-24 w-64">
                 <Image
                   src="/images/logo.png"
                   alt="Stella Mare Global Logo"
                   fill
                   className="object-contain object-left"
                   priority
                 />
               </div>
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8 items-center">
            <Link
              href="/"
              className="border-transparent text-gray-900 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium font-serif tracking-wider"
            >
              {t.home}
            </Link>
            <Link
              href="/product"
              className="border-transparent text-gray-900 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium font-serif tracking-wider"
            >
              {t.product}
            </Link>
            <Link
              href="/contact"
              className="border-transparent text-gray-900 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium font-serif tracking-wider"
            >
              {t.contact}
            </Link>
            
            {/* Language Switcher */}
            <div className="ml-4 border-l border-gray-200 pl-4">
              <select
                value={language}
                onChange={handleLanguageChange}
                className="block w-full pl-3 pr-8 py-1 text-base border-gray-300 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm rounded-md bg-transparent"
              >
                <option value="en">English</option>
                <option value="pl">Polski</option>
                <option value="de">Deutsch</option>
                <option value="es">Español</option>
                <option value="ru">Русский</option>
                <option value="it">Italiano</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
