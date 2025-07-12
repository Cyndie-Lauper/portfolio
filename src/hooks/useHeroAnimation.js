import { useEffect } from 'react';
import { gsap } from 'gsap';

export function useHeroAnimation({ img, titles, scrollLine, scroll }) {
  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });
    tl.from(scrollLine.current, {
      translateX: -40,
      duration: 1.5,
      ease: 'power4.inOut',
    });
    return () => tl.kill();
  }, [scrollLine]);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(
      img.current,
      { scale: 2, duration: 3.2, ease: 'power4.inOut' },
      '-=3.1'
    )
      .to(titles.current, { y: 0, duration: 2, ease: 'power4.inOut' }, '-=2.5')
      .from(scroll.current, { opacity: 0, duration: 1, ease: 'out' }, '-=2');
    return () => tl.kill();
  }, [img, titles, scroll]);
}
