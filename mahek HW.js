var fixedRectangle,movingRectangle;
function setup() {
  createCanvas(1200,800);
  movingRectangle=createSprite(100,100,30,20);
  fixedRectangle=createSprite(100,400,30,40);
  movingRectangle.velocityX=4;
  fixedRectangle.velocityX=-4;
}

function draw() {
  background(255,255,255);  
  drawSprites();
  if (movingRectangle.x-fixedRectangle.x<fixedRectangle.width/2+movingRectangle.width/2 &&
    fixedRectangle.x-movingRectangle.x<fixedRectangle.width/2+movingRectangle.width/2){
      movingRectangle.velocityX=movingRectangle.velocityX*(-1);
    fixedRectangle.velocityX=fixedRectangle.velocityX*(-1);
      
    }

}