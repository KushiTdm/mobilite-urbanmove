import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PRODUCTS } from '@/lib/data';
import {
  IconArrowRight,
  IconBattery,
  IconBolt,
  IconCheck,
  IconChevronRight,
  IconShield,
  IconSparkles,
  IconTruck,
  IconWind,
} from '@/components/icons';
import { StarRating } from '@/components/star-rating';
import { ProductCard } from '@/components/product-card';
import { GsapInit } from '@/components/gsap-init';
import type { Metadata } from 'next';

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const p = PRODUCTS.find((x) => x.slug === params.slug);
  if (!p) return { title: 'Produit introuvable' };
  return {
    title: `${p.name} — UrbanMove`,
    description: p.description,
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = PRODUCTS.find((p) => p.slug === params.slug);
  if (!product) notFound();

  const gallery = product.gallery && product.gallery.length > 0 ? product.gallery : [product.image];
  const related = PRODUCTS.filter((p) => p.slug !== product.slug).slice(0, 4);

  return (
    <>
      <GsapInit />

      <section className="bg-gradient-to-br from-gray-50 via-white to-emerald-50/40 pt-10 pb-10 sm:pt-12 sm:pb-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-1.5 text-xs text-gray-500 mb-6">
            <Link href="/" className="hover:text-gray-900">Accueil</Link>
            <IconChevronRight size={12} className="text-gray-300" />
            <Link href="/produits" className="hover:text-gray-900">Produits</Link>
            <IconChevronRight size={12} className="text-gray-300" />
            <span className="text-gray-700 font-medium">{product.name}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            <div data-reveal>
              <div className="relative aspect-square rounded-3xl overflow-hidden bg-white shadow-soft mb-3">
                <Image
                  src={gallery[0]}
                  alt={product.name}
                  fill
                  sizes="(min-width:1024px) 50vw, 100vw"
                  className="object-cover"
                  priority
                />
                <span
                  className={`absolute top-4 left-4 ${product.badgeColor} text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm`}
                >
                  {product.badge}
                </span>
              </div>
              {gallery.length > 1 && (
                <div className="grid grid-cols-4 gap-3">
                  {gallery.slice(0, 4).map((g, i) => (
                    <div
                      key={i}
                      className="relative aspect-square rounded-xl overflow-hidden bg-white border border-gray-100"
                    >
                      <Image src={g} alt="" fill sizes="20vw" className="object-cover" />
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div data-reveal>
              <p className="text-xs font-bold text-emerald-600 uppercase tracking-[0.2em] mb-3">
                {product.category}
              </p>
              <h1 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 mb-4 text-balance">
                {product.name}
              </h1>

              <div className="flex items-center gap-3 mb-6">
                <StarRating rating={product.rating} size={18} />
                <span className="text-sm text-gray-500">
                  {product.rating} · {product.reviews} avis
                </span>
              </div>

              <p className="text-gray-600 leading-relaxed mb-6">{product.description}</p>

              <div className="grid grid-cols-3 gap-3 mb-8">
                {[
                  { icon: IconBattery, label: 'Autonomie', value: product.autonomy },
                  { icon: IconWind, label: 'Vitesse', value: product.speed },
                  { icon: IconBolt, label: 'Recharge', value: product.charge },
                ].map(({ icon: Icon, label, value }) => (
                  <div
                    key={label}
                    className="bg-white rounded-2xl border border-gray-100 p-4 text-center shadow-sm"
                  >
                    <Icon
                      size={20}
                      className="text-emerald-600 mx-auto mb-2"
                      strokeWidth={2}
                    />
                    <p className="text-xs text-gray-500 mb-0.5">{label}</p>
                    <p className="font-bold text-gray-900 text-sm">{value}</p>
                  </div>
                ))}
              </div>

              <div className="bg-white border border-gray-100 rounded-3xl p-6 mb-6 shadow-soft">
                <div className="flex items-end gap-3 mb-5">
                  <span className="font-display text-4xl font-bold text-gray-900">
                    {product.price} €
                  </span>
                  {product.oldPrice && (
                    <span className="text-lg text-gray-400 line-through mb-1">
                      {product.oldPrice} €
                    </span>
                  )}
                  <span className="ml-auto text-xs text-emerald-600 font-semibold bg-emerald-50 px-2 py-1 rounded-full">
                    ou 3× {Math.round(parseInt(product.price.replace(/\s/g, '')) / 3)}€
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button className="bg-gray-900 hover:bg-emerald-600 text-white font-semibold py-3.5 rounded-xl transition-colors inline-flex items-center justify-center gap-2">
                    Ajouter au panier
                    <IconArrowRight size={16} strokeWidth={2.5} />
                  </button>
                  <Link
                    href="/contact"
                    className="bg-white border border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-900 font-semibold py-3.5 rounded-xl transition-colors inline-flex items-center justify-center gap-2"
                  >
                    Demander conseil
                  </Link>
                </div>
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                {[
                  { icon: IconTruck, text: 'Livraison 48h offerte' },
                  { icon: IconShield, text: 'Garantie 2 ans' },
                  { icon: IconSparkles, text: 'Essai 7 jours sans risque' },
                  { icon: IconCheck, text: 'Certifié CE' },
                ].map(({ icon: Icon, text }) => (
                  <li
                    key={text}
                    className="flex items-center gap-2.5 text-sm text-gray-700"
                  >
                    <Icon size={18} className="text-emerald-600 shrink-0" strokeWidth={2} />
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10">
            <div data-reveal>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Caractéristiques techniques
              </h2>
              <div className="bg-gray-50 rounded-3xl border border-gray-100 divide-y divide-gray-200">
                {product.specs.map((s) => (
                  <div
                    key={s.label}
                    className="flex items-center justify-between px-5 py-3.5 text-sm"
                  >
                    <span className="text-gray-500">{s.label}</span>
                    <span className="font-semibold text-gray-900">{s.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div data-reveal>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Points forts
              </h2>
              <ul className="space-y-3">
                {product.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-3 p-4 bg-emerald-50/40 rounded-2xl border border-emerald-100/50"
                  >
                    <div className="w-7 h-7 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
                      <IconCheck size={14} strokeWidth={3} />
                    </div>
                    <span className="text-gray-800 font-medium">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10" data-reveal>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900">
              Autres modèles
            </h2>
            <Link
              href="/produits"
              className="text-sm font-semibold text-emerald-600 hover:text-emerald-700"
            >
              Tout voir →
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6" data-stagger>
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
