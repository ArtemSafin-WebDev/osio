import gsap from "gsap";
import { Observer, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(Observer, ScrollTrigger);

export default function search() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".search")
  );
  elements.forEach((element) => {
    const openFiltersBtns = Array.from(
      element.querySelectorAll<HTMLElement>(".js-search-filters-open-btn")
    );
    const closeFiltersBtns = Array.from(
      element.querySelectorAll<HTMLElement>(".js-search-filters-close-btn")
    );

    const dropdown = element.querySelector<HTMLElement>(
      ".search__filters-dropdown"
    );

    const touchArea = element.querySelector<HTMLElement>(
      ".search__filters-dropdown-inner-touch-area"
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

    element.addEventListener("click", (event) => {
      const target = event.target as HTMLElement;
      if (
        !(
          target.matches(".search__nav-link") ||
          target.closest(".search__nav-link")
        )
      )
        return;
      event.preventDefault();
      const link = (
        target.matches(".search__nav-link")
          ? target
          : target.closest(".search__nav-link")
      ) as HTMLLinkElement;
      const allLinks = Array.from(
        document.querySelectorAll<HTMLLinkElement>(".search__nav-link")
      );

      allLinks.forEach((link) => link.classList.remove("active"));
      link.classList.add("active");
      const index = allLinks.indexOf(link);
      const items = Array.from(
        document.querySelectorAll<HTMLElement>(".search__results-tabs-item")
      );
      items.forEach((item) => item.classList.remove("active"));
      items[index]?.classList.add("active");
      ScrollTrigger.refresh();
    });

    const allLinks = Array.from(
      document.querySelectorAll<HTMLLinkElement>(".search__nav-link")
    );

    allLinks[0]?.click();
  });
}
