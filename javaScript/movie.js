

const trailer = document.querySelector('.video');
const image = document.querySelector('.movie-img');
const plot = document.querySelector('.movie-plot');
const watchBtn = document.querySelector('.watch-button');
const name = document.querySelector('.movie-name');

const review1 = document.querySelector('.quote-1');
const writer1 = document.querySelector('.writer-1');
const review2 = document.querySelector('.quote-2');
const writer2 = document.querySelector('.writer-2');
const review3 = document.querySelector('.quote-3');
const writer3 = document.querySelector('.writer-3');

const date = new Date();
let day = date.getDay();
console.log(day);

var movieData = fetch("../json/movies.json")
.then(response=>response.json())
.then(data=>{
   let movieName = data.movies[day].name;
   

   console.log(data.movies[3].name)
   const name = document.querySelector('.movie-name');
   name.innerHTML = movieName;
})