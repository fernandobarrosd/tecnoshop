import Toggle from "./utilities.js";

const toggleMode = {
    toggleContainer: document
    .querySelector(".toggle-container"),
    toggleIcon: document.querySelector("#toggle-icon"),
    body: document.body,

    setDarkMode() {
        toggleMode.body.setAttribute("class", "dark");
        toggleMode.toggleIcon.setAttribute("class", "bi bi-sun-fill");
        toggleMode.toggleIcon.style.transition = ".3s all";
    },

    setLightMode() {
        toggleMode.body.setAttribute("class", "light");
        toggleMode.toggleIcon.setAttribute("class", "bi bi-moon-fill");
        toggleMode.toggleIcon.style.transition = ".3s all";
    },
    init() {
        toggleMode.toggleIcon.addEventListener("click", () => {
            Toggle.setToggle(
                toggleMode.setDarkMode,
                toggleMode.setLightMode
            )
        })
    }
}

export default toggleMode;