const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var bg;
var ground;
var boggie1,boggie2,boggie3;
var chain1;
var trainSound 
var crashSound
var flag = 0;

function preload(){
  bg= loadImage("images/bg.jpg");
  trainSound = loadSound("sound/train.mp3");
  crashSound = loadSound("sound/train_crossing.mp3");
}
function setup() {
  createCanvas(1200,400);
  myEngine = Engine.create();
  myWorld= myEngine.world;

  ground = new Ground(600,390,1200,20);
  boggie1=new Boggie(200,200)
  boggie2=new Boggie(300,200)
  boggie3=new Boggie(400,200)
  boggie4=new Boggie(500,200)
  boggie5=new Boggie(600,200)
  boggie6=new Boggie(700,200)
 Sling1=new SlingShot(boggie1.body,boggie2.body)
 Sling2=new SlingShot(boggie2.body,boggie3.body)
 Sling3=new SlingShot(boggie3.body,boggie4.body)
 Sling4=new SlingShot(boggie4.body,boggie5.body)
 Sling5=new SlingShot(boggie5.body,boggie6.body)

 rock1=new Rock(1000,340)
}

function draw() {
  background(bg);  
  Engine.update(myEngine);
  ground.show()
  boggie1.show()
  boggie2.show()
  boggie3.show()
  boggie4.show()
  boggie5.show()
  boggie6.show()
  Sling1.show()
  Sling2.show()
  Sling3.show()
  Sling4.show()
  Sling5.show()
  rock1.show()

var collison=Matter.SAT.collides(boggie6.body,rock1.body)
if(collison.collided)
{
   flag=1
}
if(flag===1){
  textSize("70")
  stroke("white")
  fill("red")
  text("CRASH",600,100)
  crashSound.play()
}
  }
 function keyPressed()
 {
  if(keyCode===RIGHT_ARROW)
  {
     Matter.Body.applyForce(boggie6.body,{x:boggie6.body.position.x,y:boggie6.body.position.y},{x:0.5,y:0})
     trainSound.play()
  }
 }

  
