	var rate = 0.1;
	var x = 0;
	var y = 0;

function setup(){
	
	createCanvas(800,800);
	

}

function draw(){
	
	background(0);
	
	x = mouseX * rate + x * (1-rate);
	y = mouseY * rate + y * (1-rate);
	
	fill(0,255,0);
	ellipse(x,y,50,50);

}