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

    const mobileBtns = Array.from(
      element.querySelectorAll<HTMLElement>(
        ".osio-header__categories-subcategory-btn"
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

    mobileBtns.forEach((btn) =>
      btn.addEventListener("click", (event) => {
        event.preventDefault();
        mobileBtns.forEach((otherBtn) => {
          if (btn === otherBtn) return;
          const parentCat = otherBtn.closest<HTMLElement>(
            ".osio-header__categories-subcategory"
          );
          parentCat?.classList.remove("open");
        });

        const parentCat = btn.closest<HTMLElement>(
          ".osio-header__categories-subcategory"
        );
        parentCat?.classList.toggle("open");
      })
    );
  });

  const burger = document.querySelector<HTMLButtonElement>(
    ".osio-header__burger"
  );

  burger?.addEventListener("click", () => {
    document.body.classList.toggle("menu-open");
  });

  const listItems = Array.from(
    document.querySelectorAll<HTMLElement>(".osio-header__categories-list-item")
  );

  listItems.forEach((item) => {
    const hasDropdown = item.querySelector<HTMLElement>(
      ".osio-header__categories-dropdown"
    )!!;
    if (!hasDropdown) return;

    const link = item.querySelector<HTMLElement>(
      ".osio-header__categories-link"
    );
    const back = item.querySelector<HTMLElement>(
      ".osio-header__categories-dropdown-back"
    );

    link?.addEventListener("click", (event) => {
      if (window.matchMedia("(max-width: 640px)").matches) {
        event.preventDefault();
        item.classList.toggle("mobile-categories-open");
      }
    });

    back?.addEventListener("click", (event) => {
      event.preventDefault();
      item.classList.remove("mobile-categories-open");
    });
  });

  const mobileSearch = document.querySelector<HTMLElement>(
    ".osio-header__mobile-search-btn"
  );

  mobileSearch?.addEventListener("click", (event) => {
    event.preventDefault();
    document.body.classList.toggle("mobile-search-open");
    document.body.classList.remove("menu-open");
  });

  document.addEventListener("click", (event) => {
    const target = event.target as HTMLElement;
    if (
      target.matches(".osio-header__mobile-search") ||
      target.closest(".osio-header__mobile-search")
    ) {
      return;
    }
    document.body.classList.remove("mobile-search-open");
  });

  const items = Array.from(
    document.querySelectorAll<HTMLElement>(".osio-header__nav-list-item")
  );
  items.forEach((item) => {
    if (!item.querySelector(".osio-header__submenu-dropdown")) return;
    const link = item.querySelector<HTMLLinkElement>(".osio-header__nav-link");
    link?.addEventListener("click", (event) => {
      if (!window.matchMedia("(max-width: 640px)").matches) return;
      event.preventDefault();
      item.classList.add("active");
    });

    const backBtn = item.querySelector<HTMLButtonElement>(
      ".osio-header__submenu-dropdown-back"
    );
    backBtn?.addEventListener("click", (event) => {
      event.preventDefault();
      item.classList.remove("active");
    });
  });
}
