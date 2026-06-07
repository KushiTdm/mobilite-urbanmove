'use client';

import { useState } from 'react';
import { IconChevronDown } from './icons';

export function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 last:border-0" data-stagger-item>
      <button
        className="w-full flex items-center justify-between py-5 text-left gap-4 group"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-semibold text-gray-800 group-hover:text-gray-900 transition-colors">
          {q}
        </span>
        <span
          className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
            open ? 'bg-emerald-500 text-white rotate-180' : 'bg-gray-100 text-gray-600'
          }`}
        >
          <IconChevronDown size={16} strokeWidth={2.5} />
        </span>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ${
          open ? 'grid-rows-[1fr] pb-5' : 'grid-rows-[0fr]'
        }`}
      >
        <p className="min-h-0 text-gray-600 leading-relaxed text-sm">{a}</p>
      </div>
    </div>
  );
}
