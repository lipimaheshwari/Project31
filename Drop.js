class Drop{
    constructor(x,y)
    {
        this.droplet = Bodies.circle(x,y,40,{friction:0.1});
        this.radius = 5
        World.add(world,this.droplet);
    }

    updateY(){  
        if(frameCount%20 ==0) 
        {
            if(this.droplet.position.y > height){
                Matter.Body.setPosition(this.droplet, {x:random(0,400), y:random(0,400)})
            }
        }
    }

    showDrop(){
        fill("blue")
        ellipseMode(CENTER);
        ellipse(this.droplet.position.x,this.droplet.position.y,this.radius,this.radius);
    }
}