// Polymorphism is an oop concept that allow objects to act as intances of anothe class
class Fighter{
    constructor(character, health, strenght){
        this.character = character
        this.health = health
        this.strenght = strenght 
    }

    attack(enemy){
        console.log("basic attack")
    }
}

class Wizard extends Fighter{
    attack(enemy){
        enemy.health -= this.strenght + 10

        console.log(`${this.character} cast fireball 🔥 at ${enemy.character}, enemy health is now ${enemy.health}`)
        if( enemy.health < 0){
            enemy.health = 0
        }
    }
    
}

class Ninja extends Fighter{
    attack(enemy){
        enemy.health -= this.strenght + 10
        console.log(`${this.character} threw ninja star🌠 at ${enemy.character}, enemy health is now ${enemy.health}`)
        if( enemy.health < 0){
           enemy.health = 0
        }
    }

}
const iceKing= new Wizard("Ice King", 100, 10)
const michelAngelo = new Ninja("Michel Angelo", 100, 10)

console.log("Ice King=> ",iceKing.health)
console.log("Michel Angelo=> ",michelAngelo.health)
iceKing.attack(michelAngelo)

// iceKing.fireball(michelAngelo)
// console.log("Michel Angelo=> ",michelAngelo.health)
// michelAngelo.throwingStar(iceKing)
// console.log("Ice King=> ",iceKing.health)
// // console.log("Ice King=> ",iceKing.health)
// // console.log(michelAngelo.health)
// // console.log(michelAngelo.health)
// // console.log(iceKing.health)