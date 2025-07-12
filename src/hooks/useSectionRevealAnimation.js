import { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/all';
import { gsap } from 'gsap';

export function useSectionRevealAnimation({ sectionRef, headingRef, bodyRef }) {
  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top 400px',
      animation: gsap
        .timeline()
        .to(headingRef.current, { opacity: 1, y: 0, ease: 'power4.out', duration: 1.25 }, 0)
        .to(bodyRef.current, { opacity: 1, y: 0, ease: 'power4.out', duration: 1.25 }, 0.2),
      toggleActions: 'play none none none',
    });
    ScrollTrigger.refresh();
    return () => {
      trigger.kill();
    };
  }, [sectionRef, headingRef, bodyRef]);
}
