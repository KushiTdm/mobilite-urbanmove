import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { SmoothScrollProvider } from '@/components/smooth-scroll-provider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const space = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'UrbanMove — Mobilité urbaine électrique',
  description:
    'Boutique premium de trottinettes, vélos électriques et skateboards. Livraison 48h, garantie 2 ans, essai 7 jours.',
  keywords: [
    'trottinette électrique',
    'vélo électrique',
    'mobilité urbaine',
    'skateboard électrique',
    'EDPM',
  ],
  openGraph: {
    title: 'UrbanMove — Mobilité urbaine électrique',
    description: 'La référence de la mobilité douce en France.',
    type: 'website',
    locale: 'fr_FR',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${space.variable}`}>
      <body className="bg-white text-gray-900 antialiased">
        <SmoothScrollProvider>
          <Navbar />
          <main className="pt-16">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
