"use strict";
const movieContainer = document.getElementById("movie-container");
const addPopularMovies = async () => {
    const movieResponse = await fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1");
    const movieData = await movieResponse.json();
    const fetchedMovies = movieData.results;
    fetchedMovies.forEach((movie) => {
        const movieItem = createMovieItem(movie);
        movieContainer.append(movieItem);
    });
};
window.addEventListener("load", addPopularMovies);
const createMovieItem = (movie) => {
    const movieItem = document.createElement("div");
    movieItem.classList.add("movie-item");
    movieItem.innerHTML = `
    <img src="https://image.tmdb.org/t/p/w300/${movie.poster_path}" alt="${movie.original_title} poster"/>
    <div class="bottom-bar">
      <h1>${movie.original_title}</h1>
      <p class="${ratingClass(movie.vote_average)}">${movie.vote_average}</p>
    </div>
    <div class="overview">
      <h2>Overview</h2>
      <p>${movie.overview}
    </div>
    `;
    return movieItem;
};
const ratingClass = (rating) => {
    if (rating >= 8) {
        return "green-rating";
    }
    else if (rating >= 5) {
        return "orange-rating";
    }
    else {
        return "red-rating";
    }
};
const searchBar = document.getElementById("search-input");
const searchForm = document.getElementById("search-form");
searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (searchBar.value === "") {
        location.reload();
    }
    else {
        addSearchedMovies(searchBar.value);
        searchBar.value = "";
    }
});
const addSearchedMovies = async (query) => {
    const movieResponse = await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1&language=en-US`);
    const movieData = await movieResponse.json();
    const fetchedMovies = movieData.results;
    movieContainer.replaceChildren();
    fetchedMovies.forEach((movie) => {
        const movieItem = createMovieItem(movie);
        movieContainer.append(movieItem);
    });
};
