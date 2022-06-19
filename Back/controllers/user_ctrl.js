//Importation des packages de node
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();

// Importation du model de l'utilisateur
const { db } = require('../models/index.js');

 
//Importation des middlewares


//Constantes
const email_Regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const pw_Regex = /^(?=.*\d).{6,16}$/;

//Création du POST pour la création d'un utilisateur
exports.signup = (req, res, next) => {
    //Paramètres
    const pseudo = req.body.pseudo;
    const email = req.body.email;
    const password = req.body.password;
    
    //Vérification de la validité des infos
    if (pseudo == null || email == null || password == null) {
        return res.status(400).json({ 'error': "Paramètres manquants" });
    }

    //Vérification de la validité de l'email
    if (!email_Regex.test(email)) {
        return res.status(400).json({ 'error': "Email invalide" });
    }
    //Vérification de la complexité du mdp
    if (!pw_Regex.test(password)) {
        return res.status(400).json({ 'error': "Mot de passe inalide. Longeur entre 6 et 16 carctères incluant au moins un chiffre" });
    }

    //Fonction de création User
    db.User.findOne({where : {email : email }})
        .then(function (user) {
            if (!user) {
                //Hashage du mot de passe
                bcrypt.hash(password, 10)
                    //Récupération du hash de mdp 
                    .then(hash => {
                        //Création du nouvel utlisateur
                        const user = new db.User({
                            pseudo: pseudo,
                            email: email, 
                            password: hash,
                            bio: 'Ma bio',
                            avatar: 'https://cdn.pixabay.com/photo/2018/11/13/22/01/instagram-3814081__340.png',
                            isAdmin: 0
                        });
                        //Enregistrement du nouvel utilisateur
                        user.save()
                            //Connexion serveur réussi
                            .then(() => res.status(201).json({ message: "Utilisateur créé !" }))
                            //Gestion erreur serveur
                            .catch(error => res.status(400).json({ message: error.message }));
                    })
                    //Gestion erreur serveur
                    .catch(error => res.status(500).json({ message: error.message }));
            } else {
                return res.status(409).json({ 'error': "Utilisateur existant" });
            }
        })
        .catch(function (error) {
            return res.status(500).json({ message: error.message });
        });
};

//Création du POST pour la connexion d'un utilisateur
exports.login = (req, res, next) => {
    //récupération données
    const email = req.body.email;
    const password = req.body.password;
    //Contrôle des données entrantes
    if (!email || !password) {
        return res.status(400).json({ error : "L'email et / ou mot de passe manquant" });
    }
    //Recherche de l'utilisateur
    db.User.findOne({where : {email : email }})
        .then(user => {
            //Contrôle utilisateur manquant
            if (!user) {
                return res.status(404).json({ error : "Utilisateur inexistant !" });
            }
            //Si existant, challenge mdp 
            bcrypt.compare(password, user.password)
                //renvoi d'un boolean mdp valide ?
                .then(valid => {
                    if(!valid) {
                        return res.status(400).json({ error : "Mot de passe incorrect"});
                    }
                    //Si bon mdp renvoi du token et l'id
                    res.status(200).json({
                        userId : user.id,
                        //appel de la fonction sign de JWT
                        token: jwt.sign(
                            //argument que l'on veut encodé
                            {userId : user.id },
                            //clé secret d'encodage 
                            process.env.JWT_KEY_TOKEN, 
                            //configuration de l'expiration du token
                            {expiresIn: '24h'}
                        )
                    });
                })
                .catch(error => res.status(500).json({ error : error.message }));
        })
        //Gestion erreur serveur
        .catch(error => res.status(500).json({ error : error.message }));
};

//Création du GET pour afficher un profil utilisateur
exports.getone = (req, res, next) => {

};

//Création du PUT pour modifier le profil d'un utilisateur
exports.update = (req, res, next) => {

};

//Création du DELETE pour supprimer un utilisateur
exports.delete = (req, res, next) => {

};
