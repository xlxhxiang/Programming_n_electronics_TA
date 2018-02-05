function setup(){
	
	createCanvas(800,800);
	drawCircles(width/2, height/2);

}

function drawCircles(x,y){
	
	var num = width/10;
	var n = 0;
	noFill();
	while( n < num ){

	ellipse(x,y,10+n*10,10+n*10);
	n += 1;
	
	}
	

}