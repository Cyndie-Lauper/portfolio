import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Lenis from '@studio-freight/lenis';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * The navbar component.
 *
 * This component renders a sticky navbar with links to each section of the
 * website. It uses Lenis to enable smooth scrolling and GSAP to animate the
 * navbar's entrance.
 *
 * @param {Object[]} sectionRefs An array of references to the sections of the
 *   website.
 *
 * @returns {ReactElement} The navbar component.
 */
export default function Navigation({ sectionRefs }) {
  const navContainer = useRef(null);
  const cta = useRef(null);
  const navTimeline = gsap.timeline();
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const lenis = new Lenis();
    const animationFrame = (time) => {
      lenis.raf(time);
      requestAnimationFrame(animationFrame);
    };
    requestAnimationFrame(animationFrame);
    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    navTimeline.to(navContainer.current, {
      y: 0,
      duration: 3,
      delay: 2.2,
      ease: 'power4.inOut',
    });
  });

  useEffect(() => {
    const scrollTriggers = sectionRefs.map((section) =>
      ScrollTrigger.create({
        trigger: section,
        start: 'top 375px',
        end: 'bottom 300px',
        animation: navTimeline
          .to(navContainer.current, { color: '#DDDDD5' })
          .to(cta.current, { backgroundColor: '#D1D1C7', color: '#0E0E0C' }, 0)
          .to('.bg-secondary-200', { backgroundColor: '#0E0E0C' }, 0),
        toggleActions: 'restart reverse restart reverse',
      })
    );

    return () => {
      scrollTriggers.forEach((scrollTrigger) => scrollTrigger.kill());
    };
  });

  return (
    <header
      ref={navContainer}
      className="fixed top-0 z-50 flex w-full -translate-y-full items-center justify-between bg-secondary-200 px-5 py-4"
    >
      <a className="z-50"></a>
      <nav className="space-x-7 font-grotesk text-body-3 sm:block">
        <a href="/#about" className="group relative hidden md:inline-block">
          <span>about</span>
          <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
        </a>
        <a href="/#services" className="group relative hidden md:inline-block">
          <span>services</span>
          <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
        </a>
        <a href="/#works" className="group relative hidden md:inline-block">
          <span>projects</span>
          <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
        </a>
        <a href="/#contact" className="group relative hidden md:inline-block">
          <span>contact</span>
          <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
        </a>
      </nav>
    </header>
  );
}
