// Task 1: Change the cloud to stop the rain
// 1. Create a variable "cloud" that stores the element "cloud"
const cloud = document.getElementById('cloud');
// 2. Change the src from "rain-cloud1" to "cloud1"
// Remember that images are stored in the images folder that needs to be accessed before you can you access the actual images
cloud.src = 'images/cloud1.png';

// Task 2: Make the rainbow visible
// 1. Create a variable "rainbow" that holds the whole rainbow
const rainbow = document.getElementById('rainbow');
// 2. Change the value of display to "flex" to make the rainbow appear
rainbow.style.display = 'flex';

//Task 3: Change the color of the outer arch to red
// 1. Create a variable called "arches" that will store all the arches in a rainbow
// Use getElementsByClassName(); to make an array of all values that have the class arch
// These elements are stored in the order they are seen from top to bottom
const arches = document.getElementsByClassName('arch');
// 2. Change the color of the first arch in ""
// You can associate each letter of ROYGBIV to an index of the array
// Remember that arrays start counting at zero so R(red) is 
arches[0].style.backgroundColor = 'red'

// Task 4: Add missing violet arch
// 1. Create new arch piece
const violetArch = document.createElement('div');
// 2. Give it both classes: 'arch' for shape and 'violet' for color
violetArch.className = 'arch violet';
// 3. Add to rainbow
rainbow.appendChild(violetArch);

// Task 5: Fix color order (move green before blue)
// Use the same "arches" variable we made in 
const greenArch = arches[4];
const blueArch = arches[3];
// Move green before blue
rainbow.insertBefore(greenArch, blueArch);
