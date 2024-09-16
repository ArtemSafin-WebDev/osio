import Swiper from "swiper";
import "swiper/css";
import gsap from "gsap";
import { Flip } from "gsap/all";

gsap.registerPlugin(Flip);

export default function reviews() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".reviews")
  );

  elements.forEach((element) => {
    const container = element.querySelector<HTMLElement>(".swiper");
    if (!container) return;

    new Swiper(container, {
      slidesPerView: 2,
      slidesPerGroup: 1,
      speed: 600,
      spaceBetween: 20,
      longSwipesRatio: 0.2,
      slideToClickedSlide: false,
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

      //   centeredSlides: true,
      //   loop: true,
    });

    element.addEventListener("click", async (event) => {
      const target = event.target as HTMLElement;
      if (
        target.matches(".reviews__slider-card-plus") ||
        target.closest(".reviews__slider-card-plus")
      ) {
        event.preventDefault();
        const card = target.closest(".reviews__slider-card");
        // const top = card?.querySelector<HTMLElement>(
        //   ".reviews__slider-card-top-row"
        // )!;
        // const bottom = card?.querySelector<HTMLElement>(
        //   ".reviews__slider-card-bottom-row"
        // )!;
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
