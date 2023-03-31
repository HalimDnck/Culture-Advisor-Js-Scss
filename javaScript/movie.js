//Movie Update - every day
const date = new Date();
let day = date.getDay()-1;
console.log(day);

var movieData = fetch("../json/movies.json")
.then(response=>response.json())
.then(data=>{
   //DOM Html Elements
   const name = document.querySelector('.movie-name');
   const trailer = document.querySelector('.video-frame');
   const image = document.querySelector('.movie-img');
   const plot = document.querySelector('.movie-plot');
   const watchBtn = document.querySelector('.watch-button');
   const review1 = document.querySelector('.quote-1');
   const writer1 = document.querySelector('.writer-1');
   const review2 = document.querySelector('.quote-2');
   const writer2 = document.querySelector('.writer-2');
   const review3 = document.querySelector('.quote-3');
   const writer3 = document.querySelector('.writer-3');

   //Json Elements
   let movieName = data.movies[day].name;
   let movieTrailer = data.movies[day].trailer;
   let movieUrl = data.movies[day].url;
   let movieImage = data.movies[day].photo;
   let moviePlot = data.movies[day].text;
   let movieRev1 = data.movies[day].review1;
   let movieRev2 = data.movies[day].review2;
   let movieRev3 = data.movies[day].review3;
   let movieWrt1 = data.movies[day].writer1;
   let movieWrt2 = data.movies[day].writer2;
   let movieWrt3 = data.movies[day].writer3;

   name.innerHTML = movieName;
   trailer.src = `${movieTrailer}`;
   plot.innerHTML = moviePlot;
   watchBtn.href = `${movieUrl}`;
   image.src= `images/${movieImage}.jpg`;
   review1.innerHTML = movieRev1;
   review2.innerHTML = movieRev2;
   review3.innerHTML = movieRev3;
   writer1.innerHTML = movieWrt1;
   writer2.innerHTML = movieWrt2;
   writer3.innerHTML = movieWrt3;
}) 

//Nav page
const navBtn = document.querySelector(".nav-btn");
const navPage = document.querySelector(".mobile-nav");

navBtn.addEventListener("click", function(){
   navPage.style.width= "50%";
})