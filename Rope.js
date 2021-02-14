class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.8,
            length: 250,
        }
        this.pointB = pointB
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
    attach(body){
        //this.sling.bodyA = body;
    }
    
    fly(){
        this.sling.bodyA = null;
    }

    display(){
        //image(this.sling1,200,20);
        //image(this.sling2,170,20);
        if(this.rope.bodyA){
            var pointA = this.rope.bodyA.position;
            var pointB = this.pointB;
            push();
            
            stroke(48,22,8);
            strokeWeight(7);
            line(pointA.x , pointA.y, pointB.x , pointB.y);
                
            
            
            pop();
        }
    }
    
}