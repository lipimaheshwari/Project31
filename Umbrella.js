class Umbrella{
    constructor(x,y)
    {
        this.u = Bodies.circle(x,y,40,{friction:0.1});
        this.radius = 5
        this.image1 = loadImage("Walking Frame/walking_1.png");
        this.image2 =loadImage('Walking Frame/walking_2.png');
        this.image3 =loadImage('Walking Frame/walking_3.png');
        this.image4 =loadImage('Walking Frame/walking_4.png');
        this.image5 =loadImage('Walking Frame/walking_5.png');
        this.image6 =loadImage('Walking Frame/walking_6.png');
        this.image7 =loadImage('Walking Frame/walking_7.png');
        this.image8 =loadImage('Walking Frame/walking_8.png');
        this.x =x;
        this.y =y;
        World.add(world,this.u)
    }
    display()
    {
        image(this.image1, this.x, this.y, 500, 500)
    }
}