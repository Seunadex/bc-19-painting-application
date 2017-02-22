
function newColor()
{
    elColor = document.getElementById('color');
    cv = document.getElementById('colorValue');
    cv.innerHTML = "color: " + elColor.value;
    color = elColor.value;

}


function changeColor(new_color) 
{
    color = new_color;
}

function setColor(color){
	ctx.fillStyle = color;
	ctx.strokeStyle = color;
}