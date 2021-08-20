class bricks{
  constructor(rectX, rectY, rectW, rectH){
    this.rectX = rectX;
    this.rectY = rectY;
    this.rectW = rectW;
    this.rectH = rectH;
  }
}

function collision_detection(x, y, w, h){
  if (ballX > x && ballX < x+w && ballY > y && ballY < y+h) {
    return true;
  }else {
    return false;
  }
}

let brick0 = new bricks(0, 270, 30, 13);
let brick1 = new bricks(35, 270, 30, 13);
let brick2 = new bricks(70, 270, 30, 13);
let brick3 = new bricks(105, 270, 30, 13);
let brick4 = new bricks(140, 270, 30, 13);
let brick5 = new bricks(175, 270, 30, 13);
let brick6 = new bricks(210, 270, 30, 13);
let brick7 = new bricks(245, 270, 30, 13);
let brick8 = new bricks(280, 270, 30, 13);
let brick9 = new bricks(315, 270, 30, 13);
let brick10 = new bricks(350, 270, 30, 13);
let brick11 = new bricks(385, 270, 30, 13);
let brick12 = new bricks(420, 270, 30, 13);
let brick13 = new bricks(455, 270, 30, 13);
let brick14 = new bricks(490, 270, 30, 13);
let brick15 = new bricks(525, 270, 30, 13);
let brick16 = new bricks(560, 270, 30, 13);
let brick17 = new bricks(595, 270, 30, 13);
let brick18 = new bricks(630, 270, 30, 13);
let brick19 = new bricks(665, 270, 30, 13);
//-------------
let brick20 = new bricks(0, 287, 30, 13);
let brick21 = new bricks(35, 287, 30, 13);
let brick22 = new bricks(70, 287, 30, 13);
let brick23 = new bricks(105, 287, 30, 13);
let brick24 = new bricks(140, 287, 30, 13);
let brick25 = new bricks(175, 287, 30, 13);
let brick26 = new bricks(210, 287, 30, 13);
let brick27 = new bricks(245, 287, 30, 13);
let brick28 = new bricks(280, 287, 30, 13);
let brick29 = new bricks(315, 287, 30, 13);
let brick30 = new bricks(350, 287, 30, 13);
let brick31 = new bricks(385, 287, 30, 13);
let brick32 = new bricks(420, 287, 30, 13);
let brick33 = new bricks(455, 287, 30, 13);
let brick34 = new bricks(490, 287, 30, 13);
let brick35 = new bricks(525, 287, 30, 13);
let brick36 = new bricks(560, 287, 30, 13);
let brick37 = new bricks(595, 287, 30, 13);
let brick38 = new bricks(630, 287, 30, 13);
let brick39 = new bricks(665, 287, 30, 13);
//-------------
let brick40 = new bricks(0, 304, 30, 13);
let brick41 = new bricks(35, 304, 30, 13);
let brick42 = new bricks(70, 304, 30, 13);
let brick43 = new bricks(105,304, 30, 13);
let brick44 = new bricks(140, 304, 30, 13);
let brick45 = new bricks(175, 304, 30, 13);
let brick46 = new bricks(210, 304, 30, 13);
let brick47 = new bricks(245, 304, 30, 13);
let brick48 = new bricks(280, 304, 30, 13);
let brick49 = new bricks(315, 304, 30, 13);
let brick50 = new bricks(350, 304, 30, 13);
let brick51 = new bricks(385, 304, 30, 13);
let brick52 = new bricks(420, 304, 30, 13);
let brick53 = new bricks(455, 304, 30, 13);
let brick54 = new bricks(490, 304, 30, 13);
let brick55 = new bricks(525, 304, 30, 13);
let brick56 = new bricks(560, 304, 30, 13);
let brick57 = new bricks(595, 304, 30, 13);
let brick58 = new bricks(630, 304, 30, 13);
let brick59 = new bricks(665, 304, 30, 13);
//-------------
let brick60 = new bricks(0, 322, 30, 13);
let brick61 = new bricks(35, 322, 30, 13);
let brick62 = new bricks(70, 322, 30, 13);
let brick63 = new bricks(105, 322, 30, 13);
let brick64 = new bricks(140, 322, 30, 13);
let brick65 = new bricks(175, 322, 30, 13);
let brick66 = new bricks(210, 322, 30, 13);
let brick67 = new bricks(245, 322, 30, 13);
let brick68 = new bricks(280, 322, 30, 13);
let brick69 = new bricks(315, 322, 30, 13);
let brick70 = new bricks(350, 322, 30, 13);
let brick71 = new bricks(385, 322, 30, 13);
let brick72 = new bricks(420, 322, 30, 13);
let brick73 = new bricks(455, 322, 30, 13);
let brick74 = new bricks(490, 322, 30, 13);
let brick75 = new bricks(525, 322, 30, 13);
let brick76 = new bricks(560, 322, 30, 13);
let brick77 = new bricks(595, 322, 30, 13);
let brick78 = new bricks(630, 322, 30, 13);
let brick79 = new bricks(665, 322, 30, 13);
//-------------



