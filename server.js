const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors({ origin: "*" }));
app.use(express.json());

const PORT = process.env.PORT || 3000;
app.get("/", (req, res) => {
  res.send("Hola desde el servidor!");
});
// Ruta para devolver un número aleatorio
app.get("/random/:numMAx", (req, res) => {
  try {
    const { numMAx } = req.params;
    if (!numMAx) {
      return res.status(400).json({ error: "Falta el parámetro numMAx" });
    }
    const randomNumber = Math.floor(Math.random() * numMAx) + 1;
    res.json({ number: randomNumber, message: "Random number generated" });
  } catch (error) {
    res.status(500).json({ error: "Error al generar el número aleatorio" });
  }
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor corriendo en el puerto http://3.142.131.143:${PORT}`);
});
