/*
================
You are given the following list of movies

Task 1
Create a function called "showMovies" that
- iterates through the "movies" array and
- for each movie, it creates a <p> element with the movie title and director and append it to the #all-movies div.
- it sets the innerText of the #movies-number element to the total number of the movies in the array "movies"

Task 2
Amend your function above to only show movies after 1 second. Remember to use setTimeout to achieve that
Create a new function called "addMovie"
- it receives a movie object as an argument - your can create a new object for your favorite movie following using the "myMovies" objects as a guide 
- it adds the new movie to the list of movies after 2 seconds. Remember to setTimeout to achieve that
Call addMovies to add the new movie to the list and then showMovies to see the movies added on the screen.
How many movies can you see on your page? 4

Task 3
Can you make sure the new movie you just added is showing on the screen? 
TIP: use callbacks

Task 4
Create a form anywhere on your page. The form should have
- 4 input text fields, one for each property of your movie object
- a "save" button.
When the button is clicked
- The field values should be used to create a new movie object literal
- The new movie is then added to the list of movies and gets displayed on your page
TIP: Use the functions you created on tasks 1-3

================
*/
var movies = [
  {
    title: "Color Out of Space",
    director: "Richard Stanley",
    type: "sci-fi",
    haveWatched: true,
  },
  {
    title: "A Twelve-Year Night",
    director: "Álvaro Brechner",
    type: "horror",
    haveWatched: false,
  },
  {
    title: "The Whistlers",
    director: "Corneliu Porumboiu",
    type: "comedy",
    haveWatched: true,
  },
  {
    title: "The Invisible Man",
    director: "Leigh Whannell",
    type: "horror",
    haveWatched: false,
  },
];

const movie1 = {
  title: "Her",
  director: "Spike Jonze",
  type: "drama",
  haveWatched: true
}

// create showMovies function

function showMovie (film) {
  const allMovies = document.getElementById("all-movies");
  const titleAndDirector = document.createElement("p")
  titleAndDirector.innerText = `${film.title} - ${film.director}`
  allMovies.appendChild(titleAndDirector)
}

function showMovies (list) {
  setTimeout(function (){
  const moviesNumber = document.getElementById("movies-number")
  moviesNumber.innerHTML = `${list.length}`;
  list.forEach( film => showMovie(film)); 
},1000);
}


// create a new movie object for your favorite movie

function addMovie (film) {
  setTimeout(function(){movies.push(film)
  showMovie(film)}, 2000)
}

addMovie(movie1);
showMovies(movies);

// create addMovies function

const movieForm = document.createElement('div')
movieForm.innerHTML = '<h2>Enter your favourite movies!</h2><form><label>Name of the film: </label><input type="text" id="fname"></input><br><label>Director: </label><input type="text" id="fdir"></input><br><label>Genre: </label><input type="text" id="fgen"></input><br><label>Have you seen it? </label><input type="checkbox" id="fseen"></input><br><input type="Button" id="movie-submit" value="Submit"></form>'
main.appendChild(movieForm);

document.querySelector('#movie-submit').addEventListener('click', (e) => {
  e.preventDefault();
  const filmName = document.querySelector('#fname').value;
  const filmDirector = document.querySelector('#fdir').value;
  const filmGenre = document.querySelector('#fgen').value;
  const filmSeen = document.querySelector('#fseen').checked;

const newMovie = {
  title: filmName,
  director: filmDirector,
  type: filmGenre,
  haveWatched: filmSeen
};

addMovie(newMovie);
})