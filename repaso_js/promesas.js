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

const id= 3;

/*getEmpleado(id)
    .then(empleado=>console.log(empleado))
    .catch(err=> console.log(err));

getSalario(id)
    .then(salario=>console.log(salario))
    .catch(err=> console.log(err));*/

//promesas en cadena



let nombre;

getEmpleado(id)
    .then(empleado => {
        nombre= empleado
       return getSalario(id)

    })
    .then(salario => console.log('el empleado: ', nombre, 'tiene un salario de : ', salario) )
    .catch(err => console.log(err))