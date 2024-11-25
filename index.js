const express = require('express');
const { Sequelize } = require('sequelize');

// Configuración del servidor Express
const app = express();
const port = 3001;

// Conexión a la base de datos con Sequelize
const sequelize = new Sequelize('server', 'root', 'Sena2024', {
  host: 'localhost',
  port: 3306, // Puerto debe ser un número, no un string
  dialect: 'mysql',
});

// Autenticación de la base de datos
sequelize.authenticate()
  .then(() => console.log('Conexión con Sequelize exitosa.'))
  .catch(err => console.error('Error al conectar con Sequelize:', err));

// Middleware (si necesitas agregar alguno más tarde)
// app.use(express.json());

// Ruta de ejemplo
app.get('/', (request, response) => {
  res.send('¡Hola, mundo!');
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});

// Exporta la conexión a la base de datos para uso en otros archivos
module.exports = sequelize;


