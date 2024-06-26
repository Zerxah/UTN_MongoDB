// src/models/categoria.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategoriaSchema = new Schema({
  nombre: { type: String, required: true, unique: true },
});

module.exports = mongoose.model('Categoria', CategoriaSchema);
