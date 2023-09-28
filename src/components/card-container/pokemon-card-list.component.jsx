import PokeCard from "../card/pokemon-card.component";
import "./pokemon-card-list.styles.css";

const PokeList = (props) => {
  const { pokemons } = props;
  return (
    <div className="poke-list">
      {pokemons.map((pokemon) => {
        return <PokeCard key={pokemon.name} pokemon={pokemon} />;
      })}
    </div>
  );
};

export default PokeList;
