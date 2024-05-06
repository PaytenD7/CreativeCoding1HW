var xBall = Math.floor(Math.random() * 300) + 50;
var yBall = 50;
var xSpeed = (2, 7);
var ySpeed = (-7, -2);
var score = 0
function setup()
{
  createCanvas(400, 400);
}

function draw()
  {
  background(20,100,200);
  fill('brown');
  rect( mouseX, 380 , 100, 10);
  fill('brown');
  textSize(30);
  text("Score:" + score, 270, 390);
  move();
  display();
  bounce();
  resetBall();
  paddle();
  rectangle();
  move();
  gameover();
  }
function rectangle()
{
     for (var i=0; i < 8; i++)
   {
    var x = i* 50 
    var y = 1
    var d = 50
     rect (x, y, d)
   }
}
function gameover()
    {
      if (yBall > 400)
      {
        text("Game Over", 115, 200)
        text ("Score:"+ score, 145, 250)
        
      }

}
function move() 
    {
  xBall += xSpeed;
  yBall += ySpeed;
    }
function bounce() 
{

  if (xBall < 10 ||
    xBall > 400 - 10 ) {
    xSpeed *= -1;
  }
  if( yBall < 50 ||
    yBall > 400)
    {
    ySpeed *= -1;
  }
}
function resetBall() 
{
if(yBall >= 400 ||
    yBall > 400 - 10) {
    ySpeed = 4;
 }
}
function display() 
  {
  fill('brown');
  ellipse(xBall, yBall, 20, 20);
  }
function paddle() 
  {
  if ((xBall > mouseX &&
      xBall < mouseX + 90) &&
    (yBall + 10 >= 375)) 
  {
    xSpeed *= -1;
    ySpeed *= -1;
    score++;
  }
  
}

