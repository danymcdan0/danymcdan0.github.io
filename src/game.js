var title = "My Balloon Game"
//hoisting is the difference between let and var --> essentially server the same purpose
let developer = "Danyal Saleh"

const BALLOON_TOTAL = 20
const balloons = []

let score = 0;
let c_width
let c_height = 650
 
/*
const testBalloon = {
    label: "Pop me!",
    x: 100,
    y: 50,
    isPopped: false,
    move(){
        this.x += 10
    }
}
console.log(testBalloon)
*/

function greeting() {
    //document.write("Text here") //Don't use this function as it will re-write the whole html page

    //let gameTitleText = title + " - by - " + developer
    let gameTitleText = `${title}  - by - ${developer}`

    let gameTitle = document.getElementById("game-title")
    gameTitle.innerHTML = gameTitleText
}


function setup() {
    //creates canvas object and attaches it to specified container
    let canvasDiv = document.getElementById('game-container');
    c_width = canvasDiv.offsetWidth;
    let canvas = createCanvas(c_width, c_height)
    canvas.parent("game-container")

    for (let i = 0; i < BALLOON_TOTAL; i++) {
        balloons.push(new Balloon(
            random(width),
            random(height),
            33,
            color(random(255), random(255), random(255))))
    }
}

function draw() {
    //a nice sky blue background
    background(135, 206, 235)

    for (let balloon of balloons) {
        balloon.blowAway()
        balloon.checkToPop()
        fill(balloon.col)
        circle(balloon.x, balloon.y, balloon.r)
    }

    if (score == BALLOON_TOTAL) youWin()
}


function youWin() {
    document.getElementById("score").innerHTML = "VICTORY!"
}

function reset() {
    score = 0
    document.getElementById("score").innerHTML = 0
    balloons.splice(0, balloons.length)
    setup()
}