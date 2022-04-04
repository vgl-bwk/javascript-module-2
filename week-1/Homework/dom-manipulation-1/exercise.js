/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6
    */
let allParagraphs = document.querySelectorAll('p');

    /*2. the first div element node
    --> should log the ".site-header" node */

let firstDiv = document.querySelector('div')

   /* 3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node*/

let jumboText = document.querySelector('#jumbotron-text')

   /* 4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3 */
let primaryParagraph = document.querySelectorAll ('.primary-content, p')


/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
document.querySelector('#alertBtn').addEventListener('click', alertThank)

function alertThank(){
alert("Thanks for visiting Bikes for Refugees!");
}

/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
document.querySelector('#bgrChangeBtn').addEventListener('click', function onClick (event) {document.body.style.backgroundColor ="#89CFF0"});

/*
Task 4
======

When a user clicks the ‘Add some text’ button, a new paragraph should be added inside the section that says “LEARN MORE”
*/


document.querySelector('#addTextBtn').addEventListener('click', () => {
    const jumbotron = document.querySelector('#jumbotron')
    const newParagraph = document.createElement("p")
    newParagraph.innerText="LEARN MORE!"
    return jumbotron.appendChild(newParagraph)
})

/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/


/*
Task 6
======

Using the same function in Task 4,
When the 'Add' button is clicked, get the text inside the input field and create a new paragraph in the "LEARN MORE" section
Also clear the text inside the input field
*/

/*
Task 7
======

Create an array of 5 different colors.
Using the same function in Task 3, every time the 'Change colour' button is clicked, the background color will be changed with the next color in the array.
The next color when you are in the last color of the array will be the first color again.
*/

