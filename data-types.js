/* Data Types */
/* 

String
Number
Boolean
Undefined

Object
    Array
    Literal Object
    Null

function

*/

let nombre = "John"; // string
let apellido = 'Doe';
let nombreCompleto = `${nombre} ${apellido}`;

let edad = 40; // number
let temp = -40;
let sueldo = 10.50;
let temp2 = -10.40;

let active = true; // boolean
let open = false;

let direccion; // undefined

let users = null; // object

let persona = {
    nombre: '',
    apellido: ''
}

persona.nombre = "John";
persona["apellido"] = "Doe";

console.log(persona);
console.log(persona.nombre)
console.log(persona["apellido"])


console.log(typeof(persona));

let valores = [1, "John", false, null, {nombre: 'John'}, [1, 2]];

//            0                             8
let notas = [12, 13, 32, 15, 33, 22, 10, 8, 19];
let nombres = ["Hugo", "Paco", "Luis"];
let estudiantes = [{name: 'Hugo'}, {name: 'Paco'}, {name: 'Luis'}]

console.log(notas.length);
console.log(notas[0]); // Primer Elemento
console.log(notas[4]); // Quinto Elemento o Elemento en la posicion 4
console.log(notas[notas.length - 1]); // Ultimo Elemento


/* Operadores Aritmeticos */
/* 

+
-
*
/

*/
/* Operadores de Comparacion */
/* 

=== valor y tipo
== valor
!== valor y tipo
!=
>=
<=
>
<

*/

/* Operadores Logicos (and = &&, or = ||, not = !) */
/* 
// And
true && true = true
true && false = false
false && false = false

// Or
true || true = true
true || false = true
false || false = false

// Not
!true && !true = false
!true && !false = false
!false && !false = true

// Not 
!true || !true = false
!true || !false = true
!false || !false = true


*/

console.log(5 === '5') // false
console.log(5 == '5')// true

console.log(5 !== '5') // true
console.log(5 != '5') // false