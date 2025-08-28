import Swiper from "swiper";
import "swiper/css";
import { Navigation } from "swiper/modules";

export default function detailNewsGallery() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".news-gallery")
  );

  elements.forEach((element) => {
    const container = element.querySelector<HTMLElement>(".swiper");
    if (!container) return;

    new Swiper(container, {
      slidesPerView: "auto",
      speed: 600,
      modules: [Navigation],
      loop: true,
      centeredSlides: true,
      navigation: {
        prevEl: element.querySelector<HTMLButtonElement>(
          ".news-gallery__arrow--prev"
        ),
        nextEl: element.querySelector<HTMLButtonElement>(
          ".news-gallery__arrow--next"
        ),
      },
    });
  });
}
