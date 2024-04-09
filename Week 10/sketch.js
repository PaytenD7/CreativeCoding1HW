function setup()
{
  movement=floor(random()*10)+1;
  createCanvas(500, 600);
  
}

var x = 250;
var y = 160;
var diameter = 50;
var movement;
var head = 140;
var a = 245;
var b = 180;
var c = 45;
var d = 30;
var p = 245;
var p2 =150;
var b1 = 250;
var b2 = 290;
var b3 = 100;
var b4 = 150;
var h1 = 150;
var h2 = 100;
var h3 = 400;
var h4 = 10;
function draw()
{
    background(255,140,0);
    textSize(50)
    fill(225,200,400)
    text("Payten Davids", 110,450);
 {
  
}
    // head
    fill(239, 168, 113);
    circle(x,y,head);
     if(y >= 340 || y <= 60)
    {
  movement*=-1;
    }
  y += movement;

    // eyes
    strokeWeight(8);
    fill(0);
    point(200,125);
    point(285,125);

    // nose
    point(p,p2);
  if(p >= 450 || p <= 47)
    {
  movement*=-1;
    }
  p += movement;
  p2 += movement;

    // mouth
     fill(255,255,255);
    ellipse( a,b,c,d)
  
  if(b >= 450 || b <= 47)
    {
  movement*=-1;
    }
  a += movement;

    // hair
    line(130,225,175,100);
    line(140,225,175,100);
    line(150,225,175,100);
 
  // left leg
    fill(66, 231, 234);
    rect(210,335,20,60);

  // right leg
    fill(66, 231, 234);
    rect(273,335,20,60);

  // body
    fill(108,185,9);
    ellipse(b1,b2,b3,b4);
  if(b2 >= 763 || b2 <= 47)
    {
  movement*=-1;
    }
  b2 += movement;


  // hat
    fill(108,185,9);
    triangle(h1,h2,h3,h2,h1,h4)
if(h1 >= 770 || h1 <= 45)
    {
  movement*=-1;
    }
  h1 += movement;


  //hat line
   fill(255);
    line(150,80,230,40);

  //feather
  fill(255,0,0)
    ellipse(120,80,70,30)

// right arm
    fill(108,185,9);
    rect(300,250,60,20);
    circle(350,260,30);

  // left arm
    fill(108,185,9);
    rect(150,250,50,20);
    circle(150,260,30);   
}

 