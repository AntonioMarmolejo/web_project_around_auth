const express = require('express');
const router = express.router();

//Middleware para verificar si el usuario no está autenticado
function isAuthenticated(req, res, next) {
    // Aquí verificas si el usuario está autenticado
    // Por ejemplo, podrías verificar si hay un token válido en las cookies o headers
    const isAuth = 'logica de authentication'

    if (isAuth) {
        next();// Si está autenticado, continúa con la siguiente función
    } else {
        res.redirect('/signin');// Si está autenticado, continúa con la siguiente función
    }
}


// Ruta de registro
router.get('/signup', (req, res) => {
    res.send('Página de registro');
});

// Ruta de inicio de sesión
router.get('/signin', (req, res) => {
    res.send('Página de inicio de sesión');
});

// Ruta raíz (solo accesible para usuarios autenticados)
router.get('/', isAuthenticated, (req, res) => {
    res.send('Bienvenido a la aplicación');
});

// Otras rutas de la aplicación (también protegidas)
router.get('/otra-ruta', isAuthenticated, (req, res) => {
    res.send('Otra ruta protegida');
});

module.exports = router;