//i just copy and pasted this from my website lol -Starpelly

//when the page fully loads, call the choosePic function. you probably known that lol
window.onload = choosePic;

//number of pictures available the script will choose from, you can add more obviously. just add a ',"path.path"'
var myPix = new Array("test.jpg","laugh.jpg");

//the function that chooses the picture, its pretty self-explanatory
function choosePic() {
	randomNum = Math.floor((Math.random() * myPix.length)); //the images are essentially numbers and the script randomly chooses one. for example test.jpg =  0, and laugh.jpg = 1
	document.getElementById("myPicture").src = myPix[randomNum]; //gives the html the image the script chose
}
