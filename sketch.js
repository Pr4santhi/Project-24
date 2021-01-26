
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	hammer = new Hammer(100,100);
    ground = new Ground(400,680,800,30);
	stone = new Stone(300,670,70,70);
	rubber = new Rubber(550,670,70,80);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("indigo");
  
  hammer.display();
  ground.display();
  stone.display();
  rubber.display();
}



