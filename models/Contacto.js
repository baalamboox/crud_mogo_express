const { Schema, model } = require("mongoose");

const contactoSchema = Schema({
  nombre: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true,
    unique: true
  },
  telefono: {
    type: String,
    require: true,
  }
});

module.exports = model("Contacto", contactoSchema);