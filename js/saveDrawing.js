var save_btn = document.getElementById('save');
save_btn.addEventListener('click', function(e){
	var dataURL = canvas.toDataURL('image/png');
	save_btn.href = dataURL;
});

