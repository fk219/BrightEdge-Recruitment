'use client';

import { useEffect, useState, useRef } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTopButton({
  showAfter = 300, // px scrolled before showing
} = {}) {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const rafLock = useRef(false);
  const prefersReduced = useRef(false);

  useEffect(() => {
    // Respect user motion preferences
    prefersReduced.current = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false;

    const update = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? Math.min(100, Math.round((scrollTop / docHeight) * 100)) : 0;

      setProgress(pct);
      setVisible(scrollTop > showAfter);
      rafLock.current = false;
    };

    const onScroll = () => {
      if (rafLock.current) return;
      rafLock.current = true;
      requestAnimationFrame(update);
    };

    const onResize = onScroll;

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    update();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, [showAfter]);

  const scrollToTop = () => {
    if (prefersReduced.current) {
      window.scrollTo(0, 0);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      title="Scroll to top"
      className={`
        fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50
        transition-all duration-300
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}
        group
      `}
    >
      {/* Progress ring background */}
      <span
        aria-hidden="true"
        className="absolute inset-0 w-14 h-14 sm:w-16 sm:h-16 rounded-full"
        style={{
          background: `conic-gradient(#2563eb ${progress}%, rgba(148,163,184,0.25) 0)`,
        }}
      />
      {/* Inner button */}
      <span className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white shadow-lg ring-1 ring-gray-200 transition-all duration-300 group-hover:shadow-xl">
        <span className="flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md transition-all duration-300 group-hover:from-blue-700 group-hover:to-blue-800 group-active:scale-95">
          <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6" />
        </span>
      </span>
    </button>
  );
}