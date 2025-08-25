import Swiper from "swiper";
import "swiper/css";
import { Navigation } from "swiper/modules";

export default function actualMaterials() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".actual-materials")
  );

  elements.forEach((element) => {
    /*const navBtns = Array.from(
      element.querySelectorAll<HTMLButtonElement>(
        ".actual-materials__tabs-nav-link"
      )
    );
    const tabItems = Array.from(
      element.querySelectorAll<HTMLElement>(".actual-materials__tabs-item")
    );

    const setActiveTab = (index: number) => {
      navBtns.forEach((btn) => btn.classList.remove("active"));
      tabItems.forEach((item) => item.classList.remove("active"));
      navBtns[index]?.classList.add("active");
      tabItems[index]?.classList.add("active");
    };

    setActiveTab(0);

    navBtns.forEach((btn, btnIndex) => {
      btn.addEventListener("click", (event) => {
        event.preventDefault();
        setActiveTab(btnIndex);
      });
    });*/

    let instances: Swiper[] = [];

    const sliders = Array.from(
      element.querySelectorAll<HTMLElement>(".actual-materials__slider")
    );

    const initSlider = (slider: HTMLElement) => {
      const container = slider.querySelector<HTMLElement>(".swiper");
      if (!container) return;
      const instance = new Swiper(container, {
        speed: 600,
        slidesPerView: "auto",
        modules: [Navigation],
        navigation: {
          prevEl: slider.querySelector<HTMLButtonElement>(
            ".actual-materials__arrow--prev"
          ),
          nextEl: slider.querySelector<HTMLButtonElement>(
            ".actual-materials__arrow--next"
          ),
        },
      });

      instances.push(instance);
    };

    sliders.forEach((slider) => initSlider(slider));

    document.addEventListener("actual:reinitSliders", () => {
      instances.forEach((instance) => instance.destroy());
      instances = [];
      const sliders = Array.from(
        element.querySelectorAll<HTMLElement>(".actual-materials__slider")
      );
      sliders.forEach((slider) => initSlider(slider));
    });
  });
}
