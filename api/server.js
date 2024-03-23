require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors({ origin: ["http://localhost:5173", "http://127.0.0.1:5173"] }));
app.use(accessControllMid);

function capitalize(str) {
  if (str.length === 0) {
    return str;
  }

  return str.charAt(0).toUpperCase() + str.slice(1);
}

//env config

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

// Conectando-se ao banco de dados MongoDB
// .connect(`mongodb://localhost:27017/pokedex_db`, {})
mongoose
  .connect(
    `mongodb+srv://${dbUser}:${dbPassword}@cluster0.bixs4ht.mongodb.net/pokedex_db`,
    {}
  )
  .then(() => {
    // Iniciando o servidor
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((err) => console.log(err));

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Erro de conexão ao MongoDB:"));
db.once("open", () => {
  console.log("Conectado ao banco de dados MongoDB.");
});

// Models
const Trainer = require("./models/Trainer");
const Pokemon = require("./models/Pokemon");

// register
app.post("/auth/register", async (req, res) => {
  const { name, email, password, passwordConfirm } = req.body;
  // validations
  if (!name || name === "") {
    return res.status(422).json({ msg: "field 'name' is required" });
  }
  if (!email || email === "") {
    return res.status(422).json({ msg: "field 'email' is required" });
  }
  if (!password || password === "") {
    return res.status(422).json({ msg: "field 'password' is required" });
  }
  if (!passwordConfirm || passwordConfirm === "") {
    return res
      .status(422)
      .json({ msg: "field 'password confirm' is required" });
  }
  if (password.length < 8) {
    return res.status(422).json({ msg: "password lenght must be at least 8" });
  }
  if (password !== passwordConfirm) {
    return res
      .status(422)
      .json({ msg: "password and password_confirm does not match" });
  }
  // check if Trainer exists
  const trainerExists = await Trainer.findOne({ email: email });

  if (trainerExists) {
    return res.status(422).json({ msg: "email is already in use" });
  }

  // create password
  const salt = await bcrypt.genSalt(12);
  const passwordHash = await bcrypt.hash(password, salt);

  //create trainer
  const trainer = new Trainer({
    name,
    email,
    password: passwordHash,
    pokemons_caught: [],
    pokemons_wishlist: [],
  });

  try {
    await trainer.save();
    res.status(201).json({ msg: "user created successfully" });
  } catch (err) {
    res.status(422).json({ msg: "server error: " + err });
  }
});

//login user
app.post("/auth/login", async (req, res) => {
  const { email, password } = req.body;

  // validations
  if (!email || email === "") {
    return res.status(422).json({ msg: "field 'email' is required" });
  }
  if (!password || password === "") {
    return res.status(422).json({ msg: "field 'password' is required" });
  }

  // check if Trainer exists
  const trainer = await Trainer.findOne({ email: email });

  if (!trainer) {
    return res.status(404).json({ msg: "user does not exist" });
  }

  // check password
  const checkPassword = await bcrypt.compare(password, trainer.password);
  if (!checkPassword) {
    return res.status(401).json({ msg: "password invalid" });
  }

  try {
    const secret = process.env.SECRET;
    const token = jwt.sign({ id: trainer._id }, secret);

    res.status(200).json({ msg: "auth done", id: trainer.id, token: token });
  } catch (err) {
    console.log(err);
    res.status(401).json({ msg: "server error, try again later" });
  }
});

// check token
function checkToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ msg: "access denied" });
  }

  try {
    const secret = process.env.SECRET;
    jwt.verify(token, secret);
    next();
  } catch (err) {
    res.status(400).json({ msg: "invalid token" });
  }
}

// Access-Control-Allow-Origin
function accessControllMid(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  ); // If needed
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  ); // If needed
  res.setHeader("Access-Control-Allow-Credentials", true); // If needed
  next();
}

// private route
app.post("/trainer", checkToken, async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  const { id } = req.body;
  console.log(id);
  // check if trainer exists
  try {
    const trainer = await Trainer.findById(id, { password: 0 });

    if (!trainer || trainer == null) {
      return res.status(404).json({ msg: "user not found" });
    }
    console.log(trainer);
    res.status(200).json(trainer);
  } catch (err) {
    console.log(err);
    return res.status(404).json({ msg: "user not found" });
  }
});

// return all pokemons
app.post("/api/getall", async (req, res) => {
  console.log("getall");
  try {
    const pokemon = await Pokemon.find(
      {},
      { _id: 0, stats: 0, moves: 0, damages: 0, misc: 0 }
    );

    if (!pokemon || pokemon.length == 0) {
      return res.status(404).json({ message: "No Pokemons :(" });
    }

    res.json(pokemon);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// filter pokemons
app.post("/api/find", async (req, res) => {
  console.log("find");
  let data = req.body;
  console.log(data);
  //TYPE AND NAME
  if (
    data.name != null &&
    data.name != "" &&
    data.type != null &&
    data.type.length > 0
  ) {
    data.name = capitalize(data.name);
    data.type.forEach((t, i) => {
      data.type[i] = capitalize(t);
    });
    const regex = new RegExp(`^${data.name}`);
    try {
      const pokemon = await Pokemon.find(
        { name: regex, type: { $all: data.type } },
        { _id: 0, stats: 0, moves: 0, damages: 0, misc: 0 }
      );

      if (!pokemon || pokemon.length == 0) {
        return res.status(404).json({ message: "No pokemons :(" });
      }

      return res.status(200).json(pokemon);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  //ONLY NAME
  else if (data.name != null && data.name != "") {
    data.name = capitalize(data.name);
    const regex = new RegExp(`^${data.name}`);
    try {
      const pokemon = await Pokemon.find(
        { name: regex },
        { _id: 0, stats: 0, moves: 0, damages: 0, misc: 0 }
      );

      if (!pokemon || pokemon.length == 0) {
        return res.status(404).json({ message: "No pokemons :(" });
      }

      return res.status(200).json(pokemon);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  //ONLY TYPE
  else if (data.type != null && data.type.length > 0) {
    data.type.forEach((t, i) => {
      data.type[i] = capitalize(t);
    });
    console.log(data.type);
    try {
      const pokemon = await Pokemon.find(
        { type: { $all: data.type } },
        { _id: 0, stats: 0, moves: 0, damages: 0, misc: 0 }
      );

      if (!pokemon || pokemon.length == 0) {
        return res.status(404).json({ message: "No pokemons :(" });
      }
      // console.log(pokemon);
      return res.status(200).json(pokemon);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
});
