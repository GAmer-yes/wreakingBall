class Ball{
    constructor(x, y, width, height) {
        var options = {

            'frictionAir':0.004,
            'density':1.0,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(CENTER);
        strokeWeight(4);
        stroke("green");
        fill("white");
        ellipse(0, 0, this.width, this.height);
        pop();
      }
}