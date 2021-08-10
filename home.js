
function f1() {
	//function to make the text italic using DOM method
	//document.getElementById("textarea1").style.fontStyle = "bold";
document.getElementById("content").innerHTML = text;
}

function f2() {
	//function to make the text italic using DOM method
	document.getElementById("textarea1").style.fontStyle = "italic";
}

function f3() {
	//function to make the text alignment left using DOM method
	document.getElementById("textarea1").style.textAlign = "left";
}

function f4() {
	//function to make the text alignment center using DOM method
	document.getElementById("textarea1").style.textAlign = "center";
}

function f5() {
	//function to make the text alignment right using DOM method
	document.getElementById("textarea1").style.textAlign = "right";
}

function f6() {
	//function to make the text in Uppercase using DOM method
	document.getElementById("textarea1").style.textTransform = "uppercase";
}


function f7() {
	//function to make the text in Lowercase using DOM method
	document.getElementById("textarea1").style.textTransform = "lowercase";
}

function f8() {
	//function to make the text capitalize using DOM method
	document.getElementById("textarea1").style.textTransform = "capitalize";
}

function f9() {
	//function to make the text back to normal by removing all the methods applied
	//using DOM method
	document.getElementById("textarea1").style.fontWeight = "normal";
	document.getElementById("textarea1").style.textAlign = "left";
	document.getElementById("textarea1").style.fontStyle = "normal";
	document.getElementById("textarea1").style.textTransform = "capitalize";
	document.getElementById("textarea1").value = " ";
}


text = "This is the text to check";
//currentPosition= 0;
var inputBox = document.getElementById('textarea1');

inputBox.onkeyup = function(){
   let lastChar = inputBox.value;
   let numberofCharactersWrittenSoFar = lastChar.length;
console.log("lastChar is "  + lastChar.slice(-1));
console.log(text[numberofCharactersWrittenSoFar -1]);
   if (lastChar.slice(-1) === text[numberofCharactersWrittenSoFar -1]) {console.log(lastChar.slice(-1));}
   else {console.log("not the same");}
   //currentPosition++;
}