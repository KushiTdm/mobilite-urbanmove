import Image from 'next/image';
import Link from 'next/link';
import { PageHero } from '@/components/page-hero';
import { GsapInit } from '@/components/gsap-init';
import { IconArrowUpRight, IconClock } from '@/components/icons';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog — UrbanMove',
  description: 'Conseils, tests, actualités mobilité urbaine.',
};

const POSTS = [
  {
    title: 'Trottinette vs vélo électrique : que choisir pour la ville ?',
    excerpt:
      'Autonomie, encombrement, prix : le guide complet pour faire le bon choix selon vos trajets.',
    image:
      'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'Guide',
    readTime: '7 min',
    date: '12 mai 2025',
  },
  {
    title: 'Les 5 règles d\'or pour bien entretenir sa trottinette',
    excerpt:
      'Pression des pneus, batterie, freins : nos conseils pour faire durer votre engin 3× plus longtemps.',
    image:
      'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'Entretien',
    readTime: '5 min',
    date: '28 avril 2025',
  },
  {
    title: 'Législation EDPM 2025 : ce qui change vraiment',
    excerpt:
      'Casque obligatoire, assurance, zones interdites : tout ce que vous devez savoir.',
    image:
      'https://images.pexels.com/photos/1462636/pexels-photo-1462636.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'Législation',
    readTime: '6 min',
    date: '15 avril 2025',
  },
  {
    title: 'Notre top 10 des plus belles balades à vélo en Île-de-France',
    excerpt:
      'Boucles roulantes, cadres bucoliques : nos coups de cœur pour les week-ends.',
    image:
      'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'Balades',
    readTime: '8 min',
    date: '3 avril 2025',
  },
  {
    title: 'Skateboard électrique : comment débuter sans se blesser',
    excerpt:
      'Postures, équipement, exercices : nos conseils pour progresser en sécurité.',
    image:
      'https://images.pexels.com/photos/1170149/pexels-photo-1170149.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'Débutant',
    readTime: '4 min',
    date: '20 mars 2025',
  },
  {
    title: 'Batterie lithium : 7 idées reçues à oublier',
    excerpt:
      'Décharge complète, charge nocturne, hiver : on démêle le vrai du faux.',
    image:
      'https://images.pexels.com/photos/7641848/pexels-photo-7641848.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'Tech',
    readTime: '5 min',
    date: '8 mars 2025',
  },
];

export default function BlogPage() {
  return (
    <>
      <GsapInit />
      <PageHero
        eyebrow="Le blog"
        title="Lecture, conseils et inspiration."
        description="Tests produits, guides d'achat, actualité de la mobilité urbaine : tout ce qu'il faut savoir pour rouler intelligent."
        crumbs={[
          { label: 'Accueil', href: '/' },
          { label: 'Blog' },
        ]}
      />

      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" data-stagger>
            {POSTS.map((p) => (
              <article
                key={p.title}
                data-stagger-item
                className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <Link href="#" className="block">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-xs font-bold text-gray-900 px-3 py-1 rounded-full">
                      {p.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                      <IconClock size={12} strokeWidth={2} />
                      <span>{p.readTime}</span>
                      <span>•</span>
                      <span>{p.date}</span>
                    </div>
                    <h3 className="font-display font-bold text-lg text-gray-900 mb-2 line-clamp-2 group-hover:text-emerald-700 transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed line-clamp-2 mb-4">
                      {p.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-emerald-600">
                      Lire l'article
                      <IconArrowUpRight
                        size={14}
                        strokeWidth={2.5}
                        className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                      />
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
