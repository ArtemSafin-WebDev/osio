import Swiper from "swiper";
import "swiper/css";
import { SwiperOptions } from "swiper/types";

export default function products() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".products")
  );

  elements.forEach((element) => {
    const btns = Array.from(
      element.querySelectorAll<HTMLElement>(".products__tabs-nav-link")
    );
    const items = Array.from(
      element.querySelectorAll<HTMLElement>(".products__tabs-item")
    );

    const links = Array.from(
      element.querySelectorAll<HTMLElement>(".products__link ")
    );

    const setActive = (index: number) => {
      btns.forEach((btn) => btn.classList.remove("active"));
      items.forEach((item) => item.classList.remove("active"));
      links.forEach((link) => link.classList.remove("active"));
      btns[index]?.classList.add("active");
      items[index]?.classList.add("active");
      links[index]?.classList.add("active");
    };

    setActive(0);

    btns.forEach((btn, btnIndex) => {
      btn.addEventListener("click", (event) => {
        event.preventDefault();
        setActive(btnIndex);
      });
    });

    const sliders = Array.from(
      element.querySelectorAll<HTMLElement>(".products__slider")
    );

    const mql = window.matchMedia("(max-width: 640px)");

    sliders.forEach((slider) => {
      const container = slider.querySelector<HTMLElement>(".swiper");
      if (!container) return;

      const options: SwiperOptions = {
        slidesPerView: "auto",
        speed: 600,
      };

      let instance: Swiper | null = null;

      const handleWidthChange = (e: MediaQueryListEvent | MediaQueryList) => {
        if (e.matches) {
          if (instance) instance.destroy();
          instance = new Swiper(container, options);
        } else {
          if (instance) instance.destroy();
          instance = null;
        }
      };

      mql.addEventListener("change", handleWidthChange);

      handleWidthChange(mql);
    });
  });
}
