var a = 0;
var angle = 0 ;
var n = 0;
var m = 0;
var speed = 0;
function start(){

 n = document.getElementById("n").value;
 m = document.getElementById("m").value;
 angle = -(180-(180-360*(m/n)));
 a = 300 - n*2
 
setSpeed(150);
color("black");

width(3);
right(90);
forward(a);

for (let i = 0; i < n-1; i++) {
    left(angle);
    forward(a);
  }
  for (let i = 0; i <= n-1; i++) {
    left(angle);
    speed(1);
  }
}

  
  
  
  

