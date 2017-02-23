 function erasePart(e){
 	ctx.lineTo(e.clientX, e.clientY);
 	ctx.lineWidth = newRadius *2;
	ctx.beginPath();
	ctx.strokeStyle = 'white';
	ctx.stroke();
	ctx.arc(e.clientX, e.clientY, radius*5,0, Math.PI *2, false);
	ctx.globalCompositeOperation = "destination-out";
	ctx.fillStyle = 'white';
	ctx.fill();
	
};	
