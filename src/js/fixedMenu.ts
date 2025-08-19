export default function fixedMenu() {
  const checkScroll = () => {
    if (window.scrollY >= window.innerHeight / 2) {
      document.body.classList.add("fixed-menu-shown");
    } else {
      document.body.classList.remove("fixed-menu-shown");
    }
  };

  checkScroll();

  window.addEventListener("scroll", checkScroll);

  window.addEventListener("resize", checkScroll);
}
