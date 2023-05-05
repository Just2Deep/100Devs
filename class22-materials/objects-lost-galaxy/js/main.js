//Create a mouse object that has four properties and three methods

const mouse = {}

mouse.color    = 'black';
mouse.brand    = 'protonic';
mouse.type     = 'digital';
mouse.wireless = true;

mouse.leftClick = function() {
    console.log('LEFT CLICK')
}

mouse.rightClick = function() {
    console.log('RIGHT CLICK')
}

mouse.scroll = function() {
    console.log('Scrolling')
}