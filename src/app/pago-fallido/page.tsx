import Link from 'next/link';

const PAYMENT_URL = 'https://www.mercadopago.com.co/checkout/v1/redirect?pref_id=57242186-e84ed0a8-c17f-47ed-b6df-323c439e9481';

export default function PagoFallidoPage() {
  return (
    <div className="max-w-xl mx-auto px-4 py-20 text-center">
      <div className="text-6xl mb-6">😔</div>
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Hubo un problema con tu pago</h1>
      <p className="text-gray-600 mb-8">No te preocupes, no se realizó ningún cobro. Puedes intentar de nuevo.</p>
      <a href={PAYMENT_URL} className="inline-block bg-[#2D8C4E] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#246E3E] transition transform hover:scale-105 shadow-lg shadow-green-200 mb-4">
        Intentar de nuevo →
      </a>
      <br />
      <Link href="/" className="text-[#2D8C4E] hover:underline text-sm mt-4 inline-block">
        Volver al inicio
      </Link>
    </div>
  );
}
