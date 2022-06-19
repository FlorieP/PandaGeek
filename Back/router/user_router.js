//Importation des modules de node
const express = require('express');

//Création du router
const router = express.Router();

//Importation des middlewares
const auth = require('../middleware/auth');

//Importation du controller
const UserCtrl = require('../controllers/user_ctrl.js');

//Création des routes du User
router.post('/signup', UserCtrl.signup);
router.post('/login',  UserCtrl.login);
router.get('/profil/:id', auth, UserCtrl.getone);
router.put('/profil/:id', auth, UserCtrl.update);
router.delete('/profil/:id', auth, UserCtrl.delete);

//Exportation du routeur User
module.exports = router;
