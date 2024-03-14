const mongoose = require("mongoose");

const Pokemon = mongoose.model(
  "Pokemon",
  {
    id: String,
    name: String,
    img: String,
    type: Array,
  },
  "pokemons"
);

module.exports = Pokemon;
