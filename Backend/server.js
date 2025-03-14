const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");

const planetasRoutes = require("./routes/planetas");

app.use(cors()); // Permitir peticiones desde el frontend
app.use(express.static(path.join(__dirname, "../frontend/public"))); // Servir frontend

// Rutas de la API
app.use("/api/planetas", planetasRoutes);

app.use((req, res, next) => {
    if (req.url.endsWith('.glb')) {
        res.setHeader('Content-Type', 'model/gltf-binary');
    }
    next();
});

// Iniciar servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});