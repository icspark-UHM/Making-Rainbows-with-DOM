// Task 1: Change the cloud to stop the rain
// 1. Create a variable "cloud" that stores the element "cloud"

let cloud = document.getElementById("cloud");

// 2. Change the src from "images/rain-cloud.png" to "images/cloud.png"
// Remember that images are stored in the images folder that needs to be accessed before you can you access the actual images
cloud.src = "images/cloud.png";

// Task 2: Make the rainbow visible
// 1. Create a variable "rainbow" that holds the whole rainbow
let rainbow = document.getElementById("rainbow");


// 2. Change the css value of display to "flex" to make the rainbow appear
rainbow.style.display = "flex";

//Task 3: Change the color of the outer arch to red
// 1. Create a variable called "arches" that will store all the arches in a rainbow
// Use document.getElementsByClassName(); to make an array of all values that have the class arch
// These elements are stored in the order they are seen from top to bottom
let arches = document.getElementsByClassName("arch");

// 2. The first arch in the rainbow is green! Change it to red!
// Do this by changing the backgroundColor property of the first arch to "red"!
// Remember that arrays start counting at zero so the first one is at index 0 
arches[0].style.backgroundColor = "red";


// Task 4: Add missing violet arch
// 1. Create new arch piece
let violet = document.createElement('div');

// 2. Give it both classes: 'arch' for shape and 'violet' for color
violet.className = "arch violet";

// 3. Add to rainbow
rainbow.appendChild(violet);



