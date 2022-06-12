
const models = require('./models');

//Importation de packages node
const http = require('http');

//Importation de notre application
const app = require('./app');

//Indication du port du lequelle l'application doit tourner
app.set('port', 3000);

//Création d'un server avec pour paramètre notre app
const server = http.createServer(app);

//Initialisation de la base de données (synchronisation du modèle de données)
models.init_database(models.db, false); // mettre true si nouveau champ

//Méthode d'écoute du serveur sur les ports sélectionnés
server.listen(3000, function() {
    console.log('Server en écoute !');
});
