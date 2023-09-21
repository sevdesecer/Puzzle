var rows = 5;
var columns = 5;

var currTile; //curved tile
var otherTile; // other tile // we need two of them so that we can swap with two tiles.

var turns = 0;// start with zero

window.onload=function(){
    //window.onload:It is used to determine that a web page has completely loaded.
    //initialize the 5x5 board

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++){
            //img
            let tile = document.createElement("img");
            tile.src = "./images/blank.jpg";
//DRAG FUNCTIONALITY
tile.addEventListener("dragstart", dragStart); //click on image to drag
tile.addEventListener("dragover", dragOver);   //drag an image
tile.addEventListener("dragenter", dragEnter); //dragging an image into another one
tile.addEventListener("dragleave", dragLeave); //dragging an image away from another one
tile.addEventListener("drop", dragDrop);       //drop an image onto another one
tile.addEventListener("dragend", dragEnd);      //after you completed dragDrop

document.getElementById("board").append(tile);
}
}

//pieces
let pieces = [];
for (let i=1; i <= rows*columns; i++) {
pieces.push(i.toString()); //put "1" to "25" into the array (puzzle images names)
}
pieces.reverse();
for (let i =0; i < pieces.length; i++) {
let j = Math.floor(Math.random() * pieces.length);

//swap
let tmp = pieces[i];
pieces[i] = pieces[j];
pieces[j] = tmp;
}

for (let i = 0; i < pieces.length; i++) {
let tile = document.createElement("img");
tile.src = "./images/" + pieces[i] + ".jpg";

//DRAG FUNCTIONALITY
tile.addEventListener("dragstart", dragStart);
tile.addEventListener("dragover", dragOver);
tile.addEventListener("dragenter", dragEnter);
tile.addEventListener("dragleave", dragLeave);
tile.addEventListener("drop", dragDrop);
tile.addEventListener("dragend", dragEnd);

document.getElementById("pieces").append(tile);
}
}

//DRAG TILES
function dragStart() {
currTile = this; //this refers to image that was clicked on for dragging
}

function dragOver(e) {
e.preventDefault();
}

function dragEnter(e) {
e.preventDefault();
}

function dragLeave() {

}

function dragDrop() {
otherTile = this; //this refers to image that is being dropped on
}

function dragEnd() {
if (currTile.src.includes("blank")) {
return;
}
let currImg = currTile.src;
let otherImg = otherTile.src;
currTile.src = otherImg;
otherTile.src = currImg;

turns += 1;
document.getElementById("turns").innerText = turns;
}