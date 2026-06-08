import Image from 'next/image';
import Link from 'next/link';
import {
  FEATURES,
  PRODUCTS,
  REVIEWS,
  STATS,
  TRUST_BADGES,
  FAQS,
} from '@/lib/data';
import {
  IconArrowRight,
  IconChevronDown,
  IconChevronRight,
  IconCheck,
  IconMapPin,
  IconPhone,
  IconMail,
  IconStar,
  IconQuote,
  IconPlay,
  IconSparkles,
  IconHeadset,
} from '@/components/icons';
import { ProductCard } from '@/components/product-card';
import { FaqItem } from '@/components/faq-item';
import { StarRating } from '@/components/star-rating';
import { NewsletterForm } from '@/components/newsletter-form';
import { ContactForm } from '@/components/contact-form';
import { GsapInit } from '@/components/gsap-init';

const HERO_IMG = '/mobilite/trotinettes-veloElec.webp';
const CTA_IMG = '/mobilite/velo1.webp';

export default function HomePage() {
  return (
    <>
      <GsapInit />

      {/* HERO */}
      <section className="relative min-h-[100svh] flex items-center overflow-hidden -mt-16">
        <div className="absolute inset-0 z-0">
          <div data-parallax="0.5" className="absolute inset-0 -top-20 -bottom-20">
            <Image
              src={HERO_IMG}
              alt="Mobilité urbaine au lever du soleil"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-950/60 to-gray-950/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 lg:pt-40 lg:pb-32 w-full">
          <div className="max-w-3xl" data-hero-title>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-xs font-medium px-3.5 py-1.5 rounded-full mb-6 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              Livraison offerte dès 500€ d'achat
            </div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.05] mb-6 text-balance">
              Bougez libre.
              <br />
              <span className="text-gradient-brand">Bougez vert.</span>
            </h1>

            <p className="text-base sm:text-lg text-white/80 mb-8 max-w-xl leading-relaxed">
              Trottinettes, vélos électriques, skateboards — découvrez la mobilité urbaine
              de demain, disponible dès aujourd'hui.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/produits"
                className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 font-semibold px-6 py-4 rounded-xl hover:bg-gray-100 transition-all hover:scale-[1.02] shadow-lg"
              >
                Découvrir la gamme
                <IconArrowRight size={18} strokeWidth={2.5} />
              </Link>
              <Link
                href="/a-propos"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium px-6 py-4 rounded-xl hover:bg-white/20 transition-all"
              >
                <IconPlay size={14} className="text-emerald-400" />
                Voir la vidéo
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6" data-stagger>
              {STATS.map(({ value, label, icon: Icon }) => (
                <div key={label} className="flex items-center gap-3" data-stagger-item>
                  <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/10">
                    <Icon size={18} className="text-emerald-300" strokeWidth={2} />
                  </div>
                  <div>
                    <p className="text-base sm:text-xl font-bold text-white leading-tight">{value}</p>
                    <p className="text-[11px] sm:text-xs text-white/60">{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Link
          href="#features"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors group"
          aria-label="Faire défiler"
        >
          <span className="text-[11px] font-medium tracking-[0.2em] uppercase">Explorer</span>
          <span className="w-6 h-10 rounded-full border border-white/30 flex justify-center pt-1.5 group-hover:border-white/60 transition-colors">
            <span className="w-1 h-2 rounded-full bg-white/70 animate-bounce" />
          </span>
        </Link>
      </section>

      {/* TRUST STRIP */}
      <section className="bg-white border-y border-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6" data-stagger>
            {TRUST_BADGES.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 justify-center lg:justify-start"
                data-stagger-item
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                  <Icon size={20} strokeWidth={2} />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-gray-700">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="bg-gray-950 py-3 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="inline-flex items-center gap-6 px-8 text-sm text-white/70 font-medium">
              <span>⚡ Trottinettes électriques</span>
              <span className="w-1 h-1 rounded-full bg-emerald-400" />
              <span>🚴 Vélos électriques</span>
              <span className="w-1 h-1 rounded-full bg-emerald-400" />
              <span>🛹 Skateboards électriques</span>
              <span className="w-1 h-1 rounded-full bg-emerald-400" />
              <span>🪖 Accessoires &amp; Casques</span>
              <span className="w-1 h-1 rounded-full bg-emerald-400" />
              <span>🔧 Pièces détachées</span>
              <span className="w-1 h-1 rounded-full bg-emerald-400" />
            </span>
          ))}
        </div>
      </div>

      {/* FEATURES */}
      <section id="features" className="py-20 sm:py-28 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14" data-reveal>
            <p className="text-xs font-bold text-emerald-600 uppercase tracking-[0.2em] mb-3">
              Pourquoi UrbanMove ?
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-balance">
              Ce qui nous distingue
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
              Nous sélectionnons chaque produit pour sa performance, sa sécurité et son
              impact environnemental positif.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6" data-stagger>
            {FEATURES.map(({ icon: Icon, title, desc, color, bg }) => (
              <div
                key={title}
                data-stagger-item
                className="relative bg-white rounded-3xl p-6 sm:p-7 border border-gray-100 shadow-[0_2px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 group overflow-hidden"
              >
                <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br from-gray-50 to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
                <div
                  className={`relative w-12 h-12 ${bg} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-transform`}
                >
                  <Icon size={24} className={color} strokeWidth={2} />
                </div>
                <h3 className="relative font-display font-bold text-lg text-gray-900 mb-2">{title}</h3>
                <p className="relative text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4" data-reveal>
            <div>
              <p className="text-xs font-bold text-emerald-600 uppercase tracking-[0.2em] mb-3">
                Notre sélection
              </p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                Les plus populaires
              </h2>
            </div>
            <Link
              href="/produits"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-emerald-600 transition-colors group"
            >
              Voir tout le catalogue
              <IconChevronRight
                size={16}
                strokeWidth={2.5}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6" data-stagger>
            {PRODUCTS.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND with parallax */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div data-parallax="0.5" className="absolute inset-0 -top-20 -bottom-20">
          <Image
            src={CTA_IMG}
            alt="Ville lumineuse"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/95 via-emerald-800/90 to-cyan-900/85" />
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center" data-reveal>
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-xs font-medium px-3.5 py-1.5 rounded-full mb-6">
            <IconSparkles size={14} className="text-emerald-300" />
            Offre limitée
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6 text-balance">
            Essayez gratuitement
            <br />
            pendant 7 jours
          </h2>
          <p className="text-emerald-100/90 text-base sm:text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            Pas convaincu ? Testez votre engin chez vous sans risque. Retour gratuit si
            vous n'êtes pas satisfait.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/produits"
              className="inline-flex items-center justify-center gap-2 bg-white text-emerald-900 font-bold px-8 py-4 rounded-xl hover:bg-emerald-50 transition-all hover:scale-[1.02] shadow-xl"
            >
              Commencer l'essai
              <IconArrowRight size={18} strokeWidth={2.5} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border border-white/30 backdrop-blur-md bg-white/5 text-white font-medium px-8 py-4 rounded-xl hover:bg-white/15 transition-all"
            >
              <IconHeadset size={18} />
              Nous contacter
            </Link>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14" data-reveal>
            <p className="text-xs font-bold text-emerald-600 uppercase tracking-[0.2em] mb-3">
              Témoignages
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-balance">
              Ils roulent avec UrbanMove
            </h2>
            <div className="flex items-center justify-center gap-2 flex-wrap">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <IconStar
                    key={i}
                    size={20}
                    className="fill-amber-400 text-amber-400"
                    strokeWidth={0}
                  />
                ))}
              </div>
              <span className="text-gray-600 font-medium">
                4.9/5 sur plus de 600 avis
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-5 sm:gap-6" data-stagger>
            {REVIEWS.map((r) => (
              <div
                key={r.name}
                data-stagger-item
                className="relative bg-white rounded-3xl p-6 sm:p-7 border border-gray-100 shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300"
              >
                <IconQuote
                  size={32}
                  className="absolute top-5 right-5 text-emerald-100"
                  strokeWidth={0}
                />
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`w-11 h-11 ${r.avatarColor} rounded-full flex items-center justify-center text-white text-sm font-bold shadow-md`}
                  >
                    {r.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{r.name}</p>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <IconMapPin size={11} strokeWidth={2} />
                      {r.location}
                    </div>
                  </div>
                </div>
                <StarRating rating={r.rating} />
                <p className="text-gray-700 text-sm leading-relaxed my-4">"{r.text}"</p>
                <div className="flex items-center gap-1.5 pt-4 border-t border-gray-100">
                  <IconCheck size={13} className="text-emerald-500" strokeWidth={2.5} />
                  <span className="text-xs text-gray-500">
                    Achat vérifié — {r.product}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 sm:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14" data-reveal>
            <p className="text-xs font-bold text-emerald-600 uppercase tracking-[0.2em] mb-3">
              FAQ
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              Questions fréquentes
            </h2>
          </div>

          <div
            data-stagger
            className="bg-white rounded-3xl border border-gray-100 shadow-[0_2px_20px_rgba(0,0,0,0.03)] px-6 divide-y divide-gray-100"
          >
            {FAQS.map((f, i) => (
              <FaqItem key={i} q={f.q} a={f.a} />
            ))}
          </div>

          <div className="mt-10 text-center" data-reveal>
            <p className="text-sm text-gray-500 mb-3">Pas trouvé la réponse ?</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-700"
            >
              Contactez notre équipe
              <IconArrowRight size={14} strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-20 bg-gray-950 relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-30"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(16,185,129,0.3) 0%, transparent 60%)',
          }}
        />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-reveal>
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium px-3.5 py-1.5 rounded-full mb-5">
            <IconSparkles size={14} />
            Newsletter
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-3 text-balance">
            Restez informé
          </h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            Nouvelles collections, promotions exclusives et conseils mobilité — directement
            dans votre boîte mail.
          </p>
          <NewsletterForm />
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div data-reveal>
              <p className="text-xs font-bold text-emerald-600 uppercase tracking-[0.2em] mb-3">
                Contact
              </p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-balance">
                Une question ?<br />
                Parlons-en.
              </h2>
              <p className="text-gray-500 mb-8 leading-relaxed">
                Notre équipe est disponible du lundi au samedi de 9h à 19h pour vous
                conseiller et vous accompagner dans votre choix.
              </p>

              <div className="space-y-3">
                {[
                  {
                    icon: IconMapPin,
                    label: '42 Rue de la Roquette, 75011 Paris',
                    href: 'https://maps.google.com/?q=42+Rue+de+la+Roquette+Paris',
                    external: true,
                  },
                  {
                    icon: IconPhone,
                    label: '+33 1 42 00 11 22',
                    href: 'tel:+33142001122',
                  },
                  {
                    icon: IconMail,
                    label: 'bonjour@urbanmove.fr',
                    href: 'mailto:bonjour@urbanmove.fr',
                  },
                ].map(({ icon: Icon, label, href, external }) => (
                  <a
                    key={label}
                    href={href}
                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="flex items-center gap-4 group p-3 -mx-3 rounded-xl hover:bg-emerald-50/50 transition-colors"
                  >
                    <div className="w-11 h-11 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-emerald-500 transition-colors">
                      <Icon
                        size={18}
                        className="text-gray-600 group-hover:text-white transition-colors"
                        strokeWidth={2}
                      />
                    </div>
                    <span className="text-gray-700 group-hover:text-gray-900 font-medium transition-colors">
                      {label}
                    </span>
                  </a>
                ))}
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
