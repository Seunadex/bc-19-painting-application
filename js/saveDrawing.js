var save_btn = document.getElementById('save');
save_btn.addEventListener('click', function(e){
	var dataURL = canvas.toDataURL('image/png');
	save_btn.href = dataURL;
});


var erase-btn = document.getElementById('erase');
erase-btn.addEventListener('click', function(e){
ctx.beginPath();
ctx.globalCompositionOperation="destination-out";
ctx.arc(e.offsetX, e.offsetY, radius*5, Math.PI *2, false);
ctx.fill();

});
