
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup,line;
var score;
var PLAY = 1;
var END = 0;
var gamestate = PLAY;

function preload(){
    //monkey Animation
    monkey_running= loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");           
  
  //banana Image and Obstacle Image
   bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(700 ,500);
  
  //Create monkey 
  monkey = createSprite( 90,300,300,300);
  monkey.addAnimation( "monkey",monkey_running);
  monkey.scale = 0.15;
  
  
  line = createSprite(0,370,10000,20);
  line.shapeColor = "brown";
  
  
  
  obstacleGroup = createGroup();
  

  
}


function draw() {
 background("lightgreen");
  //Gamestate Play
  if(gamestate === PLAY){
    
    if(keyDown("space")&& monkey.y>=300){ 
       
    monkey.velocityY = -19;
     
    }
    monkey.velocityY =monkey.velocityY +0.8;
    monkey.collide(line);
    
    obstacle_spawn();
    }
   spawn();

drawSprites();
  
  function obstacle_spawn(){
    
      if(frameCount %120 === 0){
      obstacle = createSprite(400,320,20,20);
      obstacle.addImage(obstacleImage);
      obstacle.velocityX = -3;  
      obstacle.scale = 0.2;
      obstacle.lifetime = 130;  
      obstacleGroup.add(obstacle);
      
      }
      
      
      
}

  function spawn(){
    
      if(frameCount %120 === 0){
       banana = createSprite(400,250,20,20);
       banana.addImage(bananaImage);
       banana.velocityX = -3;
       banana.scale = 0.1; 
       banana.lifetime = 130;
       banana.y = Math.round(random(20,200)); 
       
       }
       
       
       
      }
  
}






