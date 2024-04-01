function setup()
{
    createCanvas(500, 600);
}

function draw()
{
    background(255,140,0);
    textSize(50)
    fill(225,200,400)
    text("Payten Davids", 110,450);

    // head
    fill(239, 168, 113);
    circle(250,150,175);
   
    // eyes
    strokeWeight(8);
    fill(0);
    point(200,125);
    point(285,125);

    // nose
    point(245,140);
    
    // mouth
     fill(255,255,255);
    ellipse(245,180,45,30)
   

    // hair
    line(130,225,175,100);
    line(140,225,175,100);
    line(150,225,175,100);
    line(120,225,175,100);
   
    
  // left leg
    fill(66, 231, 234);
    rect(210,335,20,60);
    
  // right leg
    fill(66, 231, 234);
    rect(273,335,20,60);
      
  // body
    fill(108,185,9);
    ellipse(250,290,100,150);
   
  // hat
    fill(108,185,9);
    triangle(150,100,400,100,150,10)
  
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
    circle(150,260,30)
   
    
}