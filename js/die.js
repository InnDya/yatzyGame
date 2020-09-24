class Die {
    constructor(id) {
        this.id = id;
        this.value = 0;
    }
    
    throw() {
        this.value = this.getNewValue();
        document.getElementById(this.id).value = this.value;
    }

    refresh() {
        document.getElementById(this.id).value = this.value;
    }

    getNewValue() {
        return Math.floor(Math.random() * 6) + 1;
    }
}

