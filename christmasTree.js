function drawChristmasTree(height){
    for(let i = 1; i < height; i++){
        let space = " ".repeat(height -i)
        let star =  "*".repeat((2* i) -1)
        console.log(space + star)
    }
    
    let trunkSpace = " ".repeat(height -1)
    console.log(trunkSpace + "|")
    console.log(trunkSpace + "|")
}

drawChristmasTree(12)