// server.js

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Ruta raíz para manejar la solicitud GET a http://localhost:3000/
app.get('/', (req, res) => {
    res.send('¡Servidor corriendo! Puedes acceder a /productos.');
});

// Ruta para obtener productos
app.get('/productos', (req, res) => {
    // Aquí devolverías los productos
    res.json([
        { id: 1, nombre: 'Laptop', precio: 1200 },
        { id: 2, nombre: 'Mouse', precio: 20 }
    ]);
});

// Configuración para que el servidor se ejecute en el puerto 3000
app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});
