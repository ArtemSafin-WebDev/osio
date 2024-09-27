import "virtual:svg-icons-register";
import "../scss/style.scss";
import openWorld from "./openWorld";
import shops from "./shops";
import reviews from "./reviews";
import categories from "./categories";
import ticker from "./ticker";
import intro from "./intro";
import products from "./products";
import features from "./features";
import contactForm from "./contactForm";
import header from "./header";

document.addEventListener("DOMContentLoaded", () => {
  openWorld();
  shops();
  reviews();
  categories();
  ticker();
  intro();
  products();
  features();
  contactForm();
  header();
});

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
