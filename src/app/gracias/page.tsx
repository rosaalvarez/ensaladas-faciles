'use client';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState, Suspense } from 'react';
import { generateCode, setPremiumCode } from '@/lib/premium';
import { insertAccessCode } from '@/lib/supabase';
import Link from 'next/link';

function GraciasContent() {
  const searchParams = useSearchParams();
  const paymentId = searchParams.get('payment_id');
  const status = searchParams.get('status');
  const [code, setCode] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    async function processPayment() {
      if (status === 'approved' && paymentId && /^\d+$/.test(paymentId)) {
        const newCode = generateCode();
        await insertAccessCode(newCode, paymentId);
        setPremiumCode(newCode);
        setCode(newCode);
      } else {
        setError(true);
      }
      setLoading(false);
    }
    processPayment();
  }, [status, paymentId]);

  const handleCopy = () => {
    if (code) {
      navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (loading) {
    return (
      <div className="max-w-xl mx-auto px-4 py-20 text-center">
        <div className="animate-spin text-5xl mb-4">⏳</div>
        <p className="text-gray-600 text-lg">Procesando tu pago...</p>
      </div>
    );
  }

  if (error || !code) {
    return (
      <div className="max-w-xl mx-auto px-4 py-20 text-center">
        <div className="text-5xl mb-4">😕</div>
        <h1 className="text-2xl font-bold text-gray-900 mb-4">No pudimos verificar tu pago</h1>
        <p className="text-gray-600 mb-8">Si ya realizaste el pago, por favor contáctanos con tu comprobante.</p>
        <Link href="/contacto" className="inline-block bg-[#2D8C4E] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#246E3E] transition">
          Contactar soporte
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto px-4 py-16 text-center">
      <div className="text-6xl mb-6">🎉</div>
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">¡Pago exitoso!</h1>
      <p className="text-gray-600 mb-8">Tu acceso premium ha sido activado.</p>

      <div className="bg-green-50 border-2 border-[#2D8C4E] rounded-2xl p-8 mb-8">
        <p className="text-sm text-gray-500 mb-3">Tu código de acceso permanente:</p>
        <div className="text-3xl md:text-4xl font-mono font-bold text-[#2D8C4E] tracking-wider mb-4">
          {code}
        </div>
        <button
          onClick={handleCopy}
          className="bg-[#2D8C4E] text-white px-6 py-2.5 rounded-full font-semibold hover:bg-[#246E3E] transition text-sm"
        >
          {copied ? '✓ Copiado' : '📋 Copiar código'}
        </button>
      </div>

      <div className="bg-amber-50 rounded-xl p-4 mb-8 text-left text-sm text-gray-700">
        <p className="font-semibold mb-2">📌 Guarda este código:</p>
        <ul className="space-y-1 list-disc list-inside text-gray-600">
          <li>Es tu acceso permanente a todas las recetas premium</li>
          <li>Úsalo en cualquier dispositivo desde &quot;Ingresar código&quot;</li>
          <li>Ya quedó guardado automáticamente en este navegador</li>
        </ul>
      </div>

      <Link href="/recetas" className="inline-block bg-[#2D8C4E] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#246E3E] transition transform hover:scale-105 shadow-lg shadow-green-200">
        Ir a mis recetas →
      </Link>
    </div>
  );
}

export default function GraciasPage() {
  return (
    <Suspense fallback={
      <div className="max-w-xl mx-auto px-4 py-20 text-center">
        <div className="animate-spin text-5xl mb-4">⏳</div>
        <p className="text-gray-600 text-lg">Cargando...</p>
      </div>
    }>
      <GraciasContent />
    </Suspense>
  );
}
