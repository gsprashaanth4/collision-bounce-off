
/*
var v1;
var v2;

var b1;
var b2;

function setup() {
  createCanvas(600,600);
  v1 = createSprite(400, 200, 50, 80);
  v1.shapeColor = "green";
  
  v2 = createSprite(400,400,80,50);
  v2.shapeColor  = "green";
  
  b1 = createSprite(400,300,10,500);
  b1.shapeColor = "blue";

  b2 = createSprite(600,300,10,10);
  b2.shapeColor = "yellow";
}

function draw() {
  background("grey");  
  
 
  


  v2.x = World.mouseX;
  v2.y = World.mouseY;
  
  if(v1.x - v2.x < v1.width/2 + v2.width/2 && v2.x - v1.x < v2.width/2 + v1.width/2 && v1.y - v2.y < v1.height/2 
    + v2.height/2 && v2.y - v1.y < v2.height/2 + v1.height/2)
  {
    v1.shapeColor = "red";
    v2.shapeColor = "green";
  }else
  {
    v1.shapeColor = "green";
    v2.shapeColor = "red";
  }
  
  if(b2.x - b1.x === b2.width/2 + b1.width/2)
  {
    b1.velocityX = -5;
    b2.velocityX = 5;
  }else
  {
    b1.velocityX = 5;
    b2.velocityX = -5;
  }
  
  
  
  
  //movingRect.velocityY = -5; fixedRect.velocityY = +5; if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2) { movingRect.velocityX = movingRect.velocityX * (-1); fixedRect.velocityX = fixedRect.velocityX * (-1); } if (movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2 && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){ movingRect.velocityY = movingRect.velocityY * (-1); fixedRect.velocityY = fixedRect.velocityY * (-1); }
  
  
  
  
  
  
  
  drawSprites();

 
*/







}