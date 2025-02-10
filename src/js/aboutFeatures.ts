import gsap from "gsap";
import { Flip, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(Flip, ScrollTrigger);

export default function aboutFeatures() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".about-features")
  );

  const VIEW_TRANSITION = false;
  elements.forEach((element) => {
    const cards = Array.from(
      element.querySelectorAll<HTMLElement>(".about-features__card")
    );

    cards.forEach((card) => {
      const btn = card.querySelector<HTMLButtonElement>(
        ".about-features__card-btn"
      )!;
      const number = card.querySelector<HTMLElement>(
        ".about-features__card-number"
      );

      const title = card.querySelector<HTMLElement>(
        ".about-features__card-title"
      )!;

      const text = card.querySelector<HTMLElement>(
        ".about-features__card-text"
      );

      const textSecond = card.querySelector<HTMLElement>(
        ".about-features__card-text-second"
      )!;
      const image = card.querySelector<HTMLElement>(
        ".about-features__card-image-wrapper"
      );

      btn?.addEventListener("click", async (event) => {
        event.preventDefault();
        if (!document.startViewTransition || !VIEW_TRANSITION) {
          const state = Flip.getState([btn, number, image, card]);
          const secondState = Flip.getState([text, title, textSecond], {
            props: "fontSize",
          });
          card.classList.toggle("active");
          Flip.from(state, {
            duration: 0.6,
            // ease: "power1.inOut",
            nested: true,
            onEnter: (elements) =>
              gsap.fromTo(
                elements,
                { opacity: 0 },
                { opacity: 1, duration: 0.2, delay: 0 }
              ),
            onLeave: (elements) =>
              gsap.fromTo(
                elements,
                { opacity: 1 },
                { opacity: 0, duration: 0.2 }
              ),
            // onComplete: () => {
            //   ScrollTrigger.refresh();
            // },
          });
          Flip.from(secondState, {
            duration: 0.6,
            // ease: "power1.inOut",
            absolute: true,
            onEnter: (elements) =>
              gsap.fromTo(
                elements,
                { opacity: 0 },
                { opacity: 1, duration: 0.2, delay: 0 }
              ),
            onLeave: (elements) =>
              gsap.fromTo(
                elements,
                { opacity: 1 },
                { opacity: 0, duration: 0.2 }
              ),
            // onComplete: () => {
            //   ScrollTrigger.refresh();
            // },
          });
          return;
        }
        const transition = document.startViewTransition(() =>
          card.classList.toggle("active")
        );

        await transition.finished;

        ScrollTrigger.refresh();
      });
    });
  });
}
