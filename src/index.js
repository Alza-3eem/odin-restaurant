import "./styles.css";
import renderHomepage from "./homepage.js";
import renderMenuPage from "./menupage.js";
import renderAboutPage from "./aboutpage.js";

renderHomepage();

const homeBtn = document.querySelector(".home-btn")
const menuBtn = document.querySelector(".menu-btn")
const aboutBtn = document.querySelector(".about-btn")

homeBtn.addEventListener("click", renderHomepage);
menuBtn.addEventListener("click", renderMenuPage);
aboutBtn.addEventListener("click", renderAboutPage);