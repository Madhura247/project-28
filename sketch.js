const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

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
  
	tree = new Tree(850, 218, 340, 442);
	ground = new Ground(525, 442, width, 15);
	mango1 = new Mango(900, 100, 70);
	mango2 = new Mango(800, 110, 50);
	mango3 = new Mango(750, 150, 60);
	mango4 = new Mango(750, 230, 80);
	mango5 = new Mango(890, 190, 75);
	mango6 = new Mango(890, 30, 50);
	mango7 = new Mango(950, 150, 83);
	mango8 = new Mango(900, 100, 80);
	mango9 = new Mango(800, 200,65);
	mango10 = new Mango(800, 50, 50);
	mango11 = new Mango(900, 100, 75);
	mango12 = new Mango(1000, 200, 79);

  stone = new Stone(190, 280, 50);
  launcher = new Launcher(stone.body, {x : 190, y:280});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(205);
  
  image(boy, 250, 350, 200, 300)
  tree.display();
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  stone.display();
  launcher.display();

  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);
  detectCollision(stone, mango6);
  detectCollision(stone, mango7);
  detectCollision(stone, mango8);
  detectCollision(stone, mango9);
  detectCollision(stone, mango10);
  detectCollision(stone, mango11);
  detectCollision(stone, mango12);

  textFont("Courier New")
  textSize(20)
  text("Press Space key to get a second chance to Play!", 50, 50)

}


function mouseDragged() {
  Matter.Body.setPosition (stone.body, {x:mouseX, y:mouseY});
}

function mouseReleased() {
  launcher.fly();
}

function keyPressed() {
  if (keyCode === 32) {
    Matter.Body.setPosition(stone.body, { x:190, y:280})
    launcher.attach(stone.body);
  }
}

function detectCollision(lstone, lmango) {
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position

  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  if(distance<=lmango.r+lstone.r) {
    Matter.Body.setStatic(lmango.body, false);
  }
}
