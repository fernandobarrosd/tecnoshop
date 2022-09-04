export default class Toggle {
    constructor() {
        this.toggle = false;
    }

    static setToggle(callbackfn1, callbackfn2) {
        this.toggle = !this.toggle;
        
        if (this.toggle) {
            callbackfn1();
        }
        else {
            callbackfn2();
        }
    }

}