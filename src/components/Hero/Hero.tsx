import { gsap } from 'gsap';
import { useRef, useEffect } from 'react';

export function Hero() {
  const img = useRef<HTMLImageElement>(null);
  const titles = useRef<HTMLHeadingElement[]>([]);
  const scrollLine = useRef<HTMLSpanElement>(null);
  const scroll = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });
    tl.from(scrollLine.current, {
      translateX: -40,
      duration: 1.5,
      ease: 'power4.inOut',
    });
  }, []);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(
      img.current,
      { scale: 2, duration: 3.2, ease: 'power4.inOut' },
      '-=3.1'
    )
      .to(titles.current, { y: 0, duration: 2, ease: 'power4.inOut' }, '-=2.5')
      .from(scroll.current, { opacity: 0, duration: 1, ease: 'out' }, '-=2');
  }, []);

  // useEffect(() => {
  //   let tl = gsap.timeline();
  //   tl.from(shape, {
  //     opacity: 0,
  //     scale: 0,
  //     ease: 'elastic.out(1,0.3)',
  //   })
  //     .to(
  //       shape,
  //       {
  //         rotation: 'random([-360, 360])',
  //       },
  //       '<'
  //     )
  //     .to(
  //       shape,
  //       {
  //         y: '120vh',
  //         ease: 'back.in(1.7)',
  //         duration: 1,
  //       },
  //       0
  //     );
  // }, []);

  return (
    <section
      id="hero"
      className="hero relative flex h-screen w-full select-none items-center justify-center"
      aria-label="hero"
    >
      <div className="z-10 flex w-full flex-col items-center text-title text-accent-300">
        <div className="title text-base">
          <h1
            ref={(el) => (titles.current[0] = el!)}
            className="translate-y-96 overflow-visible"
          >
            Hey, I&apos;m Minh
          </h1>
        </div>
        <div className="title py-0 text-center font-bold uppercase 2xl:text-[9vw]">
          <h1
            ref={(el) => (titles.current[1] = el!)}
            className="translate-y-96 overflow-visible"
          >
            My Portfolio
          </h1>
        </div>
        <div className="title py-0 text-lg font-medium leading-tight">
          <h1 ref={(el) => (titles.current[2] = el!)} className="translate-y-96">
            CREATE BY CYNDI LAUPER (IT'S ME)
          </h1>
        </div>
      </div>
      <div
        ref={scroll}
        className="absolute bottom-12 right-0 flex flex-col items-center justify-center space-y-8"
      >
        <span className=" rotate-90 text-body-3">scroll</span>
        <div className="relative h-1 w-10 rotate-90 overflow-hidden">
          <span
            ref={scrollLine}
            className="absolute h-[0.08em] w-10 translate-x-10 bg-accent-300"
          ></span>
        </div>
      </div>

      <div className="content">
        {[...Array(18)].map((_, index) => (
          <img
            key={index}
            className="flair fixed w-[70px] opacity-0"
            src={`https://assets.codepen.io/16327/Revised+Flair${
              index % 9 === 0 ? '' : `-${index % 9}`
            }.png`}
            alt=""
          />
        ))}
      </div>
    </section>
  );
}