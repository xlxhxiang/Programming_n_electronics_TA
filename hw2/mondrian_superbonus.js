function setup(){
  createCanvas(1000,800);
  drawRectangle(0,0,0,width,height);
}

function draw(){

}


function drawRectangle(i,x,y,wid,hei) {
 
  var orientationMode;    //can be 0 or 1 to be vertical or horizontal
  var numIterations = 5;
  
    
    if(i%2==0){  
        orientationMode = 0;
    }else{ 
      orientationMode = 1;
    }
    
    stroke(0);
    strokeWeight(10);
    if (i>4){
    	//fill(random(0,255),random(0,255),random(0,255));
			var colorCase = int(random(1,6));
			switch(colorCase){
				case 1:
					fill(60,62,152);
					break;
				case 2:
					fill(249,244,0);
					break;
				case 3:
					fill(220,46,0);
					break;
				case 4:
					fill(100,149,237);
					break;
				case 5:
					fill(255);
					break;
				case 6:
					fill(0);
					break;
											} 
    }
    rect(x,y,wid,hei);
    
    if(i < numIterations ){
    //float num=(random(4,10));  
      if (orientationMode ==0){
        var num=(random(2,5));
        new drawRectangle(i+1,x,y,wid/num,hei);
        new drawRectangle(i+1,x+(wid/num),y,(wid-(wid/num)),hei);
        
      }else {
        var num2 =int(random(2,5));      
        new drawRectangle(i+1,x,y,wid,(hei/num2));
        new drawRectangle(i+1,x,y+(hei/num2),wid,(hei-(hei/num2)));
        
      }
    }
  

}