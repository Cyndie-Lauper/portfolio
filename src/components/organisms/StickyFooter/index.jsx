import Footer from './Footer';
import { useEffect } from 'react';
import Lenis from 'lenis';

export function StickyFooter() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => {
      lenis.destroy && lenis.destroy();
    };
  }, []);

  return <Footer />;
}
