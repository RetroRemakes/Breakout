var canvasWidth = 600;
var canvasHeight = 400;

blocks = ['0', '10', '15'];


function preload(){

}

function setup() {
  var canvas =  createCanvas(canvasWidth, canvasHeight);
  canvas.parent('sketch-holder')
  frameRate(30);

}

function draw() {
  rect(50, 50, 50, 50);
  background(0)
  fill(0);
}
