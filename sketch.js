const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var ball;
var ball1;
var ball2;
var ground;
var ground1;
var ground2;
var groundprincipal;

function setup(){
createCanvas (windowWidth,windowHeight);

engine = Engine.create();
world = engine.world;

var ball_options = {
  restitution: 0.95,
  frictionAir:0.01
}

var ball1_options = {
  restitution: 0.95,
  frictionAir:0.01

}

var ball2_options = {
   restitution: 0.95,
   frictionAir: 0.01

}

var ground_options ={
  isStatic: true
}

var ground1_options = {
  isStatic: true

}

var ground2_options = {

  isStatic: true
}

var groundprincipal_options = {
isStatic: true

}

ball = Bodies.circle(40,10,15,ball_options);
ball1 = Bodies.circle(200,10,20,ball_options);
ball2 = Bodies.circle(290,50,20,ball_options);
  World.add(world,ball);
  World.add(world,ball1);
  World.add(world,ball2);
  ground=Bodies.rectangle(0,150,100,10,ground_options);
  ground1=Bodies.rectangle(160,225,100,10,ground_options);
  ground2=Bodies.rectangle(260,300,100,10,ground_options);
  groundprincipal=Bodies.rectangle(0,350, 400, 10, ground_options);
  World.add(world,ground);
  World.add(world,ground1);
  World.add(world,ground2);
  World.add(world,groundprincipal);





    }

    



function draw(){
    createCanvas(400,400);
    background("lightgreen");
  Engine.update(engine);


  fill("blue");
  ellipse(ball.position.x,ball.position.y,20);
  fill("black");
  rect(ground.position.x,ground.position.y,100,10);
  fill("orange");
  ellipse(ball1.position.x,ball1.position.y,30);
  fill("purple");
  rect(ground1.position.x,ground1.position.y,100,10);
  fill("pink");
  ellipse(ball2.position.x,ball2.position.y,30);
  fill("green");
  rect(ground2.position.x,ground2.position.y,400,10);
  fill("red");
  rect(groundprincipal.position.x,groundprincipal.position.y, 400, 10);
}
