import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function lineConnection() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".line-connection")
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
      tl.from(".line-connection__image", {
        autoAlpha: 0,
        duration: 1.6,
        ease: "power3.out",
        scale: 0.7,
        yPercent: 20,
      });
    }, element);
  });
}
