


const {crearArchivo} = require('./helpers/ejercicio-export')//asi traemos el archivo que creamos en la otra carpetas
console.clear();//limpiara la consola, seria como escrbir el comando cls    


const base = 3;


crearArchivo( base )
    .then( nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch( err=>console.log(err));
