function setup() {
    createCanvas(400, 400);
    background("purple");
  }
   function draw() {
  
  
    stroke ("pink")
    fill ("white")
    
   
    if(mouseIsPressed)
    rect (mouseX,mouseY, 20, 20)
  }