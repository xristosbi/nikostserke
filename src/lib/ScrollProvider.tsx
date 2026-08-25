import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLocation } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const ScrollContext = createContext<{ lenis: Lenis | null }>({ lenis: null });

export function useLenis() {
  return useContext(ScrollContext).lenis;
}

// Single Lenis instance lives for the lifetime of the app shell (mounted once
// at the root layout), so it survives client-side route changes instead of
// being torn down and re-created on every page.
export function ScrollProvider({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const location = useLocation();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.4,
    });
    lenisRef.current = lenis;
    setLenis(lenis);

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
      setLenis(null);
    };
  }, []);

  // On every route change: jump scroll to top instantly (no flash of the
  // previous page's scroll position) and refresh ScrollTrigger once the new
  // page's DOM/pins are in place.
  useEffect(() => {
    const lenis = lenisRef.current;
    lenis?.scrollTo(0, { immediate: true });
    const id = requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });
    return () => cancelAnimationFrame(id);
  }, [location.pathname]);

  return <ScrollContext.Provider value={{ lenis }}>{children}</ScrollContext.Provider>;
}
