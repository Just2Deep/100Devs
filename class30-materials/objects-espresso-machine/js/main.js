//Create an espresso machine constructor that makes machines with 4 properties and 3 methods

class EspressoMachine {
    constructor(name, brand, price, color) {
        this.name = name;
        this.brand = brand;
        this.price = price;
        this.color = color;
    }

    brew() {
        console.log('brewing!!')
    }

    makeFroth() {
        console.log('Making Froth!!')
    }

    turnOn() {
        console.log('Turn On')
    }


}

let expresso = new EspressoMachine('Nescafe', 'Tata', '$2,000', 'Black')