import gsap from "gsap";
import { ScrollTrigger, ScrollToPlugin } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function scrollUp() {
  const scrollUpWrapper = document.querySelector(".scroll-up");
  const btn = document.querySelector(".scroll-up__btn");

  const checkScroll = () => {
    if (window.scrollY > window.innerHeight) {
      if (
        window.scrollY <
        document.documentElement.scrollHeight - window.innerHeight - 200
      ) {
        scrollUpWrapper?.classList.add("shown");
      } else {
        scrollUpWrapper?.classList.remove("shown");
      }
    } else {
      scrollUpWrapper?.classList.remove("shown");
    }
  };
  checkScroll();

  window.addEventListener("scroll", checkScroll);
  window.addEventListener("resize", checkScroll);

  btn?.addEventListener("click", (event) => {
    event.preventDefault();
    gsap.to(window, {
      duration: 0.2,
      ease: "none",
      scrollTo: {
        y: 0,
      },
      delay: 0,
      autoKill: false,
    });
  });
}
