//Importation module de node
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();

//Exportation du middleware
module.exports = (req, res, next) => {
    try {
        //Récupération du token dans le header authorization 
        const token = req.headers.authorization.split(' ')[1]; 
        //Décodage du token 
        const decodedToken = jwt.verify(token, process.env.JWT_KEY_TOKEN);
        //Récupération de l'id user inclus dans le token
        const userId = decodedToken.userId; 
        //Comparaison de l'id user du token avec le champs userId
        req.auth = { userId };
        //Challenge userId
        if(req.body.userId && req.body.userId !== userId) {
            //si false 
            throw 'Utilisateur invalide';
        } else {
            //si true passer à la requête suivante
            next();
        }
    } catch {
        //Renvoi une erreur d'authentification
        res.status(401).json({ error : "Forbidden"})
    }
};