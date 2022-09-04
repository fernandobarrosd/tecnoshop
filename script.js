import Toggle from "./utilities.js";


const toggleContainer = document
.querySelector(".toggle-container");
const toggleText = toggleContainer
.querySelector("#toggle-text");
const toggleIcon = toggleContainer
.querySelector("#toggle-icon");
const menuHamburguer = document
.querySelector(".menu-hamburguer");

const body = document.body;
const navigationBar = document.querySelector("nav");
const visibleClass = "is-visible";

function setToggleIcon(className) {
    toggleIcon.setAttribute("class", className);
    toggleIcon.style.transition = ".3s all";
}

function setDarkMode() {
    body.setAttribute("class", "dark");
    toggleText.textContent = "Light Mode";
    setToggleIcon("bi bi-sun-fill");
}

function setLightMode() {
    body.setAttribute("class", "light");
    toggleText.textContent = "Dark Mode";
    setToggleIcon("bi bi-moon-fill");
}

function showNavigationBar() {
    navigationBar.classList.add(visibleClass);
}

function closeNavigationBar() {
    navigationBar.classList.remove(visibleClass);
}


menuHamburguer.addEventListener("click", () => {
    Toggle.setToggle(showNavigationBar, closeNavigationBar);
})

toggleIcon.addEventListener("click", () => {
    Toggle.setToggle(setLightMode, setDarkMode);
})