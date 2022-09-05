const navigationBar = {
    navigaton: document.querySelector("nav"),
    visibleClass: "is-visible",
    show() {
        navigationBar.navigaton.classList.add(
            navigationBar.visibleClass
        )
    },

    close() {
        navigationBar.navigaton.classList.remove(
            navigationBar.visibleClass
        )
    }
}

export default navigationBar;