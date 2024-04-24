// character
var x= 100;
var y= 350
var diameter= 50;

//left rect
var p=300;
var o= 300;
var pspeed;
var ospeed;

//right rect
var l=500;
var k=500;
var lspeed;
var kspeed;

//mouse
var m=100;
var m2=100;

//keyboard
var w = 87; 
var s = 83;
var a = 65;
var d = 68;

function setup()
{
  createCanvas(800, 650);
  fill (0,225,228);
}

function draw() 
  {
  fill(10,100,100);
  background(200,100,20);
//Player
    createCircle();
//Player controls
    controlCircle();
//borders
    createBorders(40);
//First shape
    createRect();
//Exit and "You Win"
    createText();
//mouse
    mouseClicked();
    
    
  }
    function createText()
{
  text("Exit-->",650,360)
  textSize(30);
    rect(750,0,50,300)
    rect(750,400,50,300)
  if(x>=800)
      {
        text("You Win!!!",300,360)
      }
    else if(x!=800)
      {
        text("Make it to the exit. Quickly!!!!",200,100)
      }
}
    function createRect()
    {
  rect(l,k,100, 200)
      fill(20,30,40)
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
}
   
function controlCircle()
    {
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

    
    function createCircle()
    {
       circle(x,y,diameter);
      fill(10,10,100)
    }
  function createBorders(thickness)
      {
        rect(0,0,width,thickness);
        rect(0, height-thickness,width, thickness);
        rect(0,0,thickness,height);
        fill(90,10,22)
      }
  function mouseClicked()
      {
        m = mouseX;
        m2 = mouseY;
       circle(m,m2,30)
      }
