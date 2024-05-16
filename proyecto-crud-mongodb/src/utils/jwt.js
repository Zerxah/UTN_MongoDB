// src/utils/jwt.js
const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET_KEY || 'your_secret_key';

const generarToken = (payload) => {
  return jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });
};

const verificarToken = (token) => {
  try {
    return jwt.verify(token
