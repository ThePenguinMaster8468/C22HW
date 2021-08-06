
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Roof(400,600,1000,20);
	roof = new Roof(400,200,600,40);

	bob1 = new Ball(200,400,100);
	bob2 = new Ball(300,400,100);
	bob3 = new Ball(400,400,100);
	bob4 = new Ball(500,400,100);
	bob5 = new Ball(600,400,100);

	rope1 = new Rope(bob1.body,{x:200,y:220});
    rope2 = new Rope(bob2.body,{x:300,y:220});
    rope3 = new Rope(bob3.body,{x:400,y:220});
    rope4 = new Rope(bob4.body,{x:500,y:220});
    rope5 = new Rope(bob5.body,{x:600,y:220});


	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background("#fff");
	Engine.update(engine);
	roof.display();
	ground.display();
	rope1.display();
  	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
  	bob5.display();
  	drawSprites();
 
}

function keyPressed() {
	if (keyCode === LEFT_ARROW) {
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-1000,y:0});
	}
}