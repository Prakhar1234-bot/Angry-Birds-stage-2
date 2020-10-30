class BaseClass{
    constructor(x,y,width,height,angle){
       var options={
           restitution : 0.5,
           density : 2.0,
           friction : 0.5
       }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.height=height;
        this.width=width;
        this.image = loadImage("ImagesC25-main/base.png");
        World.add(world,this.body);
    }
    display(){

        var pos=this.body.position;
        var a = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(a);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
       
    }
}