import Swiper from "swiper";
import "swiper/css";
import { Navigation } from "swiper/modules";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function shops() {
  const elements = Array.from(document.querySelectorAll<HTMLElement>(".shops"));

  elements.forEach((element) => {
    gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: "top bottom-=30%",
        },
      });

      tl.from(".shops__heading", {
        autoAlpha: 0,
        y: 30,
        duration: 1,
        ease: "power3.out",
      });
      tl.addLabel("sliderReveal");
      tl.from(
        ".shops__slider-title",
        {
          autoAlpha: 0,
          duration: 0.6,
        },
        "<+=0.5"
      );
      tl.from(
        ".buy__slider-card",
        {
          autoAlpha: 0,
          duration: 0.6,
          stagger: 0.2,
          ease: "power2.out",
          y: 40,
        },
        "<"
      );
      tl.from(
        ".shops__bottom",
        {
          autoAlpha: 0,
          duration: 0.6,
        },
        "sliderReveal"
      );
    }, element);

    const container = element.querySelector<HTMLElement>(".swiper");
    if (!container) return;

    new Swiper(container, {
      slidesPerView: "auto",
      speed: 600,
      modules: [Navigation],
      navigation: {
        prevEl: element.querySelector<HTMLButtonElement>(".shops__arrow--prev"),
        nextEl: element.querySelector<HTMLButtonElement>(".shops__arrow--next"),
      },
    });
  });
}
