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
let users = [];
const fetchUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield fetch("https://randomuser.me/api?results=50");
    const data = yield res.json();
    users = data.results.map((user) => {
        return {
            name: user.name.first + " " + user.name.last,
            location: user.location.city + ", " + user.location.country,
            image: user.picture.thumbnail,
        };
    });
    renderUsers(users);
});
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
