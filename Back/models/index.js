
const Sequelize = require('sequelize');

const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);


// Instanciation de Sequelize (connexion à la BDD)
// ======================================================================================================

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './db/panda_geek.sqlite'
});

// try {
//   sequelize.authenticate();
//   console.log('Connection has been established successfully.');
// } catch (error) {
//   console.error('Unable to connect to the database:', error);
// }


// Modèles
// ======================================================================================================

let db = {};

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {

  	// Création à la volée des modèles de chaque fichiers dans "models"
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });


const init_database = (bd, alter=false) => {

	// Initialisation de la base de données (synchronisation du modèle de données)
	// ---

	for (const [modelName, model] of Object.entries(db)) {
		if (modelName != 'sequelize') {
			model.sync({ alter: alter })
		}
	}
}

// ======================================================================================================

db.sequelize = sequelize;
// db.Sequelize = Sequelize;

module.exports = {
	db: db,
	init_database: init_database,
};
