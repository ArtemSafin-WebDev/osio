export default function singleNews() {
  const singleNewsWithoutDarkImage = !!document.querySelector(
    ".single-news:not(.single-news--large-image)"
  );
  if (!singleNewsWithoutDarkImage) return;

  const header = document.querySelector<HTMLElement>(".header-wrapper");
  if (!header) return;

  const initiallyDark = header.classList.contains("header-wrapper--dark");
  if (!initiallyDark) return;

  const mql = window.matchMedia("(max-width: 640px)");

  const handleWidthChange = (e: MediaQueryListEvent | MediaQueryList) => {
    if (e.matches) {
      header.classList.add("header-wrapper--fixed");
      header.classList.remove("header-wrapper--dark");
    } else {
      header.classList.remove("header-wrapper--fixed");
      header.classList.add("header-wrapper--dark");
    }
  };

  mql.addEventListener("change", handleWidthChange);

  handleWidthChange(mql);
}
