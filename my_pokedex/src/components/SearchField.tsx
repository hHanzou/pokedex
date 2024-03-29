import React, { ChangeEvent } from "react";
import IconType from "./Icons";

interface SearchFormProps {
  activeIcons: string[];
  pokemonName: string;
  setActiveIcons: React.Dispatch<React.SetStateAction<string[]>>;
  handlePokemonName: (event: ChangeEvent<HTMLInputElement>) => void;
}

// TODO: remove buttonform style in css
// TODO: more width in text input
// TODO: create others pages

const SearchForm: React.FC<SearchFormProps> = ({
  activeIcons,
  pokemonName,
  setActiveIcons,
  handlePokemonName,
}) => {
  return (
    <form>
      <div className="types-area">
        <div>
          <input type="hidden" name="bug" id="" />
          <IconType
            type="bug"
            activeIcons={activeIcons}
            setActiveIcons={setActiveIcons}
          ></IconType>
          bug
        </div>
        <div>
          <input type="hidden" name="dragon" id="" />
          <IconType
            type="dragon"
            activeIcons={activeIcons}
            setActiveIcons={setActiveIcons}
          ></IconType>
          dragon
        </div>
        <div>
          <input type="hidden" name="thunder" id="" />
          <IconType
            type="electric"
            activeIcons={activeIcons}
            setActiveIcons={setActiveIcons}
          ></IconType>
          electric
        </div>
        <div>
          <input type="hidden" name="fighter" id="" />
          <IconType
            type="fighting"
            activeIcons={activeIcons}
            setActiveIcons={setActiveIcons}
          ></IconType>
          fighting
        </div>
        <div>
          <input type="hidden" name="fire" id="" />
          <IconType
            type="fire"
            activeIcons={activeIcons}
            setActiveIcons={setActiveIcons}
          ></IconType>
          fire
        </div>
        <div>
          <input type="hidden" name="flying" id="" />
          <IconType
            type="flying"
            activeIcons={activeIcons}
            setActiveIcons={setActiveIcons}
          ></IconType>
          flying
        </div>
        <div>
          <input type="hidden" name="ghost" id="" />
          <IconType
            type="ghost"
            activeIcons={activeIcons}
            setActiveIcons={setActiveIcons}
          ></IconType>
          ghost
        </div>
        <div>
          <input type="hidden" name="grass" id="" />
          <IconType
            type="grass"
            activeIcons={activeIcons}
            setActiveIcons={setActiveIcons}
          ></IconType>
          grass
        </div>
        <div>
          <input type="hidden" name="ground" id="" />
          <IconType
            type="ground"
            activeIcons={activeIcons}
            setActiveIcons={setActiveIcons}
          ></IconType>
          ground
        </div>
        <div>
          <input type="hidden" name="ice" id="" />
          <IconType
            type="ice"
            activeIcons={activeIcons}
            setActiveIcons={setActiveIcons}
          ></IconType>
          ice
        </div>
        <div>
          <input type="hidden" name="normal" id="" />
          <IconType
            type="normal"
            activeIcons={activeIcons}
            setActiveIcons={setActiveIcons}
          ></IconType>
          normal
        </div>
        <div>
          <input type="hidden" name="poison" id="" />
          <IconType
            type="poison"
            activeIcons={activeIcons}
            setActiveIcons={setActiveIcons}
          ></IconType>
          poison
        </div>
        <div>
          <input type="hidden" name="psycho" id="" />
          <IconType
            type="psychic"
            activeIcons={activeIcons}
            setActiveIcons={setActiveIcons}
          ></IconType>
          psychic
        </div>
        <div>
          <input type="hidden" name="rock" id="" />
          <IconType
            type="rock"
            activeIcons={activeIcons}
            setActiveIcons={setActiveIcons}
          ></IconType>
          rock
        </div>
        <div>
          <input type="hidden" name="steel" id="" />
          <IconType
            type="steel"
            activeIcons={activeIcons}
            setActiveIcons={setActiveIcons}
          ></IconType>
          steel
        </div>
        <div>
          <input type="hidden" name="water" id="" />
          <IconType
            type="water"
            activeIcons={activeIcons}
            setActiveIcons={setActiveIcons}
          ></IconType>
          water
        </div>
      </div>
      <div className="input-area">
        <input
          type="text"
          value={pokemonName}
          onChange={handlePokemonName}
          placeholder="Name"
        />
      </div>
    </form>
  );
};

export default SearchForm;
