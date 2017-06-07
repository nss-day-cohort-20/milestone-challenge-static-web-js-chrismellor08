
function makePyramid(){
	var symbol = document.getElementById("whichChar").value;
	var rows = document.getElementById("numOfRows").value;
	document.write("<center>");
	for(i=0; i<=rows; i++) {
		for(var x=0; x<=i; x=x + .5) {
			document.write(symbol);
		}
		document.write("<br>");
	}
}



