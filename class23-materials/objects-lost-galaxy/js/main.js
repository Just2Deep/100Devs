//Create a dog object that has four properties and three methods

function Dog( color, breed, name, gender)  {
    this.color = color,
    this.breed = breed,
    this.name  = name,
    this.gender = gender,

    this.run = () => console.log('run'),
    this.smell = () => console.log('Sniff, sniff'),
    this.bark = () => console.log('Woof')

}

const dog = new Dog("black", "Labrodar", "Jackie", "male");

console.log( dog.smell() )