"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const movieContainer = document.getElementById("movie-container");
const addPopularMovies = () => __awaiter(void 0, void 0, void 0, function* () {
    const movieResponse = yield fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1");
    const movieData = yield movieResponse.json();
    const fetchedMovies = movieData.results;
    fetchedMovies.forEach((movie) => {
        const movieItem = createMovieItem(movie);
        movieContainer.append(movieItem);
    });
});
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
const addSearchedMovies = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const movieResponse = yield fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1&language=en-US`);
    const movieData = yield movieResponse.json();
    const fetchedMovies = movieData.results;
    movieContainer.replaceChildren();
    fetchedMovies.forEach((movie) => {
        const movieItem = createMovieItem(movie);
        movieContainer.append(movieItem);
    });
});
