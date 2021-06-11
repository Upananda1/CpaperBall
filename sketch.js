
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ball;
function preload()
{
	
}

function setup() {
	createCanvas(500, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground =new Ground(width/2,470,width,20);
	leftSide =new Ground(300,400,20,110);
    rightSide =new Ground(400,400,20,110);


	var ball_options = {
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}



	ball = Bodies.circle(50,100,20,ball_options)
	World.add(world,ball)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,20)
  ground.show();
  leftSide.show();
  rightSide.show();
  drawSprites();

  if (keyDown === UP_ARROW){
	  keyPressed()
  }


}


//function keyPressed () {
 //  if (keyCode === UP_ARROW){
//	Matter.Body.applyForce(ball,{x:0,y:0},{x:0.5,y:0})
//	Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
 //  }
//}



function keyPressed() { 
	if (keyCode === UP_ARROW) {
		 Matter.Body.applyForce(ball,ball.position,{x:25,y:-85});
	}
}
     