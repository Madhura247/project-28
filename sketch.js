const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Boy;

function preload()
{
	boy = loadImage("images/boy.png");
}

function setup() {
	createCanvas(1050, 450);


	engine = Engine.create();
	world = engine.world;

	//Bodies are created here

	

	tree = new Tree(850, 225, 340, 420);
	ground = new Ground(525, 442, width, 15);
	mango1 = new Mango(900, 100, 10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(205);
  
  image(boy, 250, 350, 200, 300)
  tree.display();
  ground.display();
  mango1.display();

}



