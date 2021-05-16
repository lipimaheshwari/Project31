const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var maxDrops =100;
var drops = [];
var rand

function preload(){
    // IMAGES
    thunder1 = loadImage('thunderbolt/1.png');
    thunder2 = loadImage('thunderbolt/2.png');
    thundere3 = loadImage('thunderbolt/3.png');
    thunder4 = loadImage('thunderbolt/4.png');
}

function setup(){

    createCanvas(800,900);

	engine = Engine.create();
    world = engine.world;
   
    

    for(var i=0; i<maxDrops; i++){
        drops.push(new Drop(random(0,400), random(0,400)));
    }
    Umb = new Umbrella(100,440);

    Engine.run(engine);
    
}

function draw(){

    background(0);
    Engine.update(engine);
    Umb.display();
    for(var i = 0; i<maxDrops; i++){
       
        drops[i].showDrop();
        drops[i].updateY();
    }
    drawSprites();
    rand = Math.round(round(1,4));
    if(frameCount%80===0){
        thunderCreatedFrame=frameCount;
        thunder = createSprite(random(10,370), random(10,30), 10,10);
        switch(rand)
        {
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break;
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;
            default:break;
        }
        // thunder.scale = random(0.3,0.6)
    }

}   