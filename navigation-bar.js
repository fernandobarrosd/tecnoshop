import { Toggle } from "./utilities.js";


const navigationBar = {
    navigaton: document.querySelector("nav"),
    menuHamburguer: 
    document.querySelector(".menu-hamburguer"),
    visibleClass: "is-visible",
    handleClick() {
        navigationBar.menuHamburguer
        .addEventListener("click", () => {
            Toggle.setToggle(
                navigationBar.show,
                navigationBar.close
            )
        })
    },

    show() {
        navigationBar.navigaton.classList.add(
            navigationBar.visibleClass
        )
    },

    close() {
        navigationBar.navigaton.classList.remove(
            navigationBar.visibleClass
        )
    },

    init() {
        navigationBar.handleClick();
    }

    
}

export default navigationBar;