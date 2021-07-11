var cat,mouse;
var cat1img,cat2img,cat3img,cat4img,bg,mouse1img,mouse2img,mouse3img,mouse4img;
var  bg ;


function  preload ( )  {

    //load the images here
bg = loadImage("images/garden.png")

mouse1img = loadAnimation("images/mouse1.png");
mouse2img = loadAnimation("images/mouse2.png","images/mouse3.png");
mouse3img = loadAnimation("images/mouse4.png");

cat1img = loadAnimation("images/cat1.png");
cat2img = loadAnimation("images/cat2.png","images/cat3.png");
cat3img = loadAnimation("images/cat4.png");
}


function setup(){
    createCanvas(1000,800);

    //create tom and jerry sprites here

mouse = createSprite(200,600);
mouse.addAnimation("mouseStanding",mouse1img);
//mouse.debug = true
mouse.scale = 0.2;


cat = createSprite(870,600);
cat.addAnimation("catSetting",cat1img);
cat.scale = 0.15;
//cat.velocityX = -2;
}

function draw() {



    background(bg);






    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2)
    {
        cat.velocityX=0;
        cat.addAnimation("catLastImage", cat3img);
       cat.x = 300;

       cat.changeAnimation("catLastImage");

        mouse.addAnimation("mouseLastImage", mouse3img);
       mouse.changeAnimation("mouseLastImage");
    }


    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
    cat.velocityX = -2;
   cat.addAnimation("catRunning",cat2img)
   cat.changeAnimation("catRunning");

    mouse.addAnimation("mouseTeasing", mouse2img);
    mouse.changeAnimation("mouseTeasing");
} 

}