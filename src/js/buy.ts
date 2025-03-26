import Swiper from "swiper";
import "swiper/css";
import { Navigation } from "swiper/modules";

export default function buy() {
  const elements = Array.from(document.querySelectorAll<HTMLElement>(".buy"));

  elements.forEach((element) => {
    const container = element.querySelector<HTMLElement>(".swiper");
    if (!container) return;

    new Swiper(container, {
      slidesPerView: "auto",
      speed: 600,
      modules: [Navigation],
      navigation: {
        prevEl: element.querySelector<HTMLButtonElement>(".buy__arrow--prev"),
        nextEl: element.querySelector<HTMLButtonElement>(".buy__arrow--next"),
      },
    });
  });
}
