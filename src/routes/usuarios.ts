import { Router } from "express";
import { actualizarUsuario,  agregarUsuario, eliminarUsuario, obtenerUsuario, obtenerUsuarios } from "../controllers/usuariosController";
import errorHandler from "../middlewares/errors";
import validarRol from "../middlewares/validarRol";

const usuariosRoutes = (app) =>{
    const router = Router();
    app.use('/',router);

    //router.use(validarRol);
    router.get('/obtenerUsuarios',  obtenerUsuarios,errorHandler);
    router.get('/obtenerUsuario/:id', obtenerUsuario);
    router.post('/agregarUsuario', agregarUsuario);
    router.put('/actualizarUsuario/:id', actualizarUsuario);
    router.delete('/eliminarUsuario/:id', eliminarUsuario);

   // router.use(errorHandler);
} 

export default usuariosRoutes;

