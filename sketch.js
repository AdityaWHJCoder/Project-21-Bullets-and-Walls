var wall, thickness;
var bullet, speed, weight;

function setup() {
  createCanvas(1600,400);

  speed = random(223, 321);
  weight = random(30, 52);
  thickness = random(22, 83);

  bullet = createSprite(50, 200, 40, 10);
  bullet.shapeColor = "white";

  wall = createSprite(1500, 200, thickness, height / 2);
  wall.shapeColor = color(80, 80, 80);

  bullet.velocityX = speed;

}

function draw() {
  background(0);  

  bullet.velocityX = speed;

 if(hasCollided(bullet, wall))
 {
   bullet.velocityX = 0;
   var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness);

   if (damage > 10){
     bullet.shapeColor = color(255, 0, 0);
   }

   else if (damage < 10){
     bullet.shapeColor = color(0, 255, 0);
   }
 }

  drawSprites();
}
