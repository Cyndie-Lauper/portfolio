import { gsap } from 'gsap';
import { useRef, useEffect } from 'react';

export default function Hero() {
  const img = useRef(null);
  const titles = useRef([]);
  const scrollLine = useRef(null);
  const scroll = useRef(null);

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

  useEffect(() => {
    let tl = gsap.timeline();
    tl.from(shape, {
      opacity: 0,
      scale: 0,
      ease: 'elastic.out(1,0.3)',
    })
      .to(
        shape,
        {
          rotation: 'random([-360, 360])',
        },
        '<'
      )
      .to(
        shape,
        {
          y: '120vh',
          ease: 'back.in(1.7)',
          duration: 1,
        },
        0
      );
  }, []);
  let flair = gsap.utils.toArray('.flair');
  let gap = 150; // if you're nosy though, this number spaces the 'lil shapes out
  let index = 0;
  let wrapper = gsap.utils.wrap(0, flair.length);
  gsap.defaults({ duration: 1 });

  let mousePos = { x: 0, y: 0 };
  let lastMousePos = mousePos;
  let cachedMousePos = mousePos;

  window.addEventListener('mousemove', (e) => {
    mousePos = {
      x: e.x,
      y: e.y,
    };
  });

  gsap.ticker.add(ImageTrail);

  function ImageTrail() {
    let travelDistance = Math.hypot(
      lastMousePos.x - mousePos.x,
      lastMousePos.y - mousePos.y
    );

    // keep the previous mouse position for animation
    cachedMousePos.x = gsap.utils.interpolate(
      cachedMousePos.x || mousePos.x,
      mousePos.x,
      0.1
    );
    cachedMousePos.y = gsap.utils.interpolate(
      cachedMousePos.y || mousePos.y,
      mousePos.y,
      0.1
    );

    if (travelDistance > gap) {
      animateImage();
      lastMousePos = mousePos;
    }
  }

  function animateImage() {
    let wrappedIndex = wrapper(index);

    console.log(index, flair.length);

    let img = flair[wrappedIndex];
    gsap.killTweensOf(img);

    gsap.set(img, {
      clearProps: 'all',
    });

    gsap.set(img, {
      opacity: 1,
      left: mousePos.x,
      top: mousePos.y,
      xPercent: -50,
      yPercent: -50,
    });

    playAnimation(img);

    index++;
  }

  return (
    <section
      id="hero"
      className="hero relative flex h-screen w-full select-none items-center justify-center"
      aria-label="hero"
    >
      <div className="z-10 flex w-full flex-col items-center text-title text-accent-300">
        <div className="title text-base">
          {/* Learn more about useRef */}
          <h1
            ref={(el) => (titles.current[0] = el)}
            className="translate-y-96 overflow-visible"
          >
            Hey, I&apos;m Minh
          </h1>
        </div>
        <div className="title py-0 text-center font-bold uppercase 2xl:text-[9vw]">
          <h1
            ref={(el) => (titles.current[1] = el)}
            className="translate-y-96 overflow-visible"
          >
            My Portfolio
          </h1>
        </div>
        <div className="title py-0 text-lg font-medium leading-tight">
          <h1 ref={(el) => (titles.current[2] = el)} className="translate-y-96">
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

      <div class="content">
        <img
          class="flair fixed w-[70px] opacity-0"
          src="https://assets.codepen.io/16327/Revised+Flair.png"
        />
        <img
          class="flair fixed w-[70px] opacity-0"
          src="https://assets.codepen.io/16327/Revised+Flair-1.png"
        />
        <img
          class="flair fixed w-[70px] opacity-0"
          src="https://assets.codepen.io/16327/Revised+Flair-2.png"
        />
        <img
          class="flair fixed w-[70px] opacity-0"
          src="https://assets.codepen.io/16327/Revised+Flair-3.png"
        />
        <img
          class="flair fixed w-[70px] opacity-0"
          src="https://assets.codepen.io/16327/Revised+Flair-4.png"
        />
        <img
          class="flair fixed w-[70px] opacity-0"
          src="https://assets.codepen.io/16327/Revised+Flair-5.png"
        />
        <img
          class="flair fixed w-[70px] opacity-0"
          src="https://assets.codepen.io/16327/Revised+Flair-6.png"
        />
        <img
          class="flair fixed w-[70px] opacity-0"
          src="https://assets.codepen.io/16327/Revised+Flair-7.png"
        />
        <img
          class="flair fixed w-[70px] opacity-0"
          src="https://assets.codepen.io/16327/Revised+Flair-8.png"
        />
        <img
          class="flair fixed w-[70px] opacity-0"
          src="https://assets.codepen.io/16327/Revised+Flair.png"
        />
        <img
          class="flair fixed w-[70px] opacity-0"
          src="https://assets.codepen.io/16327/Revised+Flair-1.png"
        />
        <img
          class="flair fixed w-[70px] opacity-0"
          src="https://assets.codepen.io/16327/Revised+Flair-2.png"
        />
        <img
          class="flair fixed w-[70px] opacity-0"
          src="https://assets.codepen.io/16327/Revised+Flair-3.png"
        />
        <img
          class="flair fixed w-[70px] opacity-0"
          src="https://assets.codepen.io/16327/Revised+Flair-4.png"
        />
        <img
          class="flair fixed w-[70px] opacity-0"
          src="https://assets.codepen.io/16327/Revised+Flair-5.png"
        />
        <img
          class="flair fixed w-[70px] opacity-0"
          src="https://assets.codepen.io/16327/Revised+Flair-6.png"
        />
        <img
          class="flair fixed w-[70px] opacity-0"
          src="https://assets.codepen.io/16327/Revised+Flair-7.png"
        />
        <img
          class="flair fixed w-[70px] opacity-0"
          src="https://assets.codepen.io/16327/Revised+Flair-8.png"
        />
      </div>
    </section>
  );
}
