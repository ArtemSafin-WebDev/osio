import gsap from "gsap";

export default function lineTooltip() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".line-tooltip")
  );

  elements.forEach((element) => {
    let mm = gsap.matchMedia();
    const btn = element.querySelector<HTMLButtonElement>(".line-tooltip__btn");
    const content = element.querySelector<HTMLElement>(
      ".line-tooltip__content"
    );
    const contentInner = element.querySelector<HTMLElement>(
      ".line-tooltip__content-inner"
    );

    const closeBtn = document.createElement("button");
    closeBtn.className = "line-tooltip__close-btn";
    closeBtn.innerHTML = `
      <svg width="14" height="14" aria-hidden="true">
          <use xlink:href="#popover-close"></use>
      </svg>
    `;
    closeBtn.addEventListener("click", (event) => {
      event.preventDefault();
      content?.classList.remove("active");
    });

    contentInner?.appendChild(closeBtn);

    btn?.addEventListener("click", (event) => {
      event.preventDefault();

      console.log("Offset top", element.offsetTop);
      content?.style.setProperty("--offset-top", `${element.offsetTop}px`);
      Array.from(document.querySelectorAll(".line-tooltip__content")).forEach(
        (otherItem) => {
          if (otherItem === content) return;
          otherItem.classList.remove("active");
        }
      );
      content?.classList.toggle("active");
    });

    mm.add("(max-width: 640px)", () => {
      const wrapper = btn?.parentElement?.parentElement;
      if (wrapper && content) wrapper.appendChild(content);

      return () => {
        if (btn?.parentElement && content)
          btn.parentElement.appendChild(content);
      };
    });
  });
}
