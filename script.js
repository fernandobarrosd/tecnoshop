import Toggle from "./utilities.js";
import toggleMode from "./toggle-mode.js";
import navigationBar from "./navigation-bar.js";


toggleMode.init();

const menuHamburguer = document
.querySelector(".menu-hamburguer");


menuHamburguer.addEventListener("click", () => {
    Toggle.setToggle(
        navigationBar.show, 
        navigationBar.close
    );
})



