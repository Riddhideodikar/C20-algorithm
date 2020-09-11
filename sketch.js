var movingRect,fixedRect
function setup() {
  createCanvas(800,400);
 fixedRect= createSprite(400, 200, 50, 50);
 fixedRect.shapeColor="red"
 movingRect=createSprite(10,10,30,80);
 movingRect.shapeColor="red"
// fixedRect.debug=true;
// movingRect.debug=true;
}

function draw() {
  background(0);  
  movingRect.x=mouseX;
  movingRect.y=mouseY;

if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2 &&
  fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2 &&
  movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2 &&
  fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2){
fixedRect.shapeColor="yellow"
movingRect.shapeColor="yellow"
}
else{
  fixedRect.shapeColor="red"
movingRect.shapeColor="red"
}





  drawSprites();
}