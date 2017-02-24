
const setRadius = function(newRadius) {
	if(newRadius < minRadius)
			newRadius = minRadius;
	else if (newRadius > maxRadius)
		  newRadius = maxRadius;
		ctx.lineWidth = newRadius *2;
	document.getElementById("radvalue").innerHTML = newRadius;
		
	
}

let minRadius = 1,
   	maxRadius = 100,
   	defaultRadius = 10,
  	interval = 2,
  	decRadius = document.getElementById('decradius'),
  	incRadius = document.getElementById("incradius");


decRadius.addEventListener('click', function() {
	radius -= interval;
	setRadius(radius);
});

incRadius.addEventListener('click', function() {
	radius += interval;
	setRadius(radius);
});

setRadius(defaultRadius);
