import Select from "./classes/Select";

export default function selects() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".js-select")
  );

  elements.forEach((element) => new Select(element));

  const selectAccordionBtns = Array.from(
    document.querySelectorAll<HTMLElement>(".select__accordion-btn")
  );
  selectAccordionBtns.forEach((btn) =>
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      btn.parentElement?.classList.toggle("open");
    })
  );
}
