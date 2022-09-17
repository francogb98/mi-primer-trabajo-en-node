const fs = require('fs');
const colors = require('colors');


/*const crearArchivo = (base = 5)=>{
    
  return new Promise((resolve, reject)=>{
    console.log( "============" );
    console.log( 'TABLA DEL : ',base );
    console.log("============");

    let salida ='';

    for (let i = 1; i <=10; i++) {   
    salida += `${base} x ${i} = ${base * i }\n`;
    
    }
    console.log(salida);

    fs.writeFileSync(`tabla-${base}.txt`, salida);
    resolve(`tabla-${base}.txt`);
})  
}//manera 1*/

const crearArchivo = async (base = 5, l =false, h = 10)=>{
    

    try {
      
        
      
      
      let salida, consola ='';//utilizamos otra variable para que a la hora de imprimir la tabla en un archivo.txt no me aparezca el tema de los coores
  
      for (let i = 1; i <=h; i++) {   
      salida += `${base} x ${i} = ${base * i }\n`;
      consola += `${base} ${'x'.green} ${i} ${'='.green} ${base * i }\n`;
      
      }

      if (l) {
      console.log( "============".green );
      console.log( 'TABLA DEL : ', colors.yellow(base) );
      console.log("============".green);
  
      console.log(consola);
      }
      
  
      fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

      return `tabla-${base}.txt`;

    } catch (err) {
        throw err;
    }
    
      
  }//manera 2, de esta manera con el try y catch manejamos en caso de que haya un error, y retornamos una promesa.



module.exports={
    crearArchivo
}