'use client';
import { useState } from 'react';
import { recipes } from '@/data/recipes';
import RecipeCard from '@/components/RecipeCard';

const filters = ['Todas', 'vegetariana', 'sin gluten', 'rápida'];

export default function RecetasPage() {
  const [activeFilter, setActiveFilter] = useState('Todas');

  const filtered = activeFilter === 'Todas' ? recipes : recipes.filter(r => r.tags.includes(activeFilter));

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Nuestras <span className="text-green-500">Recetas</span></h1>
        <p className="text-gray-500 max-w-lg mx-auto">5 recetas gratis + 15 premium. Más de 50,000 personas ya las preparan.</p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${activeFilter === f ? 'bg-green-500 text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
          >
            {f === 'Todas' ? '🍽 Todas' : f === 'vegetariana' ? '🌿 Vegetariana' : f === 'sin gluten' ? '🚫 Sin Gluten' : '⚡ Rápida <15min'}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((recipe) => (
          <RecipeCard key={recipe.slug} recipe={recipe} />
        ))}
      </div>

      {/* Unlock CTA */}
      <div className="mt-16 text-center bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-8 md:p-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">🔒 Desbloquea todas las recetas</h2>
        <p className="text-gray-600 mb-6 max-w-md mx-auto">Accede a más de 20 ensaladas premium con ingredientes adaptados a tu país.</p>
        <a href="https://pay.hotmart.com/C103964546B" target="_blank" rel="noopener" className="inline-block bg-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-600 transition transform hover:scale-105 shadow-lg shadow-green-200">
          Desbloquear por $9.99 →
        </a>
        <p className="text-xs text-gray-400 mt-4">Pago único • Acceso de por vida • 50,000+ usuarios satisfechos</p>
      </div>
    </div>
  );
}
