const express = require('express');
const router = express.Router();
const app = express();
require('dotenv').config();


// Route pour la racine de l'application
router.get('/', (req, res) => {
    res.send(`Bienvenue sur la page d'accueil de l'application.`);
});


app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
module.exports = router;