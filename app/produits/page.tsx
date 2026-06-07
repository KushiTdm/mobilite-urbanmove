import { PRODUCTS } from '@/lib/data';
import { PageHero } from '@/components/page-hero';
import { ProductCard } from '@/components/product-card';
import { GsapInit } from '@/components/gsap-init';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Catalogue — UrbanMove',
  description: 'Toute la gamme de trottinettes, vélos et skateboards électriques UrbanMove.',
};

const FILTERS = [
  { label: 'Tous', value: 'all' },
  { label: 'Trottinettes', value: 'trottinette' },
  { label: 'Vélos électriques', value: 'velo' },
  { label: 'Skateboards', value: 'skateboard' },
];

export default function ProduitsPage({
  searchParams,
}: {
  searchParams: { type?: string };
}) {
  const active = searchParams.type || 'all';
  const filtered =
    active === 'all' ? PRODUCTS : PRODUCTS.filter((p) => p.type === active);

  return (
    <>
      <GsapInit />
      <PageHero
        eyebrow="Catalogue"
        title="Toute notre gamme"
        description="Trouvez l'engin qui correspond à vos trajets quotidiens. Tous nos produits sont garantis 2 ans, testés en conditions réelles, et livrés en 48h."
        crumbs={[
          { label: 'Accueil', href: '/' },
          { label: 'Produits' },
        ]}
      />

      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-10" data-reveal>
            {FILTERS.map((f) => {
              const isActive = active === f.value;
              return (
                <a
                  key={f.value}
                  href={f.value === 'all' ? '/produits' : `/produits?type=${f.value}`}
                  className={`text-sm font-semibold px-4 py-2 rounded-full border transition-all ${
                    isActive
                      ? 'bg-gray-900 text-white border-gray-900'
                      : 'bg-white text-gray-700 border-gray-200 hover:border-gray-400 hover:bg-gray-50'
                  }`}
                >
                  {f.label}
                </a>
              );
            })}
          </div>

          {filtered.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6" data-stagger>
              {filtered.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-gray-500" data-reveal>
              <p className="text-lg">Aucun produit dans cette catégorie pour le moment.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
