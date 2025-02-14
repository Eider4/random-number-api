const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

// Ruta para devolver un número aleatorio
app.get("/random", (req, res) => {
  try {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    res.json({ number: randomNumber, message: "Random number generated" });
  } catch (error) {
    res.status(500).json({ error: "Error al generar el número aleatorio" });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
