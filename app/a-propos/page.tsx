import Image from 'next/image';
import { PageHero } from '@/components/page-hero';
import { GsapInit } from '@/components/gsap-init';
import { IconLeaf, IconHeart, IconUsers, IconAward } from '@/components/icons';
import { STATS } from '@/lib/data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'À propos — UrbanMove',
  description:
    'UrbanMove est née en 2019 d\'une conviction : la mobilité urbaine doit être douce, accessible et écologique.',
};

const VALUES = [
  {
    icon: IconLeaf,
    title: 'Écologie',
    desc: 'Chaque trajet économisé est une victoire pour la planète. Nous compensons 100% de notre empreinte carbone.',
  },
  {
    icon: IconHeart,
    title: 'Passion',
    desc: 'L\'équipe UrbanMove teste personnellement chaque produit avant de le proposer à nos clients.',
  },
  {
    icon: IconUsers,
    title: 'Communauté',
    desc: '12 000+ riders en France échangent conseils, balades et bons plans dans notre communauté.',
  },
  {
    icon: IconAward,
    title: 'Excellence',
    desc: 'Sélection rigoureuse, SAV en 48h, garantie 2 ans : la qualité est notre signature.',
  },
];

const TEAM = [
  {
    name: 'Marie Lefèvre',
    role: 'Fondatrice & CEO',
    image:
      'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Antoine Dubois',
    role: 'Directeur produit',
    image:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Sarah Bensaïd',
    role: 'Responsable SAV',
    image:
      'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Lucas Martin',
    role: 'Tech Lead',
    image:
      'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export default function AProposPage() {
  return (
    <>
      <GsapInit />
      <PageHero
        eyebrow="Notre histoire"
        title="Bouger librement, sans polluer."
        description="UrbanMove est née en 2019 d'une conviction simple : nos villes méritent une mobilité plus douce, accessible et durable. Nous sélectionnons les meilleurs engins électriques et accompagnons nos clients de bout en bout."
        crumbs={[
          { label: 'Accueil', href: '/' },
          { label: 'À propos' },
        ]}
      />

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[5/6] rounded-3xl overflow-hidden" data-reveal>
            <Image
              src="/mobilite/trotinettes-veloElec.webp"
              alt="Trottinettes urbaines UrbanMove"
              fill
              sizes="(min-width:1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div data-reveal>
            <p className="text-xs font-bold text-emerald-600 uppercase tracking-[0.2em] mb-3">
              Notre mission
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-6 text-balance">
              Réinventer la mobilité du quotidien.
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Nous croyons qu'une trottinette ou un vélo électrique n'est pas un gadget : c'est
              un outil de liberté qui change la façon dont on vit la ville. Plus de bouchons,
              moins de pollution, plus de temps pour soi.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Chaque produit est testé pendant 60 jours en conditions réelles par notre équipe
              avant d'arriver dans notre catalogue. Si nous ne l'utiliserions pas
              quotidiennement, nous ne le vendons pas.
            </p>

            <div className="grid grid-cols-2 gap-4" data-stagger>
              {STATS.map(({ value, label, icon: Icon }) => (
                <div
                  key={label}
                  data-stagger-item
                  className="bg-emerald-50/50 border border-emerald-100/50 rounded-2xl p-4"
                >
                  <Icon size={20} className="text-emerald-600 mb-2" strokeWidth={2} />
                  <p className="font-display font-bold text-2xl text-gray-900">{value}</p>
                  <p className="text-xs text-gray-600">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-reveal>
            <p className="text-xs font-bold text-emerald-600 uppercase tracking-[0.2em] mb-3">
              Nos valeurs
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 text-balance">
              Ce qui nous fait avancer
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5" data-stagger>
            {VALUES.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                data-stagger-item
                className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm"
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                  <Icon size={22} strokeWidth={2} />
                </div>
                <h3 className="font-display font-bold text-lg text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-reveal>
            <p className="text-xs font-bold text-emerald-600 uppercase tracking-[0.2em] mb-3">
              L'équipe
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900">
              Les visages d'UrbanMove
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" data-stagger>
            {TEAM.map((m) => (
              <div key={m.name} data-stagger-item className="text-center group">
                <div className="relative aspect-square rounded-3xl overflow-hidden mb-4 bg-gray-100">
                  <Image
                    src={m.image}
                    alt={m.name}
                    fill
                    sizes="(min-width:1024px) 25vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-display font-bold text-gray-900">{m.name}</h3>
                <p className="text-sm text-emerald-600 font-medium">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
