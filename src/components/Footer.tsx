import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Empieza gratis hoy</h2>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">Únete a más de 50,000 personas que ya disfrutan ensaladas fáciles y deliciosas todos los días.</p>
        <Link href="/recetas" className="inline-block bg-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-600 transition transform hover:scale-105">
          Ver Recetas Gratis →
        </Link>
      </div>
      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <span className="text-xl">🥗</span>
            <span className="font-bold text-white">Nutre</span>
          </div>
          <div className="flex gap-6">
            <Link href="/recetas" className="hover:text-white transition">Recetas</Link>
            <Link href="/lista" className="hover:text-white transition">Mi Lista</Link>
            <Link href="/pais" className="hover:text-white transition">País</Link>
          </div>
          <p className="mt-4 md:mt-0">© 2026 Nutre. Hecho con 💚 para LATAM.</p>
        </div>
      </div>
    </footer>
  );
}
