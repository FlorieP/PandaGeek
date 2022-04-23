//Importation des packages node
const express = require('express');

//Importation des routes

//Creation de la constant express
const app = express();

//Test de connexion
app.get('/', function (req, res) {
    res.status(200).send('<h1>Bienvenue chez les 🐼🎮</h1>')
});

//Exportation de l'application
module.exports = app;