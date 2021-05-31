const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,ground1,box1,box2,pig1,log1;

function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
  ground1 = new ground(600,height,1200,20);
  box1 = new box(700,320,70,70);
  box2 = new box(910,320,70,70);
  pig1 = new pig(810,350);
  log1 = new log(810,260,300,PI);
  
}
  function draw(){
    background("black");
    Engine.update(engine);
    ground1.display();
    box1.display();
    box2.display();
    pig1.display();
    log1.display();
  }  
  
