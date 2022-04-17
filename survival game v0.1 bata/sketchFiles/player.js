var player, playerX, playerY, playerSpeed = 10;
var cam;//, camX, camY;

function setup() 
{
  createCanvas(windowWidth, windowHeight-1);
  playerX = windowWidth/2
  playerY = windowHeight/2

  
  treeGenerate(4000)
  
}

function draw() 
{
  
    background("lime"); 

   

    //player
    push();
    fill("yellow");
    player = rect(windowWidth / 2, windowHeight / 2, 50, 50, 1000);
    pop();

    playerControler();

    tollholder()

    DevTools()

    //follow cam
    translate(windowWidth / 2 - playerX, windowHeight / 2 - playerY);

    for(var i = 0; i < treesX.length; i++)
    {
      drawTrees(i);
    }

    suckege()

 
}

function playerControler()
{
  //arrow keys
  //if(keyIsDown(LEFT_ARROW)) {playerX -= playerSpeed};
  //if(keyIsDown(RIGHT_ARROW)) {playerX += playerSpeed};
  //if(keyIsDown(UP_ARROW)) {playerY -= playerSpeed};
  //if(keyIsDown(DOWN_ARROW)) {playerY += playerSpeed};

  // A S W D
  if(keyIsDown(87)) {playerY -= playerSpeed};
  if(keyIsDown(83)) {playerY += playerSpeed};
  if(keyIsDown(65)) {playerX -= playerSpeed};
  if(keyIsDown(68)) {playerX += playerSpeed};
}

function tollholder()
{
  //Starter axe
  let axeXPos = windowWidth / 2
  let axeYPos = windowHeight / 2

  let posX = windowWidth / 2
  let posY = windowHeight / 2

  //face to mouse
  push();
  let angle = Math.atan2(mouseY - posY, mouseX - posX);

    translate(posX+25, posY+25);
    rotate(angle);
    imageMode(CENTER);
    image(wood_Axe, 0, 0, 100, 100);
  pop();
}

function suckege()
{
  //right
  if(playerX > 6500)
  {
    playerX - playerSpeed;
  }

  //left
  if(playerX < -6500)
  {
    playerX + playerSpeed;
  }

  //up
  if(playerY < -6500)
  {
    playerY + playerSpeed;
  }

  //down
  if(playerY > -6500)
  {
    playerY - playerSpeed;
  }
}
function DevTools()
{
  let fps = int(getFrameRate())

  if(DevTool === true)
  {
    fill("black")
    text("playerX: " + playerX, 5, 10);
    text("playerY: " + playerY, 5, 25);

    if(fps > 10)
    {
    fill("black")
    text("fps: " + fps, 5, 40);
    }
    else
    {
      fill("red")
      text("fps: " + fps, 5, 40);
    }

    text("mouseX: " + mouseX, 5, 55);
    text("mouseY: " + mouseY, 5, 70);
    text("tree count: " + treesX.length, 5, 85);

  }
}