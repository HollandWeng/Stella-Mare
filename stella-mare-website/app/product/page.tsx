"use client";

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { products, categories, Product } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import Sidebar from '@/components/Sidebar';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';

function ProductContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');
  
  const [selectedCategory, setSelectedCategory] = useState(categoryParam || 'all');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  
  const { language } = useLanguage();
  const t = translations[language].product;

  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(p => p.category === selectedCategory));
    }
  }, [selectedCategory]);

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-serif font-bold text-gray-900 mb-12 text-center">{t.title}</h1>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <aside className="w-full md:w-64 flex-shrink-0">
             <div className="bg-gray-50 p-6 rounded-lg">
               <h3 className="font-serif font-semibold text-gray-900 mb-4 uppercase tracking-wider">{t.categories}</h3>
               <ul className="space-y-3">
                 <li>
                   <button
                     onClick={() => setSelectedCategory('all')}
                     className={`text-sm w-full text-left transition-colors ${
                       selectedCategory === 'all' 
                         ? 'text-black font-bold' 
                         : 'text-gray-600 hover:text-black'
                     }`}
                   >
                     {t.all}
                   </button>
                 </li>
                 {categories.map((cat: any) => {
                    // Translate category names dynamically based on ID
                    let catName = cat.name;
                    if (cat.id === 'candle') catName = t.candle;
                    if (cat.id === 'water-lamp') catName = t.waterLamp;
                    if (cat.id === 'wind-lamp') catName = t.windLamp;

                    return (
                     <li key={cat.id}>
                       <button
                         onClick={() => setSelectedCategory(cat.id)}
                         className={`text-sm w-full text-left transition-colors ${
                           selectedCategory === cat.id 
                             ? 'text-black font-bold' 
                             : 'text-gray-600 hover:text-black'
                         }`}
                       >
                         {catName}
                       </button>
                     </li>
                    );
                 })}
               </ul>
             </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 text-gray-500 font-light">
                {t.noProducts}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProductPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white"></div>}>
      <ProductContent />
    </Suspense>
  );
}
