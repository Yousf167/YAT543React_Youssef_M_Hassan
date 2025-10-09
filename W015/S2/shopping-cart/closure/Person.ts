class Person {
    private intervalId : number;
    constructor() {
        this.intervalId = setInterval(() => {
            console.log("rtdgdfg")
        }, 10000);
    }
    // Garbage Collector

    //~Person() {}
    // Destructor
    cleanUp() {
        clearInterval(this.intervalId);
    }
}

let p = new Person()
p.cleanUp()