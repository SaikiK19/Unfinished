class Drops {
    constructor(x,y,radius) {
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.01,
            density:1.2
        }
        this.body = Bodies.circle(x,y,20,options);
        this.radius = 20;
        
        World.add(world,this.body);
    }
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        fill(255);
        ellipse(0, 0, this.radius);
        pop();
      }
}