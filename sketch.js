var score = 0;
var dustbin;
var papergroup;
var ground;
var paper;

function setup(){
  createCanvas(400,400);
    dustbin = createSprite(350,345,50,70);
   // dustbin.scale = 0.25;
    papergroup = createGroup();
    ground = createSprite(200,390,400,20);
    paper = createSprite(100,0,30,30);
    paper.velocityY= 2;
   // paper.scale=0.075;
    paper.x = random(50,200); 
   // paper.lifetime = 200; 
    papergroup.add(paper);


  }


function draw() {
  
  background("black");
  ground.shapeColor = "brown";
 // ground.visible = false;
  papergroup.collide(ground);
  //makepaper();
  createEdgeSprites();
  
  if(mousePressedOver(paper)){
    
    paper.x= World.mouseX;
    paper.y= World.mouseY;
    paper.velocityY= 2;
  }
  
  if(papergroup.isTouching(dustbin)){
    paper.destroy();
    makepaper()
    score = score+1;
  }
  
  dustbin.depth = ground.depth+1;
/*
  if(papergroup.isTouching(ground)){
    score = score-1;
  }
  */
drawSprites();

fill("blue");
textSize(25);
text("SCORE : " + score , 20,20 );
    
}


function makepaper(){
 // if(World.frameCount % 200 === 0){
    paper = createSprite(100,0,20,20);
   // paper.setAnimation("paper1");
    paper.velocityY= 2;
  //  paper.scale=0.075;
    paper.x = random(50,200); 
   // paper.lifetime = 200;
    papergroup.add(paper);
//  }
    
}
 