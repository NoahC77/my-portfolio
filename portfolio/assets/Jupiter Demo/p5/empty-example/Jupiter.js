// All the space stuff (moons and Jupiter itself) is measured in numberOfEarths, this will be the numberOfEarths for the radius
//TO-DO: change io's distance from Jupiter to somthing else also set earth's size to somthing bigger so u can actually see the objs.

var WIDTH = 1000, HEIGHT = 1000, jSize = 50;


function preload(){
  jTexture = loadImage("Textures/Jupiter.jpg");
  iTexture = loadImage("Textures/Io.jpg");
  eTexture = loadImage("Textures/Europa.jpg");
  gTexture = loadImage("Textures/Ganymede.jpg");
  cTexture = loadImage("Textures/Callisto.jpg");

}

function setup(){
  createCanvas(WIDTH, HEIGHT, WEBGL);
  angleMode(DEGREES);

  jupiter = new obj(jSize, jTexture, 0, 1.898*10^27, true);   //mass in kg
  io = new obj(10, iTexture, 421700, 8.9319*10^22, false);
  europa = new obj(10, eTexture, 670900, 4.799844*10^22, false);
  ganymede = new obj(15, gTexture, 1070000, 1.4819*10^23, false);
  callisto = new obj(15, cTexture, 1880000, 1, false);           //come back and find mass of callisto

  angleMode(RADIANS);
  camera(0, -200, (height/2.0) / tan(PI*30.0 / 180.0), 0, 0, 0, 0, 1, 0);
  angleMode(DEGREES);



}

function draw(){
  //camera(0, 0, (height/2.0)/ tan(PI*30.0/180.0), 0, 0, 0, 0, 1, 0);
  background(0);

  jupiter.show();
  io.show();
  europa.show();
  ganymede.show();
  callisto.show();
}

class obj{
  constructor(radius, textureFileName, distance, mass, parent){
    this.radius = radius;
    this.texture = textureFileName;
    this.distance = distance;
    this.distanceAdjusted = this.distance/100000;
    this.orbitSpeed = (20-this.distanceAdjusted)/4;
    this.mass = mass;
    this.angle = 0;
    this.parent = parent;
  }

  update(){
      this.angle++;
  }

  show(){
    this.update();
    push();
    texture(this.texture);
    noStroke();
    if(!this.parent){
    translate(this.distanceAdjusted*cos(this.angle*this.orbitSpeed)*15, 0, this.distanceAdjusted*sin(this.angle*this.orbitSpeed)*15);
    }
    rotateY(-this.angle);
    sphere(this.radius);
    pop();
  }

}
