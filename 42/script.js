"use strict";
let users = [];
const fetchUsers = async () => {
    const res = await fetch("https://randomuser.me/api?results=50");
    const data = await res.json();
    users = data.results.map((user) => {
        return {
            name: user.name.first + " " + user.name.last,
            location: user.location.city + ", " + user.location.country,
            image: user.picture.thumbnail,
        };
    });
    renderUsers(users);
};
fetchUsers();
const renderUsers = (users) => {
    const userList = document.getElementById("user-list");
    userList.replaceChildren();
    users.forEach((user) => {
        const li = document.createElement("li");
        li.innerHTML = `
      <img src="${user.image}" alt="user image"/>
      <div>
        <h2>${user.name}</h2>
        <p>${user.location}</p>
      </div>
    `;
        userList.append(li);
    });
};
const search = document.getElementById("search");
search.addEventListener("input", () => {
    const filteredUsers = users.filter((user) => user.name.toLowerCase().includes(search.value.toLowerCase()) ||
        user.location.toLowerCase().includes(search.value.toLowerCase()));
    renderUsers(filteredUsers);
});
