function setup(){
	
	createCanvas(800,800);
	drawCone(width/2, 0);

}

function drawCone(x,y){
	
	var num = width/10;
	var n = 0;
	
	while( n < num ){

	line(x,y,10+n*10,height);
	n += 1;
	
	}
	

}