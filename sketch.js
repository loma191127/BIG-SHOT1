//healthbar
//black holes
var bgImg1,bgImg2,bgImg3,bgImg4,bgImg5,bg;
var i;
var r,rocketImage;
var bgSound;
var health = 5;
var astroid_img,asteroid,asteroid_group;
var gameState = "play";
var laser,laser_group;
var load= 0;
var score = 0;
var black_hole_animation,black_hole,black_hole_group;
var gameSpeed = 6;
function preload(){
 bgImg1 = loadImage("./Backgrounds/1.jpg");
 bgImg2 = loadImage("./Backgrounds/2.jpg");
 bgImg3 = loadImage("./Backgrounds/3.jpg");
 bgImg4 = loadImage("./Backgrounds/4.jpg");
 bgImg5 = loadImage("./Backgrounds/5.jpg");
 astroid_img = loadImage("asteroid1.png");
 //bgSound = loadSound("bgSound.mp3");
 black_hole_animation = loadAnimation("frame_000_delay-0.09s.gif","frame_001_delay-0.09s.gif","frame_002_delay-0.09s.gif","frame_003_delay-0.09s.gif","frame_004_delay-0.09s.gif","frame_005_delay-0.09s.gif","frame_006_delay-0.09s.gif","frame_007_delay-0.09s.gif","frame_008_delay-0.09s.gif","frame_009_delay-0.09s.gif","frame_010_delay-0.09s.gif","frame_011_delay-0.09s.gif","frame_012_delay-0.09s.gif","frame_013_delay-0.09s.gif","frame_014_delay-0.09s.gif","frame_015_delay-0.09s.gif","frame_016_delay-0.09s.gif","frame_017_delay-0.09s.gif","frame_018_delay-0.09s.gif","frame_019_delay-0.09s.gif","frame_020_delay-0.09s.gif","frame_021_delay-0.09s.gif","frame_022_delay-0.09s.gif","frame_023_delay-0.09s.gif","frame_024_delay-0.09s.gif","frame_025_delay-0.09s.gif","frame_026_delay-0.09s.gif","frame_027_delay-0.09s.gif","frame_028_delay-0.09s.gif","frame_029_delay-0.09s.gif","frame_030_delay-0.09s.gif","frame_031_delay-0.09s.gif","frame_032_delay-0.09s.gif","frame_033_delay-0.09s.gif","frame_034_delay-0.09s.gif","frame_035_delay-0.09s.gif","frame_036_delay-0.09s.gif","frame_037_delay-0.09s.gif","frame_038_delay-0.09s.gif","frame_039_delay-0.09s.gif","frame_040_delay-0.09s.gif","frame_041_delay-0.09s.gif","frame_042_delay-0.09s.gif","frame_043_delay-0.09s.gif","frame_044_delay-0.09s.gif","frame_045_delay-0.09s.gif","frame_046_delay-0.09s.gif","frame_047_delay-0.09s.gif","frame_048_delay-0.09s.gif","frame_049_delay-0.09s.gif","frame_050_delay-0.09s.gif","frame_051_delay-0.09s.gif","frame_052_delay-0.09s.gif","frame_053_delay-0.09s.gif","frame_054_delay-0.09s.gif","frame_055_delay-0.09s.gif","frame_056_delay-0.09s.gif","frame_057_delay-0.09s.gif","frame_058_delay-0.09s.gif","frame_059_delay-0.09s.gif","frame_060_delay-0.09s.gif","frame_061_delay-0.09s.gif","frame_062_delay-0.09s.gif","frame_063_delay-0.09s.gif","frame_064_delay-0.09s.gif","frame_065_delay-0.09s.gif","frame_066_delay-0.09s.gif","frame_067_delay-0.09s.gif","frame_068_delay-0.09s.gif","frame_069_delay-0.09s.gif","frame_070_delay-0.09s.gif","frame_071_delay-0.09s.gif","frame_072_delay-0.09s.gif","frame_073_delay-0.09s.gif","frame_074_delay-0.09s.gif","frame_075_delay-0.09s.gif","frame_076_delay-0.09s.gif","frame_077_delay-0.09s.gif","frame_078_delay-0.09s.gif","frame_079_delay-0.09s.gif");
 //remaining: ,"frame_080_delay-0.09s.gif","frame_081_delay-0.09s.gif","frame_082_delay-0.09s.gif","frame_083_delay-0.09s.gif","frame_084_delay-0.09s.gif","frame_085_delay-0.09s.gif","frame_086_delay-0.09s.gif","frame_087_delay-0.09s.gif","frame_088_delay-0.09s.gif","frame_089_delay-0.09s.gif","frame_090_delay-0.09s.gif","frame_091_delay-0.09s.gif","frame_092_delay-0.09s.gif","frame_093_delay-0.09s.gif","frame_094_delay-0.09s.gif","frame_095_delay-0.09s.gif","frame_096_delay-0.09s.gif","frame_097_delay-0.09s.gif","frame_098_delay-0.09s.gif","frame_099_delay-0.09s.gif"
 rocketImage = loadImage("rocket.png");
}
function setup(){
 createCanvas(displayWidth-70,displayHeight-91);
 r = createSprite(100,600,20,20);
 r.addImage(rocketImage);
 r.scale = 0.09;
 r.rotation = 90;
 asteroid_group = new Group();
 laser_group = new Group();
 black_hole_group = new Group();
 i = Math.round(random(1,5));
 switch(i){
   case 1: bg = bgImg1;
   break;
   case 2: bg = bgImg2;
   break;
   case 3: bg = bgImg3;
   break;
   case 4: bg = bgImg4;
   break;
   case 5: bg = bgImg5;
   break;
   default: break;
 }

}
function draw(){
  background(0); 
 //bg removed for faster performance.
 //bgSound.play(); // for faster procesing
 if(gameState === "play"){
  spawnAsteroids();
 spawnBlackHoles();
 drawSprites();
 r.velocityY = 0;
 if(keyIsDown(UP_ARROW) && r.position.y>= 10){
  r.velocityY -= 5;
 }
 if(keyIsDown(DOWN_ARROW) && r.position.y<= displayHeight-50){
  r.velocityY += 5;
 }
 if(asteroid_group.isTouching(r)){
  health -= 1;
  fill("Red");
 }
 else{
  fill("White");
 }
 textSize(32);
 textFont("Consolas");
 text("Health:"+health,900,50);
  if(asteroid_group.isTouching(laser_group)){
    for(var i=0;i<asteroid_group.length;i++){
     if(asteroid_group[i].isTouching(laser_group)){
      asteroid_group[i].destroy();
      laser_group.destroyEach(); 
      score = score+2;
      fill("green");
     }
    } 
  }
  else{
   fill("white");
  }
 text("Score:"+score,900,100);
 if(load>0){
  if(frameCount% 15 === 0){
   load -=1;
  }
 }
  if(health === 0){
   gameState = "end";
  }
 }
 if(gameState === "end"){
  asteroid_group.destroyEach();
  black_hole_group.destroyEach();
  r.destroy();
  fill(rgb(random(0,255),random(0,255),random(0,255)));
  textSize(50);
  textFont("Bradley Hand ITC");
  text("Your score is "+score+". Congratulations!",displayWidth/4,displayHeight/2);
 }
}
function spawnAsteroids(){
  if(frameCount % 30 === 0){
    asteroid = createSprite(1500,500,random(10,50),random(10,50));
    asteroid.addImage(astroid_img);
    asteroid.scale = random(0.01,0.3);
    asteroid.rotation = random(0,360);
    asteroid.y = Math.round(random(00,displayHeight-85));
    asteroid.velocityX = -gameSpeed;
    asteroid_group.add(asteroid);
    asteroid.lifetime = 1000;
    asteroid.depth = r.depth;
    r.depth += 1;
   }
}
function keyPressed(){
  if(keyCode === 32 && load===0){
   laser = createSprite(r.position.x,r.position.y,50,10);
   laser.shapeColor = rgb(random(175,255),random(175,255),random(175,255));
   laser.velocityX = 10;
   laser_group.add(laser);
   load +=5;
  }
}
function spawnBlackHoles(){
  if(frameCount % 120 === 0){
    black_hole = createSprite(1500,500,random(10,50),random(10,50));
    black_hole.addAnimation("Se",black_hole_animation);
    black_hole.scale = random(0.01,0.3);
    black_hole.y = Math.round(random(00,displayHeight-85));
    black_hole.velocityX = -gameSpeed;
    black_hole_group.add(black_hole);
    black_hole.lifetime = 1000;
   }
}
