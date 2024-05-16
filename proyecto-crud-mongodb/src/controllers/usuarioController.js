// src/controllers/usuarioController.js
const Usuario = require('../models/usuario');

exports.crearUsuario = async (req, res) => {
  try {
    const usuario = new Usuario(req.body);
    await usuario.save();
    res.status(201).json(usuario);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.obtenerUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.actualizarUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(usuario);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.eliminarUsuario = async (req, res) => {
  try {
    await Usuario.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
