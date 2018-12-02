let orchestrate, mySound

function preload() {
    soundFormats('mp3', 'ogg');
    mySound = loadSound('../sounds/rain.mp3');
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function setup() {
    let width = windowWidth, height = windowHeight
    mySound.setVolume(1.0);
    mySound.loop();
    createCanvas(width, height)
    orchestrate = new Assemble(300, width, height)
}

function draw() {
    background(0)
    orchestrate.populate()
}