//не использовать 
// устарело 
var ball = document.getElementById('ball');

ball.onclick = function() {
	ball.style.backgroundColor = "Blue";
};


// 


var ball = document.getElementById('ball');

function handler() {
	ball.style.backgroundColor = "Blue";
};

ball.addEventListener('click', handler );
ball.addEventListener('click', function() {
	alert('test');
});



// 1 -2 способ кликер на изменение цвета


var ball = document.getElementById('ball');

function handler() {
  /*if(ball.className == "blue"){
  	ball.className = "red";
  } 
  else {
  	ball.className = "blue";
  }*/
  
  ball.classList.toggle('blue');
 };

ball.addEventListener('click', handler );


///

var ball = document.getElementById('ball');

function handler(event) {
  console.log(event);
	ball.classList.toggle('blue');
 };

ball.addEventListener('click', handler );
document.addEventListener('keypress' , function(event) {
	console.dir(event);
  if (event.keyCode == 113) {
  	alert('press q')
  }
});

