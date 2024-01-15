const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('./app/router/router.js');
app.use('/', router);

// Configuration de la base de données (utilisation fictive)
const db = [
    { id: 1, title: 'Faire les courses' },
    { id: 2, title: 'Répondre aux e-mails' }
];

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Route pour la création de tâches
app.post('/tasks', (req, res) => {
    const newTask = {
        id: db.length + 1, // Générez un nouvel ID (vous devrez adapter cela en fonction de votre base de données réelle)
        title: req.body.title // Récupérez le titre à partir des données du formulaire
    };

    db.push(newTask); // Ajoutez la nouvelle tâche à la base de données

    res.status(201).json(newTask); // Répondez avec la nouvelle tâche créée
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
