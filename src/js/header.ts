export default function header() {
  const dropdowns = Array.from(
    document.querySelectorAll<HTMLElement>(".osio-header__categories-dropdown")
  );

  dropdowns.forEach((element) => {
    const navLinks = Array.from(
      element.querySelectorAll<HTMLElement>(
        ".osio-header__categories-subcategories-nav-link"
      )
    );
    const tabsItems = Array.from(
      element.querySelectorAll<HTMLElement>(
        ".osio-header__categories-subcategory"
      )
    );

    const setActive = (index: number) => {
      navLinks.forEach((link) => link.classList.remove("active"));
      tabsItems.forEach((item) => item.classList.remove("active"));

      navLinks[index]?.classList.add("active");
      tabsItems[index]?.classList.add("active");
    };

    setActive(0);

    navLinks.forEach((link, linkIndex) => {
      link.addEventListener("mouseenter", () => {
        setActive(linkIndex);
      });

      link.addEventListener("click", (event) => {
        event.preventDefault();
        setActive(linkIndex);
      });
    });
  });

  const burger = document.querySelector<HTMLButtonElement>(
    ".osio-header__burger"
  );

  burger?.addEventListener("click", () => {
    document.body.classList.toggle("menu-open");
  });
}
