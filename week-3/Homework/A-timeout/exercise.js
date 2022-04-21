/*
================
EXERCISE 1

Task 1
Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds). Hint: try searching for setTimeout. (https://www.w3schools.com/jsref/met_win_settimeout.asp)*/

const colorTimeout = setTimeout(changeBg, 5000);

function changeBg() {
    const bgCol = document.querySelector("body")
    bgCol.style.backgroundColor = "#c4c8c5"
}

/*Task 2
Update your code to make the colour change every 5 seconds to something different. Hint: try searching for setInterval. (https://www.w3schools.com/jsref/met_win_setinterval.asp)
================
*/