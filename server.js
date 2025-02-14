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

const continentes = {
  africa: [
    "Algeria",
    "Angola",
    "Benin",
    "Botswana",
    "Burkina Faso",
    "Burundi",
    "Cameroon",
    "Cape Verde",
    "Central African Republic",
    "Chad",
    "Comoros",
    "Congo",
    "Congo DR",
    "Djibouti",
    "Egypt",
    "Equatorial Guinea",
    "Eritrea",
    "Ethiopia",
    "Gabon",
    "Gambia",
    "Ghana",
    "Guinea",
    "Guinea Bissau",
    "Kenya",
    "Lesotho",
    "Liberia",
    "Libya",
    "Madagascar",
    "Malawi",
    "Mali",
    "Mauritania",
    "Mauritius",
    "Morocco",
    "Mozambique",
    "Namibia",
    "Niger",
    "Nigeria",
    "Rwanda",
    "Sao Tome",
    "Senegal",
    "Seychelles",
    "Sierra Leone",
    "Somalia",
    "South Africa",
    "South Sudan",
    "Sudan",
    "Swaziland",
    "Tanzania",
    "Togo",
    "Tunisia",
    "Uganda",
    "Zambia",
    "Zimbabwe",
  ],
  america: [
    "Argentina",
    "Bolivia",
    "Brazil",
    "Chile",
    "Colombia",
    "Ecuador",
    "Guyana",
    "Paraguay",
    "Peru",
    "Suriname",
    "Uruguay",
    "Venezuela",
    "Mexico",
    "Cuba",
    "Dominican Republic",
    "Haiti",
    "Jamaica",
    "Trinidad and Tobago",
    "United States",
    "Canada",
    "United States Virgin Islands",
    "Puerto Rico",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Antigua and Barbuda",
    "Bahamas",
    "Barbados",
    "Belize",
    "Grenada",

    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Antigua and Barbuda",
    "Bahamas",
    "Barbados",
    "Belize",
    "Grenada",
  ],
  asia: [
    "Afghanistan",
    "Armenia",
    "Azerbaijan",
    "Bangladesh",
    "Bhutan",
    "Brunei",
    "Cambodia",
    "China",
    "Georgia",
    "Hong Kong",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Israel",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Lebanon",
    "Malaysia",
    "Maldives",
    "Mongolia",
    "Myanmar",
    "Nepal",
    "Oman",
    "Pakistan",
    "Palestine",
    "Philippines",
    "Qatar",
    "Saudi Arabia",
    "Singapore",
    "Sri Lanka",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Thailand",
    "Turkey",
    "Turkmenistan",
    "United Arab Emirates",
    "Uzbekistan",
    "Vietnam",
    "Yemen",
  ],
  europe: [
    "Albania",
    "Andorra",
    "Armenia",
    "Austria",
    "Azerbaijan",
    "Belarus",
    "Belgium",
    "Bosnia and Herzegovina",
    "Bulgaria",
    "Croatia",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Estonia",
    "Finland",
    "France",
    "Georgia",
    "Germany",
    "Greece",
    "Hungary",
    "Iceland",
    "Ireland",
    "Italy",
    "Kosovo",
    "Latvia",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macedonia",
    "Malta",
    "Moldova",
    "Monaco",
    "Montenegro",
    "Netherlands",
    "Norway",
    "Poland",
    "Portugal",
    "Romania",
    "Russia",
    "San Marino",
    "Serbia",
    "Slovakia",
    "Slovenia",
    "Spain",
    "Sweden",
    "Switzerland",
    "Turkey",
    "Ukraine",
    "United Kingdom",
  ],
};
// Ruta para devolver un número aleatorio entre 1 y 10
app.get("/random/continente/:continente", (req, res) => {
  try {
    const { continente } = req.params;
    if (!continente) {
      return res.status(400).json({ error: "Falta el parámetro continente" });
    }
    const randomNumber =
      Math.floor(Math.random() * continentes[continente].length) + 1;

    res.status(200).json({
      number: randomNumber,
      message: "Random number generated",
      pais: continentes[continente][randomNumber - 1],
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al generar el pais aleatorio", error });
  }
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor corriendo en el puerto http://3.142.131.143:${PORT}`);
});
