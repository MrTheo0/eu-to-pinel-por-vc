var shipImg1, shipImg2;
var sea1, sea2;
function preload(){
shipImg1 = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png")
sea1 = loadImage("sea.png")
}

function setup(){
  createCanvas(800,350);
  sea2 = createSprite(400,175,1,1)
  sea2.addImage("ocean",sea1);
  sea2.scale = 0.205
  shipImg2 = createSprite(398,128,20,50);
  shipImg2.addAnimation("moving", shipImg1)
  shipImg2.scale = 0.3


}

function draw() {
  background("blue");
    drawSprites();

}
