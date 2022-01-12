var player;
var borboleta1;
var borboleta2;

function preload(){
  girl = loadImage("garotinha1.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  player = new Player(windowWidth/2,windowHeight/4);
  player.addImage(girl);

  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}