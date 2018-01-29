function drawLine(){
	
	line(random(width), random(height),random(width), random(height));

}

function setup(){
	
	createCanvas(400,400);

	var steps = 0;
	
	while(steps < 10){
		drawLine();
		steps = steps+1;
	}

}

