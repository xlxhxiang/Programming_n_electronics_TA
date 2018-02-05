function setup(){
	
	createCanvas(800,800);
	drawLines(0,0);

}

function drawLines(x,y){
	
	var num = width/10;
	var n = 0;
	while( n < num ){

	line(x,y+n*10,x+800,y+n*10);
	n += 1;
	
	}
	

}