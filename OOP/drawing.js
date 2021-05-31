// window.onload = function() {
//     spawnSpirals(20)
// }

// function spawnSpirals(nrOfSpirals) {

//     let colors = ['red', 'green', 'blue', 'purple', 'cyan', 'magenta']

//     for (let i = 0; i < nrOfSpirals; i++) {
//         let rp =   {x: Math.floor(Math.random() * 800),
//                     y: Math.floor(Math.random() * 800)}

//         let ss = Math.floor(Math.random() * 12) + 3
//         let gr = Math.floor(Math.random() * 17) + 3
//         let nc = Math.floor(Math.random() * 45) + 5

//         let rc = Math.floor(Math.random() * 5)
//         let color = colors[rc]

//         drawSpiral(color, rp, ss, gr, nc)
//     }
// }

// function drawSpiral(color, initialPos, initialStepSize, growthRate, nrOfCicles) {
//     let canvas = document.getElementById('myCanvas')
//     let ctx = canvas.getContext('2d')

//     let currentPos = initialPos
//     let step = initialStepSize
//     ctx.beginPath()
//     ctx.strokeStyle = color
//     ctx.moveTo(currentPos.x, currentPos.y)

//     for (let i = 0; i < nrOfCicles; i++) {
//         currentPos = drawLineAndReturnPosition(ctx, currentPos.x, currentPos.y - step)
//         currentPos = drawLineAndReturnPosition(ctx, currentPos.x + step, currentPos.y)
//         step += growthRate
//         currentPos = drawLineAndReturnPosition(ctx, currentPos.x, currentPos.y + step)
//         currentPos = drawLineAndReturnPosition(ctx, currentPos.x - step, currentPos.y)
//         step += growthRate
//     }
//     ctx.stroke()
// }

// function drawLineAndReturnPosition(ctx, x, y) {
//     ctx.lineTo(x, y)
//     return {
//         x: x,
//         y: y
//     }
// }

let canvas = document.getElementById('myCanvas')
let ctx = canvas.getContext('2d')

class DoubleCircle {
    constructor(circleOne, circleTwo) {
        this.circleOne = circleOne
        this.circleTwo = circleTwo

        if(nextToCircleOne) {
            circleTwo.circleCenter.y = circleOne.circleCenter.y
            circleTwo.circleCenter.x = circleOne.circleCenter.x + circleOne.radius + circleTwo.radius
        }
    }
    
    draw() {
        this.circleOne.draw()
        this.circleTwo.draw()
    }

class Rectangle {
    constructor(width, height, pos) {
        this.width = width
        this.height = height
        this.pos = pos
    }

    draw() {
        ctx.beginPath()
        ctx.strokeStyle = this.color
        ctx.rect(this.pos.x, this.pos.y, this.width, this.height)
        ctx.stroke()

    }
}


class Circle {
    constructor(radius, color, circleCenter) {
    this.radius = radius
    this.color = color
    this.circleCenter - circleCenter
    }

    draw() {
        ctx.beginPath()
        ctx.strokeStyle = this.color
        ctx.arc(this.circleCenter.x, this.circleCenter.y, this.radius, 0, 2 * Math.PI, false)
        ctx.stroke()
    }

}

class Triangle {
    constructor(points, color) {
        this.points = points
        this.color = color

        let rn = Math.floor(Math.random() * 2)
        if (rn === 0) {
            this.fill = false
        } else {
            this.fill = true
        }
    }

    draw() {
        ctx.beginPath()
        this.fill ? ctx.fillStyle = this.color : ctx.strokeStyle = this.color
        // if(this.fill) {
        //     ctx.fillStyle = this.color
        // } else {
        //     ctx.strokeStyle = this.color
        // }

        ctx.moveTo(this.points.a.x, this.points.a.y)
        ctx.lineTo(this.points.b.x, this.points.b.y)
        ctx.lineTo(this.points.c.x, this.points.c.y)
        ctx.closePath()

        this.fill ? ctx.fill() : ctx.stroke()

    }
}

class Shapes {
    constructor(amount) {
        this.shapes = []
        let colors = ['red', 'cyan', 'magenta', 'darkbrown', 'tomato', 'lightcoral']
        for (let i = 0; i < amount; i++) {
            // let newCircle = new Circle(20, 'red', {x:10, y:20})
            let randomRadius = Math.floor(Math.random() * 70) 
            let ri = Math.floor(Math.random() * colors.lenght) 
            let rc = colors[ri]
            this.shapes.push(new Circle)
            this.pos = {
              x: Math.random() * canvas.width,
              y: Math.random() * canvas.height  
            } 
            
            let rn = Math.floor(Math.random() *3)
            let shape = null
            if(rn === 0) {
                shape = new Circle(randomRadius, rc, pos)
            } else if (rn === 1) {
                shape = new Rectangle(width, height, pos)
            } else {
                let allowedRegionCenter =  {
                    x: Math.floor(Math.random() * canvas.width),
                    y: Math.floor(Math.random() * canvas.height)
                }
                let minOfset = 25
                let maxOfset = 100
                let rOfset = Math.floor(Math.random() * (maxOfset - minOfset)) + minOfset

                let minX = allowedRegionCenter.x - rOfset
                let maxX = allowedRegionCenter.x + rOfset
                let minY = allowedRegionCenter.y - rOfset
                let maxY = allowedRegionCenter.y + rOfset
                
                let points = {
                    a: {
                        x: Math.floor(Math.random() * (maxX - minX)) + minX,
                        y: Math.floor(Math.random() * (maxY - minY)) + minY
                    },
                    b: {
                        x: Math.floor(Math.random() (maxX - minX)) + minX,
                        y: Math.floor(Math.random() * (maxY - minY)) + minY
                    },
                    c: {
                        x: Math.floor(Math.random() (maxX - minX)) + minX,
                        y: Math.floor(Math.random() * (maxY - minY)) + minY 
                    }
                }
                shape = new Triangle(points, rc)
            }
            this.shape.push(shape)
        }
    }

    draw() {
        for (let shape of this.shapes) {
            shape.draw()
        }
    }
}

let shapes = new Shapes(50)
shapes.draw()