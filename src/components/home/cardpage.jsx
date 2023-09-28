import React, { useState, useEffect } from "react";
import PokeList from "../card-container/pokemon-card-list.component";
import SearchBar from "../search-bar/search-bar.component";

function Cards() {
  const [pokemons, setPokemons] = useState([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=150")
      .then((response) => response.json())
      .then((allpokemon) => {
        const pokemonData = allpokemon.results.map((pokemon) =>
          fetch(pokemon.url).then((response) => response.json())
        );

        Promise.all(pokemonData).then((pokedata) => {
          const updatedPokemons = allpokemon.results.map((pokemon, index) => ({
            ...pokemon,
            details: pokedata[index],
          }));

          setPokemons(updatedPokemons);
        });
      });
  }, []);

  const onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();
    setSearchField(searchField);
  };

  const filteredPoke = pokemons.filter((pokemon) => {
    return pokemon.name.toLowerCase().includes(searchField);
  });

  return (
    <div className="App">
      <SearchBar
        className="search-bar"
        placeholder="Search For Pokemon"
        onChangeHandler={onSearchChange}
      />
      <PokeList pokemons={filteredPoke} />
    </div>
  );
}

export default Cards;
