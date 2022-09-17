
const { crearArchivo } = require('./ejercicios/ejercicio_resuelto');//asi traemos el archivo que creamos en la otra carpetas

const argv = require('./config/yargs');
const colors = require('colors');





console.clear();//limpiara la consola, seria como escrbir el comando cls    


//const base = 3;

//console.log(process.argv);
/*const[,,arg3= 'base=5' ]= process.argv;
const [, base = 5] =arg3.split('=')*/
//asi podemos ejecutar el comando directamente de una consola
//en la consola deberiamos utilizar el npx node --base='numero de base que querramos'
//de igual manera esto no es eficiente, ya que esta obligado al usauario a poner como primer vvalor la base y el = por lo tanto no es recomendable hacerlo de esta manera
/*console.log(base);*/



//console.log(process.argv);
//console.log( 'base :yargs', argv.b)



crearArchivo(argv.b, argv.l, argv.h )
    .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch( err=>console.log(err));










