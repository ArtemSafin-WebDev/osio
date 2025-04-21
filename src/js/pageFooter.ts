import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function pageFooter() {
  const footer = document.querySelector(".page-footer");
  if (!footer) return;

  gsap.context(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".page-footer__logo",
        start: "top bottom-=20%",
      },
    });

    tl.from(".page-footer__logo svg g", {
      autoAlpha: 0,
      stagger: 0.2,
      duration: 1,
      xPercent: 30,
      ease: "power3.out",
    });
  }, footer);
}
