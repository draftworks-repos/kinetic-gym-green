import { useEffect, useRef } from 'react';

/**
 * Hook to pause and unpause CSS animations when elements enter or leave the viewport
 * using an IntersectionObserver.
 */
export function useInViewAnimation<T extends HTMLElement = HTMLElement>(
  threshold: number = 0.15,
  rootMargin: string = '0px 0px -40px 0px'
) {
  const elementRef = useRef<T | null>(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('is-in-viewport');
            el.style.setProperty('--kinetic-play-state', 'running');
            el.style.animationPlayState = 'running';
          } else {
            el.classList.remove('is-in-viewport');
            el.style.setProperty('--kinetic-play-state', 'paused');
            el.style.animationPlayState = 'paused';
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin]);

  return elementRef;
}

/**
 * Global observer hook that automatically attaches to all elements with
 * `.kinetic-auto-anim` or `[data-anim-pause]` across the page.
 */
export function useGlobalAnimationObserver() {
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;

    const observedElements = new Set<Element>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            target.classList.add('is-in-viewport');
            target.style.setProperty('--kinetic-play-state', 'running');
            target.style.animationPlayState = 'running';
          } else {
            target.classList.remove('is-in-viewport');
            target.style.setProperty('--kinetic-play-state', 'paused');
            target.style.animationPlayState = 'paused';
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '20px 0px',
      }
    );

    const scanAndObserve = () => {
      const candidates = document.querySelectorAll('.kinetic-auto-anim, [data-anim-pause="true"]');
      candidates.forEach((el) => {
        if (!observedElements.has(el)) {
          observer.observe(el);
          observedElements.add(el);
        }
      });
    };

    scanAndObserve();
    const interval = setInterval(scanAndObserve, 1500);

    return () => {
      clearInterval(interval);
      observer.disconnect();
    };
  }, []);
}
