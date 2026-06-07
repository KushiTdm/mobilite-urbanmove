'use client';

import { useState } from 'react';
import { IconCheck, IconArrowRight } from './icons';

export function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  if (submitted) {
    return (
      <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 px-6 py-3 rounded-xl font-medium">
        <IconCheck size={16} strokeWidth={2.5} />
        Merci ! Vous êtes bien inscrit.
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="votre@email.fr"
        required
        className="flex-1 bg-white/10 border border-white/15 text-white placeholder-gray-500 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all"
      />
      <button
        type="submit"
        className="bg-emerald-500 hover:bg-emerald-400 text-white font-semibold px-6 py-3 rounded-xl transition-colors inline-flex items-center justify-center gap-2 group"
      >
        S'inscrire
        <IconArrowRight
          size={16}
          strokeWidth={2.5}
          className="transition-transform group-hover:translate-x-0.5"
        />
      </button>
    </form>
  );
}
