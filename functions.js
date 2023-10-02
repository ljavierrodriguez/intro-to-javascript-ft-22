/* Fuctions */
/* 

// Funcion Declarativa o Expresion de Funcion

// Declarativa
function nombreFuncion(params1, params2, paramsN){
    ...
    return resultado; // opcional
}

// Expresion
const nombreFuncion = function(param1, param2){
    ...
    return resultado; // opcional
}


*/

function sumar(a, b) {
    return a + b;
}

const restar = function (a, b) {
    return a - b;
}

function multiplicar(a, b = 10) {
    return a * b;
}

function dividir(a, b){
    if (b === 0) return;
    return a / b;
}

const saludar = function (persona = { nombre: 'John', apellido: 'Doe' }) {

    return `Hola, ${persona.nombre} ${persona.apellido}`
}

const saludar2 = function (persona) {
    if(typeof(persona) !== 'object') return "Debe ingresar un objecto con nombre y apellido";
    return `Hola, ${persona.nombre} ${persona.apellido}`
}

const resultado_sumar = sumar(10, 15); // 25
const resultado_restar = restar(34, 8); // 26

const resultado_multiplicar = multiplicar(10, 100);
const resultado_dividir = dividir(10, 0);

console.log(saludar());
console.log(saludar({ nombre: 'Jane', apellido: 'Doe' }));

console.log(saludar2());

let persona = {
    nombre: 'Tommy',
    apellido: 'Doe'
}

console.log(saludar(persona))


function sumar2(a, b){
    return a + b;
}  

/* 
const sumar2 = (a, b) => {
    return a + b;
} 
*/
const sumar3 = (a, b) => a + b;

let nombre = "Luis";
console.log(nombre.toUpperCase())

let notas = [1, 2, 3, 4, 5];

notas.length

notas.push(6);

console.log(notas);


function obtenerValores(...rest){
    console.log(arguments)
    console.log(arguments[4]);

    console.log(rest)
}

console.log(obtenerValores(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))