const mongoose = require("mongoose");

const Trainer = mongoose.model(
  "Trainer",
  {
    name: String,
    email: String,
    password: String,
    pokemons_caught: [String],
    pokemons_wishlist: [String],
  },
  "trainers_db"
);

module.exports = Trainer;
