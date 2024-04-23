var x= 100;
var y= 350
var diameter= 50;
var p=300
var o= 300
var l=500
var k=500

function setup()
{
  createCanvas(800, 650);
}

function draw() 
  {
  background(200,100,20);
  circle(x,y,diameter);
  rect(l,k,100, 200)
    k+=5;
    if(k>=700)
      {
        k=-10
      }
  rect(p,o,100, 200)
    o+=7;
    if(o>=700)
      {
    o=0
      }
    rect(750,0,50,300)
    rect(750,400,50,300)
    textSize(30)
    text("Exit-->",650,360)
    if(x>=800)
      {
        text("You Win!!!",300,360)
      }
    else if(x!=800)
      {
        text("Make it to the exit. Quickly!!!!",200,100)
      }
if(keyIsDown(68))
          {
              x+=5;
          }
    else if (keyIsDown(65))
          {
              x-=5;
          }
if (keyIsDown(83))
          {
            y+=5;
          }
     else if(keyIsDown(87))
          {
            y-=5;
          }


}