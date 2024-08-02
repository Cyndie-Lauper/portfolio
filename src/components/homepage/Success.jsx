import { gsap } from "gsap";
import { useRef, useEffect } from "react";

export default function Hero() {
  const img = useRef(null);
  const imgContainer = useRef(null);
  const titles = useRef([]);
  const scroll = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(imgContainer.current, {
      scale: 1.3,
      duration: 3.25,
      ease: "power3.inOut",
    })
      .from(
        img.current,
        { scale: 2, duration: 3.2, ease: "power4.inOut" },
        "-=3.1"
      )
      .to(titles.current, { y: 0, duration: 2, ease: "power4.inOut" }, "-=2.5")
      .from(scroll.current, { opacity: 0, duration: 1, ease: "out" }, "-=2");
  }, []);

  return (
    <section
      id="hero"
      className="hero relative flex h-screen w-full select-none items-center justify-center"
      aria-label="hero"
    >
      <div className="z-10 mb-10 grid w-full grid-cols-2 text-title text-accent-300">
        <div className="title-success pl-20 text-start text-[90px] font-semibold uppercase">
          {/* Learn more about useRef */}
          <h1 ref={(el) => (titles.current[0] = el)} className="translate-y-96">
            Success! <br /> message sent.
          </h1>
        </div>
        <div className="title-success pr-60 pt-[135px] text-end text-[40px] font-medium text-secondary-700">
          <h1 ref={(el) => (titles.current[1] = el)} className="translate-y-96">
            I will get back to you <br />
            as soon as possible!
          </h1>
        </div>
        <div className="title-success">
          <button className="button1 pl-[90px]">
            <a href="/" className="font-medium">HEAD BACK HOME</a>
            <div class="icon">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                >
                  <path
                    d="M1.05403 31.6175C0.271626 32.3972 0.271626 33.6614 1.05403 34.441C1.83644 35.2207 3.10497 35.2207 3.88737 34.441L1.05403 31.6175ZM35.5599 2.05152C35.5599 0.948871 34.6629 0.0549994 33.5564 0.0549994L15.5251 0.0549994C14.4187 0.0549994 13.5217 0.948871 13.5217 2.05152C13.5217 3.15416 14.4187 4.04804 15.5251 4.04804H31.5529V20.0202C31.5529 21.1228 32.4499 22.0167 33.5564 22.0167C34.6629 22.0167 35.5599 21.1228 35.5599 20.0202L35.5599 2.05152ZM3.88737 34.441L34.9731 3.46327L32.1397 0.639766L1.05403 31.6175L3.88737 34.441Z"
                    fill="#F5A091"
                  />
                </svg>
              </span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
