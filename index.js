const express = require('express');
const app = express();
const port = 3000; // Choisissez le port que vous souhaitez utiliser pour votre API

// Vos routes et fonctions de gestion des requêtes seront ajoutées ici

app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur le port ${port}`);
});
