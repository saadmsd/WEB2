const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.send('Tout va à merveille');
});

app.listen(8000, () => {
    console.log('Le serveur écoute sur le port 8000');
});
