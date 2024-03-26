// Click or hold and drag to draw. The color of the brush will vary depending on the art board. Click a key to clear the board.
// Scroll down the drawing board for more complementary colors.

let col = 0;

function setup() {
  createCanvas(800, 2200);
  background(100, 100, 200);
  noStroke();
  
  fill(255, 213, 128);
  textSize(40);  
  text('Complementary Colors Art Boards', 90, 65);
  
  rectMode(CORNER);
 fill(255);
 rect(100, 100, 300, 500);
  
  rectMode(CORNER);
 fill(0);
 rect(400, 100, 300, 500); 
  
  rectMode(CORNER);
 fill(0, 255, 0);
 rect(100, 600, 300, 500); 
  
  rectMode(CORNER);
 fill(255, 0, 0);
 rect(400, 600, 300, 500);
  
  rectMode(CORNER);
 fill(0, 0, 255);
 rect(100, 1100, 300, 500);
  
  rectMode(CORNER);
 fill(255, 165, 0);
 rect(400, 1100, 300, 500);
  
  rectMode(CORNER);
 fill(160, 32, 240);
 rect(100, 1600, 300, 500);
  
  rectMode(CORNER);
 fill(255, 255, 0);
 rect(400, 1600, 300, 500);
  
}
  
function draw() {
  if (mouseIsPressed){
    col = 0;
    ellipse(mouseX, mouseY, 10);
    if (mouseX > 400 && mouseX < 700){ 
    col = 255;
    ellipse(mouseX, mouseY, 10);
  }
     if (mouseX < 400 && mouseY > 600){
      fill(255, 0, 0);
      ellipse(mouseX, mouseY, 10);
    }
    if (mouseX > 400 && mouseY > 600){
      fill(0, 255, 0);
      ellipse(mouseX, mouseY, 10);
    }
    if (mouseX < 400 && mouseY > 1100){
      fill(255, 165, 0);
      ellipse(mouseX, mouseY, 10);
    }
    if (mouseX > 400 && mouseY > 1100){
      fill(0, 0, 255);
      ellipse(mouseX, mouseY, 10);
    }
    if (mouseX < 400 && mouseY > 1600){
      fill(255, 255, 0);
      ellipse(mouseX, mouseY, 10);
    }
    if (mouseX > 400 && mouseY > 1600){
      fill(160, 32, 240);
      ellipse(mouseX, mouseY, 10);
    }
    if (mouseX < 100){
      fill(100, 100, 200);
      ellipse(mouseX, mouseY, 10);
    }
    if (mouseX < 800 && mouseX > 700){
      fill(100, 100, 200);
      ellipse(mouseX, mouseY, 10);
    }
    if (mouseY < 100){
      fill(100, 100, 200);
      ellipse(mouseX, mouseY, 10);
    }
    if (mouseY < 2200 && mouseY > 2100){
      fill(100, 100, 200);
      ellipse(mouseX, mouseY, 10);
    }
  // brushX = map(mouseX, 0, 800, 100, 700);
  // brushY = map(mouseX, 0, 2200, 100, 2100);
  } 
 
  if (keyIsPressed){
    background(100, 100, 200);
    
    fill(255, 213, 128);
  textSize(40);  
  text('Complementary Colors Art Boards', 90, 65);
    
    rectMode(CORNER);
 fill(255);
 rect(100, 100, 300, 500);
  
  rectMode(CORNER);
 fill(0);
 rect(400, 100, 300, 500);
    
    rectMode(CORNER);
 fill(0, 255, 0);
 rect(100, 600, 300, 500); 
  
  rectMode(CORNER);
 fill(255, 0, 0);
 rect(400, 600, 300, 500);
    
  rectMode(CORNER);
 fill(0, 0, 255);
 rect(100, 1100, 300, 500);
    
  rectMode(CORNER);
 fill(255, 165, 0);
 rect(400, 1100, 300, 500);
    
  rectMode(CORNER);
 fill(160, 32, 240);
 rect(100, 1600, 300, 500);
    
  rectMode(CORNER);
 fill(255, 255, 0);
 rect(400, 1600, 300, 500);
    
  }
  fill(col); 

}

// Resources from slides and p5js references

