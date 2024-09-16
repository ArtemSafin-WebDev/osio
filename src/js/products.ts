export default function products() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".products")
  );

  elements.forEach((element) => {
    const btns = Array.from(
      element.querySelectorAll<HTMLElement>(".products__tabs-nav-link")
    );
    const items = Array.from(
      element.querySelectorAll<HTMLElement>(".products__tabs-item")
    );

    const links = Array.from(
      element.querySelectorAll<HTMLElement>(".products__link ")
    );

    const setActive = (index: number) => {
      btns.forEach((btn) => btn.classList.remove("active"));
      items.forEach((item) => item.classList.remove("active"));
      links.forEach((link) => link.classList.remove("active"));
      btns[index]?.classList.add("active");
      items[index]?.classList.add("active");
      links[index]?.classList.add("active");
    };

    setActive(0);

    btns.forEach((btn, btnIndex) => {
      btn.addEventListener("click", (event) => {
        event.preventDefault();
        setActive(btnIndex);
      });
    });
  });
}
