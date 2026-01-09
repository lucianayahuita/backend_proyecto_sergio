require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
// Middleware
app.use(cors());            // Permitir conexiones desde cualquier frontend
app.use(express.json());    // Permitir recibir JSON en requests

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('API Pareja Sergio funcionando ');
});

// Definir puerto 
const PORT = process.env.PORT || 3000;

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
