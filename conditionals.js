/* Conditionals */
/* 

if (condition) { // true
    sentences
}

if (condition) { // true
    sentences // paso 1
} else {
    sentences // paso 2
}

if (condition) {
    sentences // paso 1
} else if (condition) {
    sentences // paso 2
} else if (condition) {
    sentences // paso 3
} else {
    sentences // paso 4
}


condition ? true : false


*/

let a = 6;
let b = 7;
let c = 8;

if (a >= b){
    console.log("Verdadero");
}

if (a >= c) {
    console.log("Verdadero");
} else {
    console.log("Falso");
}

if (a > b && a > c){
    console.log("El mayor es A");
} else if ( b > c) {
    console.log("El mayor es B");
} else {
    console.log("El mayor es C");
}


if (a > b || a < c){

} else {

}


if (!a >= b){
    console.log("Verdadero");
}

error = false;

if(error){

}

loggedIn = true;
if(!loggedIn){
    console.log("Debe iniciar Session");
}


let mostrarDatos = loggedIn ? true : false;
if(mostrarDatos){
    console.log("Mostrando Perfil");
}

// condicion ? true : false
let mayor = a > b && a > c ? "El mayor es A" : b > c ? "El mayor es B" : "El mayor es C";
console.log(mayor);


let resultado = a > b ? true : false;


let resultado2 = false;
if(a > b){
    resultado2 = true;
}




