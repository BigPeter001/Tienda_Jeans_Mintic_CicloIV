import { Router } from "express";
import executeQuery from "../services/mysql.service";

const obtenerProductos = async (req, res, next) => {
    await executeQuery('SELECT * FROM usuario').then((response) => {
        const data = {
            message: 'datos encontrados..: ' + response.length,
            data: response.length > 0 ? response : null
        }
        res.json(data);
    }).catch((error) => {
        next(error);
    });
   
}

const obtenerProducto = async (req, res, next) => {
    
    try {
        const {id} = req.params;
        await executeQuery('SELECT * FROM usuario WHERE usuario_id =' + id).then((response) => {
        const data = {
            message: 'datos encontrados..: ' + response.length,
            data: response.length > 0 ? response : null
        }
        res.json(data);
    }).catch((error) => {
        next(error);
    });
        
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
    
    
}

const agregarProducto = async (req, res, next) => {
    try {
        const {usuario_nombre, usuario_email,usuario_password} = req.body;
        await executeQuery("INSERT INTO usuario (usuario_nombre, usuario_email, usuario_passsword) VALUES ('" +usuario_nombre+"','"+usuario_email+"','"+usuario_password+"')").then((response) => {
        const data = {
            message: 'Insertar Usuario',
            data: 'Se ha insertado el usuario..: '+ usuario_nombre + ' - ' + usuario_email
        }
        res.status(201);
        res.json(data);
    }).catch((error) => {
        next(error);
    });
        
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
    
    
}

const actualizarProducto = async(req, res,next) => {
    try {
        const {id} = req.params;
        const {usuario_nombre, usuario_email,usuario_password} = req.body;
        await executeQuery("UPDATE usuario set usuario_nombre ='" +usuario_nombre+"' , usuario_email ='"+usuario_email+"' , usuario_passsword = '"+usuario_password+"' where usuario_id ='"+id+"'").then((response) => {
        const data = {
            message: 'Actualizar Usuario',
            data: response.affectedRows > 0 ? 'Usuario Actualizado..:' +usuario_nombre  : `No existe registro con id: ${id}`
        }
        res.status(200);
        res.json(data);
    }).catch((error) => {
        next(error);
    });
        
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
    
}

const eliminarProducto = async(req, res, next) => {
    try {
        const {id} = req.params;
        console.log(id);
        await executeQuery("DELETE FROM usuario WHERE usuario_id ='"+id+"'").then((response) => {
        const data = {
            message: 'Eliminación de Usuario',
            data: response.affectedRows > 0 ? 'Usuario Eliminado' : `No existe registro con id: ${id}`
        }
        res.status(200);
        res.json(data);
    }).catch((error) => {
        next(error);
    });
        
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

export{  actualizarProducto,  agregarProducto, eliminarProducto, obtenerProducto, obtenerProductos};