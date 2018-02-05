function setup() { 
  createCanvas(400, 400);
	background(255);
} 

var diameter = 10;

function draw() { 
	
	ellipse(350,350,diameter,diameter);
	
  if (mouseIsPressed) {
    ellipse(mouseX, mouseY, diameter);
  }
}

function keyPressed() {
  print(key);
  if (key == 'R') {
    fill(255, 0, 0);
  } else if (key == 'G') {
    fill(0, 255, 0);
  } else if (key == 'B') {
    fill(0, 0, 255); 
  } else if(key == 'H'){
		fill(0);
	} else if (key == 'Y'){
		fill(255,255,0);
	} else if (key == 'P'){
		fill(255,0,255);
	}
	
	if(key == '1'){
		diameter = 10;
	}else if( key == '2'){
		diameter = 20;
	}else if( key == '3'){
		diameter = 30;
	}
	
	if( key == 'E'){
		fill(255);
		noStroke();
	}
}