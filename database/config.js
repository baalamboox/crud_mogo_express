const mongoose = require("mongoose");

const dbConexion = async() => {

  try {
    
    await mongoose.connect(process.env.MONGOURI);
    console.log("Base de datos conectada");

  } catch (error) {
    
    console.error(error);
    throw Error("Error a conectat a la DB");

  }

};

module.exports = dbConexion;