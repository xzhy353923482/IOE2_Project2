let url = 'https://io.adafruit.com/api/v2/xzhy353923482/feeds/testdata';
let counter = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    if (counter % 10 == 0) {
        getData();
    }
    counter++;
}

function getData() {
    let data;
    httpGet(url, 'json', function (response) {
        console.log(response);
        data = response.last_value;
        noStroke();
        console.log(data);
        background(255,255,255);
        if(data == 1){
            
            
		    noStroke();
		    fill(250, 40, 100, 250);
		    ellipse (windowWidth/4, windowHeight/2, 450, 450 );
		    fill(150, 150, 150, 250);
		    ellipse (windowWidth/2, windowHeight/2, 450, 450 );
		    ellipse ((windowWidth/4)*3, windowHeight/2, 450, 450 );
		    noFill();
		    strokeWeight(60);
		    stroke (250, 40, 100, 250);
		    ellipse (windowWidth/4, windowHeight/2, 550, 550 );
		    stroke(150, 150, 150, 250);
		    ellipse (windowWidth/2, windowHeight/2, 550, 550 );
		    ellipse ((windowWidth/4)*3, windowHeight/2, 550, 550 );
		    
		
        }else if(data == 2){

    //         noFill();
		  //  strokeWeight(60);
		  //  stroke (250, 220, 70, 250);
		  //  ellipse (windowWidth/2, windowHeight/2, 550, 550 );
		    
		    
		    noStroke();
		    fill(250, 220, 70, 250);
		    ellipse (windowWidth/2, windowHeight/2, 450, 450 );
		    fill(150, 150, 150, 250);
		    ellipse (windowWidth/4, windowHeight/2, 450, 450 );
		    ellipse ((windowWidth/4)*3, windowHeight/2, 450, 450 );
		    noFill();
		    strokeWeight(60);
		    stroke (250, 220, 70, 250);
		    ellipse (windowWidth/2, windowHeight/2, 550, 550 );
		    stroke(150, 150, 150, 250);
		    ellipse (windowWidth/4, windowHeight/2, 550, 550 );
		    ellipse ((windowWidth/4)*3, windowHeight/2, 550, 550 );
       

		    
        }else if(data == 3){
            
		  //  noFill();
		  //  strokeWeight(60);
		  //  stroke (50, 250, 60, 250);
		  //  ellipse ((windowWidth/4)*3, windowHeight/2, 550, 550 );

		    noStroke();
		    fill(50, 250, 60, 250);
		    ellipse ((windowWidth/4)*3, windowHeight/2, 450, 450 );
		    fill(150, 150, 150, 250);
		    ellipse (windowWidth/4, windowHeight/2, 450, 450 );
		    ellipse (windowWidth/2, windowHeight/2, 450, 450 );
		    noFill();
		    strokeWeight(60);
		    stroke (50, 250, 60, 250);
		    ellipse ((windowWidth/4)*3, windowHeight/2, 550, 550 );
		    stroke(150, 150, 150, 250);
		    ellipse (windowWidth/4, windowHeight/2, 550, 550 );
		    ellipse (windowWidth/2, windowHeight/2, 550, 550 );
		    
	    }else if(data == 0){
	        
		    noStroke();
		    fill(150, 150, 150, 250);
		    ellipse (windowWidth/4, windowHeight/2, 450, 450 );
		    ellipse (windowWidth/2, windowHeight/2, 450, 450 );
		    ellipse ((windowWidth/4)*3, windowHeight/2, 450, 450 );
		    noFill();
		    strokeWeight(60);
		    stroke(150, 150, 150, 250);
		    ellipse (windowWidth/4, windowHeight/2, 550, 550 );
		    ellipse (windowWidth/2, windowHeight/2, 550, 550 );
		    ellipse ((windowWidth/4)*3, windowHeight/2, 550, 550 );
	    }
    });
}