function drawbricks(){
  push();
  fill(133,51,39,255);
  rect(brick0.rectX, brick0.rectY, brick0.rectW, brick0.rectH);
  rect(brick1.rectX, brick1.rectY, brick1.rectW, brick1.rectH);
  rect(brick2.rectX, brick2.rectY, brick2.rectW, brick2.rectH);
  rect(brick3.rectX, brick3.rectY, brick3.rectW, brick3.rectH);
  rect(brick4.rectX, brick4.rectY, brick4.rectW, brick4.rectH);
  rect(brick5.rectX, brick5.rectY, brick5.rectW, brick5.rectH);
  rect(brick6.rectX, brick6.rectY, brick6.rectW, brick6.rectH);
  rect(brick7.rectX, brick7.rectY, brick7.rectW, brick7.rectH);
  rect(brick8.rectX, brick8.rectY, brick8.rectW, brick8.rectH);
  rect(brick9.rectX, brick9.rectY, brick9.rectW, brick9.rectH);
  rect(brick10.rectX, brick10.rectY, brick10.rectW, brick10.rectH);
  rect(brick11.rectX, brick11.rectY, brick11.rectW, brick11.rectH);
  rect(brick12.rectX, brick12.rectY, brick12.rectW, brick12.rectH);
  rect(brick13.rectX, brick13.rectY, brick13.rectW, brick13.rectH);
  rect(brick14.rectX, brick14.rectY, brick14.rectW, brick14.rectH);
  rect(brick15.rectX, brick15.rectY, brick15.rectW, brick15.rectH);
  rect(brick16.rectX, brick16.rectY, brick16.rectW, brick16.rectH);
  rect(brick17.rectX, brick17.rectY, brick17.rectW, brick17.rectH);
  rect(brick18.rectX, brick18.rectY, brick18.rectW, brick18.rectH);
  rect(brick19.rectX, brick19.rectY, brick19.rectW, brick19.rectH);
  //-------------
  rect(brick20.rectX, brick20.rectY, brick20.rectW, brick20.rectH);
  rect(brick21.rectX, brick21.rectY, brick21.rectW, brick21.rectH);
  rect(brick22.rectX, brick22.rectY, brick22.rectW, brick22.rectH);
  rect(brick23.rectX, brick23.rectY, brick23.rectW, brick23.rectH);
  rect(brick24.rectX, brick24.rectY, brick24.rectW, brick24.rectH);
  rect(brick25.rectX, brick25.rectY, brick25.rectW, brick25.rectH);
  rect(brick26.rectX, brick26.rectY, brick26.rectW, brick26.rectH);
  rect(brick27.rectX, brick27.rectY, brick27.rectW, brick27.rectH);
  rect(brick28.rectX, brick28.rectY, brick28.rectW, brick28.rectH);
  rect(brick29.rectX, brick29.rectY, brick29.rectW, brick29.rectH);
  rect(brick30.rectX, brick30.rectY, brick30.rectW, brick30.rectH);
  rect(brick31.rectX, brick31.rectY, brick31.rectW, brick31.rectH);
  rect(brick32.rectX, brick32.rectY, brick32.rectW, brick32.rectH);
  rect(brick33.rectX, brick33.rectY, brick33.rectW, brick33.rectH);
  rect(brick34.rectX, brick34.rectY, brick34.rectW, brick34.rectH);
  rect(brick35.rectX, brick35.rectY, brick35.rectW, brick35.rectH);
  rect(brick36.rectX, brick36.rectY, brick36.rectW, brick36.rectH);
  rect(brick37.rectX, brick37.rectY, brick37.rectW, brick37.rectH);
  rect(brick38.rectX, brick38.rectY, brick38.rectW, brick38.rectH);
  rect(brick39.rectX, brick39.rectY, brick39.rectW, brick39.rectH);
  pop();
  //-------------
  push();
  fill(197,128,16,255);
  rect(brick40.rectX, brick40.rectY, brick40.rectW, brick40.rectH);
  rect(brick41.rectX, brick41.rectY, brick41.rectW, brick41.rectH);
  rect(brick42.rectX, brick42.rectY, brick42.rectW, brick42.rectH);
  rect(brick43.rectX, brick43.rectY, brick43.rectW, brick43.rectH);
  rect(brick44.rectX, brick44.rectY, brick44.rectW, brick44.rectH);
  rect(brick45.rectX, brick45.rectY, brick45.rectW, brick45.rectH);
  rect(brick46.rectX, brick46.rectY, brick46.rectW, brick46.rectH);
  rect(brick47.rectX, brick47.rectY, brick47.rectW, brick47.rectH);
  rect(brick48.rectX, brick48.rectY, brick48.rectW, brick48.rectH);
  rect(brick49.rectX, brick49.rectY, brick49.rectW, brick49.rectH);
  rect(brick50.rectX, brick50.rectY, brick50.rectW, brick50.rectH);
  rect(brick51.rectX, brick51.rectY, brick51.rectW, brick51.rectH);
  rect(brick52.rectX, brick52.rectY, brick52.rectW, brick52.rectH);
  rect(brick53.rectX, brick53.rectY, brick53.rectW, brick53.rectH);
  rect(brick54.rectX, brick54.rectY, brick54.rectW, brick54.rectH);
  rect(brick55.rectX, brick55.rectY, brick55.rectW, brick55.rectH);
  rect(brick56.rectX, brick56.rectY, brick56.rectW, brick56.rectH);
  rect(brick57.rectX, brick57.rectY, brick57.rectW, brick57.rectH);
  rect(brick58.rectX, brick58.rectY, brick58.rectW, brick58.rectH);
  rect(brick59.rectX, brick59.rectY, brick59.rectW, brick59.rectH);
  //-------------
  rect(brick60.rectX, brick60.rectY, brick60.rectW, brick60.rectH);
  rect(brick61.rectX, brick61.rectY, brick61.rectW, brick61.rectH);
  rect(brick62.rectX, brick62.rectY, brick62.rectW, brick62.rectH);
  rect(brick63.rectX, brick63.rectY, brick63.rectW, brick63.rectH);
  rect(brick64.rectX, brick64.rectY, brick64.rectW, brick64.rectH);
  rect(brick65.rectX, brick65.rectY, brick65.rectW, brick65.rectH);
  rect(brick66.rectX, brick66.rectY, brick66.rectW, brick66.rectH);
  rect(brick67.rectX, brick67.rectY, brick67.rectW, brick67.rectH);
  rect(brick68.rectX, brick68.rectY, brick68.rectW, brick68.rectH);
  rect(brick69.rectX, brick69.rectY, brick69.rectW, brick69.rectH);
  rect(brick70.rectX, brick70.rectY, brick70.rectW, brick70.rectH);
  rect(brick71.rectX, brick71.rectY, brick71.rectW, brick71.rectH);
  rect(brick72.rectX, brick72.rectY, brick72.rectW, brick72.rectH);
  rect(brick73.rectX, brick73.rectY, brick73.rectW, brick73.rectH);
  rect(brick74.rectX, brick74.rectY, brick74.rectW, brick74.rectH);
  rect(brick75.rectX, brick75.rectY, brick75.rectW, brick75.rectH);
  rect(brick76.rectX, brick76.rectY, brick76.rectW, brick76.rectH);
  rect(brick77.rectX, brick77.rectY, brick77.rectW, brick77.rectH);
  rect(brick78.rectX, brick78.rectY, brick78.rectW, brick78.rectH);
  rect(brick79.rectX, brick79.rectY, brick79.rectW, brick79.rectH);
  pop();
}

