'use client';

import { useState } from 'react';
import { IconArrowRight, IconCheck } from './icons';

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="bg-emerald-50 border border-emerald-100 rounded-3xl p-8 text-center">
        <div className="w-14 h-14 rounded-full bg-emerald-500 text-white mx-auto flex items-center justify-center mb-4">
          <IconCheck size={28} strokeWidth={2.5} />
        </div>
        <h3 className="font-bold text-lg text-emerald-900 mb-2">Message envoyé !</h3>
        <p className="text-sm text-emerald-700">
          Nous vous répondrons sous 24h ouvrées.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="bg-gray-50 rounded-3xl p-6 sm:p-8 space-y-5 border border-gray-100"
    >
      <div className="grid sm:grid-cols-2 gap-5">
        {['Prénom', 'Nom'].map((label) => (
          <div key={label}>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              {label}
            </label>
            <input
              required
              type="text"
              placeholder={label}
              className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 transition-all"
            />
          </div>
        ))}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
        <input
          required
          type="email"
          placeholder="votre@email.fr"
          className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 transition-all"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">Sujet</label>
        <select className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 transition-all text-gray-700">
          <option>Conseil produit</option>
          <option>SAV / Garantie</option>
          <option>Commande &amp; Livraison</option>
          <option>Partenariat</option>
          <option>Autre</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">Message</label>
        <textarea
          required
          rows={4}
          placeholder="Votre message..."
          className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 transition-all resize-none"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-gray-900 hover:bg-emerald-600 text-white font-semibold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2 group"
      >
        Envoyer le message
        <IconArrowRight
          size={16}
          strokeWidth={2.5}
          className="transition-transform group-hover:translate-x-0.5"
        />
      </button>
    </form>
  );
}
