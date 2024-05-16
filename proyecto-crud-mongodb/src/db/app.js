// app.js
const express = require('express');
const conectarDB = require('./src/db/conexion');
const dotenv = require('dotenv');

// Cargar las variables de entorno desde el archivo .env
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Conectar a la base de datos
conectarDB();

// Middleware para manejar solicitudes JSON
app.use(express.json());

// Rutas
const productoRoutes = require('./src/routes/productoRoutes');
const usuarioRoutes = require('./src/routes/usuarioRoutes');
const categoriaRoutes = require('./src/routes/categoriaRoutes');

app.use('/productos', productoRoutes);
app.use('/usuarios', usuarioRoutes);
app.use('/categorias', categoriaRoutes);

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
