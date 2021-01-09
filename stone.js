class Stone {
    constructor(x, y,r) {
       var options={
          isStatic : false,
          restitution: 0,
          friction : 1,
          density : 1.2
       }
 
        this.body = Bodies.circle(x, y, r/2, options);
        this.image = loadImage("images/stone.png")
        this.x = x;
        this.y = y;
        this.r = r;
        
        World.add(world, this.body);
    }
 
 
    display() {
    
    var pos = this.body.position;
 
    push();
    translate(pos.x, pos.y)
    imageMode(RADIUS);
    image(this.image, 0, 0, this.width, this.height);
    pop();
    }
 
    } 