import Swiper from "swiper";
import "swiper/css";
import gsap from "gsap";
import { Flip } from "gsap/all";
import { Navigation } from "swiper/modules";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(Flip, ScrollTrigger);

export default function reviews() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".reviews")
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
        tl.from(".reviews__top-row", {
          autoAlpha: 0,
          duration: 0.6,
          ease: "power3.out",
          y: 40,
        });

        tl.from(
          ".reviews__video-card",
          {
            duration: 1.2,
            stagger: 0.2,
            y: 40,
            ease: "power3.out",
            autoAlpha: 0,
          },
          "<+=0.4"
        );
        tl.from(
          ".reviews__bottom-row",
          {
            autoAlpha: 0,
            duration: 0.4,
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
        tl.from(".reviews__heading", {
          autoAlpha: 0,
          duration: 1,
          ease: "power3.out",
          y: 30,
        });

        tl.from(
          ".reviews__video-card",
          {
            duration: 1.2,
            stagger: 0.2,
            y: 30,
            ease: "power3.out",
            autoAlpha: 0,
          },
          "<+=0.4"
        );
        tl.from(
          ".reviews__show-more",
          {
            autoAlpha: 0,
            duration: 0.8,
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
      slidesPerGroup: 1,
      speed: 600,
      spaceBetween: 0,
      longSwipesRatio: 0.2,
      modules: [Navigation],
      navigation: {
        prevEl: element.querySelector<HTMLButtonElement>(
          ".reviews__arrow--prev"
        ),
        nextEl: element.querySelector<HTMLButtonElement>(
          ".reviews__arrow--next"
        ),
      },
      slideToClickedSlide: false,
      breakpoints: {
        641: {
          slidesPerView: 2,
          slidesPerGroup: 1,
          spaceBetween: 20,
        },
      },
      on: {
        slideChange: () => {
          const activeCards = Array.from(
            element.querySelectorAll<HTMLElement>(
              ".reviews__slider-card.active"
            )
          );
          activeCards.forEach((card) => {
            const btn = card.querySelector<HTMLElement>(
              ".reviews__slider-card-plus"
            );
            btn?.click();
          });
        },
      },
    });

    element.addEventListener("click", async (event) => {
      const target = event.target as HTMLElement;
      if (
        target.matches(".reviews__slider-card-plus") ||
        target.closest(".reviews__slider-card-plus")
      ) {
        event.preventDefault();
        const card = target.closest(".reviews__slider-card");

        const content = card?.querySelector<HTMLElement>(
          ".reviews__slider-card-content"
        )!;
        const short = card?.querySelector<HTMLElement>(
          ".reviews__slider-card-content-short"
        )!;
        const full = card?.querySelector<HTMLElement>(
          ".reviews__slider-card-content-full"
        )!;
        const state = Flip.getState([short, full, content]);
        card?.classList.toggle("active");
        Flip.from(state, {
          duration: 0.4,
          ease: "power1.inOut",
          onEnter: (elements) =>
            gsap.fromTo(
              elements,
              { opacity: 0 },
              { opacity: 1, duration: 0.2, delay: 0.4 }
            ),
          onLeave: (elements) =>
            gsap.fromTo(
              elements,
              { opacity: 1 },
              { opacity: 0, duration: 0.2 }
            ),
          onComplete: () => {
            ScrollTrigger.refresh();
          },
        });
        return;
      } else if (
        target.matches(".reviews__slider-card") ||
        target.closest(".reviews__slider-card")
      ) {
        return;
      }
      const activeCards = Array.from(
        element.querySelectorAll<HTMLElement>(".reviews__slider-card.active")
      );
      activeCards.forEach((card) => {
        const btn = card.querySelector<HTMLElement>(
          ".reviews__slider-card-plus"
        );
        btn?.click();
      });
    });
  });
}
