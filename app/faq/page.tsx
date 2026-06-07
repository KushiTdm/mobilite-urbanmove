import Link from 'next/link';
import { PageHero } from '@/components/page-hero';
import { FaqItem } from '@/components/faq-item';
import { GsapInit } from '@/components/gsap-init';
import { FAQS } from '@/lib/data';
import { IconArrowRight } from '@/components/icons';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ — UrbanMove',
  description: 'Toutes les réponses aux questions fréquentes sur nos produits et services.',
};

export default function FaqPage() {
  return (
    <>
      <GsapInit />
      <PageHero
        eyebrow="FAQ"
        title="Vos questions, nos réponses."
        description="Vous trouverez ici tout ce que vous devez savoir sur nos produits, la livraison, la garantie et le SAV."
        crumbs={[
          { label: 'Accueil', href: '/' },
          { label: 'FAQ' },
        ]}
      />

      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            data-stagger
            className="bg-white rounded-3xl border border-gray-100 shadow-soft px-6 divide-y divide-gray-100"
          >
            {FAQS.map((f, i) => (
              <FaqItem key={i} q={f.q} a={f.a} />
            ))}
          </div>

          <div
            data-reveal
            className="mt-10 bg-gradient-to-br from-emerald-50 to-cyan-50 border border-emerald-100 rounded-3xl p-8 text-center"
          >
            <h3 className="font-display text-xl font-bold text-gray-900 mb-2">
              Pas trouvé votre réponse ?
            </h3>
            <p className="text-gray-600 mb-5">
              Notre équipe répond sous 24h ouvrées, du lundi au samedi.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gray-900 hover:bg-emerald-600 text-white font-semibold px-5 py-3 rounded-xl transition-colors"
            >
              Contactez-nous
              <IconArrowRight size={16} strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
