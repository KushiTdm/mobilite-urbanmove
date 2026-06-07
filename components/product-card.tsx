'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import type { Product } from '@/lib/data';
import {
  IconBattery,
  IconWind,
  IconBolt,
  IconCheck,
  IconArrowRight,
} from './icons';
import { StarRating } from './star-rating';

export function ProductCard({ product }: { product: Product }) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      data-stagger-item
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-[0_2px_20px_rgba(0,0,0,0.04)] transition-all duration-500 will-change-transform ${
        hovered ? 'shadow-[0_24px_60px_rgba(0,0,0,0.10)] -translate-y-1.5 border-gray-200' : ''
      }`}
    >
      <Link href={`/produits/${product.slug}`} className="block">
        <div className="relative overflow-hidden aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className={`object-cover transition-transform duration-700 ${
              hovered ? 'scale-110' : 'scale-100'
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

          <span
            className={`absolute top-3.5 left-3.5 ${product.badgeColor} text-white text-[11px] font-semibold px-2.5 py-1 rounded-full shadow-sm`}
          >
            {product.badge}
          </span>

          <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-1.5">
            {[
              { icon: IconBattery, label: product.autonomy },
              { icon: IconWind, label: product.speed },
              { icon: IconBolt, label: product.charge },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-1 bg-white/95 backdrop-blur-md rounded-full px-2 py-0.5 text-[11px] font-semibold text-gray-800 shadow-sm"
              >
                <Icon size={11} strokeWidth={2} />
                {label}
              </div>
            ))}
          </div>
        </div>

        <div className="p-5">
          <p className="text-[11px] font-semibold text-emerald-600 uppercase tracking-widest mb-1">
            {product.category}
          </p>
          <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors">
            {product.name}
          </h3>

          <div className="flex items-center gap-2 mb-4">
            <StarRating rating={product.rating} />
            <span className="text-xs text-gray-500">({product.reviews})</span>
          </div>

          <ul className="space-y-1.5 mb-5">
            {product.features.slice(0, 3).map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                <IconCheck size={13} className="text-emerald-500 shrink-0" strokeWidth={2.5} />
                {f}
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div>
              <span className="text-2xl font-bold text-gray-900">{product.price} €</span>
              {product.oldPrice && (
                <span className="ml-2 text-sm text-gray-400 line-through">
                  {product.oldPrice} €
                </span>
              )}
            </div>
            <span className="bg-gray-900 group-hover:bg-emerald-600 text-white text-sm font-medium px-4 py-2 rounded-xl transition-colors inline-flex items-center gap-1.5">
              Voir
              <IconArrowRight
                size={14}
                strokeWidth={2.5}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
