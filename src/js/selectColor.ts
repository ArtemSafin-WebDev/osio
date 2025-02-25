import Swiper from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade } from "swiper/modules";

export default function selectColor() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".block-select-color")
  );

  elements.forEach((element) => {
    const container = element.querySelector<HTMLElement>(".swiper");
    const btns = Array.from(
      element.querySelectorAll<HTMLButtonElement>(
        ".block-select-color__slider-nav-btn"
      )
    );
    if (!container) return;
    const instance = new Swiper(container, {
      speed: 600,
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      modules: [EffectFade],
      init: false,
      on: {
        init: (swiper) => {
          btns.forEach((btn) => btn.classList.remove("active"));
          btns[swiper.activeIndex]?.classList.add("active");
        },
        slideChange: (swiper) => {
          btns.forEach((btn) => btn.classList.remove("active"));
          btns[swiper.activeIndex]?.classList.add("active");
        },
      },
    });

    instance.init();

    btns.forEach((btn, btnIndex) => {
      btn.addEventListener("click", (event) => {
        event.preventDefault();
        instance.slideTo(btnIndex);
      });
    });
  });
}
