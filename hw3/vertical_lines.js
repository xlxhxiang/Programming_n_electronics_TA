function setup(){
	
	createCanvas(800,800);
	drawLines(10,0);

}

function drawLines(x,y){
	
	var num = width/10;
	var n = 0;
	while( n < num ){

	line(x+n*10,y,x+n*10,y+800);
	n += 1;
	
	}
	

}