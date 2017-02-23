var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var radius = 10;
var dragging = false;

ctx.lineWidth = radius * 2;


var putPoint = function(e){
	if (dragging) {
		ctx.lineTo(e.clientX, e.clientY);
		ctx.strokeStyle = color;
		ctx.stroke();
	ctx.beginPath();
	ctx.arc(e.clientX, e.clientY, radius, 0, Math.PI*2);
	ctx.fillStyle = color;
	ctx.fill();
	ctx.beginPath();
	ctx.moveTo(e.clientX, e.clientY);
}
};

var engage = function(e){
	dragging = true;
	putPoint(e);
};

var disengage = function(){
	dragging = false;
	ctx.beginPath();
};

// Bind mouse events to the canvas
canvas.addEventListener("mousedown", engage);
canvas.addEventListener("mousemove", putPoint);
canvas.addEventListener("mouseup", disengage);

// Clear the canvas for a new drawing/painting
function clearCanvas() 
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}


