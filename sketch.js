var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var line1,lin2,line3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 150, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	line1= createSprite(width/2,height-45,200,10)
     line1.shapeColor = color("red")

	 line2 = createSprite(300,height-45,20,100)
	 line2.shapeColor = color("red")

	 line3 = createSprite(500,height-45,20,100)
	 line3.shapeColor = color("red")

	engine = Engine.create();
	world = engine.world;

	var options = {
		restitution:0,
	}
	packageBody = Bodies.circle(width/2 , 50 ,0.2,options);
	World.add(world, packageBody);

	helicopterBody = Bodies.circle(width/2,200,5,);
	World.add(world,helicopterBody)
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} )
     World.add(world,ground)

    line1.collide(groundSprite)
    line2.collide(groundSprite)
	line3.collide(groundSprite) 
	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  rect (ground.position.x,ground.position.y,400,20)
  background(0);

 
  
     keyPressed()

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	
	packageSprite.x= packageBody.position.x 
	packageSprite.y= packageBody.position.y 
	  
	ellipseMode(RADIUS);  
	ellipse(packageSprite.x,packageSprite.y,200,0.1,0.1) 
    
	
  }
}



