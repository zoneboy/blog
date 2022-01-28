
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
function outsideClick(e) {
  if (!e.target.matches('.dropbtn')) {
  	var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}

window.addEventListener("click", outsideClick);

//New 
function dropDown() {
  document.getElementById("mySecondDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
function closeDropdown(e) {
  if (!e.target.matches('.secondDropbtn')) {
  var mySecondDropdown = document.getElementById("mySecondDropdown");
    if (mySecondDropdown.classList.contains('show')) {
      mySecondDropdown.classList.remove('show');
    }
  }
}

window.addEventListener("click", closeDropdown);

var texts = ["red", "green", "yellow", "brown"];
var edited = document.getElementById('testing');


	
// // //A more simplified code to change background volour
// // var numbers = ["red", "green", "blue", "pink"];
// // 	var p = 0;
// // function myTest(){
// // 	console.log(numbers[p]);
// // 	edited.style.backgroundColor = numbers[p];
// // 	p = ++p;
// // 	if(p > numbers.length-1){
// // 		p = 0;
// // 	}
// // } 
// // setInterval(myTest, 1000)

// // var bnu = "Ade-shayo-gbadegeshin";
// // var h = bnu.split("a -");
// // console.log(h);
// function changeColour(){
// // 	//This converts the random number to hex value.
// // 	// var bh = 16777215	.toString(16);
// // // 	console.log(bh); This will give ffffff the hex value
// 	var randomColour = Math.floor(Math.random() * 16777215)	.toString(16);
// 	edited.style.color = "#" + randomColour;
// 	// console.log("#" + randomColour);		
// }
// setInterval(changeColour, 1000);

// // This uses a logic. The colours are set in an array. var i is set to 0. The backgroundcolor is set to colours[i]
// // which is also colours[0]. which will bring up the first array value "red". We then say i should be
// // (i+1) % colours.length which is 4. Note that the setInterval runs the function every specified second which is 1000
// // Now i = (0+1)% 4 = 1 This will turn the background colour to colours[1] from colours[i]
// // i = (1+1)% 4 = 2 This will turn the background colour to colours[2] from colours[i]
// // i = (2+1)% 4 = 3 This will turn the background colour to colours[3] from colours[i]
// // i = (3+1)% 4 = 0 This will turn the background colour to colours[0] from colours[i]
// // i = (4+1)% 4 = 1 This will turn the background colour to colours[1] from colours[i]
// // i = (1+1)% 4 = 2 This will turn the background colour to colours[2] from colours[i]
// var i = 0;
// function myHex(){
// 	var myRandomColour = Math.floor(Math.random() * 16777215)	.toString(16);
// 	var myColour = "#" + myRandomColour;
// 	// console.log(myColour)
// 	return myColour;
// }
// setInterval(myHex, 1000);
// function change(){
// 	//This myHex display random colours.
// 	// var colours = ["green", "red", "black"]; This allows colour change within a particular limit
// 	var colours = [myHex()];
// 	var edited = document.getElementById('testing');
// 	edited.style.backgroundColor = colours[i];
// 	i = (i + 1) % colours.length;
// }
// 	setInterval(change, 1000);



// var _ = require('lodash');
// import { without } from './lodash';
// console.log(without)
// var array = [1, 2, 3];
 
// _.fill(array, 'a');
// console.log(array);
// console.log(_);


