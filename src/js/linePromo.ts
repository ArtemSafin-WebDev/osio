import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade, Pagination } from "swiper/modules";

gsap.registerPlugin(ScrollTrigger);

export default function linePartner() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".line-promo--with-slider")
  );
  elements.forEach((element) => {
    let mm = gsap.matchMedia();

    const slider = element.querySelector<HTMLElement>(".line-promo__slider");
    const pinSpacer = element.querySelector<HTMLElement>(
      ".line-promo__pin-spacer"
    );

    if (!slider || !pinSpacer) return;
    const slides = Array.from(
      slider.querySelectorAll<HTMLElement>(".swiper-slide")
    );
    const wrapper = slider?.querySelector<HTMLElement>(".swiper-wrapper")!;
    const container = slider.querySelector<HTMLElement>(".swiper");
    let instance: Swiper | null = null;

    mm.add("(min-width: 641px)", () => {
      if (slides.length === 1) return;
      const tl = gsap.timeline({
        scrollTrigger: {
          scrub: true,
          trigger: slider,
          start: "top top+=20px",
          end: () =>
            `top+=${slider.offsetHeight + pinSpacer.offsetHeight} top+=${
              20 + slider.offsetHeight
            }`,
          markers: false,
        },
      });

      tl.to(wrapper, {
        x: () =>
          ((slides.length - 1) * wrapper.offsetWidth +
            parseFloat(
              window.getComputedStyle(wrapper).getPropertyValue("gap")
            ) *
              (slides.length - 1)) *
          -1,
      });
    });
    mm.add("(max-width: 640px)", () => {
      if (!container) return;
      instance = new Swiper(container, {
        slidesPerView: 1,
        autoHeight: true,
        speed: 600,
        effect: "fade",
        fadeEffect: {
          crossFade: true,
        },
        modules: [Pagination, EffectFade],
        pagination: {
          el: element.querySelector<HTMLElement>(
            ".line-promo__slider-pagination"
          ),
          type: "bullets",
          clickable: true,
        },
        on: {
          transitionEnd: () => {
            ScrollTrigger.refresh();
          },
        },
      });

      return () => {
        instance?.destroy(true);
        instance = null;
      };
    });

    gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: "top bottom-=20%",
        },
      });
      tl.from(".line-promo__content", {
        autoAlpha: 0,
        duration: 1,
        y: 30,
      });
    }, element);
  });
}
