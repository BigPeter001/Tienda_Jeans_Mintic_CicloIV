import { Router } from "express";
import executeQuery from "../services/mysql.service";

const obtenerUsuarios = async (req, res) => {
    await executeQuery('SELECT * FROM usuario').then((response) => {
        const data = {
            message: 'datos encontrados..: ' + response.length,
            data: response.length > 0 ? response : null
        }
        res.json(data);
    }).catch((error) => {
        res.status(500).send(error);
    });
   
}

const obtenerUsuario = async (req, res) => {
    await executeQuery('SELECT * FROM usuario WHERE usuario_id =' + req.params.id).then((response) => {
        const data = {
            message: 'datos encontrados..: ' + response.length,
            data: response.length > 0 ? response : null
        }
        res.json(data);
    }).catch((error) => {
        res.status(500).send(error);
    });
}

const agregarUsuario = (req, res) => {
    res.send('agregar usuario');
}

const actualizarUsuario = (req, res) => {
    res.send('actualizar usuario');
}

const eliminarUsuario = (req, res) => {
    res.send('eliminar usuario');
}

export{ obtenerUsuarios,obtenerUsuario,agregarUsuario,actualizarUsuario,eliminarUsuario};