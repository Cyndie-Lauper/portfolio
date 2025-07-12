import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useCursorPosition } from './useCursorPosition';
import CursorSVG from './CursorSVG';

export function AnimatedCursor() {
  const cursor = useCursorPosition();
  const curs = useRef(null);
  const svg = useRef(null);

  useEffect(() => {
    // TODO Learn useContext and useRef here
    const images = document.querySelectorAll('.img');
    const tl = gsap.timeline({ paused: true });

    tl.to(curs.current, {
      height: '112px',
      width: '112px',
      ease: 'expo.inout',
    }).to(svg.current, { opacity: 1, width: '96px', height: '96px' }, 0);

    // Add null checks
    if (!curs.current || !svg.current) return;

    function onEnter() { tl.play(); }
    function onLeave() {
      tl.reverse();
      tl.eventCallback('onReverseComplete', function () {
        if (svg.current) gsap.set(svg.current, { opacity: 0 });
        if (curs.current) gsap.set(curs.current, { height: '12px', width: '12px' });
      });
    }

    images.forEach((img) => {
      img.addEventListener('mouseenter', onEnter);
      img.addEventListener('mouseleave', onLeave);
    });

    return () => {
      images.forEach((img) => {
        img.removeEventListener('mouseenter', onEnter);
        img.removeEventListener('mouseleave', onLeave);
      });
    };
  }, []);

  return (
    <div
      ref={curs}
      className="cursor pointer-events-none fixed left-1/2 top-1/2 z-[999] hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-secondary-600 sm:flex"
      style={{ left: `${cursor.x}px`, top: `${cursor.y}px` }}
    >
      <CursorSVG svgRef={svg} />
    </div>
  );
}
