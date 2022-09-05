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

export default Toggle;