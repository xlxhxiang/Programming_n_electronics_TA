function drawLine(x1,y1,x2,y2){

	var lineLength = int(dist(x1, y1, x2, y2));
	stroke(lineLength);
	line(x1,y1,x2,y2);

}

function setup(){
	
	createCanvas(400,400);

	var steps = 0;
	
	while(steps < 10){
		drawLine(width/2, height/2,random(width/2,width), random(0,height/2));
		steps = steps+1;
	}

}

