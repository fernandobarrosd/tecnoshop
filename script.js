const toggleContainer = document
.querySelector(".toggle-container");
const toggleText = toggleContainer
.querySelector("#toggle-text");
const toggleIcon = toggleContainer
.querySelector("#toggle-icon");
const imageLogo = document
.querySelector(".image-logo");
const menuHamburguer = document
.querySelector(".menu-hamburguer");
const body = document.body;
const navigationBar = document.querySelector("nav");
let isDarkMode = true;
let isOpenNavigationBar = false;
const visibleClass = "is-visible";

function setToggleIcon(className) {
    toggleIcon.setAttribute("class", className);
    toggleIcon.style.transition = ".3s all";
}

function setImageLogo(pathUrl) {
    imageLogo.setAttribute("src", pathUrl);
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

function toggleColorMode() {
    isDarkMode = !isDarkMode;
    if (isDarkMode) {
        setLightMode();
    }
    else {
        setDarkMode();
    }
}

function showNavigationBar() {
    navigationBar.classList.add(visibleClass);
}

function closeNavigationBar() {
    navigationBar.classList.remove(visibleClass);
}

function toggleNavigationBar() {
    isOpenNavigationBar = !isOpenNavigationBar;

    if (isOpenNavigationBar) {
        closeNavigationBar();
    }
    else {
        showNavigationBar();
    }
}

toggleIcon.addEventListener("click", toggleColorMode);
menuHamburguer.addEventListener("click", toggleNavigationBar);