'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function GsapInit() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    // Reveal animation
    const reveals = gsap.utils.toArray<HTMLElement>('[data-reveal]');
    reveals.forEach((el) => {
      gsap.fromTo(
        el,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    // Stagger animations
    const staggers = gsap.utils.toArray<HTMLElement>('[data-stagger]');
    staggers.forEach((container) => {
      const items = container.querySelectorAll<HTMLElement>('[data-stagger-item]');
      gsap.fromTo(
        items,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: 'power3.out',
          stagger: 0.08,
          scrollTrigger: {
            trigger: container,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    // Parallax backgrounds
    const parallaxes = gsap.utils.toArray<HTMLElement>('[data-parallax]');
    parallaxes.forEach((el) => {
      const speed = parseFloat(el.dataset.parallax || '0.3');
      gsap.to(el, {
        yPercent: speed * 30,
        ease: 'none',
        scrollTrigger: {
          trigger: el.parentElement,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    });

    // Hero text parallax
    const heroTitle = document.querySelector<HTMLElement>('[data-hero-title]');
    if (heroTitle) {
      gsap.to(heroTitle, {
        y: -60,
        opacity: 0.4,
        ease: 'none',
        scrollTrigger: {
          trigger: heroTitle,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }

    // Marquee speed
    const counters = gsap.utils.toArray<HTMLElement>('[data-counter]');
    counters.forEach((el) => {
      const target = parseFloat(el.dataset.counter || '0');
      const suffix = el.dataset.counterSuffix || '';
      const obj = { val: 0 };
      gsap.to(obj, {
        val: target,
        duration: 2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        onUpdate: () => {
          el.textContent =
            Math.round(obj.val).toLocaleString('fr-FR') + suffix;
        },
      });
    });

    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return null;
}
