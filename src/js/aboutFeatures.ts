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

      const smallText = card.querySelector<HTMLElement>(
        ".about-features__card-small-text"
      )!;

      btn?.addEventListener("click", async (event) => {
        event.preventDefault();
        const isMobile = window.matchMedia("(max-width: 640px)").matches;

        if (!isMobile) {
          const state = Flip.getState([btn, number, image, card]);
          const secondState = Flip.getState(
            [title, text, textSecond, smallText],
            {
              props: "fontSize",
            }
          );
          card.classList.toggle("active");
          Flip.from(state, {
            duration: 0.6,

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
          });
          Flip.from(secondState, {
            duration: 0.6,
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
          });
        } else {
          const state = Flip.getState([card, btn, title, number]);
          const secondState = Flip.getState([textSecond, smallText, image], {
            props: "fontSize",
          });
          card.classList.toggle("active");
          Flip.from(state, {
            duration: 0.8,

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
          });
          Flip.from(secondState, {
            duration: 0.8,
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
          });
        }
      });
    });
  });
}
