/* const nombre = "pedrito";

nombre = "jonh"
console.log(nombre); */

/* function saludar(nombre){
    let saludo = "const";
    saludo = nombre;
    console.log(`hola ${saludo}`);
}

saludar("pedrito") */


/* function contraseñaValida(input){
    return input == "2f" || input == '3f'
}

console.log(contraseñaValida("2f")) */


//funcion declarativa
/* function calImpuesto(edad, ingresos){
    
    return edad >= 18 && ingresos >= 1000 ? ingresos*0.4 : 0;
}

console.log(calImpuesto(18, 1000)) */

//funcion anonima
/* let contraseñaValida = function (input){
    return input == "2f" || input == '3f'
}

console.log(contraseñaValida("2f")) */

//funcion de flecha - arrow function
/* let contra = (input)=>{
    return input == "2f" || input == '3f';
}

console.log(contra("ff"))
 */

/* let validarMujeres = (mujer)=>{
    const mujeres = ['danna', 'darly', 'salome'];
    return mujeres.find(muj => muj.toLowerCase() == mujer.toLowerCase());
}

console.log(validarMujeres("Danna")) */


//split
let splitfun = (nombres) => {
    const nombre = nombres.split("-")[0];
    const apellidos = nombres.split("-")[1];
    const edad = nombres.split("-")[2];
    console.log(
        `Mi nombre es: ${nombre} ${apellidos} y tengo ${edad}`
        )
}

//splitfun("jhosban-barajas-18")

const array = [{
    name: 'danna',
    lastsname: 'florez',
    age: 23
},
{
    name: 'daniel',
    lastsname: 'rubio',
    age: 19
}];

let funcionObjeto = (arrayObjetos) => {
    arrayObjetos.forEach(obj => {
        obj.name == 'danna' ? obj.name = 'farid' : null;
        console.log(`Nombres: ${obj.name}`)
    });
}

funcionObjeto(array);
