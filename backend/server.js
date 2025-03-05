const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

let productos = [
    { id: 1, nombre: "Laptop", precio: 1200 },
    { id: 2, nombre: "Mouse", precio: 20 }
];

// Ruta para obtener todos los productos
app.get('/productos', (req, res) => res.json(productos));

// Ruta para crear un nuevo producto
app.post('/productos', (req, res) => {
    const nuevoProducto = { id: Date.now(), ...req.body };
    productos.push(nuevoProducto);
    res.json(nuevoProducto);
});

// Ruta para actualizar un producto existente
app.put('/productos/:id', (req, res) => {
    const { id } = req.params;
    const index = productos.findIndex(p => p.id == id);
    if (index !== -1) {
        productos[index] = { ...productos[index], ...req.body };
        res.json(productos[index]);
    } else {
        res.status(404).json({ error: "Producto no encontrado" });
    }
});

// Ruta para eliminar un producto
app.delete('/productos/:id', (req, res) => {
    productos = productos.filter(p => p.id != req.params.id);
    res.json({ mensaje: "Producto eliminado" });
});

// Agregar una ruta para la raíz ("/")
app.get('/', (req, res) => {
    res.send('¡Servidor corriendo! Ve a /productos para ver los productos.');
});

app.listen(3000, () => console.log('Servidor en http://localhost:3000'));


// Servir los archivos estáticos desde la carpeta frontend
app.use(express.static('frontend'));

app.listen(3000, () => console.log('Servidor en http://localhost:3000'));
