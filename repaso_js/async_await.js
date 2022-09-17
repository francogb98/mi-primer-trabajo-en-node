const empleados = [
    {
        id:1,
        nombre: 'franco',
    },
    {
        id:2,
      nombre: 'dylan',
    },
    {
        id:3,
        nombre: 'melina',
    }
];

const salarios = [
    {
        id:1,
        salario: '1000',
    },
    {
        id:2,
      salario: '2000',
    },
];

const getEmpleado = (id, callback)=>{
    

    return new Promise( (resolve, reject)=>{

        const empleado = empleados.find(e =>e.id === id)?.nombre;

        (empleado)
            ?resolve(empleado)//esto reemplaza el if
            :reject(`no existe el empleado con id ${id}`)//esto reemplaza el else
    })

    
}


const getSalario = (id, callback) =>{
    return new Promise((resolve, reject)=>{
        const salario = salarios.find(e => e.id === id)?.salario;

        (salario) 
        ?resolve(salario) 
        :reject(`no existe el salario con el id ${id}`)
    })
}


const getInfoUsuario= async(id)=>{//transforma la funcion en una funcion que retorna una promesa
    
    try{
    const empleado = await getEmpleado(id);
    const salario = await getSalario(id);
    return `el salario del empleado ${empleado} es de ${salario}`
    } catch(err){
        return err;
    }
}

const id=4;

getInfoUsuario(id)
    .then(msg=>console.log(msg))
    .catch(err => console.log(err));




