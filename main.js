const APIURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=74a4e95735194bf1f37fbc264a74797b";
const IMGPATH = "https://image.tmdb.org/t/p/w500";
const searchURL = "https://api.themoviedb.org/3/search/movie?api_key=74a4e95735194bf1f37fbc264a74797b";



const main = document.getElementById("content");
const form = document.getElementById("form");
const search = document.getElementById("search");

getMovies(APIURL);

 async function getMovies(url) {
  const response = await fetch(url)
  try{
    const data = await response.json();
    showMovies(data.results);
    console.log(data.results);
  }catch(error){
    console.log("error", error);
    }
};

function showMovies(data) {
    main.innerHTML = "";
    data.forEach(movie => {
        const { poster_path, title, overview, vote_average } = movie;
        const movieE1 = document.createElement("div");
        movieE1.classList.add("movie");
        movieE1.innerHTML = `
        <img src="${IMGPATH + poster_path}" alt="${title}">

        <div class = "movie-info">
        <h3>${title}</h3>
        <span class = "${getColor(vote_average)}">${vote_average}</span>
        </div>

        <div class = "overview">
        <h3>Overview</h3>
        ${overview}

        `
        main.appendChild(movieE1);
    });

};

function getColor(vote) {
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
        
        if(search){
            getMovies(searchTerm+ '&query' +searchURL);
        }else{
            getMovies(APIURL);
        }
    });