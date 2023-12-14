const express = require ('express');
const mongoose = require ('mongoose');
require('dotenv').config();

const app = express();

//Conexion a la base de datos MongoDB

const connectToDatabase = async() => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Conexion Exitosa')
  } catch (error) {
    console.error('Error al conectar a la DB', error.message);
    process.exit(1);
  }
}
//llamada a la conexcion de base de datos

connectToDatabase();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto${PORT}`);
});