function collision(){
  if (collision_detection(brick0.rectX, brick0.rectY, brick0.rectW, brick0.rectH)) {
    ballYSpeed = -ballXSpeed;
    brick1.rectX = brick1.rectX -1000;
    console.log('hit ' + 'brick0');
  }else if (collision_detection(brick1.rectX, brick1.rectY, brick1.rectW, brick1.rectH)) {
    ballYSpeed = -ballXSpeed;
    brick1.rectX = brick1.rectX -1000;
    console.log('hit ' + 'brick1');
  }else if (collision_detection(brick2.rectX, brick2.rectY, brick2.rectW, brick2.rectH)) {
    ballYSpeed = -ballXSpeed;
    brick2.rectX = brick2.rectX -1000;
    console.log('hit ' + 'brick2');
  }else if (collision_detection(brick3.rectX, brick3.rectY, brick3.rectW, brick3.rectH)) {
    ballYSpeed = -ballXSpeed;
    brick3.rectX = brick3.rectX -1000;
    console.log('hit ' + 'brick3');
  }else if (collision_detection(brick4.rectX, brick4.rectY, brick4.rectW, brick4.rectH)) {
    ballYSpeed = -ballXSpeed;
    brick4.rectX = brick4.rectX -1000;
    console.log('hit ' + 'brick4');
  }else if (collision_detection(brick5.rectX, brick5.rectY, brick5.rectW, brick5.rectH)) {
    ballYSpeed = -ballXSpeed;
    brick5.rectX = brick5.rectX -1000;
    console.log('hit ' + 'brick5');
  }else if (collision_detection(brick6.rectX, brick6.rectY, brick6.rectW, brick6.rectH)) {
    ballYSpeed = -ballXSpeed;
    brick6.rectX = brick6.rectX -1000;
    console.log('hit ' + 'brick6');
  }else if (collision_detection(brick7.rectX, brick7.rectY, brick7.rectW, brick7.rectH)) {
    ballYSpeed = -ballXSpeed;
    brick7.rectX = brick7.rectX -1000;
    console.log('hit ' + 'brick7');
  }else if (collision_detection(brick8.rectX, brick8.rectY, brick8.rectW, brick8.rectH)) {
    ballYSpeed = -ballXSpeed;
    brick8.rectX = brick8.rectX -1000;
    console.log('hit ' + 'brick8');
  }else if (collision_detection(brick9.rectX, brick9.rectY, brick9.rectW, brick9.rectH)) {
    ballYSpeed = -ballXSpeed;
    brick9.rectX = brick9.rectX -1000;
    console.log('hit ' + 'brick9');
  }else if (collision_detection(brick10.rectX, brick10.rectY, brick10.rectW, brick10.rectH)) {
    ballYSpeed = -ballXSpeed;
    brick10.rectX = brick10.rectX -1000;
    console.log('hit ' + 'brick10');
  }else if (collision_detection(brick11.rectX, brick11.rectY, brick11.rectW, brick11.rectH)) {
    ballYSpeed = -ballXSpeed;
    brick11.rectX = brick11.rectX -1000;
    console.log('hit ' + 'brick11');
  }else if (collision_detection(brick12.rectX, brick12.rectY, brick12.rectW, brick12.rectH)) {
    ballYSpeed = -ballXSpeed;
    brick12.rectX = brick12.rectX -1000;
    console.log('hit ' + 'brick12');
  }else if (collision_detection(brick13.rectX, brick13.rectY, brick13.rectW, brick13.rectH)) {
    ballYSpeed = -ballXSpeed;
    brick13.rectX = brick13.rectX -1000;
    console.log('hit ' + 'brick13');
  }else if (collision_detection(brick14.rectX, brick14.rectY, brick14.rectW, brick14.rectH)) {
    ballYSpeed = -ballXSpeed;
    brick14.rectX = brick14.rectX -1000;
    console.log('hit ' + 'brick14');
  }else if (collision_detection(brick15.rectX, brick15.rectY, brick15.rectW, brick15.rectH)) {
    ballYSpeed = -ballXSpeed;
    brick15.rectX = brick15.rectX -1000;
    console.log('hit ' + 'brick15');
  }else if (collision_detection(brick16.rectX, brick16.rectY, brick16.rectW, brick16.rectH)) {
    ballYSpeed = -ballXSpeed;
    brick16.rectX = brick16.rectX -1000;
    console.log('hit ' + 'brick16');
  }else if (collision_detection(brick17.rectX, brick17.rectY, brick17.rectW, brick17.rectH)) {
    ballYSpeed = -ballXSpeed;
    brick17.rectX = brick17.rectX -1000;
    console.log('hit ' + 'brick17');
  }else if (collision_detection(brick18.rectX, brick18.rectY, brick18.rectW, brick18.rectH)) {
    ballYSpeed = -ballXSpeed;
    brick18.rectX = brick18.rectX -1000;
    console.log('hit ' + 'brick18');
  }else if (collision_detection(brick19.rectX, brick19.rectY, brick19.rectW, brick19.rectH)) {
    ballYSpeed = -ballXSpeed;
    brick19.rectX = brick19.rectX -1000;
    console.log('hit ' + 'brick19');
  }else if (collision_detection(brick20.rectX, brick20.rectY, brick20.rectW, brick20.rectH)) {
    ballYSpeed = -ballXSpeed;
    brick20.rectX = brick20.rectX -1000;
    console.log('hit ' + 'brick20');
  }else if (collision_detection(brick21.rectX, brick21.rectY, brick21.rectW, brick21.rectH)) {
    ballYSpeed = -ballXSpeed;
    brick21.rectX = brick21.rectX -1000;
    console.log('hit ' + 'brick21');
  }else if (collision_detection(brick22.rectX, brick22.rectY, brick22.rectW, brick22.rectH)) {
    ballYSpeed = -ballXSpeed;
    brick22.rectX = brick22.rectX -1000;
    console.log('hit ' + 'brick22');
  }else if (collision_detection(brick23.rectX, brick23.rectY, brick23.rectW, brick23.rectH)) {
    ballYSpeed = -ballXSpeed;
    brick23.rectX = brick23.rectX -1000;
    console.log('hit ' + 'brick23');
  }else if (collision_detection(brick24.rectX, brick24.rectY, brick24.rectW, brick24.rectH)) {
    ballYSpeed = -ballXSpeed;
    brick24.rectX = brick24.rectX -1000;
    console.log('hit ' + 'brick24');
  }else if (collision_detection(brick25.rectX, brick25.rectY, brick25.rectW, brick25.rectH)) {
    ballYSpeed = -ballXSpeed;
    brick25.rectX = brick25.rectX -1000;
    console.log('hit ' + 'brick25');
  }else if (collision_detection(brick26.rectX, brick26.rectY, brick26.rectW, brick26.rectH)) {
    ballYSpeed = -ballXSpeed;
    brick26.rectX = brick26.rectX -1000;
    console.log('hit ' + 'brick26');
  }else if (collision_detection(brick27.rectX, brick27.rectY, brick27.rectW, brick27.rectH)) {
    ballYSpeed = -ballXSpeed;
    brick27.rectX = brick27.rectX -1000;
    console.log('hit ' + 'brick27');
  }else if (collision_detection(brick28.rectX, brick28.rectY, brick28.rectW, brick28.rectH)) {
    ballYSpeed = -ballXSpeed;
    brick28.rectX = brick28.rectX -1000;
    console.log('hit ' + 'brick28');
  }else if (collision_detection(brick29.rectX, brick29.rectY, brick29.rectW, brick29.rectH)) {
    ballYSpeed = -ballXSpeed;
    brick29.rectX = brick29.rectX -1000;
    console.log('hit ' + 'brick29');
  }else if (collision_detection(brick30.rectX, brick30.rectY, brick30.rectW, brick30.rectH)) {
    ballYSpeed = -ballXSpeed;
    brick30.rectX = brick30.rectX -1000;
    console.log('hit ' + 'brick30');
  }else if (collision_detection(brick31.rectX, brick31.rectY, brick31.rectW, brick31.rectH)) {
    ballYSpeed = -ballXSpeed;
    brick31.rectX = brick31.rectX -1000;
    console.log('hit ' + 'brick31');
  }else if (collision_detection(brick32.rectX, brick32.rectY, brick32.rectW, brick32.rectH)) {
    ballYSpeed = -ballXSpeed;
    brick32.rectX = brick32.rectX -1000;
    console.log('hit ' + 'brick32');
  }else if (collision_detection(brick33.rectX, brick33.rectY, brick33.rectW, brick33.rectH)) {
    ballYSpeed = -ballXSpeed;
    brick33.rectX = brick33.rectX -1000;
    console.log('hit ' + 'brick33');
  }else if (collision_detection(brick34.rectX, brick34.rectY, brick34.rectW, brick34.rectH)) {
    ballYSpeed = -ballXSpeed;
    brick34.rectX = brick34.rectX -1000;
    console.log('hit ' + 'brick34');
  }else if (collision_detection(brick35.rectX, brick35.rectY, brick35.rectW, brick35.rectH)) {
    ballYSpeed = -ballXSpeed;
    brick35.rectX = brick35.rectX -1000;
    console.log('hit ' + 'brick35');
  }else if (collision_detection(brick36.rectX, brick36.rectY, brick36.rectW, brick36.rectH)) {
    ballYSpeed = -ballXSpeed;
    brick36.rectX = brick36.rectX -1000;
    console.log('hit ' + 'brick36');
  }else if (collision_detection(brick37.rectX, brick37.rectY, brick37.rectW, brick37.rectH)) {
    ballYSpeed = -ballXSpeed;
    brick37.rectX = brick37.rectX -1000;
    console.log('hit ' + 'brick37');
  }else if (collision_detection(brick38.rectX, brick38.rectY, brick38.rectW, brick38.rectH)) {
    ballYSpeed = -ballXSpeed;
    brick38.rectX = brick38.rectX -1000;
    console.log('hit ' + 'brick38');
  }else if (collision_detection(brick39.rectX, brick39.rectY, brick39.rectW, brick39.rectH)) {
    ballYSpeed = -ballXSpeed;
    brick39.rectX = brick39.rectX -1000;
    console.log('hit ' + 'brick39');
  }else if (collision_detection(brick40.rectX, brick40.rectY, brick40.rectW, brick40.rectH)) {
    ballYSpeed = -ballXSpeed;
    brick40.rectX = brick40.rectX -1000;
    console.log('hit ' + 'brick40');
  }else if (collision_detection(brick41.rectX, brick41.rectY, brick41.rectW, brick41.rectH)) {
    ballYSpeed = -ballXSpeed;
    brick41.rectX = brick41.rectX -1000;
    console.log('hit ' + 'brick41');
  }else if (collision_detection(brick42.rectX, brick42.rectY, brick42.rectW, brick42.rectH)) {
    ballYSpeed = -ballXSpeed;
    brick42.rectX = brick42.rectX -1000;
    console.log('hit ' + 'brick42');
  }else if (collision_detection(brick43.rectX, brick43.rectY, brick43.rectW, brick43.rectH)) {
    ballYSpeed = -ballXSpeed;
    brick43.rectX = brick43.rectX -1000;
    console.log('hit ' + 'brick43');
  }else if (collision_detection(brick44.rectX, brick44.rectY, brick44.rectW, brick44.rectH)) {
    ballYSpeed = -ballXSpeed;
    brick44.rectX = brick44.rectX -1000;
    console.log('hit ' + 'brick44');
  }else if (collision_detection(brick45.rectX, brick45.rectY, brick45.rectW, brick45.rectH)) {
    ballYSpeed = -ballXSpeed;
    brick45.rectX = brick45.rectX -1000;
    console.log('hit ' + 'brick45');
  }else if (collision_detection(brick46.rectX, brick46.rectY, brick46.rectW, brick46.rectH)) {
    ballYSpeed = -ballXSpeed;
    brick46.rectX = brick46.rectX -1000;
    console.log('hit ' + 'brick46');
  }else if (collision_detection(brick47.rectX, brick47.rectY, brick47.rectW, brick47.rectH)) {
    ballYSpeed = -ballXSpeed;
    brick47.rectX = brick47.rectX -1000;
    console.log('hit ' + 'brick47');
  }else if (collision_detection(brick48.rectX, brick48.rectY, brick48.rectW, brick48.rectH)) {
    ballYSpeed = -ballXSpeed;
    brick48.rectX = brick48.rectX -1000;
    console.log('hit ' + 'brick48');
  }else if (collision_detection(brick49.rectX, brick49.rectY, brick49.rectW, brick49.rectH)) {
    ballYSpeed = -ballXSpeed;
    brick49.rectX = brick49.rectX -1000;
    console.log('hit ' + 'brick49');
  }else if (collision_detection(brick50.rectX, brick50.rectY, brick50.rectW, brick50.rectH)) {
    ballYSpeed = -ballXSpeed;
    brick50.rectX = brick50.rectX -1000;
    console.log('hit ' + 'brick50');
  }else if (collision_detection(brick51.rectX, brick51.rectY, brick51.rectW, brick51.rectH)) {
    ballYSpeed = -ballXSpeed;
    brick51.rectX = brick51.rectX -1000;
    console.log('hit ' + 'brick51');
  }else if (collision_detection(brick52.rectX, brick52.rectY, brick52.rectW, brick52.rectH)) {
    ballYSpeed = -ballXSpeed;
    brick52.rectX = brick52.rectX -1000;
    console.log('hit ' + 'brick52');
  }else if (collision_detection(brick53.rectX, brick53.rectY, brick53.rectW, brick53.rectH)) {
    ballYSpeed = -ballXSpeed;
    brick53.rectX = brick53.rectX -1000;
    console.log('hit ' + 'brick53');
  }else if (collision_detection(brick54.rectX, brick54.rectY, brick54.rectW, brick54.rectH)) {
    ballYSpeed = -ballXSpeed;
    brick54.rectX = brick54.rectX -1000;
    console.log('hit ' + 'brick54');
  }else if (collision_detection(brick55.rectX, brick55.rectY, brick55.rectW, brick55.rectH)) {
    ballYSpeed = -ballXSpeed;
    brick55.rectX = brick55.rectX -1000;
    console.log('hit ' + 'brick56');
  }else if (collision_detection(brick56.rectX, brick56.rectY, brick56.rectW, brick56.rectH)) {
    ballYSpeed = -ballXSpeed;
    brick56.rectX = brick56.rectX -1000;
    console.log('hit ' + 'brick56');
  }else if (collision_detection(brick57.rectX, brick57.rectY, brick57.rectW, brick57.rectH)) {
    ballYSpeed = -ballXSpeed;
    brick57.rectX = brick57.rectX -1000;
    console.log('hit ' + 'brick57');
  }else if (collision_detection(brick58.rectX, brick58.rectY, brick58.rectW, brick58.rectH)) {
    ballYSpeed = -ballXSpeed;
    brick58.rectX = brick58.rectX -1000;
    console.log('hit ' + 'brick58');
  }else if (collision_detection(brick59.rectX, brick59.rectY, brick59.rectW, brick59.rectH)) {
    ballYSpeed = -ballXSpeed;
    brick59.rectX = brick59.rectX -1000;
    console.log('hit ' + 'brick59');
  }else if (collision_detection(brick60.rectX, brick60.rectY, brick60.rectW, brick60.rectH)) {
    ballYSpeed = -ballXSpeed;
    brick60.rectX = brick60.rectX -1000;
    console.log('hit ' + 'brick60');
  }else if (collision_detection(brick61.rectX, brick61.rectY, brick61.rectW, brick61.rectH)) {
    ballYSpeed = -ballXSpeed;
    brick61.rectX = brick61.rectX -1000;
    console.log('hit ' + 'brick61');
  }else if (collision_detection(brick62.rectX, brick62.rectY, brick62.rectW, brick62.rectH)) {
    ballYSpeed = -ballXSpeed;
    brick62.rectX = brick62.rectX -1000;
    console.log('hit ' + 'brick62');
  }else if (collision_detection(brick63.rectX, brick63.rectY, brick63.rectW, brick63.rectH)) {
    ballYSpeed = -ballXSpeed;
    brick63.rectX = brick63.rectX -1000;
    console.log('hit ' + 'brick63');
  }else if (collision_detection(brick64.rectX, brick64.rectY, brick64.rectW, brick64.rectH)) {
    ballYSpeed = -ballXSpeed;
    brick64.rectX = brick64.rectX -1000;
    console.log('hit ' + 'brick64');
  }else if (collision_detection(brick65.rectX, brick65.rectY, brick65.rectW, brick65.rectH)) {
    ballYSpeed = -ballXSpeed;
    brick65.rectX = brick65.rectX -1000;
    console.log('hit ' + 'brick65');
  }else if (collision_detection(brick66.rectX, brick66.rectY, brick66.rectW, brick66.rectH)) {
    ballYSpeed = -ballXSpeed;
    brick66.rectX = brick66.rectX -1000;
    console.log('hit ' + 'brick66');
  }else if (collision_detection(brick67.rectX, brick67.rectY, brick67.rectW, brick67.rectH)) {
    ballYSpeed = -ballXSpeed;
    brick67.rectX = brick67.rectX -1000;
    console.log('hit ' + 'brick67');
  }else if (collision_detection(brick68.rectX, brick68.rectY, brick68.rectW, brick68.rectH)) {
    ballYSpeed = -ballXSpeed;
    brick68.rectX = brick68.rectX -1000;
    console.log('hit ' + 'brick68');
  }else if (collision_detection(brick69.rectX, brick69.rectY, brick69.rectW, brick69.rectH)) {
    ballYSpeed = -ballXSpeed;
    brick69.rectX = brick69.rectX -1000;
    console.log('hit ' + 'brick69');
  }else if (collision_detection(brick70.rectX, brick70.rectY, brick70.rectW, brick70.rectH)) {
    ballYSpeed = -ballXSpeed;
    brick70.rectX = brick70.rectX -1000;
    console.log('hit ' + 'brick70');
  }else if (collision_detection(brick71.rectX, brick71.rectY, brick71.rectW, brick71.rectH)) {
    ballYSpeed = -ballXSpeed;
    brick71.rectX = brick71.rectX -1000;
    console.log('hit ' + 'brick71');
  }else if (collision_detection(brick72.rectX, brick72.rectY, brick72.rectW, brick72.rectH)) {
    ballYSpeed = -ballXSpeed;
    brick72.rectX = brick72.rectX -1000;
    console.log('hit ' + 'brick72');
  }else if (collision_detection(brick73.rectX, brick73.rectY, brick73.rectW, brick73.rectH)) {
    ballYSpeed = -ballXSpeed;
    brick73.rectX = brick73.rectX -1000;
    console.log('hit ' + 'brick73');
  }else if (collision_detection(brick74.rectX, brick74.rectY, brick74.rectW, brick74.rectH)) {
    ballYSpeed = -ballXSpeed;
    brick74.rectX = brick74.rectX -1000;
    console.log('hit ' + 'brick74');
  }else if (collision_detection(brick75.rectX, brick75.rectY, brick75.rectW, brick75.rectH)) {
    ballYSpeed = -ballXSpeed;
    brick75.rectX = brick75.rectX -1000;
    console.log('hit ' + 'brick75');
  }else if (collision_detection(brick76.rectX, brick76.rectY, brick76.rectW, brick76.rectH)) {
    ballYSpeed = -ballXSpeed;
    brick76.rectX = brick76.rectX -1000;
    console.log('hit ' + 'brick76');
  }else if (collision_detection(brick77.rectX, brick77.rectY, brick77.rectW, brick77.rectH)) {
    ballYSpeed = -ballXSpeed;
    brick77.rectX = brick77.rectX -1000;
    console.log('hit ' + 'brick77');
  }else if (collision_detection(brick78.rectX, brick78.rectY, brick78.rectW, brick78.rectH)) {
    ballYSpeed = -ballXSpeed;
    brick78.rectX = brick78.rectX -1000;
    console.log('hit ' + 'brick78');
  }else if (collision_detection(brick79.rectX, brick79.rectY, brick79.rectW, brick79.rectH)) {
    ballYSpeed = -ballXSpeed;
    brick79.rectX = brick79.rectX -1000;
    console.log('hit ' + 'brick79');
  }
}
