import Swiper from "swiper";
import "swiper/css";
import { Navigation } from "swiper/modules";

export default function openWorld() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".open-world")
  );

  elements.forEach((element) => {
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
