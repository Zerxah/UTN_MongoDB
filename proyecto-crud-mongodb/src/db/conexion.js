// src/db/conexion.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Cargar las variables de entorno desde el archivo .env
dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/base_de_datos';

const conectarDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conectado a la base de datos de MongoDB');
  } catch (error) {
    console.error('Error al conectar a la base de datos', error);
    process.exit(1); // Salir del proceso con error
  }
};

module.exports = conectarDB;

