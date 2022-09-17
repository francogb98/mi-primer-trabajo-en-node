

const deadpool={
    nombre:'wade',
    apellido:'winston',
    poder:'regeneracion',
    edad:50,
    getNombre() {

        return `${this.nombre} ${this.apellido} ${this.poder}`;
        
    }
}

console.log(deadpool.getNombre())


let{nombre, apellido, poder, edad = 0}= deadpool;//le damos un valor por defecto;

console.log(nombre,apellido,poder, edad);

function imprimeHeroe({nombre, apellido, poder, edad = 0}){


    console.log(nombre,apellido,poder, edad);
}//desestructuramos los objetos entre llaves le pasamos el valor
//dentro de la funcion podemos cambiar el valor del objeto

imprimeHeroe(deadpool);



const heroes=['deadpool','heroe','batman'];

//const h1 = heroes[0];
//const h2 = heroes[1];

//const h3 = heroes[2];

const [h1, h2, h3]= heroes;

const [,, h3]= heroes;//asi ignoramos a los dos primeros

console.log(h1,h2,h3); 
