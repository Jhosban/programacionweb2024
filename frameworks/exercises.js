//1

//Escribir una función llamada max que reciba un arreglo de números y retorne el número máximo
let encontrarMax = (array) => {
    let mayor = array[0];
    for (let i = 1; i < array.length; i++){
        if (array[i] > mayor) {
            mayor = array[i];
        }
    }
    console.log(mayor);
}

encontrarMax([67, 35, 54, 26])

//2

//Escribir una función llamada min que reciba un arreglo de números y retorne el número mínimo
let encontrarMin = (array) => {
    let menor = array[0];
    for (let i = 1; i < array.length; i++){
        if (array[i] < menor) {
            menor = array[i];
        }
    }
    console.log(menor);
}

encontrarMin([5, 9, 2, 4, 5, 7])

//3

//Escribir una función llamada transcribir que reciba un string (una cadena de ADN) y retorne otro string (su complemento ARN).
let transcribir = (ADN) => {
    const neuclotidos = {
        'G' : "C",
        'C' : "G",
        'T' : "A",
        'A' : "U"
    };

    let ARN = ADN.split('').map( ADN => neuclotidos[ADN]).join('');
    console.log(ARN);
}

transcribir("ACGTGGTCTTAA");

//4

//Escribir una función llamada capitalizar que reciba un string y capitalice la primera letra
let capitalizar = (palabra) =>{
    let inicial = palabra.charAt(0).toUpperCase();
    let restante = palabra.slice(1).toLowerCase();
    console.log(inicial+restante);
}

capitalizar("mi mama me mima")

//5

//Escribir una función llamada numeroDeAes que reciba un string y retorne el número de veces que aparece la letra "a"
let numeroDeAes = (palabra) => {
    let cont = 0;
    for (const i of palabra) {
        if (i == "a") {
            cont += 1;
        }
    }
    console.log(cont)
}

numeroDeAes("abracadabra")


//6

//Escribir una función llamada sumarArreglo que reciba un arreglo de números y retorne la suma de todos los elementos
let sumarArreglo = (array) => {
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        suma += array[i];
    }
    console.log(suma)
}

sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);


//7

//Escribir una función llamada password que reciba un string y retorne un nuevo string realizando los siguientes cambios:

//Las mayúsculas se reemplazan por minúsculas.
//Se eliminan los espacios en blanco.
//Reemplaza el caracter “a” por “4”.
//Reemplaza el caracter “e” por “3”.
//Reemplaza el caracter “i” por “1”.
//Reemplaza el carater “o” por “0”.

let password =  (password) =>{
    let contraseña = password.toLowerCase().replace(/ /g,"").replace(/a/g,'4').replace(/e/g,'3').replace(/i/g,'1').replace(/o/g,'0');
    console.log(contraseña)
}

password("esta es una prueba")

//8

//Escribir una función llamada imprimirMatriz que reciba una matriz (un arreglo de arreglos) e imprima todos los elementos del arreglo

let imprimirMatriz = (matriz) => {
    for (let i = 0;  i < matriz.length; i++){
        for (let j = 0; j < matriz[i].length; j++){
            console.log(matriz[i][j]);
        }
    }   
}

imprimirMatriz([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]);

//9

//Escribir una función llamada numAsteriscos que reciba una matriz (un arreglo de arreglos) y retorne el número de asteriscos

let numAsteriscos = (matriz) => {
    let cont = 0;
    for (let i = 0;  i < matriz.length; i++){
        for (let j = 0; j < matriz[i].length; j++){
            if (matriz[i][j] == "*"){
                cont += 1;
            }    
        }
    }
    console.log(cont);
}


numAsteriscos([
    ['*', '', '*'],
    ['', '*', ''],
    ['*', '', '*']
  ])


//10
//Escribir una función llamada sumarRango que reciba dos argumentos: número inicial y número final. La función debe retornar la suma de los números en ese rango (incluyéndolos).
//Nota: puedes asumir que el número inicial va a ser menor o igual que el número final.
let contarRango = (n1, n2) => {
    let suma = 0;
    for  (let i = n1; i <= n2; i++){
        suma += i;
    }
    console.log(suma);
}

contarRango(0,10)

