import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

export function useServiceUiAnimation(refs) {
  useEffect(() => {
    const { serviceUi, heading, body, line, services } = refs;

    // Ensure all refs are available before creating animation
    if (!serviceUi?.current || !heading?.current || !body?.current ||
      !line?.current || !services?.current) {
      return;
    }

    const trigger = ScrollTrigger.create({
      trigger: serviceUi.current,
      start: '150px bottom',
      animation: gsap
        .timeline()
        .to(heading.current, { opacity: 1, y: 0, ease: 'power4.out', duration: 1.25 }, 0)
        .to(body.current, { opacity: 1, y: 0, ease: 'power4.out', duration: 1.25 }, 0.2)
        .to(line.current, { width: '100%', ease: 'power4.inOut', duration: 1.5 }, 0.2)
        .to(services.current, { opacity: 1, y: 0, ease: 'power4.out', duration: 1.25 }, 0.5),
      toggleActions: 'play none none none',
    });
    ScrollTrigger.refresh();
    return () => {
      trigger.kill();
    };
  }, [refs]);
}
