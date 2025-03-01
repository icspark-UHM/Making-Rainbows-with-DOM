# Making-Rainbows-with-DOM

## Write some DOM code in JavaScript to make/fix the rainbow

## Table of Contents

- [Introduction](#introduction)
- [Program Stucture](#program-structure)
- [Step-by-Step Guide](#step-by-step-guide)
  - [1. Changing the Cloud Image](#1-changing-the-cloud-image)
  - [2. Making the Rainbow Appear](#2-making-the-rainbow-appear)
  - [3. Fixing the Rainbow's Colors](#3-fixing-the-rainbow's-colors)
  - [4. Adding the Missing Violet Arch](#4-adding-the-missing-violet-arch)
  - [5. Correcting the Color Order](#5-correcting-the-color-order)
- [Things to Look Out For](#things-to-look-out-for)
- [Conclusion](#conclusion)

## Introduction

In this project, you'll learn how to manipulate the Document Object Model (DOM) using JavaScript to change images and fix a rainbow made using HTML and CSS. By the end of this tutorial, you will have a deeper understanding of how JavaScript interacts with webpage elements. 

A helpful tip might be to associate the rainbow colors with ROYGBIV (I like to think of it as first name Roy, middle initial G. and last name Biv). Try to associate the colors with numbers, Red is 1 (hint: or zero for arrays), orange is 2, and so on with violet being the 7th and last color.

## Program Structure

A project directory has already been set up for you with the following file structure:
```plaintext
rainbow-project/
├── index.html
├── style.css
├── script.js
└── images/
    ├── sun1.png
    ├── rain-cloud1.png
    └── cloud1.png
```

## Understanding the DOM

The Document Object Model (DOM) represents an HTML page as a tree of objects. JavaScript allows us to interact with this structure to modify elements, change styles, and even add new elements dynamically.

```javascript
// Selecting elements:
// Get an element by its ID
document.getElementById('elementId');
//Get an element by its Class
document.getElementsByClassName('className');

// Changing properties in html
element.src = 'newValue';
// Changing properties in css
element.style.propertyName = 'value';

// Creating elements
document.createElement('tagName');

// Modifying the DOM:
// Adding an element
parentElement.appendChild(newElement);
parentElement.insertBefore(elementToMove, referenceElement);
```
When using getElementBy... it creates an array of all elements with that specified class of ID. (Tasks 3 & 5 use this. Remember arrays start counting from index 0)

## Step-by-Step Guide

### 1. Changing the Cloud Image

The cloud currently shows rain, but we want to change it to a regular cloud. Use JavaScript to:
- Create a variable named cloud and select the image element with ID cloud
- Change its src attribute to use cloud1.png instead of rain-cloud1.png

Example:
To change an image's source dynamically, you can use:
```javascript
// Example of changing an image source
const exampleImage = document.getElementById('exampleId');
exampleImage.src = 'images/new-image.png';
```
Remember to look at the file path relative to where you are in the project folder. 
(You might be able to directly copy the relative file path from the script.js file, but don't quote me on that).

### 2. Making the Rainbow Appear

The rainbow is currently hidden with CSS display: none. We need to:
- Select the rainbow container using its ID 'rainbow'
- Change its display property from 'none' to 'flex' to make it visible
To change the display style of an element we need to access its css properties using .style and then target the specific css property which in our case is display.
Try something that looks like this:
```js
const exampleElement = document.getElementById('exampleId');
element.style.cssAttribute = 'change-this';
```
Important: the rainbow ID holds all the arches inside and is the equivalent of the 'parent' in the future example code. Parent(rainbow) encases all the children(arch). You can see in the html code.

### 3. Fixing the Rainbow's Colors
The outermost arch of the rainbow is incorrectly colored green instead of red. To fix this:
- Select all elements with the class arch
- Change the first element's background color to red

### 4. Adding the Missing Violet Arch

Our rainbow is missing the "V" from ROYGBIV (Red, Orange, Yellow, Green, Blue, Indigo, Violet).
Task:
- Create a new div element
- Add the necessary classes for styling
- Append it to the rainbow container

Example:
```javascript
// Creating and appending an element
const newElement = document.createElement('div');
newElement.className = 'class1 class2';
parent.appendChild(newElement);
```
### 5. Correcting the Color Order

The green and blue arches are in the wrong order.
You can reuse the same array of class 'arches
Task:
- Create two variables 'greenArch' and 'blueArch'
- Move the green arch before the blue arch using insertBefore()

Example:
```javascript
// Changing element order
const elementToMove = document.getElementById('moveMe');
const referenceElement = document.getElementById('putBefore');
parent.insertBefore(elementToMove, referenceElement);
```

## Things to Look Out For

- Selecting Elements: Double-check your element IDs and class names
- DOM Collections: Remember that getElementsByClassName() returns a "live" collection that updates automatically
- CSS Properties in JavaScript: Use camelCase instead of kebab-case (e.g., backgroundColor not background-color)
- String Values: Always use quotes when setting string values
- Element Order: When working with the arches, remember their order in the HTML structure

## Conclusion

Congratulations! You've learned how to:
- Select and manipulate DOM elements
- Change element attributes and styles
- Create and add new elements
- Rearrange elements in the DOM
  
These skills form the foundation of dynamic web development. Continue experimenting with the DOM to build more interactive web pages!
Feel free to reach out if you have any questions or feedback. Happy coding!
