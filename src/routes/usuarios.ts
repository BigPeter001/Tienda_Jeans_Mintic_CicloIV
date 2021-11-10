import { Router } from "express";
import { actualizarUsuario,  agregarUsuario, eliminarUsuario, obtenerUsuario, obtenerUsuarios } from "../controllers/usuariosController";

const usuariosRoutes = (app) =>{
    const router = Router();
    app.use('/',router);

    router.get('/obtenerUsuarios', obtenerUsuarios);
    router.get('/obtenerUsuario/:id', obtenerUsuario);
    router.post('/apregarUsuario', agregarUsuario);
    router.put('/actualizarUsuario', actualizarUsuario);
    router.delete('/eliminarUsuario/:id', eliminarUsuario);
} 

export default usuariosRoutes;

