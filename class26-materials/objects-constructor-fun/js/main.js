//Create a constructor with 4 properties and 3 methods

function Pizza(name, size, price, toppings) { 
    this.name  = name,
    this.size  = size,
    this.price = price,
    this.toppings = toppings,

    this.addBread = function() {
            console.log('Adding handmade bread')
        }

    this.addExtraToppings = function() {
        console.log('Adding Extra Toppings!!')
    }

    this.frisbee = function() {
        console.log('YEEEEEEETTT!!')
    }
}

let cheeseBurst = new Pizza('cheese burst', 'medium', '$3.2', ['jalapenos', 'onion', 'pepperoni']);