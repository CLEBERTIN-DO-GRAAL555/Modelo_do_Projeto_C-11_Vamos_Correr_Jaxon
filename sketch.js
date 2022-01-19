var meninoimg,menino
var chaoimg,chao
function preload(){
  meninoimg=loadAnimation("Runner-1.png","Runner-2.png");
  chaoimg=loadImage("path.png");
  //imagens pré-carregadas
}

function setup(){
  createCanvas(400,400);
  chao=createSprite(200,200);
  menino=createSprite(180,300);
  chao.addImage(chaoimg)
  menino.addAnimation("menino",meninoimg)
  menino.scale=0.1
  //crie sprite aqui
}

function draw() {
  background(0);
  drawSprites();

}
