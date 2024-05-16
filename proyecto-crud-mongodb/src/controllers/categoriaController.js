// src/controllers/categoriaController.js
const Categoria = require('../models/categoria');

exports.crearCategoria = async (req, res) => {
  try {
    const categoria = new Categoria(req.body);
    await categoria.save();
    res.status(201).json(categoria);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.obtenerCategorias = async (req, res) => {
  try {
    const categorias = await Categoria.find();
    res.status(200).json(categorias);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.actualizarCategoria = async (req, res) => {
  try {
    const categoria = await Categoria.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(categoria);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.eliminarCategoria = async (req, res) => {
  try {
    await Categoria.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
