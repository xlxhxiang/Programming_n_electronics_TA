function setup() { 
  background(255);
	colorMode(HSB);
	noStroke();
	
	background(0, 0, 255, 0.1);
  fill(random(210,270), 255, 255);
  //ellipse(random(width), random(height), random(20, 40));
	beginShape();
vertex(20, 20);
vertex(40, 20);
vertex(40, 40);
vertex(60, 40);
vertex(60, 60);
vertex(20, 60);
endShape(CLOSE);
}