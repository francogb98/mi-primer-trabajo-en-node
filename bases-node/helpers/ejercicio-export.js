





const fs = require('fs');

const tablaMultiplicar= (base, callback)=>{
    console.log( "============" );
    console.log( 'TABLA DEL : ',base );
    console.log("============");
    let salida ='';

    for (let i = 1; i <= 10; i++) {
        
        salida+= `${i} X ${base} = ${ i * base }\n`;
        
    }
    console.log(salida);
    fs.writeFileSync(`tabla-${base}.txt`, salida);

}


const crearArchivo= async(base)=>{

    try{
    const resultado= await tablaMultiplicar(base);
    return 'tabla creada con exito'
    } catch(err){
    return err;
    }
}


module.exports={
    crearArchivo
}

