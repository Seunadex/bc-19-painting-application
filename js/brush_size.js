
const setRadius = function(newRadius){
	if(newRadius < minRad)
			newRadius = minRad;
	else if (newRadius > maxRad)
		  newRadius = maxRad;
		ctx.lineWidth = newRadius *2;
	document.getElementById("radvalue").innerHTML = newRadius;
		
	
}

let minRad = 1,
   	maxRad = 100,
   	defaultRad = 10,
  	interval = 2,
  	decRad = document.getElementById('decrad'),
  	incRad = document.getElementById("incrad");


decRad.addEventListener('click', function(){
	radius -= interval;
	setRadius(radius);
});

incRad.addEventListener('click', function(){
	radius += interval;
	setRadius(radius);
});
setRadius(defaultRad);