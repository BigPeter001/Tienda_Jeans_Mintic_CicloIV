import { Router } from "express";
import { actualizarUsuario,  agregarUsuario, eliminarUsuario, obtenerUsuario, obtenerUsuarios } from "../controllers/usuariosController";

const usuariosRoutes = (app) =>{
    const router = Router();
    app.use('/',router);

    router.get('/obtenerUsuarios', obtenerUsuarios);
    router.get('/obtenerUsuario/:id', obtenerUsuario);
    router.post('/agregarUsuario', agregarUsuario);
    router.put('/actualizarUsuario/:id', actualizarUsuario);
    router.delete('/eliminarUsuario/:id', eliminarUsuario);
} 

export default usuariosRoutes;

