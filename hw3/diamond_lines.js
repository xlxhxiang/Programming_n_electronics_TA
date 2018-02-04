function setup(){
	
	createCanvas(800,810);
	drawDiamond(width/2-10, 0);

}

function drawDiamond(x,y){
	
	var num = height/10;
	var n = 0;
	
	while( n < num/2 ){

	line(x-n*10,y+n*10,x+n*10,y+n*10);
	n += 1;
	
	}
	
	n=0;
	
	while( n < num/2){
		
		line(n*10,height/2+n*10,width-n*10,height/2+n*10);
		
		n +=1;
	}
	

}