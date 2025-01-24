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
import brand from "./brand";
import fancybox from "./fancybox";
import buy from "./buy";
import actualMaterials from "./actualMaterials";
import otherMaterials from "./otherMaterials";
import selects from "./selects";
import drivers from "./drivers";

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
  brand();
  fancybox();
  buy();
  actualMaterials();
  otherMaterials();
  selects();
  drivers();
});

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
