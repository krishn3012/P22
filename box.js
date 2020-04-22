class Box{
    constructor(x,y,w,h){
        var options = {
            friction:1,
            restitution:0.9
        }
        this.body=Bodies.rectangle(x,y,w,h,options);
        this.w=w;
        this.h=h;

        World.add(world, this.body);
    }

    display(){
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.w,this.h);

    }
}