import Link from 'next/link';

export default function PagoPendientePage() {
  return (
    <div className="max-w-xl mx-auto px-4 py-20 text-center">
      <div className="text-6xl mb-6">⏳</div>
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Tu pago está siendo procesado</h1>
      <p className="text-gray-600 mb-8">Esto puede tardar unos minutos. Te notificaremos cuando esté listo.</p>
      <div className="bg-amber-50 rounded-xl p-4 mb-8 text-sm text-gray-700">
        <p>Si usaste efectivo (Efecty, Baloto, etc.), el pago puede tardar hasta 24 horas en confirmarse.</p>
      </div>
      <Link href="/" className="inline-block bg-[#2D8C4E] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#246E3E] transition">
        Volver al inicio
      </Link>
    </div>
  );
}
