'use client';
import { useState, useEffect, useMemo } from 'react';
import { recipes } from '@/data/recipes';
import { countries } from '@/data/countries';
import { getCountry, setCountry as saveCountry } from '@/lib/store';
import RecipeCard from '@/components/RecipeCard';

const dietFilters = ['Todas', 'vegetariana', 'sin gluten', 'rápida', 'vegana'];
const dietLabels: Record<string, string> = {
  'Todas': '🍽 Todas',
  'vegetariana': '🌿 Vegetariana',
  'sin gluten': '🚫 Sin Gluten',
  'rápida': '⚡ Rápida',
  'vegana': '🌱 Vegana',
};

const objectives = [
  { id: 'peso', label: '⚖️ Bajar de peso' },
  { id: 'energia', label: '⚡ Energía' },
  { id: 'digestion', label: '🫄 Digestión' },
  { id: 'embarazo', label: '🤰 Embarazo' },
  { id: 'ninos', label: '👶 Niños' },
  { id: 'mayores', label: '👴 Adultos mayores' },
];

export default function RecetasPage() {
  const [activeDiet, setActiveDiet] = useState('Todas');
  const [activeCountry, setActiveCountry] = useState('');
  const [search, setSearch] = useState('');

  // Sync country from localStorage on mount and listen for navbar changes
  useEffect(() => {
    const stored = getCountry();
    if (stored) setActiveCountry(stored);
    const handler = (e: Event) => {
      setActiveCountry((e as CustomEvent).detail);
    };
    window.addEventListener('nutre-country-change', handler);
    return () => window.removeEventListener('nutre-country-change', handler);
  }, []);

  const filtered = useMemo(() => {
    let result = recipes;
    if (activeDiet !== 'Todas') {
      result = result.filter(r => r.tags.some(t => t.toLowerCase().includes(activeDiet.toLowerCase())));
    }
    if (activeCountry) {
      result = result.filter(r => r.country === activeCountry);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(r => r.name.toLowerCase().includes(q) || r.description.toLowerCase().includes(q) || r.tags.some(t => t.toLowerCase().includes(q)));
    }
    return result;
  }, [activeDiet, activeCountry, search]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Nuestras <span className="text-[#2D8C4E]">Recetas</span></h1>
        <p className="text-gray-500 max-w-lg mx-auto">287 recetas de ensaladas adaptadas a 19 países latinoamericanos.</p>
      </div>

      {/* Search */}
      <div className="max-w-md mx-auto mb-8">
        <div className="relative">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Buscar recetas..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-200 focus:border-[#2D8C4E] focus:ring-2 focus:ring-[#2D8C4E]/20 outline-none transition"
          />
        </div>
      </div>

      {/* Country filters */}
      <div className="mb-6">
        <div className="flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { setActiveCountry(''); saveCountry(''); }}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition ${!activeCountry ? 'bg-[#2D8C4E] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
          >
            🌎 Todos
          </button>
          {countries.map(c => (
            <button
              key={c.code}
              onClick={() => { const v = activeCountry === c.code ? '' : c.code; setActiveCountry(v); saveCountry(v); }}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition flex items-center gap-1 ${activeCountry === c.code ? 'bg-[#2D8C4E] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            >
              {c.flag} {c.name}
            </button>
          ))}
        </div>
      </div>

      {/* Diet filters */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {dietFilters.map(f => (
          <button
            key={f}
            onClick={() => setActiveDiet(f)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${activeDiet === f ? 'bg-[#2D8C4E] text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
          >
            {dietLabels[f] || f}
          </button>
        ))}
      </div>

      {/* Objective filters */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {objectives.map(o => (
          <span key={o.id} className="bg-amber-50 text-amber-700 px-3 py-1.5 rounded-full text-xs font-medium cursor-pointer hover:bg-amber-100 transition">
            {o.label}
          </span>
        ))}
      </div>

      {/* Results count */}
      <p className="text-sm text-gray-400 mb-6 text-center">{filtered.length} recetas encontradas</p>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(recipe => (
          <RecipeCard key={recipe.slug} recipe={recipe} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20 text-gray-400">
          <p className="text-4xl mb-4">🔍</p>
          <p>No se encontraron recetas con esos filtros.</p>
        </div>
      )}

      {/* Unlock CTA */}
      <div className="mt-16 text-center bg-gradient-to-r from-green-50 to-emerald-100 rounded-2xl p-8 md:p-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">🔒 Desbloquea todas las recetas</h2>
        <p className="text-gray-600 mb-6 max-w-md mx-auto">Accede a más de 287 ensaladas premium con ingredientes adaptados a tu país.</p>
        <a href="https://mpago.li/2TTtDgT" target="_blank" rel="noopener" className="inline-block bg-[#2D8C4E] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#246E3E] transition transform hover:scale-105 shadow-lg shadow-green-200">
          Desbloquear por $29,900 COP →
        </a>
        <p className="text-xs text-gray-400 mt-4">Pago único • Acceso de por vida • 50,000+ usuarios satisfechos</p>
      </div>
    </div>
  );
}
