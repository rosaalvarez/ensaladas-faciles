'use client';
import { useState, useEffect } from 'react';

export default function InstallBanner() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handler = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShow(true);
    };
    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const install = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      await deferredPrompt.userChoice;
      setShow(false);
      setDeferredPrompt(null);
    }
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 bg-green-600 text-white rounded-2xl shadow-2xl p-4 z-50 flex items-center gap-4 animate-slide-up">
      <span className="text-3xl">🥗</span>
      <div className="flex-1">
        <p className="font-bold">Instala Nutre</p>
        <p className="text-sm text-green-100">Accede a tus recetas sin internet</p>
      </div>
      <button onClick={install} className="bg-white text-green-600 px-4 py-2 rounded-full font-semibold text-sm hover:bg-green-50 transition">
        Instalar
      </button>
      <button onClick={() => setShow(false)} className="text-green-200 hover:text-white">✕</button>
    </div>
  );
}
