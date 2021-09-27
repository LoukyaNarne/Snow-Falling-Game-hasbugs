class Snow{
    constructor(x, y, r) {
        var options = {
            'restitution':0,
            'friction':1.0,
            'density':1.0,
        }
            this.body = Bodies.circle(x, y, r, options);
            this.r = r;
            this.image = loadImage("snow5.webp");
            World.add(world, this.body);
    }
    update(){
if (this.body.position, y > 620){
Matter.body.setPosition(this.body, {x:random(0, 800), y:-10})
Body.setVelocity(this.body, {x:0, y:5})
}    
    }
    display(){
        var angle= this.body.angle
        Body.setVelocity(this.body, {x:0, y:5})
    push()
        translate(this.body.position.x, this.body.position.y)
        rotate(angle)
        imageMode(CENTER)
        image(this.image, 0, 0, 40, 40)
    pop()
    }
}

