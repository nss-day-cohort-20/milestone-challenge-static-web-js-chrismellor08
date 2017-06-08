function makePyramid(){
	
	var symbol = document.getElementById("whichChar").value;
	var rows = document.getElementById("numOfRows").value;
	
	for(i=0; i<rows; i++) {
		var consoleOutput = "";

		for(var x=0; x<rows-i; x++) {
			consoleOutput += " ";
		}

		for (var z= 0; z<=i; z=z+.5){
			consoleOutput += symbol;
		}
		console.log(consoleOutput);
	}
}


document.getElementById('numOfRows').addEventListener('keypress', function(event) {
        if (event.keyCode == 13) {
            makePyramid();
        }
    });

document.getElementById('whichChar').addEventListener('keypress', function(event) {
        if (event.keyCode == 13) {
            makePyramid();
        }
    });