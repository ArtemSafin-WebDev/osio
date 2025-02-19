import Swiper from "swiper";
import "swiper/css";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css/thumbs";

export default function lineGallery() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".line-gallery")
  );

  elements.forEach((element) => {
    const sliders = Array.from(
      element.querySelectorAll<HTMLElement>(".line-gallery__slider")
    );
    sliders.forEach((element) => {
      const mainContainer = element.querySelector<HTMLElement>(
        ".line-gallery__main-slider .swiper"
      );
      const mainSlides = Array.from(
        element.querySelectorAll<HTMLElement>(
          ".line-gallery__main-slider .swiper-slide"
        )
      );
      // const mainWrapper = element.querySelector<HTMLElement>(".swiper-wrapper");
      const thumbsContainer = element.querySelector<HTMLElement>(
        ".line-gallery__thumbs-slider .swiper"
      );
      if (!mainContainer || !thumbsContainer) return;

      const thumbsInstance = new Swiper(thumbsContainer, {
        slidesPerView: "auto",
        centeredSlides: true,
        centeredSlidesBounds: true,
        longSwipesRatio: 0.2,
        speed: 600,
        loop: false,
        centerInsufficientSlides: true,
      });

      new Swiper(mainContainer, {
        slidesPerView: "auto",
        centeredSlides: true,
        centeredSlidesBounds: false,
        longSwipesRatio: 0.2,
        speed: 600,
        loop: mainSlides.length >= 6 ? true : false,
        modules: [Thumbs, Navigation],
        navigation: {
          prevEl: element.querySelector<HTMLButtonElement>(
            ".line-gallery__arrow--prev"
          ),
          nextEl: element.querySelector<HTMLButtonElement>(
            ".line-gallery__arrow--next"
          ),
        },
        thumbs: {
          swiper: thumbsInstance,
          autoScrollOffset: 1,
        },
      });
    });
  });
}
