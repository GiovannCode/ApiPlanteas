const express = require("express");
const router = express.Router();
const planetas = require("../data/dataPlanetas");

// Ruta para obtener todos los planetas
router.get("/", (req, res) => {
    res.json(planetas);
});

// Ruta para obtener un planeta por su nombre
router.get("/:nombre", (req, res) => {
    const nombre = req.params.nombre.toLowerCase();
    const planeta = planetas.find(p => p.nombre.toLowerCase() === nombre);
    
    if (planeta) {
        res.json(planeta);
    } else {
        res.status(404).json({ mensaje: "Planeta no encontrado" });
    }
});

module.exports = router;
