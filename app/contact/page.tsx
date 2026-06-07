import { PageHero } from '@/components/page-hero';
import { ContactForm } from '@/components/contact-form';
import { GsapInit } from '@/components/gsap-init';
import { IconMail, IconMapPin, IconPhone, IconClock } from '@/components/icons';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact — UrbanMove',
  description: 'Une question ? Notre équipe vous répond sous 24h.',
};

const INFOS = [
  {
    icon: IconMapPin,
    title: 'Showroom Paris',
    value: '42 Rue de la Roquette',
    sub: '75011 Paris',
    href: 'https://maps.google.com/?q=42+Rue+de+la+Roquette+Paris',
    external: true,
  },
  {
    icon: IconPhone,
    title: 'Téléphone',
    value: '+33 1 42 00 11 22',
    sub: 'Lun-Sam 9h-19h',
    href: 'tel:+33142001122',
  },
  {
    icon: IconMail,
    title: 'Email',
    value: 'bonjour@urbanmove.fr',
    sub: 'Réponse sous 24h',
    href: 'mailto:bonjour@urbanmove.fr',
  },
  {
    icon: IconClock,
    title: 'Horaires',
    value: '9h — 19h',
    sub: 'Du lundi au samedi',
  },
];

export default function ContactPage() {
  return (
    <>
      <GsapInit />
      <PageHero
        eyebrow="Contact"
        title="Parlons mobilité."
        description="Conseil produit, SAV, partenariat : notre équipe est à votre écoute. Réponse garantie sous 24h ouvrées."
        crumbs={[
          { label: 'Accueil', href: '/' },
          { label: 'Contact' },
        ]}
      />

      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14" data-stagger>
            {INFOS.map(({ icon: Icon, title, value, sub, href, external }) => {
              const Tag = href ? 'a' : 'div';
              return (
                <Tag
                  key={title}
                  {...(href ? { href, ...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {}) } : {})}
                  data-stagger-item
                  className={`bg-gray-50 border border-gray-100 rounded-3xl p-5 transition-all ${
                    href ? 'hover:border-emerald-200 hover:bg-emerald-50/40 cursor-pointer' : ''
                  }`}
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-3">
                    <Icon size={18} strokeWidth={2} />
                  </div>
                  <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">{title}</p>
                  <p className="font-bold text-gray-900 mt-1">{value}</p>
                  <p className="text-sm text-gray-500">{sub}</p>
                </Tag>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div data-reveal>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Envie de passer nous voir ?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Notre showroom parisien vous accueille pour essayer librement la gamme. Nos
                conseillers vous guident sans pression — sur place ou par téléphone, vous
                repartez avec le produit qui vous correspond.
              </p>
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
                <iframe
                  src="https://www.openstreetmap.org/export/embed.html?bbox=2.376%2C48.855%2C2.382%2C48.860&amp;layer=mapnik"
                  className="w-full h-full"
                  loading="lazy"
                  title="Showroom UrbanMove"
                />
              </div>
            </div>

            <div data-reveal>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
