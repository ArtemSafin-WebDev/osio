import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function advantages() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".advantages")
  );

  elements.forEach((element) => {
    gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: "top bottom-=30%",
        },
      });
      tl.from(".advantages__top-row", {
        autoAlpha: 0,
        duration: 1,
        ease: "power3.out",
      });
      tl.from(
        ".advantages__heading",
        {
          autoAlpha: 0,
          duration: 1,
          y: 40,
          ease: "power3.out",
        },
        "<+=0.5"
      );
      tl.from(
        ".advantages__slider-card",
        {
          autoAlpha: 0,
          duration: 0.8,
          y: 40,
          ease: "power2.out",
          stagger: 0.3,
        },
        "<+=0.5"
      );
    }, element);
  });
}
