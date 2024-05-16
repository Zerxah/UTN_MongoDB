// src/controllers/productosController.js
const Producto = require('../models/producto');

exports.crearProducto = async (req, res) => {
  try {
    const producto = new Producto(req.body);
    await producto.save();
    res.status(201).json(producto);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.obtenerProductos = async (req, res) => {
  try {
    const productos = await Producto.find().populate('categoria');
    res.status(200).json(productos);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.actualizarProducto = async (req, res) => {
  try {
    const producto = await Producto.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(producto);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.eliminarProducto = async (req, res) => {
  try {
    await Producto.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
