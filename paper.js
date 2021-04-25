class paper{
    constructor(x, y,r) {
        var options = {
            'isStastic':false,
            'restitution':0.3,
            'friction':0,
            'density':1.2
        }
        this.r=r;
        this.body=Bodies.circle(x,y,r,options);
        World.add(world,this.body);
        this.image=loadImage("paper.png")
    }
    
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0,0,this.r, this.r)
        pop();
      }
}