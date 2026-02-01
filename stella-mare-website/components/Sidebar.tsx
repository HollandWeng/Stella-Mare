import React from 'react';
import { categories } from '@/data/products';

interface SidebarProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export default function Sidebar({ selectedCategory, onSelectCategory }: SidebarProps) {
  return (
    <div className="w-full md:w-64 flex-shrink-0 md:mr-8 mb-6 md:mb-0">
      <h3 className="text-lg font-semibold mb-4 px-2">Categories</h3>
      <div className="space-y-1">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onSelectCategory(category.id)}
            className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${
              selectedCategory === category.id
                ? 'bg-gray-100 text-gray-900'
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
}
