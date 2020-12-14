var frect,mrect;


function setup() {
  createCanvas(400,400);
 frect = createSprite(100, 100, 50, 50);
 frect.shapeColor="green";
 mrect =createSprite(150, 100, 50, 100);
 mrect.shapeColor="green";
}

function draw() {
  background("pink");  
  mrect.x=mouseX;
  mrect.y=mouseY;

  if((mrect.x -frect.x < frect.width/2+mrect.width/2)&&(frect.x -mrect.x < frect.width/2+mrect.width/2)&&
  (mrect.y -frect.y < frect.height/2+mrect.height/2)&&(frect.y -mrect.y < frect.height/2+mrect.height/2)){
    frect.shapeColor="red";
    mrect.shapeColor="red";
  }
  else{
    frect.shapeColor="green";
    mrect.shapeColor="green";
  }
  drawSprites();
}