var ball , ballbody,wall,wall1,wall2,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(1500, 220);







ball = createSprite(500,180, 30,30);

ground=createSprite(width/2, height-15, width,10);
ground.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	wall = createSprite(1200,180,200,20);
	wall.shapeColor =  ("red")

	Engine.run(engine);
  

	wall1 = createSprite(1123,190,20,200);
	wall1.shapeColor =  ("red")



	wall2 = createSprite(1263,190,20,200);
	wall2.shapeColor =  ("red")

	



}


function draw() {
  rectMode(CENTER);
  background(0);
  

ellipseMode (RADIUS)

ellipse(ball.position.x,ball.position.y,20,20)


ballBody = Bodies.circle(500 , 180 , 30, {restitution:0.3, isStatic:true});
World.add(world,ballBody);


wall = Bodies.rectangle(1200, 180, 200, 20 , {isStatic:true} );
World.add(world,wall);


  drawSprites();
 
}


function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.setStatic(ballBody , false);
Matter.Body.applyforce (ball.body,position,{x:85,y:85})

	
	}


	}