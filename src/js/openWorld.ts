import Swiper from "swiper";
import "swiper/css";

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
    });
  });
}
