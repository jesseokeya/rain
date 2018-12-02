class Assemble {
    constructor(population, width, height) {
        this.population = population
        this.width = width
        this.height = height
        this.trackPopulation = []
    }

    populate() {
        for(let i = 0; i < this.population; i++) {
            const randomXpos = random(this.width);
            const randomYpos = random(this.height);
            const extension = random(65);
            const speed = 1
            this.trackPopulation[i] = new Rain(randomXpos, randomYpos, extension, speed)
            this.trackPopulation[i].display()
        }
    }
}