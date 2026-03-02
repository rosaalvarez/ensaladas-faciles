import Link from 'next/link';
import { countries } from '@/data/countries';

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-gradient-to-br from-green-50 via-white to-green-50 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 text-[200px]">🥗</div>
          <div className="absolute bottom-10 right-10 text-[150px]">🥑</div>
        </div>
        <div className="relative max-w-6xl mx-auto px-4 py-20 md:py-32 text-center">
          <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
            🌿 La app #1 de ensaladas en Latinoamérica
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-6 animate-fade-in">
            Ensaladas fáciles para<br />
            <span className="text-green-500">toda Latinoamérica</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8 animate-fade-in">
            Recetas paso a paso adaptadas a los ingredientes de tu país. Lista de compras automática. Sin estrés.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in">
            <Link href="/recetas" className="bg-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-600 transition transform hover:scale-105 shadow-lg shadow-green-200">
              Ver Recetas Gratis →
            </Link>
            <a href="https://pay.hotmart.com/C103964546B" target="_blank" rel="noopener" className="border-2 border-green-500 text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-50 transition">
              Desbloquear Todas 🔓
            </a>
          </div>
          {/* Social proof */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 animate-count-up">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-green-500">50,000+</div>
              <div className="text-sm text-gray-500 mt-1">personas ya la usan</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gray-200"></div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-green-500">20+</div>
              <div className="text-sm text-gray-500 mt-1">recetas de ensaladas</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gray-200"></div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-green-500">12</div>
              <div className="text-sm text-gray-500 mt-1">países de LATAM</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 STEPS */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tus noches ocupadas van a ser<br /><span className="text-green-500">mucho más fáciles</span></h2>
          <p className="text-gray-500 mb-16 max-w-lg mx-auto">Solo 3 pasos para comer sano sin complicarte la vida</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { emoji: '📋', step: '1', title: 'Elige', desc: 'Escoge las ensaladas que te gusten. Filtra por país, dieta o tiempo.' },
              { emoji: '🛒', step: '2', title: 'Compra', desc: 'Tu lista de compras se genera automáticamente, organizada por categoría.' },
              { emoji: '👨‍🍳', step: '3', title: 'Prepara', desc: 'Sigue los pasos con texto grande. Máximo 5 pasos, sin complicaciones.' },
            ].map((item) => (
              <div key={item.step} className="bg-green-50 rounded-2xl p-8 hover:shadow-lg transition">
                <div className="text-5xl mb-4">{item.emoji}</div>
                <div className="inline-block bg-green-500 text-white w-8 h-8 rounded-full text-sm font-bold flex items-center justify-center mx-auto mb-3">{item.step}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PERSONALIZED */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Personalizada <span className="text-green-500">para ti</span></h2>
          <p className="text-gray-500 mb-12 max-w-lg mx-auto">Selecciona tu país y tus preferencias. Las recetas se adaptan a los ingredientes de tu región.</p>
          
          {/* Country flags */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {countries.map((c) => (
              <Link key={c.code} href="/pais" className="bg-white px-4 py-3 rounded-xl shadow-sm hover:shadow-md transition flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-green-600">
                <span className="text-2xl">{c.flag}</span> {c.name}
              </Link>
            ))}
          </div>

          {/* Diet filters preview */}
          <div className="flex flex-wrap justify-center gap-3">
            {['🌿 Vegetariana', '🚫 Sin Gluten', '⚡ Rápida <15min'].map((f) => (
              <span key={f} className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">{f}</span>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">Lo que dicen nuestros <span className="text-green-500">usuarios</span></h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'María Fernanda López', country: '🇨🇴 Bogotá', text: 'Llevo 3 meses usando Nutre y me ha cambiado la forma de comer. Las ensaladas son deliciosas y super fáciles.' },
              { name: 'Carlos Rodríguez M.', country: '🇲🇽 CDMX', text: 'Me encanta que adapta los ingredientes a lo que encuentro aquí en México. Ya no tengo excusa para no comer sano.' },
              { name: 'Valentina Sánchez', country: '🇦🇷 Buenos Aires', text: 'Las recetas con palta son mis favoritas 🥑 La lista de compras automática me ahorra mucho tiempo en el súper.' },
              { name: 'Diego Paredes', country: '🇵🇪 Lima', text: 'Como chef, aprecio la calidad de las recetas. Simples pero con sabor profesional. La recomiendo a todos mis alumnos.' },
              { name: 'Camila Reyes', country: '🇨🇱 Santiago', text: 'Bajé 5 kilos en 2 meses solo incorporando ensaladas como cena. Nutre me facilitó todo el proceso.' },
              { name: 'Andrea Morales', country: '🇪🇨 Quito', text: 'La uso todos los días para planificar mis comidas de la semana. Es como tener una nutricionista en el bolsillo.' },
            ].map((t, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 hover:shadow-md transition">
                <div className="flex mb-1 text-yellow-400">{'⭐'.repeat(5)}</div>
                <p className="text-gray-700 mb-4 italic">&quot;{t.text}&quot;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {t.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-gray-900">{t.name}</div>
                    <div className="text-xs text-gray-500">{t.country}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SHOPPING LIST */}
      <section className="py-20 bg-green-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Lista de compras<br /><span className="text-green-500">automática</span></h2>
              <p className="text-gray-600 mb-6">Selecciona las ensaladas que quieres preparar esta semana y te generamos una lista organizada por categoría: Frutas, Verduras, Proteínas y Otros.</p>
              <ul className="space-y-3 text-gray-700">
                {['Organizada por sección del supermercado', 'Marca lo que ya tienes en casa', 'Funciona sin internet (PWA)', 'Adaptada a ingredientes de tu país'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3"><span className="bg-green-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">✓</span> {item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="font-bold text-lg mb-4">🛒 Mi lista de compras</h3>
              {[
                { cat: '🥬 Verduras', items: ['Lechuga romana', 'Tomate cherry', 'Pepino'] },
                { cat: '🍎 Frutas', items: ['Mango', 'Aguacate', 'Limón'] },
                { cat: '🍗 Proteínas', items: ['Pechuga de pollo', 'Queso feta'] },
              ].map((group) => (
                <div key={group.cat} className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-500 mb-2">{group.cat}</h4>
                  {group.items.map((item) => (
                    <label key={item} className="flex items-center gap-3 py-1 text-sm text-gray-700">
                      <input type="checkbox" className="w-4 h-4 rounded text-green-500 focus:ring-green-500" readOnly /> {item}
                    </label>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STRESS-FREE PREP */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Preparación <span className="text-green-500">sin estrés</span></h2>
          <p className="text-gray-500 mb-12 max-w-lg mx-auto">Texto grande, pasos claros, máximo 5 instrucciones. Diseñado para seguir con las manos ocupadas.</p>
          <div className="max-w-md mx-auto bg-gray-50 rounded-2xl p-8 text-left">
            {[
              'Lava y corta la lechuga romana en trozos grandes.',
              'Cocina el pollo a la plancha con sal y pimienta.',
              'Prepara el aderezo con limón, aceite y ajo.',
            ].map((step, i) => (
              <div key={i} className="flex gap-4 items-start mb-6 last:mb-0">
                <div className="bg-green-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">{i + 1}</div>
                <p className="text-lg text-gray-800 pt-1.5">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-gradient-to-br from-green-500 to-green-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">¿Lista para comer más sano?</h2>
          <p className="text-green-100 text-lg mb-8 max-w-lg mx-auto">Únete a más de 50,000 personas que ya descubrieron lo fácil que es comer bien.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/recetas" className="bg-white text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-50 transition transform hover:scale-105">
              Explorar Recetas Gratis
            </Link>
            <a href="https://pay.hotmart.com/C103964546B" target="_blank" rel="noopener" className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition">
              Desbloquear Todo por $9.99
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
