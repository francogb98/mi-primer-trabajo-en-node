


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
    const empleado = empleados.find(e =>e.id === id)?.nombre;

    if (empleado){
        callback(null, empleado);
    }else{
        callback(`empleado con id ${id} no existe`)
    }
}


const getSalario = ( id, callback)=>{
    const salario = salarios.find( s=> s.id===id)?.salario//verificara si existe la consulta en caso de qu elo haga ejecuta si no mandara un undefined

    if (salario){
        callback(null, salario);

    }else{
        callback(`no se encuentra el salario del usuario con el id ${id} no existe bro!`)
    }
}


const id = 2;


/*getEmpleado (id, (err, empleado)=>{
    if(err){
        console.log('ERROR!')
        return console.log (err);
    }
    console.log('empleado existe!')
    console.log(empleado);
})


getSalario(id, (err, salario)=>{
    if (err){
        console.log('ERROR!');
        return console.log(err);
    }
    console.log('salario de empleado encontrado')
    console.log(salario);
})*/

//con err le decimos que si el empleado no existe ejecute lo que esta dentro del if
//y con el null en la funcion anterior le decimos que si hay un error no ejecute nada


getEmpleado (id, (err, empleado)=>{
    if(err){
        console.log('ERROR!')
        return console.log (err);
    }
    getSalario(id, (err, salario)=>{
        if (err){
            return console.log(err);
        }
        console.log('EL EMPLEADO', empleado, 'tiene un salario de :', salario);
    })
})











