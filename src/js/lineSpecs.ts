import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function lineSpecs() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".line-specs")
  );
  elements.forEach((element) => {
    gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: "top bottom-=20%",
        },
      });

      tl.from(".line-text-content > *", {
        autoAlpha: 0,
        duration: 0.3,
        stagger: 0.1,
        y: 15,
      });
      tl.from(".line-specs__cpu-card", {
        autoAlpha: 0,
        duration: 0.4,
        stagger: 0.1,
        y: 25,
      });
      tl.from(".line-specs__list-item", {
        autoAlpha: 0,
        duration: 0.4,
        stagger: 0.1,
        y: 25,
      });
    }, element);
  });
}
