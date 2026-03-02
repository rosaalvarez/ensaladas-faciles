'use client';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getRecipeBySlug } from '@/data/recipes';
import { getCountry, getIngredientName, addToShoppingList } from '@/lib/store';
import Link from 'next/link';

export default function RecipeDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const recipe = getRecipeBySlug(slug);
  const [country, setCountry] = useState('CO');
  const [checkedIngredients, setCheckedIngredients] = useState<Set<number>>(new Set());
  const [added, setAdded] = useState(false);

  useEffect(() => {
    setCountry(getCountry());
  }, []);

  if (!recipe) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Receta no encontrada</h1>
        <Link href="/recetas" className="text-green-500 hover:underline">← Volver a recetas</Link>
      </div>
    );
  }

  const locked = !recipe.free;

  const toggleIngredient = (i: number) => {
    const next = new Set(checkedIngredients);
    if (next.has(i)) { next.delete(i); } else { next.add(i); }
    setCheckedIngredients(next);
  };

  const handleAddToList = () => {
    const items = recipe.ingredients.map(ing => ({
      name: getIngredientName(ing.name, ing.variants, country),
      amount: ing.amount,
      category: ing.category,
    }));
    addToShoppingList(items);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div>
      {/* Hero image */}
      <div className="relative h-64 md:h-96 overflow-hidden">
        <img src={recipe.image} alt={recipe.name} className={`w-full h-full object-cover ${locked ? 'blur-sm' : ''}`} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
          <Link href="/recetas" className="text-green-300 hover:text-white text-sm mb-2 inline-block">← Volver a recetas</Link>
          <h1 className="text-3xl md:text-5xl font-bold">{recipe.name}</h1>
          <div className="flex gap-4 mt-3 text-sm">
            <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full">⏱ {recipe.time} min</span>
            <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full">👤 {recipe.servings} porciones</span>
            <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full">{recipe.difficulty}</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <p className="text-gray-600 text-lg mb-8">{recipe.description}</p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Ingredients */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">🥗 Ingredientes</h2>
            <div className="bg-gray-50 rounded-2xl p-6">
              {recipe.ingredients.map((ing, i) => (
                <label key={i} className={`flex items-center gap-3 py-2 cursor-pointer ${locked && i > 2 ? 'blur-sm pointer-events-none' : ''}`}>
                  <input
                    type="checkbox"
                    checked={checkedIngredients.has(i)}
                    onChange={() => toggleIngredient(i)}
                    className="w-5 h-5 rounded text-green-500 focus:ring-green-500"
                  />
                  <span className={`flex-1 ${checkedIngredients.has(i) ? 'line-through text-gray-400' : 'text-gray-700'}`}>
                    {ing.amount} — {getIngredientName(ing.name, ing.variants, country)}
                  </span>
                </label>
              ))}
            </div>
            {!locked && (
              <button
                onClick={handleAddToList}
                className={`mt-4 w-full py-3 rounded-full font-semibold transition ${added ? 'bg-green-600 text-white' : 'bg-green-500 text-white hover:bg-green-600'}`}
              >
                {added ? '✓ Agregado a tu lista' : '🛒 Agregar a mi lista de compras'}
              </button>
            )}
          </div>

          {/* Steps */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">👨‍🍳 Preparación</h2>
            <div className="space-y-6">
              {recipe.steps.map((step, i) => {
                const isLocked = locked && i > 0;
                return (
                  <div key={i} className={`flex gap-4 ${isLocked ? 'blur-sm' : ''}`}>
                    <div className="bg-green-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">{i + 1}</div>
                    <p className="text-gray-700 text-lg pt-1.5">{step}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Paywall */}
        {locked && (
          <div className="mt-12 bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-8 text-center">
            <span className="text-5xl mb-4 block">🔒</span>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Esta receta es premium</h3>
            <p className="text-gray-600 mb-6">Desbloquea todas las recetas y accede a ingredientes completos y todos los pasos.</p>
            <a href="https://pay.hotmart.com/C103964546B" target="_blank" rel="noopener" className="inline-block bg-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-600 transition transform hover:scale-105 shadow-lg shadow-green-200">
              Desbloquear por $9.99 →
            </a>
            <p className="text-xs text-gray-400 mt-4">Pago único • Acceso de por vida • 50,000+ usuarios</p>
          </div>
        )}
      </div>
    </div>
  );
}
