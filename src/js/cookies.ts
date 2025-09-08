export default function cookies() {
  const cookies = document.querySelector(".cookie");
  if (!cookies) return;

  const cookiesAccepted = localStorage.getItem("cookiesAccepted") === "Y";

  if (!cookiesAccepted) {
    cookies.classList.add("shown");
  }
  const acceptBtns = Array.from(cookies.querySelectorAll("button"));
  acceptBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      localStorage.setItem("cookiesAccepted", "Y");
      cookies.classList.remove("shown");
    });
  });
}
