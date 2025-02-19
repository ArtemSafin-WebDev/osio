export default function tabs() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".js-tabs")
  );
  elements.forEach((element) => {
    const btns = Array.from(
      element.querySelectorAll<HTMLElement>(".js-tabs-btn")
    );
    const items = Array.from(
      element.querySelectorAll<HTMLElement>(".js-tabs-item")
    );

    const setActiveTab = (index: number) => {
      btns.forEach((btn) => btn.classList.remove("active"));
      items.forEach((item) => item.classList.remove("active"));
      btns[index]?.classList.add("active");
      items[index]?.classList.add("active");
    };

    setActiveTab(0);

    btns.forEach((btn, btnIndex) => {
      btn.addEventListener("click", (event) => {
        event.preventDefault();
        setActiveTab(btnIndex);
      });
    });
  });
}
