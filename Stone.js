class stone {
    constructor(x,y){
        var opt = {
            restitution:0,
            friction:1,
            isStatic:false
        }
        this.x=x;
        this.y=y;
        this.r=r; 
        
        this.body = Bodies.circle(x,y,40,opt);
        World.add(world,this.body)
        this.image = loadImage("stone.png");
    }
    display(){
        
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,40,40);
        
    }
}