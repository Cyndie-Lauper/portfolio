import { gsap } from "gsap";
import { useRef, useEffect } from "react";

export default function Hero() {
  const img = useRef(null);
  const titles = useRef([]);
  const scrollLine = useRef(null);
  const scroll = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });
    tl.from(scrollLine.current, {
      translateX: -40,
      duration: 1.5,
      ease: "power4.inOut",
    });
  }, []);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(
        img.current,
        { scale: 2, duration: 3.2, ease: "power4.inOut" },
        "-=3.1"
      )
      .to(titles.current, { y: 0, duration: 2, ease: "power4.inOut" }, "-=2.5")
      .from(scroll.current, {opacity: 0, duration: 1, ease:"out"}, "-=2")
  }, []);

  return (
    <section id="hero" className="hero relative flex w-full h-screen select-none items-center justify-center" aria-label="hero">
      <div className="z-10 flex flex-col w-full items-center text-title text-accent-300">
        <div className="title text-base">
          {/* Learn more about useRef */}
          <h1 ref={(el) => (titles.current[0] = el)} className="translate-y-96 overflow-visible">
            Hey, I&apos;m Minh
          </h1>
        </div>
        <div className="title 2xl:text-[9vw] text-center font-bold uppercase py-0">
        <h1 ref={(el) => (titles.current[1] = el)} className="translate-y-96 overflow-visible">
            My Portfolio
          </h1>
        </div>
        <div className="title font-medium text-lg py-0 leading-tight">
          <h1 ref={(el) => (titles.current[2] = el)} className="translate-y-96">
            CREATE BY CYNDI LAUPER (IT'S ME)
          </h1>
        </div>
      </div>
      <div ref={scroll} className="absolute bottom-12 right-0 flex flex-col items-center justify-center space-y-8">
        <span className=" rotate-90 text-body-3">scroll</span>
        <div className="relative h-1 w-10 rotate-90 overflow-hidden">
          <span
            ref={scrollLine}
            className="absolute h-[0.08em] w-10 translate-x-10 bg-accent-300"
          ></span>
        </div>
      </div>
    </section>
  );
}
