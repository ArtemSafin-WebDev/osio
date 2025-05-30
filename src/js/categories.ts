import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function categories() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".categories")
  );
  elements.forEach((element) => {
    const cards = Array.from(
      element.querySelectorAll<HTMLElement>(".categories__card")
    );

    cards.forEach((card) => {
      const svgElements = Array.from(card.querySelectorAll("path, rect"));
      gsap.set(svgElements, {
        scaleX: 0,
      });
      card.addEventListener("mouseenter", () => {
        gsap.to(svgElements, {
          scaleX: 1,
          duration: 0.05,
          stagger: 0.01,
        });
      });
      card.addEventListener("mouseleave", () => {
        gsap.to(svgElements, {
          scaleX: 0,
          duration: 0.4,
        });
      });
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: "top bottom-=30%",
      },
    });
    tl.from(cards, {
      autoAlpha: 0,
      duration: 1,
      stagger: 0.3,
      ease: "power2.out",
    });
  });
}
