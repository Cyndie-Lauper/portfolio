import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Lenis from '@studio-freight/lenis';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function NavBar({ sectionRefs }) {
  const navBar = useRef(null);
  const cta = useRef(null);
  const tl = gsap.timeline();
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const lenis = new Lenis();
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    tl.to(navBar.current, {
      y: 0,
      duration: 3,
      delay: 2.2,
      ease: 'power4.inOut',
    });
  });

  useEffect(() => {
    sectionRefs.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top 375px',
        end: 'bottom 300px',
        // markers: true,
        animation: gsap
          .timeline()
          .to(navBar.current, { color: '#DDDDD5' })
          .to(cta.current, { backgroundColor: '#D1D1C7', color: '#0E0E0C' }, 0)
          .to('.bg-secondary-200', { backgroundColor: '#0E0E0C' }, 0),

        toggleActions: 'restart reverse restart reverse',
      });
    });
  });

  return (
    <header
      ref={navBar}
      className="fixed top-0 z-50 flex w-full -translate-y-full items-center justify-between bg-secondary-200 px-5 py-4"
    >
      <a className="z-50"></a>
      <nav className=" space-x-7 font-grotesk text-body-3 sm:block">
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
