import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function twoImageWithTextScreen() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".two-images-with-text--screen")
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

      tl.from(
        ".two-images-with-text__image",
        {
          autoAlpha: 0,
          duration: 1.5,
          xPercent: -100,
          ease: "power3.out",
        },
        ">-=0.2"
      );
      tl.from(".line-tooltip", {
        autoAlpha: 0,
        duration: 0.3,
        scale: 0,
        stagger: 0.1,
      });
    }, element);
  });
}
