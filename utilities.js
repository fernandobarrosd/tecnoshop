const Toggle = {
    toggle: false,
    setToggle(callbackf1, callbackf2) {
        this.toggle = !this.toggle;

        if (this.toggle) {
            callbackf1();
        }
        else {
            callbackf2();
        }
    }
}

const isLastItem = (indice, array = []) => {
    return indice === array.length - 1;
}

export {
    Toggle,
    isLastItem
}