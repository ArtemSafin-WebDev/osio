import gsap from "gsap";
import { Observer } from "gsap/all";

gsap.registerPlugin(Observer);

export default function drivers() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".drivers")
  );
  elements.forEach((element) => {
    const openFiltersBtns = Array.from(
      element.querySelectorAll<HTMLElement>(".js-drivers-filters-open-btn")
    );
    const closeFiltersBtns = Array.from(
      element.querySelectorAll<HTMLElement>(".js-drivers-filters-close-btn")
    );

    const dropdown = element.querySelector<HTMLElement>(
      ".drivers__filters-dropdown"
    );

    const touchArea = element.querySelector<HTMLElement>(
      ".drivers__filters-dropdown-inner-touch-area"
    );

    openFiltersBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        document.body.classList.add("filters-shown");
      });
    });
    closeFiltersBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        document.body.classList.remove("filters-shown");
      });
    });

    dropdown?.addEventListener("click", (event) => {
      if (event.target === dropdown) {
        document.body.classList.remove("filters-shown");
      }
    });

    if (touchArea) {
      Observer.create({
        target: touchArea, // can be any element (selector text is fine)
        type: "touch", // comma-delimited list of what to listen for ("wheel,touch,scroll,pointer")

        onDown: () => {
          document.body.classList.remove("filters-shown");
        },
      });
    }
  });
}
