var sketchProc = function(processingInstance) {

    with (processingInstance) {
      size(400,400);
      fill(0, 0, 0);
ellipse(200, 200, 375, 375);
fill(60, 0, 255);
triangle(200, 104, 371, 275, 46, 280);
fill(255, 255, 255);

var answer = floor(random(1, 5));
var answer=3;
if (answer ===0) {
    text("cual es mu edad?", 162, 206);
    text("20 y cumpliras 21 en octubre", 136, 229); 
}
if(answer===2){
    text("Sere un buen programador?", 131, 200);
    fill(255, 238, 0);
    text("vas a ser un crack wey :)", 147, 229); 
}
if(answer===2){
    text("Que fue primero, el huevo \no la gallina?", 120, 200);
    fill(255, 238, 0);
    text("\nEL HUEVO :)", 147, 229); 
}
if(answer===3){
    text("Ella me ama?", 153, 200);
    fill(255, 238, 0);
    text("ELLA NO TE AMA \nNUNCA LO HIZO :( ", 147, 229); 
}
if(answer>3 && answer<5){
    text("saludos profesor", 139, 200);
   
}
else{
    if (answer>3&& answer>5){
        fill(227, 52, 25);
        textSize(20);
        text("Paseme con 10 profesor", 100, 236);
   
    }
}




    }
  };
  var canvas = document.getElementById("canvasBola");
  var processing = new Processing(canvas, sketchProc);
