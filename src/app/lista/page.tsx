'use client';
import { useState, useEffect } from 'react';
import { getShoppingList, setShoppingList, clearShoppingList, ShoppingItem } from '@/lib/store';

const categoryEmojis: Record<string, string> = {
  Verduras: '🥬',
  Frutas: '🍎',
  Proteínas: '🍗',
  Otros: '📦',
};

const categoryOrder = ['Verduras', 'Frutas', 'Proteínas', 'Otros'];

export default function ListaPage() {
  const [items, setItems] = useState<ShoppingItem[]>([]);

  useEffect(() => {
    setItems(getShoppingList());
  }, []);

  const toggle = (index: number) => {
    const next = items.map((item, i) => i === index ? { ...item, checked: !item.checked } : item);
    setItems(next);
    setShoppingList(next);
  };

  const clear = () => {
    clearShoppingList();
    setItems([]);
  };

  const grouped = categoryOrder.map(cat => ({
    category: cat,
    items: items.filter(i => i.category === cat),
  })).filter(g => g.items.length > 0);

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">🛒 Mi Lista de Compras</h1>
        <p className="text-gray-500">Agrega ingredientes desde cualquier receta</p>
      </div>

      {items.length === 0 ? (
        <div className="text-center py-20">
          <span className="text-6xl block mb-4">🛒</span>
          <h2 className="text-xl font-bold text-gray-700 mb-2">Tu lista está vacía</h2>
          <p className="text-gray-500 mb-6">Agrega ingredientes desde las recetas</p>
          <a href="/recetas" className="inline-block bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition">
            Ver Recetas →
          </a>
        </div>
      ) : (
        <>
          <div className="flex justify-between items-center mb-6">
            <span className="text-sm text-gray-500">{items.filter(i => i.checked).length} de {items.length} marcados</span>
            <button onClick={clear} className="text-sm text-red-500 hover:text-red-600 font-medium">Limpiar lista</button>
          </div>
          <div className="space-y-6">
            {grouped.map(({ category, items: catItems }) => (
              <div key={category}>
                <h3 className="text-sm font-semibold text-gray-500 mb-3">{categoryEmojis[category]} {category}</h3>
                <div className="bg-white rounded-xl shadow-sm divide-y">
                  {catItems.map((item) => {
                    const idx = items.indexOf(item);
                    return (
                      <label key={idx} className="flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-gray-50 transition">
                        <input
                          type="checkbox"
                          checked={item.checked}
                          onChange={() => toggle(idx)}
                          className="w-5 h-5 rounded text-green-500 focus:ring-green-500"
                        />
                        <span className={`flex-1 ${item.checked ? 'line-through text-gray-400' : 'text-gray-700'}`}>
                          {item.name}
                        </span>
                        <span className="text-sm text-gray-400">{item.amount}</span>
                      </label>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
