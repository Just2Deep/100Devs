// this file is just for our reference

class EspressoMachine {
    constructor(name, brand, price, color) {
        this.name = name;
        this.brand = brand;
        this.price = price;
        this.color = color;
    }

    brew() {
        console.log('brewing your favorite coffee !!')
    }

    makeFroth() {
        console.log('Making Some Froth!!')
    }

    turnOn() {
        console.log('Turn On the machine to get some magic')
    }


}

let expresso = new EspressoMachine('Geggia Pro', 'Geggia', '$1,000', 'Red')