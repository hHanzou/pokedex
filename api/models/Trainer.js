const mongoose = require("mongoose");

const Trainer = mongoose.model(
  "Trainer",
  {
    name: String,
    email: String,
    senha: String,
  },
  "trainers_db"
);

module.exports = Trainer;
