function setup(){
	
	createCanvas(1000,825);
	background(0);
	drawGrid(50, 75);

}

function drawGrid(x,y){
	
	var r = 50;
	var gap = 25;

	var num = (width-40)/2/r;
	
	fill(255);

	var i = 0;
	
	while( i < num ){
		
		var j = 0;
		while (j < num){
			
			ellipse(x + j*2*r + gap,y, r, r);
			j +=1;		
		}
		y = y + r + gap;
	i += 1;
	
	}

}