class Fighter{ //Classes are blueprints for creating objects
    #health // - "#" makes the property a private field
    constructor(name, health, power){
        this.name = name // this is known as the property of the object
        this.#health = health
        this.power = power
    
    }

    damage (amount){
        this.#health -= amount
        if(this.#health < 0){
            this.#health = 0
        }
    }

    getHealth(){
        return this.#health
    }

    punch(enemy){
        const damage = 5 + this.power
        enemy.#health -= damage
        if(enemy.#health < 0){
            enemy.#health = 0
        }
        console.log(`${this.name} punched ${enemy.name} `)
        console.log(`${enemy.name} health is now ${enemy.#health}`)
        this.#checkWinner(enemy)
        
    }

    // kick(enemy){
    //     const damage = 10 + this.power
    //     enemy.health -= damage
    //     if(enemy.health < 0){
    //        enemy.health = 0
    //    }
    //     console.log(`${this.name} kicked ${enemy.name} `)
    //     console.log(`${enemy.name} health is now ${enemy.health}`)

    //     if(enemy.health == 0 ){
    //         console.log(`${this.name} wins🎊`)
    //     }
    // }
    #checkWinner(enemy){
        if(enemy.#health == 0 ){
            console.log(`${this.name} wins🎊`)
        }
    }
}

const aang = new Fighter("Aang", 100, 10)
const soka = new Fighter("Soka", 100, 10)
// console.log(ninja.getHealth())
// ninja.damage(11)
// console.log(ninja.getHealth())

aang.punch(soka)
aang.punch(soka)
aang.punch(soka)
aang.punch(soka)
aang.punch(soka)
aang.punch(soka)
aang.punch(soka)