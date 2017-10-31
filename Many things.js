
var circle = {
    
    r: 5, 
    e: true,
}

function setup(){
    
    createCanvas(windowWidth, windowHeight);
}


function draw(){
    ellipse(width/2, height/2, circle.r, circle.r);
    move();
    textSize(40);
    text("Check this out!", 50,50);
}

function move(){
    
   if (circle.e==true){
        circle.r++;        
    }
    else{
        
        circle.r--;
    }
    
    if ( circle.r >= width/2 ){
        circle.e= false;
    }
    if ( circle.r == 0){
        circle.e= true;
    }
    
    
    
}



