import express, { Express } from "express";
import usuariosRoutes from "./routes/usuarios";
import config from "./config/config";
import errorHandler from "./middlewares/errors";

const  app = express();
const port = config.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((_, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });

usuariosRoutes(app);

app.use(errorHandler);

app.get('/prueba/:id', async(req, res) => {
    console.log('antes de la promesa');
    // promesas
    const x = 10;
    const promesa = new Promise((resolve,reject) => {
        if (x == 10){
            resolve('se resuelve la promea');
        }else{
            reject('Promesa rechazada');
        }
    });
    await promesa.then((res) =>{
        console.log(res);
    }).catch(error => {
        console.log(error);
    });

    console.log('despues de la promesa');

    console.log(req.query);
    console.log(req.body);
    res.send('Prueba servidor');
})
app.listen(port,() => {
    return console.log("Servidor corriendo en el puerto " + port)
});