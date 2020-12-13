class paper{

    constructor(x,y){
        

            var options={
                isStatic: false,
                restitution:0.3,
                friction:0.5, 
                density:1.2
    }
    Matter.Bodies.circle(x, y, radius, [options], [maxSides])
    this.body = Bodies.rectangle(x, y, 50, 50, option)
    World.add(world, this.body)
    this.width = 50
    this.height = 50
}

Display(){
var pos = this.body.position
var angle = this.body.angle;
push()
translate(pos.x, pos.y);
rotate(angle);
angleMode(RADIANS)
rectMode(CENTER)
fill("red");
stroke("blue");
strokeWeight(3);
rect(0, 0, 50, 50)
pop()
}
}