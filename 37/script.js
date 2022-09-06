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
const typeColors = {
    fire: "#FDDFDF",
    grass: "#DEFDE0",
    electric: "#FCF7DE",
    water: "#DEF3FD",
    ground: "#f4e7da",
    rock: "#d5d5d4",
    fairy: "#fceaff",
    poison: "#98d7a5",
    bug: "#f8d5a3",
    dragon: "#97b3e6",
    psychic: "#eaeda1",
    flying: "#F5F5F5",
    fighting: "#E6E0D4",
    normal: "#F5F5F5",
};
const getPokemon = (number) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield fetch(`https://pokeapi.co/api/v2/pokemon/${number}`);
    const data = yield res.json();
    return data;
});
const createPokemonCard = (pokemon) => {
    const pokemonCard = document.createElement("div");
    pokemonCard.classList.add("pokemon-card");
    const type = pokemon.types[0].type.name;
    pokemonCard.style.backgroundColor = typeColors[type];
    pokemonCard.innerHTML = `
    <div class="image-container">
      <img
      src="${pokemon.sprites.front_default}"
      alt="${pokemon.name}"
      />
    </div>
    <p class="pokemon-number">#${pokemon.id.toString().padStart(3, "0")}</p>
    <h2 class="pokemon-name">${pokemon.name}</h2>
    <p class="pokemon-type">Type: ${type}</p>
  `;
    return pokemonCard;
};
const loadPokemon = () => __awaiter(void 0, void 0, void 0, function* () {
    const container = document.querySelector(".pokemon-container");
    for (let i = 1; i <= 150; i++) {
        const pokemon = yield getPokemon(i);
        const pokemonCard = createPokemonCard(pokemon);
        container.append(pokemonCard);
    }
});
loadPokemon();
