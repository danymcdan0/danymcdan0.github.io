class Balloon {
    constructor(x, y, r, col) {
        this.label = "Pop me!",

            this.x = x,
            this.y = y,
            this.vx = 0;
        this.vy = 0;

        this.r = r,
            this.isPopped = false,
            this.col = col
    }

    move() {
        this.x += 10
    }

    blowAway() {
        //calculate and apply the blow away force

        //first get the force proportional to the distance from the mouse
        if (!this.isPopped) {
            let d = dist(this.x, this.y, mouseX, mouseY)
            let force = d > height / 2 ? 0 : -10 / (d * d)

            //apply the force proportionally to the existing velocities
            this.vx += force * (mouseX - this.x)
            this.vy += force * (mouseY - this.y)
        }

        //also add some friction to take energy out of the system
        this.vx *= 0.95
        this.vy *= 0.95

        //update the position
        this.x += this.vx
        this.y += this.vy

        this.checkBounds()
    }

    checkBounds() {
        //make balloon wrap to the other side of the canvas
        if (this.x < 0) this.x = width
        if (this.x > width) this.x = 0
        if (this.y < 0) this.y = height
        if (this.y > height) this.y = 0
    }

    checkToPop() {
        if (!this.isPopped && dist(this.x, this.y, mouseX, mouseY) < this.r) {
            this.isPopped = true
            score = Number(document.getElementById("score").innerHTML)
            score += 1
            document.getElementById("score").innerHTML = score
            this.col = color(156)
        }
    }
}