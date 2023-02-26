var jerry
function preload(){
  jerryImg = loadAnimation ("assets/Dog3.png","assets/Dog5.png","assets/Dog4.png","assets/Dog2.png","assets/Dog1.png")
  bgimg = loadImage("assets/bg.png")
}


function setup (){

  createCanvas (800,600)
  bg = createSprite (185,685,1,1);
  bg.addImage (bgimg)
  bg.scale = 2.5 
  bg.velocityX = -2
bg.x = bg.width/2
  ground = createSprite (300,590,1200,60)

  var jerry = createSprite(500,495,20,50);
  jerry.addAnimation ("running", jerryImg)
  jerry.frameDelay = 5
  jerry.scale = 0.7
}

function draw (){
background (0)

if (bg.x < 50){
bg.x = bg.width/2

}
  drawSprites();
}