const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,ground,ball;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  var option1 = {
    restitution:1.0
  }
  var option = {
    isStatic:true
  }
  ground = Bodies.rectangle(200,390,500,10,option);
  World.add(world,ground);
  
  ball = Bodies.circle(200,100,20,option1);
  World.add(world,ball);
}
  function draw(){
    background("black");
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,500,10);

    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,20,20);
  }  
  
