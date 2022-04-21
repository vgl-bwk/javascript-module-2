/*
================
EXERCISE 1

Task 1
Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds). Hint: try searching for setTimeout. (https://www.w3schools.com/jsref/met_win_settimeout.asp)*/

let newColor = "#f5f5f5"
const bgCol = document.querySelector("body")
const colorTimeout = setTimeout(changeBg, 5000);

function changeBg() {
    bgCol.style.backgroundColor = newColor
}

/*Task 2
Update your code to make the colour change every 5 seconds to something different. Hint: try searching for setInterval. (https://www.w3schools.com/jsref/met_win_setinterval.asp)
================
*/

const palette = ["#4b0082", "#909087", "#89CFF0", "#4f6571", "#f5f5f5"];

let colorIndex = 0;

setInterval(function iterateBg() {
    newColor = palette[colorIndex];
    colorIndex = (colorIndex + 1) % palette.length;
    bgCol.style.backgroundColor = newColor
}, 5000);