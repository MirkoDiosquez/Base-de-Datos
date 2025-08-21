const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 5500;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());  // para parsear JSON si fuera necesario
app.use(express.static(path.join(__dirname, 'public')));

const db = mysql.createConnection({
  host: '127.0.0.1',
  port: 3306,
  user: 'alumno',
  password: 'alumnoipm',
  database: 'pizzeria'
});

db.connect((err) => {
  if (err) {
    console.error('Error al intentar conectar a la DB:', err);
    return;
  }
  console.log('Conectado a la base de datos');
});

app.post('/pedir', (req, res) => {
  console.log('Datos recibidos:', req.body);

  const { nombre, numTarjeta, mail, direccion } = req.body;

  if (!nombre || !numTarjeta || !mail || !direccion) {
    return res.status(400).send('Faltan datos obligatorios');
  }

  const query = 'INSERT INTO usuario (nombre, numTarjeta, mail, direccion) VALUES (?, ?, ?, ?)';

  db.query(query, [nombre, numTarjeta, mail, direccion], (err, result) => {
    if (err) {
      console.error('Error al insertar:', err);
      return res.status(500).send('Error al guardar en la base de datos');
    }
    console.log('Se registró la compra con ID:', result.insertId);
    // Redirigir al frontend
    res.redirect("./inicio.html");
  });
});

app.listen(port, () => {
  console.log(`Servidor activo en http://localhost:${port}`);
});