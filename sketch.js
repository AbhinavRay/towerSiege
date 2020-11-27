const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var score = 0

function setup() {
  var canvas = createCanvas(800,700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400,height,2000,20)
  platform = new Ground(590,415,180,10)

  block1 = new Block(590,305,30,40);
  block2 = new Block(620,345,30,40);
  block3 = new Block(590,345,30,40);
  block4 = new Block(560,345,30,40);
  block5 = new Block(650,385,30,40);
  block6 = new Block(620,385,30,40);
  block7 = new Block(590,385,30,40);
  block8 = new Block(560,385,30,40);
  block9 = new Block(530,385,30,40);

  polygon = new Polygon(100,400)
  slingshot = new Slingshot(polygon.body,{x:100, y:400});

}

function draw() {
  background(225);
  Engine.update(engine);

  //noStroke()
  textSize(35)
  fill("red")
  console.log("Score: " + score)
  text("Score: " + score,width-300,50)

  ground.display();
  platform.display();
  
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  
  console.log("speed = "+block1.speed)

  polygon.display();  
  slingshot.display();
    }

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
      slingshot.attach(polygon.body)
  }
}

