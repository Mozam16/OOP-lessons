const player1 = {
    name: "Spongebob", //These are called properties...every entry of an object is a property and function inside of an object is called a method
    health:100,
    attack: function(){
        console.log("punch")
    }
};

console.log(player1.name)
console.log(player1.health)
player1.attack()

const player2 = {
    name: "Patrick", //These are called properties...every entry of an object is a property and function inside of an object is called a method
    health:90,
    attack: function(){
        console.log("kick")
    }
};

console.log(player2.name)
console.log(player2.health)
player2.attack()



