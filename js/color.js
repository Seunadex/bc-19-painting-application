const getNewColor = function newColor() {
  elColor = document.getElementById('color');
  cv = document.getElementById('colorValue');
  cv.innerHTML = "Color: " + elColor.value;
  color = elColor.value;
}


const changeCol = function changeColor(new_color) {
  color = new_color;
}

const setNewColor = function setColor(color) {
	ctx.fillStyle = color;
	ctx.strokeStyle = color;
}