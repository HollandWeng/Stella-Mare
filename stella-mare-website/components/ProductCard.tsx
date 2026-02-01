"use client";

import React from 'react';
import Image from 'next/image';
import { Product } from '@/data/products';
import { useLanguage } from '@/contexts/LanguageContext';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { language } = useLanguage();

  return (
    <div className="group relative bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200 lg:aspect-none group-hover:opacity-75 relative aspect-square">
         <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain object-center p-2"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-4 flex flex-col justify-between h-full">
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-3">
            <span aria-hidden="true" className="absolute inset-0" />
            {product.name}
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
             {product.descriptions[language] || product.descriptions['en']}
          </p>
        </div>
      </div>
    </div>
  );
}
