import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function features() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".features")
  );

  elements.forEach((element) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: "top center",
        end: "bottom bottom",
        scrub: true,
        markers: false,
      },
    });

    tl.fromTo(
      element,
      {
        "--progress": 0,
      },
      {
        "--progress": 100,
        duration: 1,
        ease: "none",
      }
    );

    const newTl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: "center center",
      },
    });

    newTl.from(
      Array.from(element.querySelectorAll<HTMLElement>(".features__list-item")),
      {
        autoAlpha: 0,
        duration: 0.6,
        stagger: 0.3,
      }
    );
  });
}
