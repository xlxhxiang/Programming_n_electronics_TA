function setup(){
	
	createCanvas(1000,800);
	drawRects(0, 20);

}

function drawRects(x,y){
	
	var unitWidth = 25;
	var oneRectWidth = unitWidth * 4;

	var num = width/(oneRectWidth + 25);
	
	var n = 0;
	
	while( n < num ){
		
		noFill();
		var i=0;
		while (i<4){
			rect(x+i*unitWidth/2,y+i*unitWidth/2,oneRectWidth-i*unitWidth,oneRectWidth-i*unitWidth);
			i +=1;		
		}
		x += oneRectWidth + 25;
	n += 1;
	
	}

}