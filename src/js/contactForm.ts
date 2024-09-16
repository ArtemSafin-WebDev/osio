import Select from "./classes/Select";

export default function contactForm() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".contact-form")
  );

  elements.forEach((element) => {
    const form = element.querySelector<HTMLFormElement>("form");

    const selects = Array.from(
      element.querySelectorAll<HTMLElement>(".contact-form__form-select")
    );

    selects.forEach((select) => new Select(select));
  });
}
