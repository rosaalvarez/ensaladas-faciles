'use client';
import { useParams } from 'next/navigation';
import { useEffect, useState, useMemo } from 'react';
import { recipes, getRecipeBySlug } from '@/data/recipes';
import { getCountry, getIngredientName, addToShoppingList } from '@/lib/store';
import { getCountryByCode } from '@/data/countries';
import Link from 'next/link';
import RecipeCard from '@/components/RecipeCard';

const defaultCookware = [
  { name: 'Bowl grande', icon: '🥣' },
  { name: 'Cuchillo', icon: '🔪' },
  { name: 'Tabla de cortar', icon: '🪓' },
];

export default function RecipeDetail() {
  const params = useParams();
  const slug = params.slug as string;
  const recipe = getRecipeBySlug(slug);
  const [country, setCountry] = useState('CO');
  const [checkedIngredients, setCheckedIngredients] = useState<Set<number>>(new Set());
  const [added, setAdded] = useState(false);
  const [servingsMultiplier, setServingsMultiplier] = useState(1);

  useEffect(() => {
    setCountry(getCountry());
  }, []);

  const relatedRecipes = useMemo(() => {
    if (!recipe) return [];
    return recipes
      .filter(r => r.slug !== recipe.slug && (r.tags.some(t => recipe.tags.includes(t)) || r.country === recipe.country))
      .slice(0, 4);
  }, [recipe]);

  if (!recipe) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Receta no encontrada</h1>
        <Link href="/recetas" className="text-[#2D8C4E] hover:underline">← Volver a recetas</Link>
      </div>
    );
  }

  const locked = !recipe.free;
  const recipeCountry = recipe.country ? getCountryByCode(recipe.country) : null;
  const currentServings = recipe.servings * servingsMultiplier;

  const toggleIngredient = (i: number) => {
    const next = new Set(checkedIngredients);
    if (next.has(i)) next.delete(i); else next.add(i);
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

  const multiplyAmount = (amount: string) => {
    if (servingsMultiplier === 1) return amount;
    const match = amount.match(/^([\d.,/]+)\s*(.*)/);
    if (!match) return amount;
    let num = parseFloat(match[1].replace(',', '.'));
    if (match[1].includes('/')) {
      const [a, b] = match[1].split('/');
      num = parseInt(a) / parseInt(b);
    }
    const result = num * servingsMultiplier;
    const rounded = Math.round(result * 10) / 10;
    return `${rounded} ${match[2]}`.trim();
  };

  const cookwareList = recipe.cookware?.map(c => ({ name: c, icon: '🍳' })) || defaultCookware;

  // Group ingredients by category
  const groupedIngredients = recipe.ingredients.reduce<Record<string, typeof recipe.ingredients>>((acc, ing, idx) => {
    const cat = ing.category;
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push({ ...ing, _idx: idx } as typeof ing & { _idx: number });
    return acc;
  }, {} as Record<string, typeof recipe.ingredients>);

  return (
    <div>
      {/* 1. HEADER */}
      <div className="relative h-72 md:h-[450px] overflow-hidden">
        <img src={recipe.image} alt={recipe.name} className={`w-full h-full object-cover ${locked ? 'blur-sm' : ''}`} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
          <Link href="/recetas" className="text-green-300 hover:text-white text-sm mb-3 inline-flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/></svg>
            Volver a recetas
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold mb-2">{recipe.name}</h1>
          <p className="text-white/80 text-sm md:text-base max-w-2xl mb-4">{recipe.description}</p>
          <div className="flex flex-wrap gap-3 text-sm">
            <span className="bg-white/20 backdrop-blur px-3 py-1.5 rounded-full flex items-center gap-1">⏱ {recipe.time} min</span>
            <span className="bg-white/20 backdrop-blur px-3 py-1.5 rounded-full flex items-center gap-1">👤 {currentServings} porciones</span>
            <span className="bg-white/20 backdrop-blur px-3 py-1.5 rounded-full">{recipe.difficulty}</span>
            {recipe.calories && (
              <span className="bg-white/20 backdrop-blur px-3 py-1.5 rounded-full">🔥 {recipe.calories} cal</span>
            )}
            {recipeCountry && (
              <span className="bg-white/20 backdrop-blur px-3 py-1.5 rounded-full">{recipeCountry.flag} {recipeCountry.name}</span>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10">
        {/* 2. UTENSILIOS */}
        <section className={`mb-10 ${locked ? 'blur-sm pointer-events-none' : ''}`}>
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            🍳 Utensilios necesarios
          </h2>
          <div className="flex flex-wrap gap-3">
            {cookwareList.map((c, i) => (
              <div key={i} className="bg-gray-50 px-4 py-2 rounded-xl text-sm flex items-center gap-2 text-gray-700">
                <span>{c.icon}</span> {c.name}
              </div>
            ))}
          </div>
        </section>

        <div className="grid md:grid-cols-2 gap-10">
          {/* 3. INGREDIENTES */}
          <section className={locked ? 'blur-sm pointer-events-none' : ''}>
            <h2 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">🥗 Ingredientes</h2>
            {/* Servings selector */}
            <div className="flex items-center gap-3 mb-4 text-sm text-gray-500">
              <span>Porciones:</span>
              {[1, 2, 3, 4].map(m => (
                <button
                  key={m}
                  onClick={() => setServingsMultiplier(m)}
                  className={`w-8 h-8 rounded-full text-xs font-bold transition ${servingsMultiplier === m ? 'bg-[#2D8C4E] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                >
                  {recipe.servings * m}
                </button>
              ))}
            </div>

            {Object.entries(groupedIngredients).map(([cat, ings]) => (
              <div key={cat} className="mb-4">
                <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">{cat}</h4>
                <div className="bg-gray-50 rounded-xl p-4 space-y-1">
                  {ings.map((ing, i) => {
                    const idx = (ing as typeof ing & { _idx: number })._idx ?? i;
                    return (
                      <label key={idx} className="flex items-center gap-3 py-1.5 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={checkedIngredients.has(idx)}
                          onChange={() => toggleIngredient(idx)}
                          className="w-5 h-5 rounded text-[#2D8C4E] focus:ring-[#2D8C4E]"
                        />
                        <span className={`flex-1 text-sm ${checkedIngredients.has(idx) ? 'line-through text-gray-400' : 'text-gray-700'}`}>
                          {multiplyAmount(ing.amount)} — {getIngredientName(ing.name, ing.variants, country)}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>
            ))}

            <button onClick={handleAddToList} className={`mt-2 w-full py-3 rounded-full font-semibold transition ${added ? 'bg-[#246E3E] text-white' : 'bg-[#2D8C4E] text-white hover:bg-[#246E3E]'}`}>
              {added ? '✓ Agregado a tu lista' : '🛒 Agregar a mi lista de compras'}
            </button>
          </section>

          {/* 4. PREPARACIÓN */}
          <section className={locked ? 'blur-sm pointer-events-none' : ''}>
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">👨‍🍳 Preparación</h2>
            <div className="space-y-5">
              {recipe.steps.map((step, i) => (
                <div key={i} className="flex gap-4">
                  <div className="bg-[#2D8C4E] text-white w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {i + 1}
                  </div>
                  <div className="pt-1">
                    <p className="text-gray-700">{step}</p>
                  </div>
                </div>
              ))}
              <div className="flex gap-4">
                <div className="bg-amber-400 text-white w-9 h-9 rounded-full flex items-center justify-center text-lg flex-shrink-0">🎉</div>
                <p className="text-gray-700 font-semibold pt-1.5">¡Sirve y disfruta!</p>
              </div>
            </div>
          </section>
        </div>

        {/* 5. TIPS Y VARIACIONES */}
        {!locked && (recipe.tips?.length || true) && (
          <section className="mt-10 bg-amber-50 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">💡 Tips y Variaciones</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-sm text-gray-700 mb-2">Consejos</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  {(recipe.tips && recipe.tips.length > 0) ? recipe.tips.map((tip, i) => (
                    <li key={i} className="flex items-start gap-2"><span className="text-amber-500">•</span> {tip}</li>
                  )) : (
                    <>
                      <li className="flex items-start gap-2"><span className="text-amber-500">•</span> Prepara los ingredientes con anticipación para ahorrar tiempo</li>
                      <li className="flex items-start gap-2"><span className="text-amber-500">•</span> Puedes sustituir ingredientes según disponibilidad local</li>
                      <li className="flex items-start gap-2"><span className="text-amber-500">•</span> El aderezo se puede preparar con 2-3 días de anticipación</li>
                    </>
                  )}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-sm text-gray-700 mb-2">Acompañamientos sugeridos</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2"><span className="text-green-500">•</span> Pan integral tostado</li>
                  <li className="flex items-start gap-2"><span className="text-green-500">•</span> Proteína extra (pollo, tofu, huevo)</li>
                  <li className="flex items-start gap-2"><span className="text-green-500">•</span> Agua con limón o infusión fría</li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* 6. MEAL PREP */}
        {!locked && (
          <section className="mt-10 bg-blue-50 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">📦 Meal Prep</h2>
            {recipe.mealPrep ? (
              <p className="text-gray-700 text-sm">{recipe.mealPrep}</p>
            ) : (
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="bg-white rounded-xl p-4">
                  <h4 className="font-semibold text-gray-800 mb-1">🔄 Preparación en lote</h4>
                  <p className="text-gray-600">Lava y corta las verduras por separado. Guarda en contenedores herméticos.</p>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <h4 className="font-semibold text-gray-800 mb-1">❄️ Almacenamiento</h4>
                  <p className="text-gray-600">Refrigera hasta 3-4 días. Agrega el aderezo justo antes de servir.</p>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <h4 className="font-semibold text-gray-800 mb-1">📏 Porciones</h4>
                  <p className="text-gray-600">Divide en {recipe.servings} contenedores individuales para la semana.</p>
                </div>
              </div>
            )}
          </section>
        )}

        {/* LOCKED CTA */}
        {locked && (
          <div className="mt-12 bg-gradient-to-r from-green-50 to-emerald-100 rounded-2xl p-8 text-center">
            <span className="text-5xl mb-4 block">🔒</span>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Esta receta es premium</h3>
            <p className="text-gray-600 mb-6">Desbloquea todas las recetas y accede a ingredientes completos y todos los pasos.</p>
            <a href="https://mpago.li/2TTtDgT" target="_blank" rel="noopener" className="inline-block bg-[#2D8C4E] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#246E3E] transition transform hover:scale-105 shadow-lg shadow-green-200">
              Desbloquear por $29,900 COP →
            </a>
            <p className="text-xs text-gray-400 mt-4">Pago único • Acceso permanente • 50,000+ usuarios</p>
          </div>
        )}

        {/* 7. RECETAS RELACIONADAS */}
        {relatedRecipes.length > 0 && (
          <section className="mt-16">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Recetas relacionadas</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {relatedRecipes.map(r => (
                <RecipeCard key={r.slug} recipe={r} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
