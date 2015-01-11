var visible = 1; var hidden = 2;
function changeNumber(number) {if (number === 1) {return (2);} else {return (1);}}
var currentimage = 2;
function loadImage(){
	document.getElementById("image" + hidden).src = directory + currentimage + ".jpg";
	currentimage++; if (currentimage > numberofpictures) {currentimage = 1;};
}
function fadeImage(){
	document.getElementById("image" + visible).style.opacity = "0";
	document.getElementById("image" + hidden).style.opacity = "1";
	visible = changeNumber(visible); hidden = changeNumber(hidden);
}
var loadID; setTimeout(function(){loadID = setInterval(loadImage, 3500); loadImage();}, 1500);
var fadeID = setInterval(fadeImage, 3500);