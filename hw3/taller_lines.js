function setup(){
	
	createCanvas(800,810);
	drawLines(10, 0);

}

function drawLines(x,y){
	
	var num = width/10;
	var n = 0;
	
	while( n < num ){

	line(x+n*5,y,x+n*5,5+n*20);
	n += 1;
	
	}

}