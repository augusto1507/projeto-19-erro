var fundo,fundoImg;
var meteoro,meteoroimg,meteorogrupo
var fogueteImg,foguete;
var gameState = "play"





function preload(){
fundoImg=loadImage("fundo.png");
fogueteImg=loadImage("R.png")
meteoroimg=loadImage("METEORO.png")

}

function setup() {
    createCanvas(500, 500);
 fundo=createSprite(300,300);
fundo.addImage(fundoImg);
fundo.velocityY=1;

foguete=createSprite(200,350);
foguete.addImage(fogueteImg);
foguete.scale=0.03

meteorogrupo=new Group()
}

function draw() {
    background(200);
   

    if(fundo.y>400){
        fundo.y=300
    }
    
    if (gameState === "play") {
        if(keyDown("left_arrow")){
            foguete.x = foguete.x - 3;
        }
        if(keyDown("right_arrow")){
            foguete.x = foguete.x + 3;
          }
          
          if(keyDown("space")){
            foguete.velocityY = -10;
          }
          if(meteoro.isTouching(foguete)){

            foguete.destroy()
            gameState="end"}

          foguete.velocityY = foguete.velocityY + 0.8

          gerarMeteoro();
          drawSprites()


    }

    if (gameState === "end"){
        stroke("yellow");
        fill("yellow");
        textSize(30);
        text("Fim de Jogo", 230,250)
      }


        
    
}


function gerarMeteoro(){

    if(frameCount%90===0){
        meteoro=createSprite(Math.round(random(120,400)),-50)

meteoro.addImage(meteoroimg)
meteoro.scale=0.05
meteoro.velocityY=2

meteoro.lifetime=325

meteoro.depth = foguete.depth;
foguete.depth = foguete.depth + 1;

meteorogrupo.add(meteoro)


}}