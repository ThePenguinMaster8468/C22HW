class Ball{
    constructor(x,y,r){
        var b_options = {
            restitution: 1,
            density: 3,
            frictionAir: 0.001,
            isStatic: false
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(this.x,this.y,this.r/2,b_options);
        World.add(world,this.body);
    }

    display(){
        var gos = this.body.position;
        push();
        translate(gos.x,gos.y);
        noStroke();
        fill("blue");
        strokeWeight(3);
        rectMode(CENTER);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}