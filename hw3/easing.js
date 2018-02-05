function setup(){
	
	createCanvas(800,800);

}

function draw(){
	
	background(0);
	
	var rate = 0.9;
	var x = 0;
	var y = 0;
	var targetX = mouseX;
	var targetY = mouseY;

	
	x = targetX * rate + x * (1-rate);
	y = targetY * rate + y * (1-rate);
	
	fill(0,255,0);
	ellipse(x,y,50,50);

}