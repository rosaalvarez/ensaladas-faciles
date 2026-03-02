'use client';
import { useState, useEffect } from 'react';
import { countries } from '@/data/countries';
import { getCountry, setCountry } from '@/lib/store';

export default function PaisPage() {
  const [selected, setSelected] = useState('CO');

  useEffect(() => {
    setSelected(getCountry());
  }, []);

  const handleSelect = (code: string) => {
    setSelected(code);
    setCountry(code);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">🌎 Selecciona tu país</h1>
        <p className="text-gray-500">Las recetas se adaptan con los ingredientes y nombres de tu región.</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {countries.map((c) => (
          <button
            key={c.code}
            onClick={() => handleSelect(c.code)}
            className={`flex flex-col items-center gap-2 p-6 rounded-2xl transition transform hover:scale-105 ${
              selected === c.code
                ? 'bg-green-500 text-white shadow-lg shadow-green-200 scale-105'
                : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
            }`}
          >
            <span className="text-4xl">{c.flag}</span>
            <span className="font-semibold text-sm">{c.name}</span>
            {selected === c.code && <span className="text-xs">✓ Seleccionado</span>}
          </button>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-sm text-gray-400 mb-4">País seleccionado: <strong className="text-gray-700">{countries.find(c => c.code === selected)?.flag} {countries.find(c => c.code === selected)?.name}</strong></p>
        <a href="/recetas" className="inline-block bg-green-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-600 transition">
          Ver Recetas →
        </a>
      </div>
    </div>
  );
}
