import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import NavBar from "../components/ui/NavBar";
import Success from "../components/homepage/Success";
import Footer from "../components/ui/Footer";

export default function SuccessPage() {
  gsap.registerPlugin(ScrollTrigger);

  const sectionRefs = useRef([]);

  useEffect(() => {
    const sectionHeadings = document.querySelectorAll(".section-heading");
    sectionHeadings.forEach((heading) => {
      const headings = heading.querySelectorAll(".heading");

      headings.forEach((individualHeading) => {
        ScrollTrigger.create({
          trigger: heading,
          start: "top 550px",
          end: "bottom 550px",
          animation: gsap.to(individualHeading, {
            opacity: 1,
            y: 0,
            ease: "power4.out",
            duration: 1,
          }),
          toggleActions: "play none none none",
        });
        ScrollTrigger.refresh();
      });
    });
  }, []);
  return (
    <>
      <div className="bg-secondary-200">
        <NavBar sectionRefs={sectionRefs.current} />{" "}
        <Success />
      </div>
    </>
  );
}
