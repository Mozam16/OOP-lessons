// let now = new Date()
// console.log(now.getFullYear())
// console.log(String(now.getMonth() + 1).padStart(2, "0"))
// console.log(now.getDate())
// console.log(now.getHours())
// console.log(now.getMinutes())
// console.log(now.getSeconds())


function upadeTime(){
    let now = new Date()

    let hours = String(now.getHours()).padStart(2, "0")
    let minutes = String(now.getMinutes()).padStart(2, "0")
    let seconds = String(now.getSeconds()).padStart(2, "0")


    let time = `${hours}:${minutes}:${seconds}`
    // console.log(time)
    document.querySelector(".time").innerHTML = time
}


setInterval(upadeTime, 1000);