
const fs = require('fs');


const crearArchivo = (base = 5)=>{
    
    
    console.log( "============" );
    console.log( 'TABLA DEL : ',base );
    console.log("============");

    let salida ='';

    for (let i = 1; i <=10; i++) {   
    salida += `${base} x ${i} = ${base * i }\n`;
    //el \n hara un salto de linea
    }
    console.log(salida);

    fs.writeFileSync(`tabla-${base}.txt`, salida);//de esta manera no hace falta que hagamos la funcion QUE MANEJE el error de igual manera si salta ui8n error no lo sabriamos y deberiamos manejarala con un try catch
    console.log(`tabla-${base}.txt ¡CREADA CON EXITO!`);

}

/*fs.writeFile(`tabla-${base}.txt`, salida, (err)=>{
    if (err) throw err;

    console.log(`tabla-${base}.txt CREADO CON EXITO!`)

})*/
//ASI Grabamos lo que queramos en un archivo de texto en este caso la salida, kluego colocamos la funcion en caso de que hay aun error se ejecute la misma
//si cambiamos el valor de base creara un nuevo archivo


module.exports={
    crearArchivo
}//creamos un objeto para poder exportar y asi poderlop usar en la otra pagina de js

