import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function lineFeatures() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".line-features")
  );

  elements.forEach((element) => {
    gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: "top bottom-=20%",
        },
      });

      tl.from(".line-features__list-item", {
        autoAlpha: 0,
        stagger: 0.2,
        duration: 0.6,
        y: 20,
        ease: "power2.out",
      });
    }, element);
  });
}
