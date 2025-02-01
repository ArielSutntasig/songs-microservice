require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/database');
const initializeDB = require('./config/init-mongo');
const songRoutes = require('./routes/songRoutes');

// Inicializar express
const app = express();

// Conectar a la base de datos e inicializar datos
(async () => {
    try {
        await connectDB();
        await initializeDB();
    } catch (error) {
        console.error('Error durante la inicialización:', error);
        process.exit(1);
    }
})();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Ruta de prueba
app.get('/', (req, res) => {
    res.json({ message: 'Bienvenido a la API de canciones' });
});

// Rutas de la API
app.use('/api', songRoutes);

// Manejo de rutas no encontradas
app.use((req, res) => {
    res.status(404).json({ message: 'Ruta no encontrada' });
});

// Manejo de errores global
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        error: 'Error interno del servidor'
    });
});

// Puerto
const PORT = process.env.PORT || 3000;

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});

module.exports = app;