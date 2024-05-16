// src/utils/encriptador.js
const bcrypt = require('bcrypt');

const encriptar = async (textoPlano) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(textoPlano, salt);
};

const comparar = async (textoPlano, hash) => {
  return await bcrypt.compare(textoPlano, hash);
};

module.exports = { encriptar, comparar };
