import Swiper from "swiper";
import "swiper/css";

import { Navigation } from "swiper/modules";

export default function newsGallery() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".js-news-gallery")
  );
  elements.forEach((element) => {
    const container = element.querySelector<HTMLElement>(".swiper");
    if (!container) return;
    new Swiper(container, {
      slidesPerView: 1,
      speed: 600,
      modules: [Navigation],

      navigation: {
        prevEl: element.querySelector<HTMLButtonElement>(
          ".single-news__gallery-arrow--prev"
        ),
        nextEl: element.querySelector<HTMLButtonElement>(
          ".single-news__gallery-arrow--next"
        ),
      },
    });
  });
}
