# Making-Rainbows-with-DOM

## Write some DOM code in JavaScript to make/fix the rainbow

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
    ├── sun.png
    ├── rain-cloud.png
    └── cloud.png
```

## Understanding the DOM

The Document Object Model (DOM) represents an HTML page as a tree of objects. JavaScript allows us to interact with this structure to modify elements, change styles, and even add new elements dynamically.

```javascript
// Selecting elements:
// Get an element by its ID
let element = document.getElementById('elementId');
//Get an array of elements by Class
let elements = document.getElementsByClassName('className');

// Changing properties in html
element.src = 'newValue';
// Changing properties in css
element.style.propertyName = 'value';

// Creating elements
document.createElement('tagName');

// Modifying the DOM:
// Adding an element
parentElement.appendChild(newElement);
```
When using getElementByClass, it creates an array of all elements with that specified class. (Tasks 3 & 5 use this. Remember arrays start counting from index 0)

## Step-by-Step Guide

### *\**FOR THIS PROJECT, YOU MAY ONLY EDIT THE JAVASCRIPT*\**

### 1. Changing the Cloud Image

The cloud currently shows rain, but we want to change it to a regular cloud. Use JavaScript to:
- ✅ Create a variable named cloud and select the image element with ID cloud
- ✅ Change its src attribute to use images/cloud.png instead of images/rain-cloud.png

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
- ✅ Select the rainbow container using its ID 'rainbow'
- ✅ Change its display property from 'none' to 'flex' to make it visible
To change the display style of an element we need to access its css properties using .style and then target the specific css property which in our case is display.
Try something that looks like this:
```js
const exampleElement = document.getElementById('exampleId');
element.style.cssAttribute = 'change-this';
```
❗ _**Important:**_ the rainbow ID holds all the arches inside and is the equivalent of the 'parent' in the future example code. Parent(rainbow) encases all the children(arch). You can see in the html code.

### 3. Fixing the Rainbow's Colors
The outermost arch of the rainbow is incorrectly colored green instead of red. To fix this:
- ✅ Using `document.getElementsByClassName("class")`, select all elements with the `arch` class.
  - This will give you an array of objects. You want to change the background color of the first object in this array.
- ✅ Change the first element's background color to red
  - ❗ Note: Normally in css, you would change the `background-color` property, but JavaScript doesn't like dashes `-` as property names, so it uses camelCase instead (`backgroundColor`).



### 4. Adding the Missing Violet Arch

Our rainbow is missing the "V" from ROYGBIV (Red, Orange, Yellow, Green, Blue, Indigo, Violet).
Task:
- ✅ Create a new div element using `document.createElement("div")` and set it to a variable named violet.
- ✅ Add two classes to this new element: `arch` and `violet`
  - ❗Elements can have multiple classes, which are seperated by spaces. If an element has class equal to "title text", it has two classes, title and text.
- ✅ Use `parentName.appendChild("childName")` to add this new violet element to the rainbow div from earlier.

Example:
```javascript
// Creating and appending an element
const newElement = document.createElement('div');
newElement.className = 'class1 class2';
parent.appendChild(newElement);
```

## Conclusion

Congratulations! You've learned how to:
- Select and manipulate DOM elements
- Change element attributes and styles
- Create and add new elements
  
These skills form the foundation of dynamic web development. Continue experimenting with the DOM to build more interactive web pages!
Feel free to reach out if you have any questions or feedback. Happy coding!