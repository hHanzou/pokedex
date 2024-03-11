import React from "react";

interface SearchFormProps {
  pokemon: { name: string; img: string; id: string; type: string[] };
  displayTypesWithColor: (type: string[]) => React.ReactNode[];
}

const Card: React.FC<SearchFormProps> = ({
  pokemon,
  displayTypesWithColor,
}) => {
  return (
    <div className="card">
      <div className="img-div">
        <img src={pokemon.img} alt={pokemon.name} />
      </div>
      <div className="info-div">
        <ul>
          <li>id: {pokemon.id}</li>
          <li>name: {pokemon.name}</li>
          <li>type: {displayTypesWithColor(pokemon.type)}</li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
