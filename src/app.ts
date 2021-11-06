import express from 'express';
const app = express();
const port = 3001;

app.get('/', (req, res) => {
    res.send('Prueba del servidor');
});

app.listen(port, () => {
    return console.log('Servidor corriendo en el puerto ' + port);
});