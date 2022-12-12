require("dotenv").config();

const express = require("express");
const dbConexion = require("./database/config");
const app = express();

dbConexion();


app.set('view engine', 'pug'); // abilitamos la ejecucion del motor de plantillas

app.use(express.urlencoded({extended: true}));

app.use(express.json()); // leer caulquier body como json

app.use('/static', express.static('./public'))

app.use(require('./routes/contactos'))

app.listen( process.env.PORT, () => {

  console.log(`app escuchando en http://localhost:${process.env.PORT}`);

});

