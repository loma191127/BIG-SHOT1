var bgImg1,bgImg2,bgImg3,bgImg4,bgImg5,bgImg,r1;
var i;
var doe;
var ed;
function preload(){
 bgImg1 = loadImage("./Backgrounds/1.jpg");
 bgImg2 = loadImage("./Backgrounds/2.jpg");
 bgImg3 = loadImage("./Backgrounds/3.jpg");
 bgImg4 = loadImage("./Backgrounds/4.jpg");
 bgImg5 = loadImage("./Backgrounds/5.jpg");
 r1     = loadImage("./Rockets/earth.png");
}
function setup(){
 createCanvas(displayWidth+50,displayHeight);
 bgImg = createSprite((displayWidth+50)/2,displayHeight/2,displayWidth+50,displayHeight);
 doe   = createSprite(500,500,100,100);
 doe.addImage(r1);
 doe.scale = 0.1; 
 ed = createEdgeSprites();

 rectMode(CENTER);
 i = Math.round(random(1,5));
 switch(i){
   case 1: bgImg.addImage(bgImg1);
   break;
   case 2: bgImg.addImage(bgImg2);
   break;
   case 3: bgImg.addImage(bgImg3);
   break;
   case 4: bgImg.addImage(bgImg4);
   break;
   case 5: bgImg.addImage(bgImg5);
   break;
   default: break;
 }
}
function draw(){
 background(0);
 drawSprites();
 doe.velocityX = 2;
 doe.velocityY = 2;
 rotateSprite(doe);
 //if(doe.isTouching(ed)){
  doe.bounceoff(ed);
 //}
}
function rotateSprite(sprite){
 if(keyIsDown(LEFT_ARROW)){
   sprite.rotation -= 10;
 }
 if(keyIsDown(RIGHT_ARROW)){
   sprite.rotation += 10;
 }
}