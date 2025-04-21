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
import singleNews from "./singleNews";
import aboutFeatures from "./aboutFeatures";
import lineCatalog from "./lineCatalog";
import lineGallery from "./lineGallery";
import tabs from "./tabs";
import lineVariants from "./lineVariants";
import selectColor from "./selectColor";
import modals from "./modals";
import search from "./search";
import forms from "./forms";
import linePartner from "./linePromo";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import smoothScrolling from "./smoothScrolling";
import lineFeatures from "./lineFeatures";
import twoImagesWithTextScreen from "./twoImagesWithTextScreen";
import lineWithTextPreinstalled from "./lineWithTextPreinstalled";
import lineConnection from "./lineConnection";
import lineSpecs from "./lineSpecs";
import lineTooltip from "./lineTooltip";
import advantages from "./advantages";
import pageFooter from "./pageFooter";
import { ScrollToPlugin } from "gsap/all";
import scrollUp from "./scrollUp";
import mediacenter from "./mediacenter";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

document.addEventListener("DOMContentLoaded", () => {
  header();
  smoothScrolling();
  singleNews();
  openWorld();
  shops();
  advantages();
  reviews();
  categories();
  ticker();
  intro();
  products();
  features();
  contactForm();
  lineTooltip();
  brand();
  fancybox();
  buy();
  actualMaterials();
  otherMaterials();
  selects();
  drivers();
  aboutFeatures();
  lineCatalog();
  lineGallery();
  tabs();
  lineVariants();
  selectColor();
  modals();
  search();
  forms();
  linePartner();
  lineFeatures();
  twoImagesWithTextScreen();
  lineWithTextPreinstalled();
  lineConnection();
  lineSpecs();
  pageFooter();
  scrollUp();
  mediacenter();
});

window.addEventListener("load", () => {
  window.scrollTo(0, 0);
  if (window.location.hash) {
    console.log("Hash", window.location.hash);
    gsap.to(window, {
      duration: 1,
      scrollTo: {
        y: window.location.hash,
        offsetY: 50,
      },
      autoKill: false,
      delay: 0.4,
    });
  }
  document.body.classList.add("loaded");
  ScrollTrigger.refresh();
});
