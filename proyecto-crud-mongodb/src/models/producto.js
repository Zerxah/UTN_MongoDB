// src/models/producto.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductoSchema = new Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String },
  precio: { type: Number, required: true },
  categoria: { type: Schema.Types.ObjectId, ref: 'Categoria' },
});

module.exports = mongoose.model('Producto', ProductoSchema);
