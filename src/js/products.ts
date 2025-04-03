import Swiper from "swiper";
import "swiper/css";
import { SwiperOptions } from "swiper/types";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function products() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".products")
  );

  elements.forEach((element) => {
    let mm = gsap.matchMedia();
    mm.add(
      "(min-width: 641px)",
      () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: element,
            start: "top bottom-=30%",
          },
        });
        tl.from(".products__top-row", {
          autoAlpha: 0,
          y: 40,
          duration: 0.6,
          ease: "power3.out",
        });
        tl.from(
          ".products__slider-card",
          {
            autoAlpha: 0,
            duration: 0.6,
            stagger: 0.2,
            ease: "power2.out",
            y: 40,
          },
          "<+=0.4"
        );
      },
      element
    );
    mm.add(
      "(max-width: 640px)",
      () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: element,
            start: "top bottom-=30%",
          },
        });
        tl.from(".products__tabs-nav", {
          autoAlpha: 0,
          y: 30,
          duration: 1,
          ease: "power2.out",
        });
        tl.from(
          ".products__slider",
          {
            autoAlpha: 0,
            duration: 1.2,
            ease: "power2.out",
            y: 30,
          },
          "<+=0.4"
        );
        tl.from(
          ".products__links",
          {
            autoAlpha: 0,
            duration: 0.8,
            ease: "power2.out",
            y: 30,
          },
          "<+=0.4"
        );
      },
      element
    );
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
