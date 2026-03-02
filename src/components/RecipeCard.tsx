'use client';
import Link from 'next/link';
import type { Recipe } from '@/data/recipes';

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  const locked = !recipe.free;
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
              <span className="text-white font-semibold text-sm bg-green-500 px-3 py-1 rounded-full">Desbloquear</span>
            </div>
          )}
          {/* Time badge */}
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded-full text-xs font-medium text-gray-700 flex items-center gap-1">
            ⏱ {recipe.time} min
          </div>
          {recipe.free && (
            <div className="absolute top-3 left-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">
              GRATIS
            </div>
          )}
        </div>
        {/* Content */}
        <div className="p-4">
          <h3 className="font-bold text-gray-900 group-hover:text-green-600 transition">{recipe.name}</h3>
          <p className="text-sm text-gray-500 mt-1 line-clamp-2">{recipe.description}</p>
          <div className="flex items-center gap-3 mt-3 text-xs text-gray-400">
            <span className="bg-gray-100 px-2 py-1 rounded">{recipe.difficulty}</span>
            <span>{recipe.servings} porciones</span>
            {recipe.tags.map(t => (
              <span key={t} className="bg-green-50 text-green-700 px-2 py-1 rounded">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
