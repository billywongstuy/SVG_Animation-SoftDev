/*------------------
 VARIABLES
------------------*/

var pic = document.getElementById("vimage");
//var clearB = document.getElementById("clear");
var stopB = document.getElementById("stop");
var circB = document.getElementById("circle");

var radius = 20;
var xcor = pic.width.baseVal.value/2;
var ycor = pic.height.baseVal.value/2;
var direction = 1;
var speed = 1;
var d; 


/*--------------
 CLEAR
--------------*/

var clear = function(e) {
    while (pic.lastChild) {
	pic.removeChild(pic.lastChild);
    }
    prevX = null;
    prevY = null;
};

/*------------------------------------------
 ANIMATION
------------------------------------------*/

var circleGrow = function(e) {
    clear();
    
    var c = document.createElementNS("http://www.w3.org/2000/svg","circle");
    c.setAttribute("r",radius.toString());
    c.setAttribute("fill","rgba(255,0,0,0.5)");
    c.setAttribute("stroke","black");
    c.setAttribute("cx",xcor.toString());
    c.setAttribute("cy",ycor.toString());
    pic.appendChild(c);

    radius+= direction*speed;
    if (radius == xcor) {
	direction = -1;
    }
    if (radius == 0) {
	direction = 1;
    }
};

var circleStart = function(e) {
    d = setInterval(circleGrow,10);
}


/*----------------
 STOP
----------------*/

var stopIt = function() {
    clearInterval(d);
}


/*---------------------
 EVENT LISTENERS
---------------------*/

circB.addEventListener("click",circleStart);
//clearB.addEventListener("click",clear);
stopB.addEventListener("click",stopIt);
