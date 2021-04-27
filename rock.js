class Rock{
    constructor(x,y)
    {
      var options ={ isStatic: true}
      this.image=loadImage("images/rock1.png")
      
      this.body =  Bodies.rectangle(x,y,90,90,options);
      World.add(myWorld,this.body);
      this.width = 90;
      this.height = 90;
    }
    show()
    {
      fill(255,226,175)
    stroke(255,226,175)
        imageMode(CENTER);
        image(this.image,this.body.position.x, this.body.position.y,90, 90);
    }
  
}  