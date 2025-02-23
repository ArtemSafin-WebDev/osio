import Swiper from "swiper";

// import css for fade effect from swiper
import "swiper/css/effect-fade";
import { EffectFade } from "swiper/modules";

export default function lineVariants() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".line-variants")
  );
  elements.forEach((element) => {
    const container = element.querySelector<HTMLElement>(".swiper");
    //Select all cards with class .line-variants__slider-card
    const cards = Array.from(
      element.querySelectorAll<HTMLElement>(".line-variants__slider-text-card")
    );
    // Add click event listener to each button
    if (!container) return;
    const instance = new Swiper(container, {
      effect: "fade",
      modules: [EffectFade],
      fadeEffect: {
        crossFade: true,
      },
      longSwipesRatio: 0.2,
      autoHeight: true,
      speed: 600,
    });
    cards.forEach((card) => {
      // Select all buttons with class .line-variants__slider-nav-btn
      const buttons = Array.from(
        card.querySelectorAll<HTMLElement>(".line-variants__slider-nav-btn")
      );
      buttons.forEach((button, buttonIndex) => {
        button.addEventListener("click", (event) => {
          event.preventDefault();
          instance.slideTo(buttonIndex);
        });
      });
    });
  });
}
