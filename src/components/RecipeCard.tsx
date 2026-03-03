'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import type { Recipe } from '@/data/recipes';
import { getCountryByCode } from '@/data/countries';
import { isPremium } from '@/lib/premium';

const difficultyColors: Record<string, string> = {
  'Fácil': 'bg-green-100 text-green-700',
  'Media': 'bg-yellow-100 text-yellow-700',
  'Avanzada': 'bg-red-100 text-red-700',
};

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  const [premium, setPremium] = useState(false);
  useEffect(() => {
    setPremium(isPremium());
    const handler = () => setPremium(isPremium());
    window.addEventListener('nutre-premium-change', handler);
    return () => window.removeEventListener('nutre-premium-change', handler);
  }, []);
  const locked = !recipe.free && !premium;
  const country = recipe.country ? getCountryByCode(recipe.country) : null;

  return (
    <Link href={`/recetas/${recipe.slug}`} className="group block">
      <div className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white">
        {/* Image */}
        <div className="relative h-48 sm:h-56 overflow-hidden">
          <img
            src={recipe.image}
            alt={recipe.name}
            className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ${locked ? 'blur-[2px]' : ''}`}
          />
          {locked && (
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center">
              <span className="text-4xl mb-2">🔒</span>
              <span className="text-white font-semibold text-sm bg-[#2D8C4E] px-3 py-1 rounded-full">Premium</span>
            </div>
          )}
          {/* Time badge */}
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded-full text-xs font-medium text-gray-700 flex items-center gap-1">
            ⏱ {recipe.time} min
          </div>
          {/* Free/Premium badge */}
          {recipe.free && (
            <div className="absolute top-3 left-3 bg-[#2D8C4E] text-white px-2.5 py-1 rounded-full text-xs font-bold">
              GRATIS
            </div>
          )}
          {/* Country flag */}
          {country && (
            <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur px-2 py-1 rounded-full text-sm">
              {country.flag}
            </div>
          )}
        </div>
        {/* Content */}
        <div className="p-4">
          <h3 className="font-bold text-gray-900 group-hover:text-[#2D8C4E] transition line-clamp-1">{recipe.name}</h3>
          <p className="text-sm text-gray-500 mt-1 line-clamp-2">{recipe.description}</p>
          <div className="flex flex-wrap items-center gap-2 mt-3">
            <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${difficultyColors[recipe.difficulty] || 'bg-gray-100 text-gray-600'}`}>
              {recipe.difficulty}
            </span>
            <span className="text-xs text-gray-400">👤 {recipe.servings}</span>
            {recipe.tags.slice(0, 2).map(t => (
              <span key={t} className="bg-green-50 text-green-700 px-2 py-0.5 rounded-full text-xs">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
