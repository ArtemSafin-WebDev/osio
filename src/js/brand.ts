import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function brand() {
  const elements = Array.from(document.querySelectorAll<HTMLElement>(".brand"));

  elements.forEach((element) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
      },
    });

    tl.from(".brand__heading", {
      autoAlpha: 0,
      duration: 0.4,
    })
      .from(".brand__large-text", {
        autoAlpha: 0,
        duration: 0.4,
      })
      .from(".brand__small-text", {
        autoAlpha: 0,
        duration: 0.4,
      });
  });
}
