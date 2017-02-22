
var setRadius = function(newRadius){
	if(newRadius < minRad)
			newRadius = minRad;
	else if (newRadius > maxRad)
		  newRadius = maxRad;
		radius = newRadius;
		ctx.lineWidth = radius * 2;

// radSpan.innerHtml = radius;
		
	
}

var minRad = 0.5,
   	maxRad = 100,
   	defaultRad = 10,
  	interval = 2,
  	radSpan = document.getElementById("radval"),
  	decRad = document.getElementById('decrad'),
  	incRad = document.getElementById("incrad");






decRad.addEventListener('click', function(){
	radius -= interval;
	setRadius(radius);
});

incRad.addEventListener('click', function(){
	radius += interval;
	setRadius(radius+interval);
});
setRadius(defaultRad);
