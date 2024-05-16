// src/models/usuario.js
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const UsuarioSchema = new Schema({
  nombre: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Encriptar la contraseña antes de guardar el usuario
UsuarioSchema.pre('save', async function (next) {
  const usuario = this;
  if (!usuario.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  usuario.password = await bcrypt.hash(usuario.password, salt);
  next();
});

module.exports = mongoose.model('Usuario', UsuarioSchema);
