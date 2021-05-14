var level = 0;
var preLevel = 0;
var obstacleTypes = [];
var fireResis = 3;
var shoes = 3;
var entry;
var rand;
var canvas;
var personHurt, person_jumping1, person_jumping2, person_jumping3, person_jumping4, person_jumping5, person_walking1, person_walking2, person_walking3, person_walking4, person_walking5, person_walking6
var lavaImg, monkeyImg, potionImg, ropeImg, shoeImg, snakeImg, ground, groundImg, play = 0;
function preload(){
  personHurt = loadImage("Images_animation/Person_hurt.png");
  person_jumping1 = loadImage("Images_animation/Person_jumping1.png");
  person_jumping2 = loadImage("Images_animation/Person_jumping2.png");
  person_jumping3 = loadImage("Images_animation/Person_jumping3.png");
  person_jumping4 = loadImage("Images_animation/Person_jumping4.png");
  person_jumping5 = loadImage("Images_animation/Person_jumping5.png");
  person_walking1 = loadImage("Images_animation/Person_walking1.png");
  person_walking2 = loadImage("Images_animation/Person_walking2.png");
  person_walking3 = loadImage("Images_animation/Person_walking3.png");
  person_walking4 = loadImage("Images_animation/Person_walking4.png");
  person_walking5 = loadImage("Images_animation/Person_walking5.png");
  person_walking6 = loadImage("Images_animation/Person_walking6.png");
  lavaImg = loadImage("Lava_img.png");
  monkeyImg = loadImage("Monkey_img.png");
  potionImg = loadImage("Potion.png");
  ropeImg = loadImage("Rope.png");
  shoeImg = loadImage("Shoe.png");
  snakeImg = loadImage("Snake_img.png");
  groundImg = loadImage("ground.png");
}
function setup() {
  canvas = createCanvas(displayWidth, displayHeight);
  entry = new Story;
}
function draw() {
  if(play === 0){
  background(255,255,255);
  }
  if(preLevel != level){
    levelTypeSet();
    rand = Math.round(random(0, obstacleTypes.length - 1));
    console.log(rand);
    console.log(obstacleTypes.length);
    preLevel = level
    levelPlay(rand);
    //preLevel = level;
  }
  drawSprites();
  entry.display();
}