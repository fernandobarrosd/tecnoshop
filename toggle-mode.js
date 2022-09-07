import themesT from "./themes.js";
import { isLastItem } from "./utilities.js";

const toggleMode = {
    toggleContainer: document
    .querySelector(".toggle-container"),
    toggleIcon: document.querySelector("#toggle-icon"),
    body: document.body,
    currentTheme: 0,
    themes: themesT,
    

    update() {
        toggleMode.body.
        setAttribute("class", 
        toggleMode.getTheme().name);
        

        toggleMode.toggleIcon
        .setAttribute("class", 
        toggleMode.getTheme().iconName);
    },


    getTheme() {
        return themesT[toggleMode.currentTheme];
    },

    next() {
        if (!isLastItem(toggleMode.currentTheme, themesT)) {
            toggleMode.currentTheme ++;
        }

        else {
            toggleMode.currentTheme = 0;
        }
    },


    init() {
       toggleMode.handleClick();
    },

    handleClick() {
        toggleMode.toggleContainer
        .addEventListener("click", () => {
           toggleMode.next();
           toggleMode.update();
        })
    }
}

export default toggleMode;