import { Router } from "express";
import { actualizarProducto,  agregarProducto, eliminarProducto, obtenerProducto, obtenerProductos } from "../controllers/productosController";
import errorHandler from "../middlewares/errors";
import validarRol from "../middlewares/validarRol";

const productosRoutes = (app) =>{
    const router = Router();
    app.use('/',router);

    //router.use(validarRol);
    router.get('/obtenerProductos', validarRol, obtenerProductos,errorHandler);
    router.get('/obtenerProducto/:id', obtenerProducto);
    router.post('/agregarProducto', agregarProducto);
    router.put('/actualizarProducto/:id', actualizarProducto);
    router.delete('/eliminarProducto/:id', eliminarProducto);

   // router.use(errorHandler);
} 

export default productosRoutes;