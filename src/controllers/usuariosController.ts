import { Router } from "express";

const obtenerUsuarios = (req, res) => {
    res.send('obtener usuarios');
}

const obtenerUsuario = (req, res) => {
    res.send('obtener usuario');
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