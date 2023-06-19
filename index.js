const express = require('express');
const app = express();
const port = 3000; // Choisissez le port que vous souhaitez utiliser pour votre API
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('materiel', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});
const materielRoutes = require('./routes/materielRoute')
const testDatabaseConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connexion à la base de données MySQL établie avec succès.');
    } catch (error) {
        console.error('Impossible de se connecter à la base de données :', error);
    }
};
// Vos routes et fonctions de gestion des requêtes seront ajoutées ici

app.use('/api', materielRoutes)
app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur le port ${port}`);
    testDatabaseConnection();
});
