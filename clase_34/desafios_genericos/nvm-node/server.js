const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hola Weyes'); 
});

app.listen(8080, () => console.log('Servidor escuchando en el port 8080'));