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
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
searchForm.addEventListener("submit", (e) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    e.preventDefault();
    const query = searchInput.value;
    searchInput.value = "";
    hideError();
    try {
        const user = yield fetchUser(query);
        const repos = yield fetchRepos(user.repos_url);
        displayUser({
            avatar_url: user.avatar_url,
            name: (_a = user.name) !== null && _a !== void 0 ? _a : "null",
            bio: (_b = user.bio) !== null && _b !== void 0 ? _b : "null",
            followers: user.followers,
            following: user.following,
            public_repos: user.public_repos,
            repos: repos
                .map((repo) => ({ name: repo.name, url: repo.url }))
                .slice(0, 5),
        });
    }
    catch (error) {
        showError("No profile with this username");
    }
}));
const fetchUser = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield fetch(`https://api.github.com/users/${query}`);
    const data = yield res.json();
    return data;
});
const fetchRepos = (url) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield fetch(url + "?sort=created");
    const data = yield res.json();
    return data;
});
const displayUser = (user) => {
    const { avatar_url, name, bio, followers, following, public_repos, repos } = user;
    const userContainer = document.getElementById("user-container");
    userContainer.classList.remove("hide");
    const avatar = document.getElementById("avatar");
    avatar.src = avatar_url;
    const userName = document.getElementById("user-name");
    userName.textContent = name;
    const userBio = document.getElementById("user-bio");
    userBio.textContent = bio;
    const userFollowers = document.getElementById("user-followers");
    userFollowers.textContent = followers.toString();
    const userFollowing = document.getElementById("user-following");
    userFollowing.textContent = following.toString();
    const userRepos = document.getElementById("user-repos");
    userRepos.textContent = public_repos.toString();
    const reposContainer = document.getElementById("repos-container");
    reposContainer.replaceChildren();
    repos.forEach((repo) => {
        const repoElement = document.createElement("a");
        repoElement.textContent = repo.name;
        repoElement.href = repo.url;
        reposContainer.append(repoElement);
    });
};
const hideError = () => {
    const errorContainer = document.getElementById("error-container");
    errorContainer.classList.add("hide");
};
const showError = (error) => {
    const userContainer = document.getElementById("user-container");
    userContainer.classList.add("hide");
    const errorContainer = document.getElementById("error-container");
    errorContainer.classList.remove("hide");
    errorContainer.textContent = error;
};
