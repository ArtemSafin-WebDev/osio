import Swiper from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/parallax";
import { EffectFade, Controller, Parallax, Autoplay } from "swiper/modules";

export default function intro() {
  const elements = Array.from(document.querySelectorAll<HTMLElement>(".intro"));

  elements.forEach((element) => {
    const bgContainer =
      element.querySelector<HTMLElement>(".intro__bg .swiper");
    const mainContainer = element.querySelector<HTMLElement>(
      ".intro__slider-wrapper .swiper"
    );
    const navLinks = Array.from(
      element.querySelectorAll<HTMLElement>(".intro__slider-nav-link")
    );

    const setNavLink = (index: number) => {
      navLinks.forEach((link) => link.classList.remove("active"));
      navLinks[index]?.classList.add("active");
    };
    if (!bgContainer || !mainContainer) return;

    const bgInstance = new Swiper(bgContainer, {
      slidesPerView: 1,
      speed: 1000,
      modules: [Controller, Parallax],
      loop: false,
      parallax: true,
      longSwipesRatio: 0.2,
    });
    const mainInstance = new Swiper(mainContainer, {
      slidesPerView: 1,
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      longSwipesRatio: 0.2,
      speed: 1000,
      loop: false,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      modules: [EffectFade, Controller, Autoplay],
      init: false,
      on: {
        init: (swiper) => {
          setNavLink(swiper.realIndex);
        },
        slideChange: (swiper) => {
          setNavLink(swiper.realIndex);
        },
      },
    });

    mainInstance.init();

    bgInstance.controller.control = mainInstance;
    mainInstance.controller.control = bgInstance;

    navLinks.forEach((link, linkIndex) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        mainInstance.slideToLoop(linkIndex);
      });
    });
  });
}
