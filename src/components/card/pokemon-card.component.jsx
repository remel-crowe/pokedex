import "./pokemon-card.styles.css";

const PokeCard = (props) => {
  const { pokemon } = props;
  return (
    <div className="pokemon-card" key={pokemon.name}>
      <img
        src={`https://img.pokemondb.net/sprites/home/normal/${pokemon.name}.png`}
        alt={pokemon.name}
      />
      <h2>{pokemon.name}</h2>
      <p>Height: {pokemon.details.height}</p>
      <p>Weight: {pokemon.details.weight}</p>
    </div>
  );
};

export default PokeCard;
