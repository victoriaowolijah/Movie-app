// const movieUrl = (API) =>   `https://api.themoviedb.org/3/movie/550?api_key=${API}`;
// const searchMovie = (API, Keyword) =>   `https://api.themoviedb.org/3/movie/550?api_key=${API}&query=${Keyword}`;
//const IMGPATH = "https://www.themoviedb.org/movie/";

const key ="74a4e95735194bf1f37fbc264a74797b";
const APIURL =
  "https://api.themoviedb.org/3/movie/550?api_key=74a4e95735194bf1f37fbc264a74797b";

const IMGPATH = "https://image.tmdb.org/t/p/w220_and_h330_face";
const SEARCHAPI =
  "https://api.themoviedb.org/3/movie/550?api_key=74a4e95735194bf1f37fbc264a74797b&query=";

const main = document.getElementById("content");
const form = document.getElementById("form");
const search = document.getElementById("search");

getMovies(APIURL);

async function getMovies(url) {
  const response = await fetch(url);
  const data = await response.json();
  // console.log(data);
  showMovies(data);
}

function showMovies(movies) {
  main.innerHTML = "";
  /*
  const movieE1 = document.createElement("div");
    console.log(movieE1);
    movieE1.classList.add("movie");
  const results = Object.keys(movies);
  console.log(results);
  results.map((movie) => {
    return movie.innerHTML = `
    <img src="${IMGPATH}${movie.poster_path}" alt="${movie.title}">
    <div class="movie-info">
      <h3>${movie.title}</h3>
      <span class="${getClassByRate(movie.vote_average)}">${movie.vote_average}</span>
    <div>
    <div class="overview"
      <h3>Overview:</h3>
       ${movie.overview}
    <div>
  `;
  });
  main.appendChild(movieE1);
  console.log(main);
}
 */ 
const results = Object.keys(movies);
  results.forEach((movie, index) => {
    console.log(movie, movies[movie]);
    const { poster_path, title, overview, vote_average } = movies;
    const movieE1 = document.createElement("div");
    //console.log(movieE1);
    movieE1.classList.add("movie");
   // console.log(movie, poster_path, movies[poster_path]);
    movieE1.innerHTML = `
          <img src="${IMGPATH}${poster_path}" alt="${title}">
          <div class="movie-info">
            <h3>${title}</h3>
            <span class="${getClassByRate(vote_average)}">${vote_average}</span>
          <div>
          <div class="overview"
            <h3>Overview:</h3>
             ${overview}
          <div>
        `;
    main.appendChild(movieE1);
  });
}

function getClassByRate(vote) {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 5) {
    return "orange";
  } else {
    return "red";
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchTerm = search.value;
  if (searchTerm) {
    getMovies(SEARCHAPI + searchTerm);
    search.value = "";
  }
});
