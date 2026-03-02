import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InstallBanner from '@/components/InstallBanner';
import ServiceWorkerRegistrar from '@/components/ServiceWorkerRegistrar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nutre — Ensaladas Fáciles para toda Latinoamérica',
  description: 'Descubre recetas de ensaladas fáciles, rápidas y deliciosas adaptadas a tu país. Más de 50,000 personas ya la usan.',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Nutre',
  },
};

export const viewport: Viewport = {
  themeColor: '#22c55e',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="apple-touch-icon" href="/icon-192.svg" />
      </head>
      <body className={`${inter.className} bg-white text-gray-900`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <InstallBanner />
        <ServiceWorkerRegistrar />
      </body>
    </html>
  );
}
