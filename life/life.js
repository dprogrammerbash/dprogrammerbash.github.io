var emnt = document.getElementById("chart");
var ctx = emnt.getContext("2d");

var RADIUS = 2;
var SIZE = (RADIUS * 2)+2;
var WEEKS = 53;
var YEARS = 91;
var HEIGHT = SIZE * YEARS;
var WIDTH = SIZE * WEEKS;

emnt.height = HEIGHT;
emnt.width = WIDTH;

function main() {
	var date = document.getElementById("birthday").value;
	getWeeks(date);
}

function getWeeks(date)
{
	var initialDate = new Date(date);
	var currentDate = new Date(); 

	var weekMilliseconds = ((((1000*60)*60)*24)*7);
	var initialDateMilliseconds = initialDate.getTime();
	var currentDateMilliseconds = currentDate.getTime();
	var difference = Math.abs(initialDateMilliseconds-currentDateMilliseconds);
	var numberWeeks = Math.floor(difference/weekMilliseconds);

	createPattern(numberWeeks);
}

function createCircle(x,y,radius,color){
	ctx.beginPath();
	ctx.arc(x,y,radius,0,2*Math.PI);

	if (color) {
		ctx.fillStyle = "#87D37C";
		ctx.fill();
	}
	else {
		ctx.fillStyle = "#6C7A89";
		ctx.stroke();
	}
}

function createCircleDeath(x,y,radius){
	ctx.beginPath();
	ctx.arc(x,y,radius,0,2*Math.PI);
	ctx.fillStyle = "#C0392B";
	ctx.fill();
}

function createPattern(weeks){
	cleanCanvas(HEIGHT, WIDTH);
	var x = 0; 
	var y = 0;
	var i = 0;
	var j = 0;

	var counter = 0;
	var color = false;

	for (i=1; i<YEARS; i++){
		for(j=1; j<WEEKS; j++){
			counter++;
			x = j * SIZE;
			y = i * SIZE;

			if (counter < weeks){
					color = true;
			}
			else {
					color = false;
			}
			createCircle(x,y,RADIUS,color);	
		}
	}
}

function cleanCanvas(height, width){
	ctx.clearRect(0,0,width, height);
}