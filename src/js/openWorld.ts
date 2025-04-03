import Swiper from "swiper";
import "swiper/css";
import { Navigation } from "swiper/modules";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function openWorld() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".open-world")
  );

  elements.forEach((element) => {
    let mm = gsap.matchMedia();
    mm.add(
      "(min-width: 641px)",
      () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: element,
            start: "top bottom-=30%",
          },
        });
        tl.from(".open-world__top-row", {
          autoAlpha: 0,
          duration: 1,
          ease: "power3.out",
          y: 40,
        });

        tl.from(
          ".open-world__slider-card",
          {
            duration: 0.8,
            stagger: 0.3,
            y: 40,
            ease: "power3.out",
            autoAlpha: 0,
          },
          "<+=0.4"
        );
        tl.from(
          ".open-world__bottom-row",
          {
            autoAlpha: 0,
            duration: 0.6,
          },
          "<+=0.4"
        );
      },
      element
    );
    mm.add(
      "(max-width: 640px)",
      () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: element,
            start: "top bottom-=30%",
          },
        });
        tl.from(".open-world__heading", {
          autoAlpha: 0,
          duration: 1,
          ease: "power3.out",
          y: 30,
        });

        tl.from(
          ".open-world__slider-card",
          {
            duration: 0.8,
            stagger: 0.3,
            y: 30,
            ease: "power3.out",
            autoAlpha: 0,
          },
          "<+=0.4"
        );
        tl.from(
          ".open-world__more-link",
          {
            autoAlpha: 0,
            duration: 0.6,
          },
          "<+=0.4"
        );
      },
      element
    );
    const container = element.querySelector<HTMLElement>(".swiper");
    if (!container) return;

    new Swiper(container, {
      slidesPerView: "auto",
      speed: 600,
      modules: [Navigation],
      navigation: {
        prevEl: element.querySelector<HTMLButtonElement>(
          ".open-world__arrow--prev"
        ),
        nextEl: element.querySelector<HTMLButtonElement>(
          ".open-world__arrow--next"
        ),
      },
    });
  });
}
