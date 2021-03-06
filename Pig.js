class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.opacity=255;
  }
  display(){
    if(this.body.speed<3){
    super.display();
  }else{
    push();
    this.opacity=this.opacity-5;
    tint(255,this.opacity);
    image(this.image, this.body.position.x, this.body.position.y, 50, 50);
    World.remove(world,this.body)
  pop();
  }

}
};
