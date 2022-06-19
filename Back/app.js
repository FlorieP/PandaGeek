//Importation des packages node
const express = require('express');
const bodyParser = require('body-parser');

//Importation des routes
const userRouter = require ('./router/user_router.js');

//Creation de la constant express
const app = express();

//Test de connexion
app.get('/', function (req, res) {
    res.status(200).send('<h1>Bienvenue chez les 🐼🎮</h1>')
});

//Gestion des erreurs CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

//Récupération arguments et paramètre fourni dans le body d'une requête http
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Création des routes
app.use('/api/user', userRouter);

//Exportation de l'application
module.exports = app;
