'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { recipes } from '@/data/recipes';
import { getCountry } from '@/lib/store';
import RecipeCard from '@/components/RecipeCard';

export default function FeaturedRecipes() {
  const [country, setCountry] = useState('CO');

  useEffect(() => {
    setCountry(getCountry());
    const handler = (e: Event) => {
      setCountry((e as CustomEvent).detail);
    };
    window.addEventListener('nutre-country-change', handler);
    return () => window.removeEventListener('nutre-country-change', handler);
  }, []);

  const freeRecipes = recipes.filter(r => r.free);
  // Try to get recipes matching country (by country field or by name containing country name)
  const countryFree = freeRecipes.filter(r => r.country === country);
  // Fill with remaining
  const otherFree = freeRecipes.filter(r => r.country !== country);
  const featured = [...countryFree, ...otherFree].slice(0, 6);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Recetas <span className="text-[#2D8C4E]">destacadas</span></h2>
          <p className="text-gray-500">Prueba estas recetas gratis y descubre lo fácil que es comer bien</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map(recipe => (
            <RecipeCard key={recipe.slug} recipe={recipe} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/recetas" className="inline-block border-2 border-[#2D8C4E] text-[#2D8C4E] px-8 py-3 rounded-full font-semibold hover:bg-green-50 transition">
            Ver todas las recetas →
          </Link>
        </div>
      </div>
    </section>
  );
}
