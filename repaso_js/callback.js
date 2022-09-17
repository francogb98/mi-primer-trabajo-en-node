

setTimeout(()=>{
    console.log("hola mundo");
},1000);//funcion que se ejecutra pasando 1 segundo


const getUsuarioById= (id, callback/*funcion que llamamaos*/) =>{
    const user={
     
        id,//significa que usuario tiene una propiedad llamada id igual a la propiedad que le pasemos como argumento
        nombre: 'franco',
    }


    setTimeout(()=>{
        callback(user);//aqui mando a llamar a la funcion que previamente le pase como argumento
    },1000)
};


getUsuarioById(10, (usuario)=>{
    console.log(usuario.id);
    console.log(usuario.nombre.toUpperCase());
});//una funcion que se manda como argumento a otra funcion




