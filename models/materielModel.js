const { DataTypes, Sequelize } = require('sequelize');
const sequelize = new Sequelize('materiel', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

const Materiel = sequelize.define('Materiel', {
    Numero: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    design: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    etat: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    qte: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    tableName: 'materiel', 
    timestamps: false,// Spécifie le nom de la table dans la base de données
});

module.exports = Materiel;
