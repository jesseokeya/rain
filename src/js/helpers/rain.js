class Rain {
    constructor(xPos, yPos, extension, speed) {
        this.xPos = xPos
        this.yPos = yPos
        this.extension = extension
        this.speed = speed
        this.color = color(235, 237, 239, 70)
    }

    display() {
        stroke(this.color)
        line(this.xPos, this.yPos, this.xPos, this.yPos + this.extension)
    }

    drop() {
        this.yPos += this.speed
    }
}