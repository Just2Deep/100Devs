//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods

function TonyHawkCharacter(characterName, stance, sponsor, characterMove) {
    this.stance = stance
    this.characterName  = characterName
    this.sponsor = sponsor
    this.specialMove = characterMove

    this.flip = () => console.log( 'Kick Flip ')
    this.taunt = () => console.log( `Don't make me use my ${this.specialMove}`)
    this.grab = () => console.log('Melon Grabb')

}

const kareemCampbell = new TonyHawkCharacter( 'Kareem', 'Goofy', 'Element', 'Ghetto Bird')