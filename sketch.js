var snow;
var person;
var backG
var snow3, snow5;

function setup() {
  createCanvas(800,400);
  snow5 = new Snow(100,100, 40)
  snow6 = new Snow(50,50, 40)
}

function preload(){
  snow3 = loadImage ("snow3.jpg")
}
function draw() {
  background(snow3) 
  snow5.display()
  snow5.update()
  snow6.display()
  snow6.update()
  drawSprites();

}
