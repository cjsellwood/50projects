"use strict";
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
searchForm.addEventListener("submit", async (e) => {
    var _a, _b;
    e.preventDefault();
    const query = searchInput.value;
    searchInput.value = "";
    hideError();
    try {
        const user = await fetchUser(query);
        const repos = await fetchRepos(user.repos_url);
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
});
const fetchUser = async (query) => {
    const res = await fetch(`https://api.github.com/users/${query}`);
    const data = await res.json();
    return data;
};
const fetchRepos = async (url) => {
    const res = await fetch(url + "?sort=created");
    const data = await res.json();
    return data;
};
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
