const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let radius = 10;
let dragging = false;

ctx.lineWidth = radius * 2;


const putPoint = function(e){
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

const engage = function(e){
	dragging = true;
	putPoint(e);
};

const disengage = function(){
	dragging = false;
	ctx.beginPath();
};

canvas.addEventListener("mousedown", engage);
canvas.addEventListener("mousemove", putPoint);
canvas.addEventListener("mouseup", disengage);


function clearCanvas() 
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}