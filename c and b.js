var b1;
var b2;
var b3;
var b4;

function setup()
{
  createCanvas(500,500);
  
  b1 = createSprite(200,200,30,30);
  b1.debug = true;
  b1.shapeColor = "red";

  b2=createSprite(200,200,20,200);
  b2.debug = true;
  b2.shapeColor = "green";

  b3 = createSprite(100,500,20,20);
  b3.shapeColor = "blue";
  b3.velocityY = -5; 

  b4 = createSprite(200,300,400,10);
  b4.shapeColor = "lavender"; 
  b4.velocityY = 5; 
}

function draw()
{
  background("yellow");  
  drawSprites();
  
  b1.x = World.mouseX;
  b1.y = World.mouseY
  
 
  
  
  
  
  
  
  if(touching(b1,b2))
  {
    b1.shapeColor = "green";
    b2.shapeColor = "red";
  }else
  {
    b1.shapeColor = "red";
    b2.shapeColor = "green";   
  }


  bounce(b3,b4);








}









