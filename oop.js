class Fighter{   //Classes are blueprints for creating objects
    constructor(name, health, power){
        this.name = name // this is known as the property of the object
        this.health = health
        this.power = power
    }

    punch(enemy){
        const damage = 5 + this.power
        enemy.health -= damage
        if(enemy.health < 0){
            enemy.health = 0
        }
        console.log(`${this.name} punched ${enemy.name} `)
        console.log(`${enemy.name} health is now ${enemy.health}`)

        if(enemy.health == 0 ){
            console.log(`${this.name} wins🎊`)
        }
    }

    kick(enemy){
        const damage = 10 + this.power
        enemy.health -= damage
        if(enemy.health < 0){
           enemy.health = 0
       }
        console.log(`${this.name} kicked ${enemy.name} `)
        console.log(`${enemy.name} health is now ${enemy.health}`)

        if(enemy.health == 0 ){
            console.log(`${this.name} wins🎊`)
        }
    }

    heal(){
        const healing = 15 + this.power
        this.health += healing
        console.log(`${this.name} is healed `)
        console.log(`${this.name} health is now ${this.health}`)
    }
}

// let Aang = new Fighter("Aang", 100, 7)
// let Katara = new Fighter("Katara", 90, 5)

// Aang.punch(Katara)
// Aang.heal()
// Aang.heal()
// Aang.heal()
// Katara.kick(Aang)
// Katara.kick(Aang)

// const number =String(20) 
// console.log( typeof number ) 


// INHERITANCE
class Firebender extends Fighter{
    fireball(enemy){
        const damage = 25 + this.power
        enemy.health -= damage
        if(enemy.health < 0){
           enemy.health = 0
        }
        console.log(`${this.name} used fireball on ${enemy.name} `)
        console.log(`${enemy.name} health is now ${enemy.health}`)

        if(enemy.health == 0 ){
                console.log(`${this.name} wins🎊`)
            }
    }
    
}
const Jet = new Fighter("Jet", 100, 3)
const Zuko = new Firebender("Zuko", 100, 5)


setTimeout(() => {
   Jet.punch(Zuko) 
}, 2000);

setTimeout(() => {
   Jet.kick(Zuko) 
}, 3000);

setTimeout(() => {
   Zuko.kick(Jet) 
}, 4000);

setTimeout(() => {
   Zuko.punch(Jet) 
}, 5000);

setTimeout(() => {
 Jet.heal()   
}, 6000);

setTimeout(() => {
  Zuko.fireball(Jet)  
}, 7000);

setTimeout(() => {
  Zuko.fireball(Jet)  
}, 8000);
setTimeout(() => {
  Zuko.fireball(Jet)  
}, 8000);
setTimeout(() => {
  Zuko.fireball(Jet)  
}, 8000);


