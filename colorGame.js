var colors = [];
var num=6;
var level = document.querySelectorAll("#gameLevel button");

colors = generateRandomArr(num);

var h1 = document.querySelector("h1");
var it = document.querySelectorAll(".square");
var pickedColor = pickCol();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");

colorDisplay.textContent = pickedColor;

function pickCol(){
	return colors[Math.floor(Math.random()*colors.length)];
}

function allSame(color){
	for(var i=0 ; i<it.length ; i++){
		it[i].style.background = color;
	}
}

for(var i = 0 ; i<it.length ; i++){
	it[i].style.background = colors[i];

	it[i].addEventListener("click",function(){

		var clickedColor = this.style.background;
		if(clickedColor === pickedColor){
			allSame(clickedColor);
			h1.style.background = clickedColor;
			messageDisplay.textContent = "Correct!!!";
			level[0].textContent = "Play Again?";
		}else{
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again!!!";
		}
	});
}

function generateRandomArr(num){
	var arr=[];
	for(var i=0 ; i<num ; i++){
		var n1,n2,n3;
		n1 = Math.floor(Math.random()*256);
		n2 = Math.floor(Math.random()*256);
		n3 = Math.floor(Math.random()*256);
		var col = "rgb("+n1+", "+n2+", "+n3+")";
		arr.push(col);
	}
	return arr;
}

level[0].addEventListener("click",function(){
	this.textContent = "New Colours";
	num = 6;
	colors = generateRandomArr(num);
	pickedColor = pickCol();
	colorDisplay.textContent = pickedColor;
	for(var i=0 ; i<it.length ; i++){
		it[i].style.background = colors[i];
		it[i].style.display = "block";
	}
	h1.style.background = "steelblue";
	messageDisplay.textContent = "";
	level[1].classList.remove("selected");
	level[2].classList.add("selected"); 
});

level[1].addEventListener("click",function(){
	this.classList.add("selected");
	level[2].classList.remove("selected");
	num = 3;
	colors = generateRandomArr(num);
	pickedColor = pickCol();
	colorDisplay.textContent = pickedColor;
	for(var i=0 ; i<it.length ; i++){
		if(colors[i]){
			it[i].style.background = colors[i];
		}
		else{
			it[i].style.display = "none";
		}
	}
	h1.style.background = "steelblue";
});

level[2].addEventListener("click",function(){
	this.classList.add("selected");
	level[1].classList.remove("selected");
	num = 6;
	colors = generateRandomArr(num);
	pickedColor = pickCol();
	colorDisplay.textContent = pickedColor;
	for(var i=0 ; i<it.length ; i++){
		it[i].style.background = colors[i];
		it[i].style.display = "block";
	}
	h1.style.background = "steelblue";
})

