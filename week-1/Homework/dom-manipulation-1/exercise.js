/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6
    */
const allParagraphs = document.querySelectorAll('p');
console.log(allParagraphs);

    /*2. the first div element node
    --> should log the ".site-header" node */

const firstDiv = document.querySelector('div')
console.log(firstDiv);
   /* 3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node*/

const jumboText = document.querySelector('#jumbotron-text')
console.log(jumboText);
   /* 4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3 */
const primaryParagraph = document.querySelectorAll ('.primary-content p')
console.log(primaryParagraph);


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

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.*/

let newColor = "#89CFF0" 
const switchBgrButton = document.querySelector('#bgrChangeBtn')

switchBgrButton.addEventListener('click', function onClick (event) {document.body.style.backgroundColor = newColor});

/*
Task 4
======

When a user clicks the ‘Add some text’ button, a new paragraph should be added inside the section that says “LEARN MORE”
*/

const mainArticles = document.querySelector('#mainArticles');
const addTextBtn = document.querySelector('#addTextBtn').addEventListener('click', () => {    
    addParagraph("You say black, I say white. You say bark, I say bite: You say shark, I say hey man Jaws was never my scene and I don't like Star Wars.")
});

 function addParagraph(text) {
    const newArticle = document.createElement('article')
    newArticle.classList.add('article');
    const newParagraph = document.createElement('p');
    newParagraph.textContent = text
    mainArticles.appendChild(newParagraph);
    mainArticles.appendChild(newArticle);
 }

/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/
document.querySelector('#largerLinksBtn').addEventListener('click', function enlarge (event) {
    const allLinks = document.querySelectorAll('a')
    allLinks.forEach(link => {link.style.fontSize ='x-large'   
    });
    
    /*for (const link of allLinks) {
        link.style.fontSize = 'x-large'   
    }

    for (let e = 0; e < allLinks.length; e++){
        allLinks[e].style.fontSize = 'x-large'
   }*/
})

/*
Task 6
======

Using the same function in Task 4,
When the 'Add' button is clicked, get the text inside the input field and create a new paragraph in the "LEARN MORE" section
Also clear the text inside the input field */

const addArticleBtn = document.querySelector('#addArticleBtn');
addArticleBtn.addEventListener('click', () =>{
    const inputText = document.querySelector('.addArticle').value;
    let text = inputText.trim();
    addParagraph(text)
    document.querySelector('.addArticle').value = '';
})

/*
Task 7
======

Create an array of 5 different colors.
Using the same function in Task 3, every time the 'Change colour' button is clicked, the background color will be changed with the next color in the array.
The next color when you are in the last color of the array will be the first color again.
*/

const palette = ["#4b0082", "#909087", "#89CFF0", "#4f6571", "#f5f5f5"];

let colorIndex = 0;

switchBgrButton.addEventListener("click", () => {
    newColor = palette[colorIndex];
    colorIndex = (colorIndex + 1) % palette.length;
});





