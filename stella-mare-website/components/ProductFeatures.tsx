import React from 'react';
import { Flame, Gem, ShieldCheck, Sparkles, Leaf, MousePointerClick } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';

export default function ProductFeatures() {
  const { language } = useLanguage();
  const t = translations[language].features;

  const icons = [Flame, Gem, ShieldCheck, Sparkles, Leaf, MousePointerClick];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-gray-900">{t.title}</h2>
        </div>
        
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-16 mb-16">
          {t.items.map((feature, index) => {
            const Icon = icons[index];
            return (
              <div key={index} className="flex flex-col items-center text-center w-full md:w-[30%] px-4">
                <div className="w-12 h-12 mb-6 text-gray-800">
                  <Icon strokeWidth={1} className="w-full h-full" />
                </div>
                <h3 className="text-lg font-serif font-semibold text-gray-900 mb-4 uppercase tracking-wider">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed font-light">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="max-w-4xl mx-auto text-center border-t border-gray-200 pt-16">
          <p className="text-lg text-gray-600 leading-relaxed font-light italic">
            {t.summary}
          </p>
        </div>
      </div>
    </section>
  );
}
