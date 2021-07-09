
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ball;
var world,engine;
var leftSide,rightSide;
var groundObj;
var radius=40;  


function preload()
{
	
}

function setup() {
	createCanvas(1500, 670);


	engine = Engine.create();
	world = engine.world;

	ball_option={
	 isStatic:false,
     restitution:0.3,
     friction:0,
	 density:1.2
	}

	//Create the Bodies Here.
   fill
	ball = Bodies.circle(200,100,radius/2,ball_option);
	 World.add(world,ball);
	 groundObj=new ground(width/2,670,width,20);
	 World.add(world,groundObj);
     leftSide=new ground(1100,600,20,120);
     World.add(world,leftSide);
	 rightSide=new ground(1300,600,20,120);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  fill("yellow");
  ellipse(ball.position.x,ball.position.y,radius,radius);
  noFill();
  
  groundObj.display();  
  leftSide.display();
  rightSide.display();

  drawSprites();
 Engine.update(engine);
}

function keyPressed(){
	if(keyCode===UP_ARROW){
    Matter.Body.applyForce(ball,ball.position,{x:85,y:-85});
	}
}

