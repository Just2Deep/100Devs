//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods

function StreetFighter( name, height, likes, weight ) {

    this.name = name;
    this.height = height;
    this.likes  = likes;
    this.weight = weight;

    this.handMove = function() {
        console.log('Punch')
    }

    this.legMove = () => {
        console.log('KickAss')
    }

    this.specialMove = () => {
        console.log('Ninja Kick Cool')
    }
}

const cammy = new StreetFighter( 'cammy', 5.5, 'cats', 60)

