class Boggie{
    constructor(x,y)
    {
      var options ={ isStatic: false}
      this.image=loadImage("images/coach.png")
      
      this.body =  Bodies.rectangle(x,y,70,70,options);
      World.add(myWorld,this.body);
      Matter.Body.setMass(this.body,this.body.mass*5)
      this.width = 70;
      this.height = 70;
    }
    show()
    {
      fill(255,226,175)
    stroke(255,226,175)
        imageMode(CENTER);
        image(this.image,this.body.position.x, this.body.position.y,70, 70);
    }
  
}  