class Paper {
  constructor(x, y) {
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.2,
        'isStatic':false
    }
    this.body = Bodies.circle(x, y, 15, options);
    this.radius=50;
    this.image=loadImage("paper.png");
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle=this.body.angle
   push()
   translate(pos.x,pos.y)
   rotate(angle)
    imageMode(CENTER);
    image(this.image,0, 0, this.radius,this.radius);
    pop();
  }
}