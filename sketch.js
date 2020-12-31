var movingrect,fixedrect;
function setup() {
  createCanvas(800,400);
  movingrect=  createSprite(400, 200, 80, 50);
  fixedrect= createSprite(600,200,30,50);
  movingrect.shapeColor="blue"
  fixedrect.shapeColor="blue"
  fixedrect.debug=true
  movingrect.debug=true
 movingrect.velocityX=3
 fixedrect.velocityX=-3 
}

function draw() {
  background("white");  
 
  
    if(movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2
      && fixedrect.x-movingrect.x<movingrect.width/2+fixedrect.width/2
       ){
    movingrect.velocityX=movingrect.velocityX*-1
    fixedrect.velocityX=fixedrect.velocityX*-1
  }
  if(movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2
    && fixedrect.y-movingrect.y<movingrect.height/2+fixedrect.height/2){
      movingrect.velocityY=movingrect.velocityY*-1
      fixedrect.velocityY=fixedrect.velocityY*-1
  }

  drawSprites();
  
}
