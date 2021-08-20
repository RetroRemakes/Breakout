var canvasWidth = 700;
var canvasHeight = 900;

let paddleMove = {
  paddleX: 300,
  paddleY: 800,
  paddleW: 45,
  paddleH: 15
};

let ballX = 260;
let ballY = 760;
let ballWidth = 15;
let ballHeight = 7;

let ballXSpeed = 4;
let ballYSpeed = 4;

function preload(){

}

function setup() {
  var canvas =  createCanvas(canvasWidth, canvasHeight);
  canvas.parent('sketch-holder')
  frameRate(30);

}

function draw() {
  fill(255);
  background(0);
  keysPressed();
  draw_and_score();
  interface();
  paddle();
  paddleInteract();
  rectBall();
}

function interface(){
  rect(15, 100, canvasWidth-30, 35);
  rect(0, -1, 15, canvasHeight);
  rect(canvasWidth-15, -1, 15, canvasHeight);
  rect(45, 135, 15, 50);
  rect(450, 135, 15, 50);
  noStroke();
}

function draw_and_score(){
  drawbricks();
  collision();

}


function paddle(){
  fill(14,129,196,255);
  rect(paddleMove.paddleX, paddleMove.paddleY, paddleMove.paddleW, paddleMove.paddleH); //paddle
  rect(canvasWidth-15, 790, 16, 35); //side bars
  rect(canvasWidth-701, 790, 16, 35); //side bars
}

function keysPressed(){
  if (keyIsDown(LEFT_ARROW)){
    paddleMove.paddleX -= 10;
  }
  else if (keyIsDown(RIGHT_ARROW)){
    paddleMove.paddleX += 10;
  }
  else if (keyIsDown(65)){
    paddleMove.paddleX -= 10;
  }
  else if (keyIsDown(68)){
    paddleMove.paddleX += 10;
  }
}

function paddleInteract(){
  if (paddleMove.paddleX < 0) {
    paddleMove.paddleX += canvasWidth;
  }else if (paddleMove.paddleX > canvasWidth) {
    paddleMove.paddleX -= canvasWidth;
  }
}

//ball and paddle collision
function rectBall(){
  push();
  fill(255);
  rect(ballX, ballY, ballWidth, ballHeight);
  pop();

  //ball move
  ballX = ballX + ballXSpeed;
  ballY = ballY + ballYSpeed;

  if (ballX < 0) {
    ballXSpeed = -ballXSpeed;
  }else if (ballX > canvasWidth - 30) {
    ballXSpeed = -ballXSpeed;
  }else if (ballY < 0) {
    ballYSpeed = -ballYSpeed;
  }else if (ballY > canvasHeight - 30) {
    ballYSpeed = -ballYSpeed;
  }

  hitPaddle = collideRectRect(paddleMove.paddleX, paddleMove.paddleY, paddleMove.paddleW, paddleMove.paddleH, ballX, ballY, ballWidth, ballHeight)
  if (hitPaddle) {
    ballYSpeed = -ballXSpeed;
  }
}
//https://happycoding.io/tutorials/processing/collision-detection
