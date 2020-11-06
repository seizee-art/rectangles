var fixedrect,movingrect


function setup() {
  createCanvas(1200,800);
  movingrect=createSprite(400, 200, 80, 50);
  movingrect.shapeColor="green"
  fixedrect=createSprite(600,400,50,80)
    fixedrect.shapeColor="green"
}

function draw() {
 
 movingrect.x=World.mouseX
 movingrect.y=World.mouseY
 
if((fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2)
&&(movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2)
&&(fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2)
&&(movingrect.y-fixedrect.y<fixedrect.height/2+movingrect.height/2))
{
  movingrect.shapeColor="red"
  fixedrect.shapeColor="red"
}else
{
  movingrect.shapeColor="green"
  fixedrect.shapeColor="green"
}

  background(255,255,255);  
  drawSprites();
}