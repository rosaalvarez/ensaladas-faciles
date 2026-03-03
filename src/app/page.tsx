import Link from 'next/link';
import { countries } from '@/data/countries';
import FeaturedRecipes from '@/components/FeaturedRecipes';

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-gradient-to-br from-green-50 via-white to-emerald-50 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-10 left-10 w-96 h-96 bg-[#2D8C4E] rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-amber-400 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-[#2D8C4E]/10 text-[#2D8C4E] px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
                🌿 La app #1 de ensaladas en Latinoamérica
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6 animate-fade-in">
                Ensaladas fáciles con ingredientes de{' '}
                <span className="text-[#2D8C4E]">tu país</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 animate-fade-in">
                Recetas paso a paso adaptadas a los ingredientes de tu región. Lista de compras automática. Más de 50,000 personas ya la usan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-fade-in">
                <Link href="/recetas" className="bg-[#2D8C4E] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#246E3E] transition transform hover:scale-105 shadow-lg shadow-green-200 text-center">
                  Ver Recetas Gratis →
                </Link>
                <a href="https://www.mercadopago.com.co/checkout/v1/redirect?pref_id=57242186-e84ed0a8-c17f-47ed-b6df-323c439e9481" target="_blank" rel="noopener" className="border-2 border-[#2D8C4E] text-[#2D8C4E] px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-50 transition text-center">
                  Desbloquear Todas 🔓
                </a>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=500&fit=crop" 
                  alt="Ensalada colorida y fresca" 
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
          {/* Stats */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-16 animate-count-up">
            {[
              { num: '286+', label: 'recetas' },
              { num: '12', label: 'países' },
              { num: '50,000+', label: 'personas' },
            ].map(s => (
              <div key={s.label} className="text-center">
                <div className="text-4xl md:text-5xl font-black text-[#2D8C4E]">{s.num}</div>
                <div className="text-sm text-gray-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CÓMO FUNCIONA */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cómo <span className="text-[#2D8C4E]">funciona</span></h2>
          <p className="text-gray-500 mb-16 max-w-lg mx-auto">Solo 3 pasos para comer sano sin complicarte la vida</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '📋', step: '1', title: 'Elige', desc: 'Escoge las ensaladas que te gusten. Filtra por país, dieta o tiempo de preparación.' },
              { icon: '🛒', step: '2', title: 'Compra', desc: 'Tu lista de compras se genera automáticamente, organizada por categoría del supermercado.' },
              { icon: '👨‍🍳', step: '3', title: 'Prepara', desc: 'Sigue los pasos con texto grande. Instrucciones claras, sin complicaciones.' },
            ].map(item => (
              <div key={item.step} className="bg-green-50 rounded-2xl p-8 hover:shadow-lg transition group">
                <div className="text-5xl mb-4">{item.icon}</div>
                <div className="inline-flex bg-[#2D8C4E] text-white w-8 h-8 rounded-full text-sm font-bold items-center justify-center mx-auto mb-3">{item.step}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PERSONALIZADA PARA TI */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Personalizada <span className="text-[#2D8C4E]">para ti</span></h2>
          <p className="text-gray-500 mb-12 max-w-lg mx-auto">Selecciona tu país y tus preferencias. Las recetas se adaptan a los ingredientes de tu región.</p>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { name: 'María', country: '🇨🇴 Colombia', diet: 'Vegetariana', pref: 'Recetas rápidas, sin gluten', color: 'from-green-400 to-emerald-500' },
              { name: 'Carlos', country: '🇲🇽 México', diet: 'Sin restricciones', pref: 'Meal prep, alto en proteína', color: 'from-orange-400 to-red-500' },
              { name: 'Lucía', country: '🇦🇷 Argentina', diet: 'Vegana', pref: 'Bajar de peso, energía', color: 'from-blue-400 to-indigo-500' },
            ].map(p => (
              <div key={p.name} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition text-left">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${p.color} flex items-center justify-center text-white font-bold text-lg mb-4`}>
                  {p.name[0]}
                </div>
                <h3 className="font-bold text-gray-900">{p.name}</h3>
                <p className="text-sm text-gray-500 mb-3">{p.country}</p>
                <div className="space-y-1 text-sm">
                  <span className="inline-block bg-green-50 text-green-700 px-2 py-0.5 rounded-full mr-1">{p.diet}</span>
                  <span className="inline-block bg-amber-50 text-amber-700 px-2 py-0.5 rounded-full">{p.pref}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {countries.map(c => (
              <span key={c.code} className="bg-white px-3 py-2 rounded-xl shadow-sm text-sm flex items-center gap-1.5">
                <span className="text-lg">{c.flag}</span> {c.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PLANIFICA TU SEMANA */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Planifica tu <span className="text-[#2D8C4E]">semana</span></h2>
            <p className="text-gray-500 max-w-lg mx-auto">Organiza tus comidas de toda la semana en minutos</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-50 rounded-2xl p-6 shadow-sm">
              <div className="grid grid-cols-7 gap-2 text-center text-xs font-semibold text-gray-500 mb-3">
                {['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'].map(d => (
                  <div key={d}>{d}</div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-2">
                {[
                  { day: 1, meal: '🥗 César' },
                  { day: 2, meal: '🥑 Tropical' },
                  { day: 3, meal: '🍅 Griega' },
                  { day: 4, meal: '🥕 Thai' },
                  { day: 5, meal: '🌽 Mexicana' },
                  { day: 6, meal: '🍋 Cítrica' },
                  { day: 7, meal: '🫒 Mediterránea' },
                ].map(d => (
                  <div key={d.day} className="bg-white rounded-lg p-2 text-center shadow-sm">
                    <div className="text-xs font-bold text-gray-400">{d.day}</div>
                    <div className="text-xs mt-1 text-gray-700">{d.meal}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <ul className="space-y-4">
                {[
                  'Ahorra tiempo planificando toda la semana de una vez',
                  'Lista de compras unificada para 7 días',
                  'Variedad garantizada: sin repetir ensaladas',
                  'Adaptado a tu presupuesto y país',
                  'Ideal para meal prep dominical',
                ].map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="bg-[#2D8C4E] text-white w-6 h-6 rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5">✓</span>
                    <span className="text-gray-700">{b}</span>
                  </li>
                ))}
              </ul>
              <Link href="/recetas" className="inline-block mt-8 bg-[#2D8C4E] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#246E3E] transition">
                Empieza a planificar →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">Lo que dicen nuestros <span className="text-[#2D8C4E]">usuarios</span></h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'María Fernanda López', country: '🇨🇴 Bogotá', text: 'Llevo 3 meses usando Nutre y me ha cambiado la forma de comer. Las ensaladas son deliciosas y super fáciles.' },
              { name: 'Carlos Rodríguez M.', country: '🇲🇽 CDMX', text: 'Me encanta que adapta los ingredientes a lo que encuentro aquí en México. Ya no tengo excusa para no comer sano.' },
              { name: 'Valentina Sánchez', country: '🇦🇷 Buenos Aires', text: 'Las recetas con palta son mis favoritas 🥑 La lista de compras automática me ahorra mucho tiempo en el súper.' },
              { name: 'Diego Paredes', country: '🇵🇪 Lima', text: 'Como chef, aprecio la calidad de las recetas. Simples pero con sabor profesional. La recomiendo a todos mis alumnos.' },
              { name: 'Camila Reyes', country: '🇨🇱 Santiago', text: 'Bajé 5 kilos en 2 meses solo incorporando ensaladas como cena. Nutre me facilitó todo el proceso.' },
              { name: 'Andrea Morales', country: '🇪🇨 Quito', text: 'La uso todos los días para planificar mis comidas de la semana. Es como tener una nutricionista en el bolsillo.' },
            ].map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 hover:shadow-md transition">
                <div className="flex mb-1 text-yellow-400 text-sm">{'⭐'.repeat(5)}</div>
                <p className="text-gray-700 mb-4 italic text-sm">&quot;{t.text}&quot;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#2D8C4E] rounded-full flex items-center justify-center text-white font-bold text-sm">
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

      {/* RECETAS DESTACADAS */}
      <FeaturedRecipes />

      {/* LISTA DE COMPRAS */}
      <section className="py-20 bg-green-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Lista de compras<br /><span className="text-[#2D8C4E]">automática</span></h2>
              <p className="text-gray-600 mb-6">Selecciona las ensaladas que quieres preparar y te generamos una lista organizada por categoría.</p>
              <ul className="space-y-3 text-gray-700">
                {['Organizada por sección del supermercado', 'Marca lo que ya tienes en casa', 'Funciona sin internet (PWA)', 'Adaptada a ingredientes de tu país'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3"><span className="bg-[#2D8C4E] text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">✓</span> {item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="font-bold text-lg mb-4">🛒 Mi lista de compras</h3>
              {[
                { cat: '🥬 Verduras', items: ['Lechuga romana', 'Tomate cherry', 'Pepino', 'Espinaca'] },
                { cat: '🍎 Frutas', items: ['Mango', 'Aguacate', 'Limón'] },
                { cat: '🍗 Proteínas', items: ['Pechuga de pollo', 'Queso feta'] },
                { cat: '🧂 Otros', items: ['Aceite de oliva', 'Vinagre balsámico'] },
              ].map(group => (
                <div key={group.cat} className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-500 mb-2">{group.cat}</h4>
                  {group.items.map(item => (
                    <label key={item} className="flex items-center gap-3 py-1 text-sm text-gray-700">
                      <input type="checkbox" className="w-4 h-4 rounded text-[#2D8C4E] focus:ring-[#2D8C4E]" readOnly /> {item}
                    </label>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">Gratis vs <span className="text-[#2D8C4E]">Premium</span></h2>
          <p className="text-gray-500 text-center mb-12 max-w-lg mx-auto">Prueba gratis y decide si quieres acceso completo.</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Gratis</h3>
              <p className="text-4xl font-black text-gray-900 mb-6">$0</p>
              <ul className="space-y-3 mb-8">
                {[
                  '8 recetas de muestra',
                  'Lista de compras básica',
                  'Filtro por país',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <span className="text-green-500">✓</span> {item}
                  </li>
                ))}
                {[
                  '286+ recetas premium',
                  'Planificador semanal',
                  'Actualizaciones gratis',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-400">
                    <span>✗</span> {item}
                  </li>
                ))}
              </ul>
              <Link href="/recetas" className="block text-center bg-gray-200 text-gray-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-300 transition">
                Ver recetas gratis
              </Link>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border-2 border-[#2D8C4E] relative">
              <div className="absolute -top-3 right-6 bg-[#2D8C4E] text-white px-3 py-1 rounded-full text-xs font-bold">RECOMENDADO</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium</h3>
              <p className="text-4xl font-black text-[#2D8C4E] mb-1">$29,900 <span className="text-lg font-normal text-gray-500">COP</span></p>
              <p className="text-sm text-gray-500 mb-6">Pago único · Acceso de por vida</p>
              <ul className="space-y-3 mb-8">
                {[
                  '286+ recetas de 12 países',
                  'Lista de compras automática',
                  'Planificador semanal',
                  'Funciona sin internet (PWA)',
                  'Actualizaciones gratis para siempre',
                  'Nuevas recetas cada mes',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <span className="text-green-500 font-bold">✓</span> {item}
                  </li>
                ))}
              </ul>
              <a href="https://www.mercadopago.com.co/checkout/v1/redirect?pref_id=57242186-e84ed0a8-c17f-47ed-b6df-323c439e9481" target="_blank" rel="noopener" className="block text-center bg-[#2D8C4E] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#246E3E] transition transform hover:scale-105 shadow-lg shadow-green-200">
                Desbloquear todo →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 bg-gradient-to-br from-[#2D8C4E] to-[#1a6b35] text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Come mejor, sin complicarte</h2>
          <p className="text-green-100 text-lg mb-8 max-w-lg mx-auto">Únete a más de 50,000 personas que ya descubrieron lo fácil que es comer bien.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/recetas" className="bg-white text-[#2D8C4E] px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-50 transition transform hover:scale-105">
              Explorar Recetas Gratis
            </Link>
            <a href="https://www.mercadopago.com.co/checkout/v1/redirect?pref_id=57242186-e84ed0a8-c17f-47ed-b6df-323c439e9481" target="_blank" rel="noopener" className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition">
              Desbloquear Todo por $29,900 COP
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
