var fixedrect,movingrect;

function setup() {
  createCanvas(600,600);
  fixedrect=createSprite(300, 300, 40, 70);
  fixedrect.shapeColor="red";
  fixedrect.debug=true;
  movingrect=createSprite(200, 200, 90, 50);
  movingrect.shapeColor="red";
  movingrect.debug=true;
}

function draw() {
  background("black");
  movingrect.x= World.mouseX;
  movingrect.y= World.mouseY;
  console.log(movingrect.x-fixedrect.x);
  if(movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2&&
    fixedrect.x-movingrect.x<movingrect.width/2+fixedrect.width/2&&
    movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2&&
    fixedrect.y-movingrect.y<movingrect.height/2+fixedrect.height/2){
    fixedrect.shapeColor="green";
    movingrect.shapeColor="green";
  }
  else{
    movingrect.shapeColor="red";
    fixedrect.shapeColor="red";
  }
  drawSprites();
}